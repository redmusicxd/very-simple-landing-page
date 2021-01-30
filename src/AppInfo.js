import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, makeStyles, Modal, Paper, Typography, useMediaQuery } from "@material-ui/core";
import AppLogo from './ic_launcher.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CloseOutlined } from "@material-ui/icons";

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
    }
  }));

export default function AppInfo({history}){
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return(
    <Modal
        open={true}
        onClose={() => history.goBack()}
        className={classes.containerLg}
    >
        <Paper className={classes.content}>
            <IconButton style={{width: "100%", justifyContent: "flex-end"}}onClick={() => history.goBack()}><CloseOutlined/></IconButton>
            <Box textAlign="center" p={"0 2rem 2rem 2rem"}>
                <img src={AppLogo} width="100px" alt="Clueshare "/>
                <Typography  variant={matches ? "h2" : "h4"}>Cluedo sheet & share</Typography>
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
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
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
                <AccordionDetails classes={{root: classes.accordionDetails}}>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography> */}
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography>What's goin' on?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>                        
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography>Sharing does not work</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </Paper>
    </Modal>
  )
}