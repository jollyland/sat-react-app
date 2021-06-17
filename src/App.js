import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import GamePage from "Game.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "components/hero/TwoColumnWithVideo.js"; //歡迎page
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";//遊戲介紹 分part介紹
import Features from "components/features/VerticalWithAlternateImageAndText.js"; //動作技能介紹
import Testimonial4col from "components/testimonials/ThreeColumnWithProfileImage.js";//製作團隊
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Card from "components/cards/TwoTrendingPreviewCardsWithImage";


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component

  const HighlightedText = tw.span`bg-primary-500 text-gray-200 px-4 transform -skew-x-12 inline-block`;

  return (
    
    <Router basename={ process.env.PUBLIC_URL }>
    <Switch>
      {/* <Route path="/">
        <GamePage />
      </Route> */}
      <Route path="/">
        <AnimationRevealPage disabled>
          <Hero />
          <Testimonial />
          <Features />
          <Card />
          <ContactUsForm />
          <Testimonial4col
              subheading=""
              heading={ <HighlightedText>製作團隊</HighlightedText>}
          />
          <Footer />
        </AnimationRevealPage>
      </Route>
    </Switch>
  </Router>
    
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
