import React from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import { HomePage } from '../../components/5-pages/Home/Home';
const Home = () => {
  // const location = useLocation();
  const router = useRouter();
  const { pathname } = useRouter();
  if (pathname === '/') {
    router('/sign-in');
  }
  return (
    <Container>
      <HomePage />
    </Container>
  );
};

const Container = tw.div``;
export default Home;
