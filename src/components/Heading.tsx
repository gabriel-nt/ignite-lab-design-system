import clsx from "clsx";
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from "react";

interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

const Heading = ({
  size = 'md',
  children,
  asChild = false
}: HeadingProps) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={clsx(
      'text-gray-100 font-bold font-sans', 
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      }
    )}>
      {children}
    </Comp>
  );
};

export { Heading }