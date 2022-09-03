import { Button } from '@components/Button';
import Login from '@pages/Login';

import * as S from './styles';

export const Main = (): JSX.Element => {
  return (
    <S.Container>
      <h1>Main</h1>
      <Login></Login>
    </S.Container>
  );
};
