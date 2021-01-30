import { Button, makeStyles, Paper, TextField, useMediaQuery } from "@material-ui/core";

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
      content: {
        height: "calc(100vh - 56px)",
        margin: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        height: "12rem",
        justifyContent: "space-evenly"
    }
  }));

export default function Contact(){
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return(
    <Paper className={classes.content}>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField id="subject" label="Subject" variant="outlined" />
            <TextField id="message" label="Message" variant="outlined" multiline />
            <Button type="submit">Send</Button>
        </form>
    </Paper>
  )
}