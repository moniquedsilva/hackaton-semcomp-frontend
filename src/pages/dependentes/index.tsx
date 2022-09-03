import { GetServerSideProps } from 'next';

const Dependentes = (): JSX.Element => {
  return <h1>Dependentes</h1>;
};

export default Dependentes;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
