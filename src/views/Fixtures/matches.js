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
import { Typography } from "@material-ui/core";

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

export default function Fixtures() {
    const classes = useStyles();
    return(
        <Card className={classes.textCenter} style={{paddingTop: "100px"}}>
            <CardHeader color="primary">
                <Typography>Legends T20 Challenge - 41st Edition</Typography>
            </CardHeader>
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
            </CardBody>
            <Typography>Spartans BSK won by 28 runs</Typography>
            {/* <Button color="primary">Match Details</Button> */}
            <CardFooter className={classes.textMuted}>
            24-Oct-21
            </CardFooter>
        </Card>
    )

}