import * as React from 'react';
import {styled}  from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import tableCellClasses from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// import styles from "assets/jss/material-kit-react/views/landingPage.js";

const dashboardRoutes = [];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, runs, balls, fours, sixes, sr, min) {
  return { name, runs, balls, fours, sixes, sr, min};
}

const rows = [
  createData('Ashith Nayak',	'c Aditya b Ashish Gupta',	11,	11,	0,	1,	100.00,	12),
  createData('Sandesh Achar (c & wk)',	'c Aditya b Amrit',	16,	17,	3,	0,	94.12,	26),
  createData('Shivaraj Rai',	'c Ashish Gupta b Shabarinath',	0,	2,	0,	0,	0.00,	2),
  createData('Waseem',	'b Amrit',	21,	15,	5,	0,	140.00,	19),
  createData('Pavan Shankar',	'c Harsha Konka b Amit Gusai',	41,	28,	1,	4,	146.43,	41),
  createData('Vinay S',	'c Nataraj b Sergi',	17,	19,	1,	0,	89.47,	31),
  createData('Kirangouda Bhusannavar',	'st †Abhishek Srivastava b Amit Gusai',	4,	8,	0,	0,	50.00,	10),
  createData('Rakesh Menon',	'not out',	23,	13,	2,	1,	176.92,	18),
  createData('Santosh Bharadwaj',	'run out Sc Aravinda Cricket',	14,	8,	0,	1,	175.00,	10),
  createData('Extras',	'(wd 7, nb 1, b 1)',	9),
  createData('Total',	'(8 wkts, 20.0 ov)',	'156 (CRR: 7.80)')
];

const rowss = [
  createData('Shabarinath',	'c Pavan Shankar b Ayyoob',	5,	9,	1,	0,	55.56,	8),
  createData('Sergi',	'c&b Rakesh Menon',	12,	13,	1,	0,	92.31,	35),
  createData('Aditya',	'c Rakesh Menon b Ayyoob',	16,	9,	1,	1,	177.78,	12),
  createData('Harsha Konka (c)',	'c Ayyoob b Jeevith Shetty',	15,	16,	2,	0,	93.75,	22),
  createData('Amrit',	'c †Sandesh Achar b Abhishek Nair',	19,	16,	1,	0,	118.75,	25),
  createData('Sc Aravinda Cricket',	'not out',	33,	35,	3,	0,	94.29,	46),
  createData('Sivakumar S',	'b Santosh Bharadwaj',	5,	8,	0,	0,	62.50,	9),
  createData('Shyam',	'b Santosh Bharadwaj',	1,	2,	0,	0,	50.00,	2),
  createData('Ashish Gupta',	'not out',	15,	14,	1,	0,	107.14,	14),
  createData('Extras',	'(wd 4, lb 1, nb 2)',	7	),
  createData('Total',	'(7 wkts, 20.0 ov)',	'128 (CRR: 6.40)')
];

export default function SpartansBSK(props) {
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
    <div style={{paddingTop: "60px"}}>
    <TableContainer component={Paper} style={{padding: "25px"}} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow >
              <TableCell align="center" colSpan={2}>
              SPARTANS BSK
              </TableCell>
              <TableCell align="center" colSpan={3}>
              156/8 (20.0 Ov)
              </TableCell>
            </TableRow>
          <TableRow>
            <StyledTableCell>Batters</StyledTableCell>
            <StyledTableCell align="right">R</StyledTableCell>
            <StyledTableCell align="right">B</StyledTableCell>
            <StyledTableCell align="right">4s</StyledTableCell>
            <StyledTableCell align="right">6s</StyledTableCell>
            <StyledTableCell align="right">SR</StyledTableCell>
            <StyledTableCell align="right">Min</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.runs}</StyledTableCell>
              <StyledTableCell align="right">{row.balls}</StyledTableCell>
              <StyledTableCell align="right">{row.fours}</StyledTableCell>
              <StyledTableCell align="right">{row.sixes}</StyledTableCell>
              <StyledTableCell align="right">{row.sr}</StyledTableCell>
              <StyledTableCell align="right">{row.min}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <p><b>Did not bat :</b> Jeevith Shetty, Abhishek Nair, Ayyoob</p>
<p><b>Fall of wickets:</b> 20-1 (Ashith Nayak, 2.5 ov), 21-2 (Shivaraj Rai, 3.3 ov), 37-3 (Sandesh Achar, 6 ov), 50-4 (Waseem, 7.4 ov), 114-5 (Vinay S, 15 ov), 114-6 (Pavan Shankar, 15.1 ov), 126-7 (Kirangouda Bhusannavar, 17.4 ov), 156-8 (Santosh Bharadwaj, 20 ov)</p>
    </TableContainer>

    <TableContainer component={Paper} style={{padding: "25px"}} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow >
              <TableCell align="center" colSpan={2}>
              TRANQUILITY CHARGERS
              </TableCell>
              <TableCell align="center" colSpan={3}>
              128/7 (20.0 Ov)
              </TableCell>
            </TableRow>
          <TableRow>
            <StyledTableCell>Batters</StyledTableCell>
            <StyledTableCell align="right">R</StyledTableCell>
            <StyledTableCell align="right">B</StyledTableCell>
            <StyledTableCell align="right">4s</StyledTableCell>
            <StyledTableCell align="right">6s</StyledTableCell>
            <StyledTableCell align="right">SR</StyledTableCell>
            <StyledTableCell align="right">Min</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowss.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.runs}</StyledTableCell>
              <StyledTableCell align="right">{row.balls}</StyledTableCell>
              <StyledTableCell align="right">{row.fours}</StyledTableCell>
              <StyledTableCell align="right">{row.sixes}</StyledTableCell>
              <StyledTableCell align="right">{row.sr}</StyledTableCell>
              <StyledTableCell align="right">{row.min}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <p><b>Did not bat :</b>  Nataraj, Abhishek Srivastava (wk), Amit Gusai</p>
      <p><b>Fall of wickets:</b> 5-1 (Shabarinath, 1.3 ov), 28-2 (Aditya, 3.5 ov), 50-3 (Sergi, 6.4 ov), 59-4 (Harsha Konka, 8.3 ov), 88-5 (Amrit, 12.5 ov), 101-6 (Sivakumar S, 15.2 ov), 103-7 (Shyam, 16 ov)</p>
    </TableContainer>
    </div>
    <Footer/>
    </div>
  );
}
