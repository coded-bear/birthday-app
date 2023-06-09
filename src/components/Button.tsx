import { type ReactNode, type FC } from 'react';

interface Props {
  children: ReactNode;
  secondary?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, secondary = false, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md text-xl ${
      secondary ? 'bg-sky-700 hover:bg-sky-800' : 'bg-green-700 hover:bg-green-800'
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
