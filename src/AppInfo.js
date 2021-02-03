import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, IconButton, makeStyles, Modal, Paper, Typography, useMediaQuery } from "@material-ui/core";
import AppLogo from './ic_launcher.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CloseOutlined } from "@material-ui/icons";
import { FirestoreCollection, FirestoreDocument } from "@react-firebase/firestore";

const useStyles = makeStyles((theme) => ({
    containerLg: {
    //   marginTop: "2rem"
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },    
    containerSm: {
      marginTop: "2rem"
    },
    content: {
        width: "calc(100% - 3rem)",
        height: "fit-content",
        margin: "2rem",
        overflowY: 'auto',
        paddingBottom: "2rem"
    },
    accordion: {
        margin: "0 1rem 0 1rem!important"
    },
    accordionDetails: {
        flexDirection: 'column'
    },
    loading: {
        display: "inline-flex"
      }
  }));

export default function AppInfo({history, match}){
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return(
    <Modal
        open={true}
        onClose={() => history.goBack()}
        className={classes.containerLg}
    >
        <FirestoreDocument path={`/apps/${match.params.appId}`}>
        {d =><Paper className={classes.content}>
            <IconButton style={{float: "right"}} onClick={() => history.goBack()}><CloseOutlined/></IconButton>
            <Box textAlign="center" p={"2rem"}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                {d.isLoading === undefined || d.isLoading === true ? <CircularProgress color="primary" size="5rem" classes={{root: classes.loading}}/> : 
                <Typography  variant={matches ? "h2" : "h4"}>{d.value.name}</Typography>}
                {(d.isLoading !== undefined || d.isLoading !== false) && d.value && d.value.playstore ? <a href={d.value.url}><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="200px"/></a> : null}
            </Box>
            <Accordion classes={{expanded: classes.accordion, root: classes.accordion}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {d.isLoading === undefined || d.isLoading === true ? <CircularProgress color="primary" size="5rem" classes={{root: classes.loading}}/> : 
                    <Typography>
                        {d.value.about || "No description available"}
                    </Typography>}
                </AccordionDetails>
            </Accordion>
                 <Accordion classes={{expanded: classes.accordion, root: classes.accordion}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>FAQ</Typography>
                    </AccordionSummary>
                <FirestoreCollection path={`/apps/${match.params.appId}/faq`}>
                    {c => c.isLoading === undefined || c.isLoading === true ? <CircularProgress color="primary" size="5rem" classes={{root: classes.loading}}/> :
                    <AccordionDetails classes={{root: classes.accordionDetails}}>
                        {/* <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography> */}
                        {c.value.lenght > 0 ? c.value.map(f => <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography>{f.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {f.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>) : <Typography variant="h4">No FAQs available</Typography>}   
                    </AccordionDetails>}
                </FirestoreCollection>
            </Accordion>
        </Paper>}
        </FirestoreDocument>
    </Modal>
  )
}