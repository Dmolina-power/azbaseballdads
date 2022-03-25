import * as React from "react";
//Views
import AppAppBar from "./Views/AppAppBar";
import ProductHero from "./Views/ProductHero";
import ProductValues from "./Views/ProductValues";
import ProductCategories from "./Views/ProductCategories";
import ProductHowItWorks from "./Views/ProductHowItWorks";
import ProductCTA from "./Views/ProductCTA";
import ProductSmokingHero from "./Views/ProductSmokingHero";
import AppFooter from "./Views/AppFooter";
// Components
import withRoot from "./Components/withRoot";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
