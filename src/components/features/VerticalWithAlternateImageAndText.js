//動作介紹

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import intro from "images/activeintro.png"


const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-1/12 xl:w-1/3 flex-shrink-0  md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-primary-400 `;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-1 text-lg leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;


// const IntroImage = styled.div(props => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded md:w-1/2 lg:w-1/12 xl:w-1/3 flex-shrink-0  md:w-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
// ]);
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

export default () => {
  const imgSrc=intro;
  const cards = [
    {  
    imageSrc:
      "https://i.imgur.com/Vv56m7Z.gif",
    subtitle: "預設技能 A/空白鍵",
    title: "跳躍",
    description:"使用跳躍以及二段跳，在遊戲中闖蕩。"
    },
    
     {
      
      imageSrc:
        "https://i.imgur.com/1iOkhoD.gif",
      subtitle: "預設技能 S",
      title: "衝刺",
      description:
      "Gas Gas Gas，加快腳步前往終點！"
    },
    {
      
      imageSrc:
        "https://i.imgur.com/l18zodJ.gif",
      subtitle: "隨機技能 D/F",
      title: "閃現",
      description:
      "在這個世界銅閃也不會有人嘲笑。"
    },

    {
      imageSrc:
        "https://i.imgur.com/yFVeGEt.gif",
      subtitle: "隨機技能 D/F",
      title: "攀牆",
      description:
      "靠牆時施放，攀牆奔向自由，不滿足於家畜的安寧。"

    },

    {
      imageSrc:
        "https://i.imgur.com/zdmhnz3.gif",
      subtitle: "隨機技能 D/F",
      title: "飄浮",
      description:
      "滯空時施放，在空中靜止，想去哪裡就去哪。"
    },

    {
      imageSrc:
        "https://i.imgur.com/gy3mmJp.gif",
      subtitle: "隨機技能 D/F",
      title: "縮小",
      description:"我變小了，也變強了。"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>遊戲操作</HeadingTitle>
          <HeadingDescription>
          使用鍵盤ASDF對應黃紅藍綠四色與遊戲互動，使用方向鍵控制人物移動，並使用ASDF施放技能。
          </HeadingDescription>
          <IllustrationContainer>
              <img src={imgSrc} alt="intro"></img>
            </IllustrationContainer>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
