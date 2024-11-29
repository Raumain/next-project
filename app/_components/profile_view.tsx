import type { RepositoryType, UserWithDetailsType } from "@/_types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { CalendarIcon, LinkIcon, MapPinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { GoBackButton } from "./go_back_button";
import { RepositoryList } from "./repository_list";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export const ProfileView = ({
	user,
	repositories,
}: { user: UserWithDetailsType; repositories: RepositoryType[] }) => {
	return (
		<div className="mx-auto mt-16 py-8 container">
			<GoBackButton />
			<div className="gap-6 grid grid-cols-1 md:grid-cols-3">
				<div className="md:col-span-1">
					<Card>
						<CardHeader>
							<Avatar className="mx-auto w-24 h-24">
								<AvatarImage src={user.avatar_url} alt={user.name} />
								<AvatarFallback>
									{user.login.slice(0, 2).toUpperCase()}
								</AvatarFallback>
							</Avatar>
							<CardTitle className="text-center">{user.name}</CardTitle>
							<CardDescription className="text-center">
								{user.login}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="mb-4 text-center">{user.bio}</p>
							<div className="flex flex-wrap justify-center gap-2 mb-4">
								<Badge variant="secondary">
									{user.public_repos} Repositories
								</Badge>
								<Badge variant="secondary">{user.followers} Followers</Badge>
								<Badge variant="secondary">{user.following} Following</Badge>
							</div>
							<Separator className="my-4" />
							<div className="space-y-2">
								{user.company && (
									<div className="flex items-center">
										<svg
											className="mr-2 w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<title>icon</title>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
										{user.company}
									</div>
								)}
								{user.location && (
									<div className="flex items-center">
										<MapPinIcon className="mr-2 w-4 h-4" />
										{user.location}
									</div>
								)}
								{user.blog && (
									<div className="flex items-center">
										<LinkIcon className="mr-2 w-4 h-4" />
										<a
											href={user.blog}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:underline"
										>
											{user.blog}
										</a>
									</div>
								)}
								{user.twitter_username && (
									<div className="flex items-center">
										<TwitterIcon className="mr-2 w-4 h-4" />
										<a
											href={`https://twitter.com/${user.twitter_username}`}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:underline"
										>
											@{user.twitter_username}
										</a>
									</div>
								)}
								<div className="flex items-center">
									<CalendarIcon className="mr-2 w-4 h-4" />
									Joined {new Date(user.created_at).toLocaleDateString()}
								</div>
							</div>
							<Separator className="my-4" />
							<Link
								href={user.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center mt-2 text-blue-500 hover:underline"
							>
								View on GitHub
							</Link>
						</CardContent>
					</Card>
				</div>
				<div className="md:col-span-2">
					<Card>
						<CardHeader>
							<CardTitle>Repositories</CardTitle>
						</CardHeader>
						<CardContent>
							<RepositoryList repositories={repositories} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};
