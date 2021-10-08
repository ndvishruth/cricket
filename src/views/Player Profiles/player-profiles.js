import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import TeamSection from "views/LandingPage/Sections/TeamSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="grey"
        routes={dashboardRoutes}
        brand="Tranquility Cricket Club"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: `5px` }}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}