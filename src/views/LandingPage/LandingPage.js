import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-slick";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from "components/Card/Card.js";
// import classNames from "classnames";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import image1 from "assets/img/bg1.jpeg";
import image2 from "assets/img/bg2.jpeg";
import image3 from "assets/img/bg3.jpeg";
import image4 from "assets/img/bg4.jpeg";
import image5 from "assets/img/bg5.jpeg";
import image6 from "assets/img/bg6.jpeg";
import Parallax from "components/Parallax/Parallax";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // brand="Tranquility Cricket Club"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    
    <Parallax filter image={require("assets/img/landing-bg.jpg")}>
      <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div class="row-fluid center">
              <h1 className={classes.title}>Tranquility Cricket Club</h1>
              <h4>Bleed Blue.</h4>
              </div>
              
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="Forth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="Fifth slide"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={image6}
                      alt="Sixth slide"
                      className="slick-image"
                    />
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
        
      <Footer />
    </div>
  );
}
