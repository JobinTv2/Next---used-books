import React from 'react';

import { useRouter } from 'next/router';
import tw from 'twin.macro';
import { Label } from '../../1-atoms/Label';
import Image from 'next/image';
export interface BookState {
  name: string;
  title: string;
  description: string;
  category: string;
  is_sold: boolean;
  owner_id: number;
  author: string;
  rating: number;
  reviews: string;
  price: number;
}

export const Header: React.FC = () => {
  const route = useRouter();
  const location = useRouter();

  if (
    location.pathname === '/sign-in' ||
    location.pathname === '/sign-up' ||
    location.pathname === '/'
  ) {
    return null;
  }

  return (
    <Container
      data-testid="header"
      onClick={() => {
        // route('home');
      }}
    >
      <SubContainer>
        <LogoContainer>
          <Image
            alt=""
            src={require('../../../asset/SVG.png')}
            className="w-full h-full"
          />
        </LogoContainer>

        <NavItems>
          <Label
            onClickHandle={() => {
              route.push('/home');
            }}
          >
            Books
          </Label>
          <Label
            onClickHandle={() => {
              route.push('/book');
            }}
          >
            Trade
          </Label>
          <Label>Features</Label>
          <Label>Support</Label>
        </NavItems>
      </SubContainer>

      <LogoutContainer>
        <Label
          onClickHandle={() => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userId');
            route.push('/sign-in');
          }}
        >
          Logout
        </Label>
      </LogoutContainer>
    </Container>
  );
};

const Container = tw.div`h-20 flex items-center justify-between border-b-2 border-gray-400`;
const SubContainer = tw.div`h-full flex items-center`;
const LogoContainer = tw.div`w-12 h-12 object-contain flex items-center mx-10`;
const NavItems = tw.div`flex gap-x-[70px] pl-32`;
const LogoutContainer = tw.div`w-40`;
