import { GetServerSideProps } from 'next';

const SignUp = (): JSX.Element => {
  return <h1>SignUp</h1>;
};

export default SignUp;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
