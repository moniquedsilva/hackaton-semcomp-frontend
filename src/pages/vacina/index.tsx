import { GetServerSideProps } from 'next';

const Vacinas = (): JSX.Element => {
  return <h1>Vacinas</h1>;
};

export default Vacinas;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
