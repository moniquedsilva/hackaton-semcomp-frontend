import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { PerfilForm, Container, Title } from '@styles/pages/Perfil';
import { GetServerSideProps } from 'next';

const Perfil = (): JSX.Element => {
  return (
    <Container>
      <Title>Perfil</Title>
      <PerfilForm>
        <Input label={'Nome completo'} placeholder="Lorem Ipsum"></Input>
        <Input label={'CPF'} placeholder="123.456.789.-85"></Input>
        <Input label={'Idade'} placeholder="21"></Input>
        <Input label={'E-mail'} placeholder="email@example.com"></Input>
        <Input label={'Telefone'} placeholder="(71) 91234-5678"></Input>
        <Input label={'Senha'} placeholder="*********"></Input>
        <Button maxWidth={395} variant={'blue'} className="edit_button">
          <strong>Editar perfil</strong>
        </Button>
      </PerfilForm>
    </Container>
  );
};

export default Perfil;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
