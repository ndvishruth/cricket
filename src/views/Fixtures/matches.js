import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
import { CardActionArea, Typography } from "@material-ui/core";
// import Button from "components/CustomButtons/Button.js";

// import { Link } from "react-router-dom";

// import Spartans from "views/Fixtures/LegendsT20Challenge41Edition/spartansBsk24oct21.js";

// const dashboardRoutes = [];

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);

export default function Matches() {
    const classes = useStyles();
    return(
        <Card className={classes.textCenter} style={{paddingTop: "100px"}}>
            <CardHeader color="primary">
                <Typography>Legends T20 Challenge - 41st Edition</Typography>
            </CardHeader>
            <CardActionArea href="/spartans">
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Typography className={classes.cardTitle}>SPARTANS BSK</Typography>
                        <Typography>156/8 (20.0 Ov)</Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Typography className={classes.cardTitle}>TRANQUILITY CHARGERS</Typography>
                        <Typography>128/7 (20.0 Ov)</Typography>
                    </GridItem>
                </GridContainer>
                <Typography>Spartans BSK won by 28 runs</Typography>
                {/* <Link to={"/spartans"} color="primary">
                    Match Details
                </Link> */}
                {/* <Button color="primary" href="/fixtures/spartansBsk24oct21">Match Details</Button> */}
            </CardBody>
            
            <CardFooter className={classes.textMuted}>
            24-Oct-21
            </CardFooter>
            </CardActionArea>
        </Card>
    )

}