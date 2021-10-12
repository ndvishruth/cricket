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

import p1 from "assets/img/faces/Aashish.jpeg";
import p2 from "assets/img/faces/Abhishek.jpeg";
import p3 from "assets/img/faces/Aditya.jpeg";
import p4 from "assets/img/faces/AdityaJr.png";
import p5 from "assets/img/faces/Amit.jpeg";
import p6 from "assets/img/faces/Amrit.jpeg";
import p7 from "assets/img/faces/Anuj.jpeg";
import p8 from "assets/img/faces/Aravind.png";
import p9 from "assets/img/faces/Bhaskar.jpeg";
import p10 from "assets/img/faces/Devendra.jpeg";
import p11 from "assets/img/faces/Dheeraj.jpeg";
import p12 from "assets/img/faces/Gaurav.jpeg";
import p13 from "assets/img/faces/Govind.png";
import p14 from "assets/img/faces/Hari.jpeg";
import p15 from "assets/img/faces/Harsha.jpeg";
import p16 from "assets/img/faces/Manas.jpeg";
import p17 from "assets/img/faces/Mrityunjay.png";
import p18 from "assets/img/faces/Nataraj.png";
import p19 from "assets/img/faces/Niranjan.jpeg";
import p20 from "assets/img/faces/Pradeep.png";
import p21 from "assets/img/faces/PrathyushJr.png";
import p22 from "assets/img/faces/Prathyush.jpeg";
import p23 from "assets/img/faces/Raj.jpeg";
import p24 from "assets/img/faces/Ramachandra.png";
import p25 from "assets/img/faces/Sandeep.jpeg";
import p26 from "assets/img/faces/Sergi.jpeg";
import p27 from "assets/img/faces/Shabari.jpeg";
import p28 from "assets/img/faces/Shyam.jpeg";
import p29 from "assets/img/faces/Siva.png";
import p30 from "assets/img/faces/Souvik.png";
import p31 from "assets/img/faces/Sujit.jpeg";
import p32 from "assets/img/faces/Uday.jpeg";
import p33 from "assets/img/faces/Zaheer.jpeg";

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
      <h2 className={classes.title} style={{color:"white"}}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p1} alt="..." className={imageClasses} width="100%" />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Aashish
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p2} alt="..." className={imageClasses} width="65%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Abhishek
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Wicket Keeper</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p3} alt="..." className={imageClasses} width="100%" height="100%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Aditya
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Aditya Jr
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p5} alt="..." className={imageClasses}/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Amit
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p6} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Amrit
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p7} alt="..." className={imageClasses} width="75%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Anuj
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p8} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Aravindan
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p9} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Bhaskar
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p10} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Devendra
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p11} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Dheeraj
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p12} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Gaurav
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p13} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Govind
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p14} alt="..." className={imageClasses}/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Hari
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p15} alt="..." className={imageClasses} width="88%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Harsha
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p16} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Manas
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p17} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Mrityunjay
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p18} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Nataraj
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p19} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Niranjan
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p20} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Pradeep
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p21} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Prathyush Jr
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p22} alt="..." className={imageClasses} width="75%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Prathyush Mathur
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p23} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Raj
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p24} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Ramachandra
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p25} alt="..." className={imageClasses} width="68%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Sandeep
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p26} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Sergi
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p27} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Shabarinath
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p28} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Shyam
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Wicket Keeper</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p29} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Siva
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Wicket Keeper</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p30} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Souvik
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Bowler</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} m={12} md={10} className={classes.itemGrid}>
                <img src={p31} alt="..." className={imageClasses} width="75%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Sujit
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p32} alt="..." className={imageClasses} width="60%"/>
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Uday
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>All Rounder</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={p33} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"white"}}>
              Zaheer
                <br />
                <small className={classes.smallTitle} style={{color:"white"}}>Batsman</small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
