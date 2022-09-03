import { Image } from '../Image';
import { Link } from '../Link';
import * as S from './styles';

export const Sidebar = (): JSX.Element => {
  return (
    <S.Container>
      <h1>VacinAÊ</h1>
      <S.NavContainer>
        <S.NavItens>
          <li>
            <Link href="/dashboard">
              <Image src="/assets/icons/seringe.svg" width={16} height={16} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/vacinas">
              <Image src="/assets/icons/seringe.svg" width={16} height={16} />
              Vacinas
            </Link>
          </li>
          <li>
            <Link href="/dependentes">
              <Image src="/assets/icons/seringe.svg" width={16} height={16} />
              Dependentes
            </Link>
          </li>
          <li>
            <Link href="/perfil">
              <Image src="/assets/icons/seringe.svg" width={16} height={16} />
              Perfil
            </Link>
          </li>
          <li>
            <Link href="/vacinas" onClick={() => console.log('saiu')}>
              <Image src="/assets/icons/seringe.svg" width={16} height={16} />
              Sair
            </Link>
          </li>
        </S.NavItens>
      </S.NavContainer>
    </S.Container>
  );
};
