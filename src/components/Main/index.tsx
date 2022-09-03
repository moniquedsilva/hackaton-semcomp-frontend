import Login from '@pages/login';

import * as S from './styles';

export const Main = (): JSX.Element => {
  return (
    <S.Container>
      <h1>Main</h1>
      <Login></Login>
    </S.Container>
  );
};
