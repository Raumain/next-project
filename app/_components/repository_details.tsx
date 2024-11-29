import type { CommitDetailsType, RepositoryDetailsType } from "@/_types/user";
import {
	BookOpenIcon,
	GitForkIcon,
	FolderOpenIcon as IssueOpenedIcon,
	StarIcon,
} from "lucide-react";
import Link from "next/link";
import { GoBackButton } from "./go_back_button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/seperator";

export const RepositoryDetails = ({
	repository,
	commits,
}: { repository: RepositoryDetailsType; commits: CommitDetailsType[] }) => {
	console.log(repository)
	return (
		<div className="mx-auto mt-16 py-8 container">
			<GoBackButton />
			<Card className="mb-8">
				<CardHeader>
					<div className="flex justify-between items-center">
						<div>
							<CardTitle className="text-3xl">{repository.name}</CardTitle>
							<CardDescription>{repository.description}</CardDescription>
						</div>
						<Avatar className="w-16 h-16">
							<AvatarImage
								src={repository.owner.avatar_url}
								alt={repository.owner.login}
							/>
							<AvatarFallback>
								{repository.owner.login.slice(0, 2).toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-4 mb-4">
						<Badge variant="secondary" className="flex items-center gap-1">
							<StarIcon className="w-4 h-4" />
							{repository.stargazers_count} stars
						</Badge>
						<Badge variant="secondary" className="flex items-center gap-1">
							<GitForkIcon className="w-4 h-4" />
							{repository.forks_count} forks
						</Badge>
						<Badge variant="secondary" className="flex items-center gap-1">
							<IssueOpenedIcon className="w-4 h-4" />
							{repository.open_issues_count} open issues
						</Badge>
						<Badge variant="secondary" className="flex items-center gap-1">
							<BookOpenIcon className="w-4 h-4" />
							{repository.watchers_count} watchers
						</Badge>
					</div>
					<Separator className="my-4" />
					<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
						<div>
							<h3 className="mb-2 font-semibold text-lg">Details</h3>
							<p>
								<strong>Main branch:</strong> {repository.default_branch}
							</p>
							<p>
								<strong>Created:</strong>{" "}
								{new Date(repository.created_at).toLocaleDateString()}
							</p>
							<p>
								<strong>Last updated:</strong>{" "}
								{new Date(repository.updated_at).toLocaleDateString()}
							</p>
							<p>
								<strong>Language:</strong> {repository.language}
							</p>
							<p>
								<strong>License:</strong>{" "}
								{repository.license ? repository.license.name : "Not specified"}
							</p>
						</div>
						<div>
							<h3 className="mb-2 font-semibold text-lg">Links</h3>
							<Link
								href={repository.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center mt-2 text-blue-500 hover:underline"
							>
								View on GitHub
							</Link>
							{repository.homepage && (
								<Button asChild variant="link" className="block p-0">
									<a
										href={repository.homepage}
										target="_blank"
										rel="noopener noreferrer"
									>
										Visit Homepage
									</a>
								</Button>
							)}
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Recent Commits</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="space-y-4">
						{commits.map((commit) => (
							<li key={commit.sha} className="pb-4 border-b last:border-b-0">
								<div className="flex justify-between items-center mb-2">
									<div className="flex items-center gap-2">
										<Avatar className="w-8 h-8">
											<AvatarImage
												src={commit.author.avatar_url}
												alt={commit.author.login}
											/>
											<AvatarFallback>
												{commit.author.login.slice(0, 2).toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<span className="font-semibold">
											{commit.commit.author.name}
										</span>
									</div>
									<div className="flex flex-col items-end gap-4">
										<span className="text-muted-foreground text-sm">
											{new Date(commit.commit.author.date).toLocaleString()}
										</span>
										<small>{commit.sha}</small>
									</div>
								</div>
								<p className="mb-2 text-sm">{commit.commit.message}</p>
								<Link
									href={commit.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center mt-2 text-blue-500 hover:underline"
								>
									View commit
								</Link>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</div>
	);
};
