import type {
	CommitDetailsType,
	RepositoryDetailsType,
	RepositoryType,
	UserType,
	UserWithDetailsType,
} from "@/_types/user";

const BASE_URL = "https://api.github.com";

const fetchGithub = async (endpoint: string) => {
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		headers: {
			Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
		},
	});
	console.log(response);
	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.statusText}`);
	}

	return response.json();
};

export const searchGithub = async <T>(search: string | null): Promise<T[]> => {
	if (!search) return [];
	return fetchGithub(`/search/${search}`).then((data) => data.items);
};

export const fetchUser = async (
	username: string,
): Promise<[UserWithDetailsType, RepositoryType[]]> => {
	const user = fetchGithub(`/users/${username}`);
	const repos = fetchGithub(`/users/${username}/repos`);
	return Promise.all([user, repos]);
};

export const fetchRepository = async (
	owner: string,
	repo: string,
): Promise<[RepositoryDetailsType, CommitDetailsType[]]> => {
	const repository = fetchGithub(`/repos/${owner}/${repo}`);
	const commits = fetchGithub(`/repos/${owner}/${repo}/commits`);
	return Promise.all([repository, commits]);
};
