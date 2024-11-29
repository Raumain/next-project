import { searchGithub } from "@/_lib/fetchGithubApi";
import type { RepositoryType, UserType } from "@/_types/user";
import { GitFork, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = async ({
	searchParams,
}: {
	searchParams: {
		q: string;
		range: string;
	};
}) => {
	const users = await searchGithub<UserType>(
		searchParams.range === "repositories" ? null : `users?q=${searchParams.q}`,
	);
	const repos = await searchGithub<RepositoryType>(
		searchParams.range === "users" ? null : `repositories?q=${searchParams.q}`,
	);
	console.log(users);
	return (
		<div className="mx-auto my-16 p-4 container">
			<h1 className="mb-4 font-bold text-2xl">Search Result</h1>
			{users.map((user) => (
				<div key={user.id} className="bg-white shadow-md my-4 p-6 rounded-lg">
					<div className="flex items-center space-x-4">
						<Image
							src={user.avatar_url}
							alt={`${user.login}'s avatar`}
							width={100}
							height={100}
							className="rounded-full"
						/>
						<div>
							<h2 className="font-semibold text-xl">{user.login}</h2>
							<p className="text-gray-600">{user.type}</p>
							<Link
								href={`/user/${user.login}`}
								className="flex items-center mt-2 text-blue-500 hover:underline"
							>
								View Profile
							</Link>
						</div>
					</div>
				</div>
			))}
			{repos.map((repo) => (
				<div key={repo.id} className="bg-white shadow-md my-4 p-6 rounded-lg">
					<div className="flex items-center space-x-4">
						<div>
							<h2 className="font-semibold text-xl">{repo.full_name}</h2>
							<p className="text-gray-600">{repo.description}</p>
							<div className="flex items-center space-x-4">
								<div className="flex items-center">
									<Users className="mr-1 w-4 h-4" />
									{repo.owner.login}
								</div>
								<div className="flex items-center">
									<Star className="mr-1 w-4 h-4" />
									{repo.stargazers_count}
								</div>
								<div className="flex items-center">
									<GitFork className="mr-1 w-4 h-4" />
									{repo.forks_count}
								</div>
							</div>
							<Link
								href={`/user/${repo.owner.login}/repository/${repo.name}`}
								className="flex items-center mt-2 text-blue-500 hover:underline"
							>
								View Repository
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Page;
