"use client";

import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";

export const SearchForm = () => {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		redirect(
			`/search?q=${formData.get("user-input")}&range=${formData.get("searchRange")}`,
		);
	}

	return (
		<form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
			<h1 className="font-bold text-3xl text-center text-gray-800">Search</h1>
			<div className="flex border-gray-300 border rounded-sm w-full overflow-hidden">
				<input
					type="radio"
					name="searchRange"
					id="users"
					value="users"
					hidden
					defaultChecked
					className="peer/users"
				/>
				<label
					htmlFor="users"
					className="flex-1 bg-white hover:bg-gray-50 focus:bg-gray-50 peer-checked/users:bg-gray-700 px-4 py-2 font-medium text-center text-gray-700 text-sm peer-checked/users:text-white focus:outline-none"
				>
					Users
				</label>
				<div className="bg-gray-300 w-px" />
				<input
					type="radio"
					name="searchRange"
					id="both"
					value="both"
					hidden
					className="peer/both"
				/>
				<label
					htmlFor="both"
					className="flex-1 bg-white hover:bg-gray-50 focus:bg-gray-50 peer-checked/both:bg-gray-700 px-4 py-2 font-medium text-center text-gray-700 text-sm peer-checked/both:text-white focus:outline-none"
				>
					Both
				</label>
				<div className="bg-gray-300 w-px" />
				<input
					type="radio"
					name="searchRange"
					id="repositories"
					value="repositories"
					hidden
					className="peer/repositories"
				/>
				<label
					htmlFor="repositories"
					className="flex-1 bg-white hover:bg-gray-50 focus:bg-gray-50 peer-checked/repositories:bg-gray-700 px-4 py-2 font-medium text-center text-gray-700 text-sm peer-checked/repositories:text-white focus:outline-none"
				>
					Repositories
				</label>
			</div>
			<div className="relative">
				<Search className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
				<Input
					name="user-input"
					className="border-gray-300 focus:border-gray-500 focus:bg-white py-2 pr-4 pl-10 border rounded-sm focus:ring-1 focus:ring-gray-500 w-full focus:outline-none transition-all duration-200"
					placeholder="Enter your search query..."
				/>
			</div>
			<div className="flex space-x-4">
				<Button
					type="reset"
					className="flex-1 bg-gray-200 hover:bg-gray-300 focus:ring-opacity-50 px-4 py-2 rounded-sm focus:ring-2 focus:ring-gray-400 font-medium text-gray-700 transition-all duration-200 focus:outline-none"
				>
					Reset
				</Button>
				<Button
					type="submit"
					className="flex-1 bg-gray-700 hover:bg-gray-800 focus:ring-opacity-50 px-4 py-2 rounded-sm focus:ring-2 focus:ring-gray-500 font-medium text-white transition-all duration-200 focus:outline-none"
				>
					Search
				</Button>
			</div>
		</form>
	);
};
