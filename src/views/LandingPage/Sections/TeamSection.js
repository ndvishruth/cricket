import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import p1 from "assets/img/faces/Prathyush.jpeg";
import p2 from "assets/img/faces/Hari.jpeg";
import p3 from "assets/img/faces/Gaurav.jpeg";
import p4 from "assets/img/faces/Niranjan.jpeg";
import p5 from "assets/img/faces/Harsha.jpeg";
import p6 from "assets/img/faces/Manas.jpeg";
import p7 from "assets/img/faces/Amrit.jpeg";
import p8 from "assets/img/faces/Devendra.jpeg";
import p9 from "assets/img/faces/Zaheer.jpeg";
import p10 from "assets/img/faces/Uday.jpeg";
import p11 from "assets/img/faces/Abhishek.jpeg";
import p12 from "assets/img/faces/Anuj.jpeg";
import p13 from "assets/img/faces/Shyam.jpeg";
import p14 from "assets/img/faces/Sandeep.jpeg";
import p15 from "assets/img/faces/Sujit.jpeg";
import p16 from "assets/img/faces/Sergi.jpeg";
import p17 from "assets/img/faces/Aditya.jpeg";
import p18 from "assets/img/faces/Dheeraj.jpeg";
import p19 from "assets/img/faces/Raj.jpeg";
import p20 from "assets/img/faces/Amit.jpeg";
import p21 from "assets/img/faces/Bhaskar.jpeg";
import p22 from "assets/img/faces/Ashish.jpeg";
import p23 from "assets/img/faces/Shabari.jpeg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p1} alt="..." className={imageClasses} width="100%" height="100%"/>
              </GridItem>
              <h4 className={classes.cardTitle}>
              Prathyush
                <br />
                <small className={classes.smallTitle}>Batsman/Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p2} alt="..." className={imageClasses} width="100%" height="100%"/>
              </GridItem>
              <h4 className={classes.cardTitle}>
              Hari
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Gaurav
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Niranjan
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p5} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Harsha
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p6} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Manas
                <br />
                <small className={classes.smallTitle}>Batsman/Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p7} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Amrit
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p8} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Devendra
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p9} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Zaheer
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p10} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Uday
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p11} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Abhishek
                <br />
                <small className={classes.smallTitle}>Batsman/Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p12} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Anuj
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p13} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Shyam
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p14} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Sandeep
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p15} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Sujit
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p16} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Sergi
                <br />
                <small className={classes.smallTitle}>Batsman/Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p17} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Aditya
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p18} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Dheeraj
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p19} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Raj
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p20} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Amit
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p21} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Bhaskar
                <br />
                <small className={classes.smallTitle}>Batsman/Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p22} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Ashish
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p23} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Shabari
                <br />
                <small className={classes.smallTitle}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
