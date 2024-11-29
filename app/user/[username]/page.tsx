import { ProfileView } from "@/_components/profile_view";
import { fetchUser } from "@/_lib/fetchGithubApi";

const Page = async ({
	params,
}: {
	params: Promise<{ username: string }>;
}) => {
	console.log((await params).username);
	const [user, repositories] = await fetchUser((await params).username);
	return (
		<div className="mx-auto p-4 container">
			<ProfileView user={user} repositories={repositories} />
		</div>
	);
};

export default Page;
