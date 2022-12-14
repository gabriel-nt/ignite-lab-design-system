import clsx from "clsx";
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from "react";

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

const Text = ({
  size = 'md',
  children,
  className,
  asChild = false
}: TextProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={clsx(
      'text-gray-100 font-sans', 
      {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      },
      className
    )}>
      {children}
    </Comp>
  );
};

export { Text }