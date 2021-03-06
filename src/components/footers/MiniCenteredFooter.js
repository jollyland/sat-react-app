import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
// import logo from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as WebIcon } from "../../images/Globe_icon.svg";
// import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
// import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import dct12th from "../../images/nccudct12th.png";


const Container = tw(ContainerBase)`bg-gray-800 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-72`;
// const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-2 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
// const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-4`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-2 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={dct12th} />
          </LogoContainer>
          <LinksContainer>
          <CopyrightText>
            國立政治大學 數位內容與科技學位學程 第十二屆畢業製作
          </CopyrightText>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink target="_blank" href="https://www.facebook.com/NCCUDCT12th">
              <FacebookIcon />
            </SocialLink>
            {/* 放學程首頁 找ICON */}
            <SocialLink target="_blank" href="http://dct.nccu.edu.tw/">
              <WebIcon />
            </SocialLink>

          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2021, 跳上賊船 . All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
