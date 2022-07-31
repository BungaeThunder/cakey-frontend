import type { NextPage } from 'next';

import styled from 'styled-components';
import LoginWithKakaoIcon from 'public/images/sign-in/login_with_kakao_account.svg';
import LoginWithNaverIcon from 'public/images/sign-in/login_with_naver_account.svg';
import RegisterWithKakaoIcon from 'public/images/sign-in/register_with_kakao_account.svg';
import RegisterWithNaverIcon from 'public/images/sign-in/register_with_naver_account.svg';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const SignIn: NextPage = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <TopDiv>
      <MainTextColored>
        Light on your cakey <br /> with letters from dears
      </MainTextColored>
      <CakeIcon icon="noto-v1:birthday-cake" color="#f8f8f8" />
      <MainText>Create your cakey by:</MainText>
      <StyledButton>
        <LoginWithKakaoIcon />
      </StyledButton>
      <StyledButton>
        <LoginWithNaverIcon />
      </StyledButton>
      <MainText>
        or... <br /> Already have an account?
      </MainText>
      <StyledButton>
        <RegisterWithKakaoIcon />
      </StyledButton>
      <StyledButton>
        <RegisterWithNaverIcon />
      </StyledButton>
    </TopDiv>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading</p>
    </div>
  );
};

const TopDiv = styled.div`
  margin-top: 128px;
`;

const MainText = styled.p`
  font-family: 'Fredoka One';
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;

  border: 1px solid #ffffff;
`;

const MainTextColored = styled(MainText)`
  background: linear-gradient(95.92deg, #fc4062 29.05%, #c5a2fe 74.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
`;

const CakeIcon = styled(Icon)`
  width: 128px;
  height: 128px;
  display: block;
  margin: auto;
`;

const StyledButton = styled.button`
  display: block;
  margin: auto;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  border: none;
  background: none;
`;

export default SignIn;
