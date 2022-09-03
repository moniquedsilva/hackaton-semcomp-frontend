import { Image } from '../Image';
import * as S from './styles';

export type CardVariant = 'purple' | 'blue' | 'pink';

type CardProps = {
  src: string;
  label: string;
  variant: CardVariant;
};

export const Card = ({ src, label, variant }: CardProps): JSX.Element => {
  return (
    <S.Container variant={variant}>
      <Image src={src} width={65} height={65} />
      <span>{label}</span>
    </S.Container>
  );
};
