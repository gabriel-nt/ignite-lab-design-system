import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({
  children
}: TextInputRootProps) => (
  <div 
    className="flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
  >
    {children}
  </div>
);

TextInputRoot.displayName = 'TextInput.Root';

interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({
  children,
}: TextInputIconProps) => (
  <Slot className="w-6 h-6 text-gray-400">
    {children}
  </Slot>
);

TextInputIcon.displayName = 'TextInput.Icon';

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
}

const TextInputInput = (props: TextInputInputProps) => (
  <input 
    {...props} 
    className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none"
  />
);

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};