import React from "react";
import { createMuiTheme, Drawer, IconButton, List, makeStyles, ThemeProvider, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Home";
import AppList from "./AppList";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { HomeOutlined } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Contact from "./Contact";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
      contrastText: '#000',
    },
  },
});
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    width: "100%",
  },
  noDecor: {
    textDecoration: "none",
    color: "white"
  },
  noDecorBlack: {
    textDecoration: "none",
    color: "black"
  }
}));


function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
              <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Link to="/" className={classes.noDecor}>
                <Typography variant="h6" className={classes.title}>
                Kodeative
                </Typography>
              </Link>
          </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{  
          paper: classes.drawerPaper,
        }}
        onClose={
          handleDrawerClose
        }
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <Link to="/" className={classes.noDecorBlack} onClick={handleDrawerClose}>
            <ListItem button >
                <ListItemIcon><HomeOutlined/></ListItemIcon>
                <ListItemText primary={"Home"} />
            </ListItem>
          </Link>          
          <Link to="/apps" className={classes.noDecorBlack} onClick={handleDrawerClose}>
            <ListItem button >
                <ListItemIcon><AppsIcon/></ListItemIcon>
                <ListItemText primary={"Apps/Games"} />
            </ListItem>
          </Link>          
          <Link to="/contact" className={classes.noDecorBlack} onClick={handleDrawerClose}>
            <ListItem button >
                <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
                <ListItemText primary={"Contact"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>          
          <Route path="/apps">
            <AppList />
          </Route>          
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/* <AppList/> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
