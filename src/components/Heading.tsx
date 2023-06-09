import { type ReactNode, type FC } from 'react';

interface Props {
  children: ReactNode;
}

const Heading: FC<Props> = ({ children, ...props }) => (
  <h2 className="mb-20 text-3xl sm:text-center" {...props}>
    {children}
  </h2>
);

export default Heading;
