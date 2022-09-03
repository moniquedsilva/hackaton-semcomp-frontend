import { ComponentProps } from 'react';

import NextImage from 'next/image';

export type ImageProps = {
  typeBlur?: 'default' | 'rounded';
} & Omit<ComponentProps<typeof NextImage>, 'placeholder' | 'blurDataURL'>;

export const Image = (props: ImageProps) => {
  return <NextImage {...props} />;
};
