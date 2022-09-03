import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = {
  children: React.ReactNode;
} & NextLinkProps;

export const Link = ({ children, ...rest }: LinkProps): JSX.Element => (
  <NextLink {...rest}>
    <a>{children}</a>
  </NextLink>
);
