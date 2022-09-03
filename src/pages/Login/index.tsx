import { Button } from '@components/Button';
import { Image } from '@components/Image';
import { Input } from '@components/Input';
import { BasicContainer, Circle, LoginContainer } from '@styles/pages/Login';
import { GetServerSideProps } from 'next';

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <BasicContainer>
        <Circle></Circle>
        <Image
          width={960}
          height={1080}
          src="/assets/images/Fighting_against_Coronavirus-amico2_1.svg"
        />
      </BasicContainer>
      <BasicContainer>
        <h1>Vacina</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <Input label={'CPF'} placeholder="Digite seu CPF"></Input>
        <Input label={'Senha'} placeholder="Digite sua senha"></Input>
        <Button>Entrar</Button>
      </BasicContainer>
    </LoginContainer>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
