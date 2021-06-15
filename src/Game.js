import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import tw from "twin.macro";
import GameCanvas from "GameCanvas";
import { LogoLink } from "components/headers/light.js";
import logo from "images/SAT_logo_small.png";
import Footer from "components/footers/MiniCenteredFooter.js";


/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between h-24`;
export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const downloadUrl = "/treact-ui.zip"
  React.useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = downloadUrl
    document.body.appendChild(iframe);
  }, [])

  return (
    
    <AnimationRevealPage disabled>
        
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
            <ChevronLeftIcon />
              <img src={logo} alt="" />
              See a Trait
            </LogoLink>
          </NavRow>
          <GameCanvas /> 
          <NavRow />

        </Content2Xl>
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
