import { CircularProgress, Container, Grid, makeStyles, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { useRouteMatch, Link as RouterLink, Switch, Route, withRouter } from "react-router-dom";
import AppLogo from './ic_launcher.png';
import AppInfo from './AppInfo';
import configFirebase from './Firebase_Config';
import { FirestoreCollection, FirestoreProvider } from "@react-firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore'

const useStyles = makeStyles((theme) => ({
    containerLg: {
      // height: "100vh",
      // display: 'flex',
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // marginBottom: "2rem",
      marginTop: "2rem",
      textAlign: "center"
    },    
    containerSm: {
      // height: "100vh",
      // display: 'flex',
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // marginBottom: "2rem",
      marginTop: "2rem",
      textAlign: "center"
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
    },
    loading: {
      display: "inline-flex"
    }
  }));

export default function AppList(){
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  let match = useRouteMatch();
  const AppIRoute = withRouter(AppInfo);
  return(
    <FirestoreProvider {...configFirebase} firebase={firebase}>
    <FirestoreCollection path="/apps/" orderBy={{field: "index", type: "asc"}}>
      {d => 
      <Container elevation={4} className={matches ? classes.containerLg : classes.containerSm}>
        <Typography variant={matches ? "h2" : "h4"} align="center" className={classes.textheading}>
        Our Apps/Games
        </Typography>
        {d.isLoading ? <CircularProgress color="primary" size="5rem" classes={{root: classes.loading}}/> : 
          <Grid container spacing={3} justify="center">
            {d.value.map((app, i) => (
            <Grid item key={i} component={RouterLink} to={`${match.url}/${d.ids[i]}`} style={{textDecoration: "none"}}>
              <Paper className={classes.paper} >
              <img src={AppLogo} width="100px" alt={app.name}/>
                <Typography paragraph align="center">{app.name}</Typography>
              </Paper>
            </Grid>))}
          </Grid>}
          <Switch>
            <Route path={`${match.path}/:appId`} exact>
              <AppIRoute/>
            </Route>
          </Switch>
      </Container>
      }
    </FirestoreCollection>
      </FirestoreProvider>
  )
}