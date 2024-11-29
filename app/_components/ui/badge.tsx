import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/_lib/utils";

const badgeVariants = cva(
	"inline-flex items-center px-2.5 py-0.5 border rounded-full focus:ring-2 focus:ring-ring focus:ring-offset-2 font-semibold text-xs transition-colors focus:outline-none",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-blue-300 text-blue-300-foreground hover:bg-blue-300/80",
				secondary:
					"border-transparent bg-blue-200 text-blue-200-foreground hover:bg-blue-200/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
