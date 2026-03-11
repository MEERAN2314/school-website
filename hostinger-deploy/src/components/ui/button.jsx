
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-xl text-sm font-bold tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 shadow-sm hover:shadow-md',
	{
		variants: {
			variant: {
				default: 'bg-deep-blue text-white hover:bg-navy hover:shadow-lg hover:-translate-y-0.5',
				destructive:
          'bg-bright-red text-white hover:bg-hover-red hover:shadow-lg hover:-translate-y-0.5',
				outline:
          'border-2 border-deep-blue bg-transparent text-deep-blue hover:bg-deep-blue hover:text-white',
				secondary:
          'bg-light-blue text-white hover:bg-deep-blue hover:shadow-lg hover:-translate-y-0.5',
				ghost: 'shadow-none hover:bg-light-gray hover:text-bright-red',
				link: 'text-deep-blue shadow-none underline-offset-4 hover:text-bright-red hover:underline',
        'gradient-blue-red': 'bg-gradient-to-r from-deep-blue to-bright-red text-white hover:shadow-lg hover:shadow-deep-blue/25 hover:-translate-y-0.5',
			},
			size: {
				default: 'h-11 px-6 py-2',
				sm: 'h-9 rounded-lg px-4',
				lg: 'h-14 rounded-2xl px-10 text-base',
				icon: 'h-11 w-11',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
