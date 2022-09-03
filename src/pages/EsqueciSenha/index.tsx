import { GetServerSideProps } from 'next';

const EsqueciSenha = (): JSX.Element => {
  return <h1>EsqueciSenha</h1>;
};

export default EsqueciSenha;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
