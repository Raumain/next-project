import { RepositoryDetails } from "@/_components/repository_details";
import { fetchRepository } from "@/_lib/fetchGithubApi";

const Page = async ({
	params,
}: {
	params: Promise<{ username: string; repo: string }>;
}) => {
	const [repository, commits] = await fetchRepository(
		(await params).username,
		(await params).repo,
	);

	return (
		<div className="mx-auto p-4 container">
			<RepositoryDetails repository={repository} commits={commits} />
		</div>
	);
};

export default Page;
