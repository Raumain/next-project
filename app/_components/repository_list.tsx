import type { RepositoryType } from "@/_types/user";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export const RepositoryList = ({
	repositories,
}: { repositories: RepositoryType[] }) => {
	return (
		<div className="space-y-4">
			{repositories.map((repo) => (
				<Card key={repo.id}>
					<CardHeader>
						<CardTitle>
							<Link
								href={`${repo.owner.login}/repository/${repo.name}`}
								className="flex items-center mt-2 text-blue-500 hover:underline"
							>
								{repo.name}
							</Link>
						</CardTitle>
						<CardDescription>{repo.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-4">
							{repo.language && (
								<Badge variant="default">{repo.language}</Badge>
							)}
							<div className="flex items-center">
								<StarIcon className="mr-1 w-4 h-4" />
								{repo.stargazers_count}
							</div>
							<div className="text-muted-foreground text-sm">
								Updated on {new Date(repo.updated_at).toLocaleDateString()}
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};
