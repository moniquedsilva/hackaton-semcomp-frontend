import { GetServerSideProps } from 'next';

const EditarPerfil = (): JSX.Element => {
  return <h1>EditarPerfil</h1>;
};

export default EditarPerfil;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
