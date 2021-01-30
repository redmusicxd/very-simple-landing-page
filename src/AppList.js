import { Container, Grid, makeStyles, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { useRouteMatch, Link as RouterLink, Switch, Route, withRouter } from "react-router-dom";
import AppLogo from './ic_launcher.png';
import AppInfo from './AppInfo';

const useStyles = makeStyles((theme) => ({
    containerLg: {
      // height: "100vh",
      // display: 'flex',
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // marginBottom: "2rem",
      marginTop: "2rem"
    },    
    containerSm: {
      // height: "100vh",
      // display: 'flex',
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // marginBottom: "2rem",
      marginTop: "2rem"
    },
    textheading: {
      paddingBottom: "3rem",
  
    },
    arrowdown: {
      position: "absolute",
      bottom: "50px",
      fontSize: "2.5rem"
    },
    paper: {
      height: "fit-content",
      width: "153px",
      textAlign: "center"
    }
  }));

export default function AppList(){
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  let match = useRouteMatch();
  const AppIRoute = withRouter(AppInfo);
  return(
      <Container elevation={4} className={matches ? classes.containerLg : classes.containerSm}>
          <Typography variant={matches ? "h2" : "h4"} align="center" className={classes.textheading}>
          Our Apps/Games
          </Typography>
          <Grid container spacing={3} justify="center">
          <Grid item component={RouterLink} to={`${match.url}/1`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper} >
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography paragraph align="center">Clueshare</Typography>
              </Paper>
          </Grid>
          <Grid item component={RouterLink} to={`${match.url}/2`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography paragraph align="center">Lorem ipsum dolor</Typography>
              </Paper>
          </Grid>
          <Grid item component={RouterLink} to={`${match.url}/3`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography paragraph align="center">sit amet, consecteur</Typography>
              </Paper>
          </Grid>            
          <Grid item component={RouterLink} to={`${match.url}/4`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography paragraph align="center">adipiscing elit</Typography>
              </Paper>
          </Grid>
          <Grid item component={RouterLink} to={`${match.url}/5`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography paragraph align="center">, sed do eiusmod</Typography>
              </Paper>
          </Grid>
          <Grid item component={RouterLink} to={`${match.url}/6`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography paragraph align="center">tempor incididunt</Typography>
              </Paper>
          </Grid>
          </Grid>
          <Switch>
            <Route path={`${match.path}/:appId`} exact>
              <AppIRoute/>
            </Route>
          </Switch>
      </Container>
  )
}