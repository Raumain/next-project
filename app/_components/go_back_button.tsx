"use client";

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "./ui/button2";

export const GoBackButton = () => {
	return (
		<Button
			onClick={() => window.history.back()}
			className="flex items-center gap-4 bg-slate-200 hover:bg-slate-300 shadow-md mb-4 p-2 rounded-md text-black transition"
		>
			<ArrowLeftIcon className="w-4 h-4" />
			Go Back
		</Button>
	);
};
