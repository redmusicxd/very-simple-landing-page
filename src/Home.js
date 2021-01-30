import { Box, Button, Container, makeStyles, useMediaQuery } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import Logo from './logo.png';
const useStyles = makeStyles((theme) => ({
    containerLg: {
      height: "calc(100vh - 64px)",
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // marginBottom: "2rem",
    //   marginTop: "-64px"
    },    
    containerSm: {
      height: "80%",
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden"
      // marginBottom: "2rem",
    //   marginTop: "-56px"
    },
    buttons: {
      position: "relative",
      top: "100px",
      display: "flex",
      width: "100%",
      justifyContent: "space-around"
    }
  }));
  
export default function Home(){
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    return(
    <>
        <Container className={matches ? classes.containerLg : classes.containerSm} elevation={4}>
            <img src={Logo} alt="Logo" width="200px"/>
            <Box className={classes.buttons}>
                {/* <ArrowDownwardIcon className={classes.arrowdown}/> */}
                <Button variant="outlined" component={RouterLink} to="/apps">Apps/Games</Button>
                <Button variant="outlined" component={RouterLink} to="/contact">Contact</Button>
            </Box>
        </Container>
        {/* <Box textAlign="right">
            <a href="https://www.vecteezy.com/free-vector/digital-logo" style={{color: "grey", textDecoration: "none"}}>Digital Logo Vectors by Vecteezy</a>
        </Box> */}
    </>
      )
}