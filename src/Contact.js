import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { mailAPI } from './Config';

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
        height: "100%",
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
  const [data, setData] = useState({"email": "", "message": "", "subject": ""})
//   const matches = useMediaQuery('(min-width:600px)');
let onSubmit = (ev) => {
  ev.preventDefault();
  console.log(ev);
  fetch(mailAPI, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(
  (response) => (response)
    ).then((response)=> {
  if (response.status === 'success') {
    alert("Message Sent."); 
    this.resetForm()
  } else if(response.status === 'fail') {
    alert("Message failed to send.")
  }
})
}
  return(
    <Paper className={classes.content}>
      <form className={classes.form} method="POST" onSubmit={onSubmit} data-netlify="true" style={{height: "25rem"}}>
          <TextField id="email" label="Contact Email" variant="outlined" onChange={(ev) => setData({...data, email: ev.target.value})}/>
          <TextField id="subject" label="Subject" variant="outlined" onChange={(ev) => setData({...data, subject: ev.target.value})}/>
          <TextField id="message" label="Message" variant="outlined" multiline onChange={(ev) => setData({...data, message: ev.target.value})} />
          <Button type="submit">Send</Button>
      </form>
    </Paper>
  )
}