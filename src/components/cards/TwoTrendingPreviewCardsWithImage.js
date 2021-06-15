import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
// import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
// import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
// import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import photo1 from "images/controllerpic01.jpg";
import photo2 from "images/controllerpic02.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-base font-medium leading-relaxed text-gray-700 mt-8`;
// const PrimaryLink = styled(PrimaryLinkBase)`
//   ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
//   svg {
//     ${tw`ml-2 w-5 h-5`}
//   }
// `;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
// const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
// const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

// const CardMeta = styled.div`
//   ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
// `;

// const CardMetaFeature = styled.div`
//   ${tw`flex items-center mt-4`}
//   svg {
//     ${tw`w-5 h-5 mr-1`}
//   }
// `;
// const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

export default () => {
  const cards = [
    {
      imageSrc:photo1,
      type: "實機照片",
      title: "玩家左手操縱搖桿控制角色移動，右手使用按鈕配合施放技能以及進行音遊的互動。",
    },
    {
      imageSrc:photo2,
      type: "製作原理",
      title: "使用Arduino UNO零件與雷切壓克力進行製作，搭配Uduino套件與Unity遊戲端進行溝通",
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>實體裝置</HeadingTitle>
              <HeadingDescription>
              使用復古機台的四色按鈕及紅色機械搖桿，搭配遊戲在展場中做使用，使得遊玩更具回饋感。
              </HeadingDescription>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
