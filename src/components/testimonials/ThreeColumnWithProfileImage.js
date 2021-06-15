//製作團隊

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
// import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import rabbit from "images/rabbit.png";
import blackchick from "images/blackchick.png";
import ewai from "images/ewai.png";
import frog from "images/frog.png";

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial4col = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-24 h-24 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

const SocialLinksContainer = tw.div`mt-5`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-900 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

export default ({
  subheading = "Testimonials",
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:blackchick,
      quote:
        "Hi~非常感謝你看到這裡。修了學程三年終於要畢業了！儘管繳了那麼多錢還沒能風風光光辦一場畢展很可惜，能夠讓自己的作品跟大家見面還是挺開心的。雖然它甚至不是完全體，也還有很多可以改進的地方…希望大家會喜歡:)。",
        customerName: "黑雞",
      ghlink:"https://github.com/fanxuanliao",
      lknlink:"https://www.linkedin.com/in/%E5%87%A1%E5%AA%97-%E5%BB%96-444328171/"
    },
    {
      imageSrc:frog,
      quote:"🎶😎驀然回首，學程三年走過，會寫程式沒有？至少畢展沒有，學分費放水流。謝謝各位朋友，畢製都來幫我；失業社畜走狗，願能賺錢揮霍，疫情結束以後，再約畢旅GOGO ✌️🥺🤚🎤",
      customerName: "ㄊㄊ",
      ghlink:"https://github.com/jollyland",
      lknlink:""
    },
    {
      imageSrc:rabbit,
      quote:
      "謝謝你來看我們的畢業製作！在學程的三年間一直在增加各種奇怪的新技能，連畢業專題都在挑戰從來沒做過的部分，人生充滿未知大概就是這種感覺，未知到連畢展都停了。沒辦法用完全態展示真的很可惜，藉由網路的形式能接觸到更多人的話或許也不錯吧。希望這個遊戲能在疫情中帶給你一點娛樂！（但請別把鍵盤敲壞喔）",
      customerName: "兔肉",
      ghlink:"",
      lknlink:""
    },
    {
      imageSrc:ewai,
      quote:
      "...怎麼好像只有我只修兩年(´･ω･`)。總而言之，既然你看到這段話，那就代表你看完了我們的畢業成果(對吧？)，雖然這次畢展跟本系的專題撞了一個學期，最後又因為疫情而無法辦實體展覽，但是這次的經驗總體而言還是開心的，也希望我們構築出來的世界有也能讓你這麼覺得！",
      customerName: "EWAI",
      ghlink:"https://github.com/ewailiao",
      lknlink:""

    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial4col>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
                <SocialLinksContainer>
                {/* <SocialLink href="https://www.facebook.com/NCCUDCT12th">
                   <FacebookIcon />
                </SocialLink> */}
                <SocialLink href={testimonial.lknlink}>
                   <LinkedInIcon />
                </SocialLink>
                <SocialLink href={testimonial.ghlink}>
                   <GithubIcon />
                </SocialLink>
                </SocialLinksContainer>
              </Testimonial4col>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
