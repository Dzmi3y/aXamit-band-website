import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Events from '../Components/Events';
import Contacts from '../Components/Contacts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PressRelease from '../Components/PressRelease';
import Photos from '../Components/Photos';
import ImageDesktop from '../Images//Background5.jpg';
import ImageMobil from '../Images//BackgroundMobil.jpg';

const useStyles = makeStyles((theme) => ({
  bodydiv:{
    backgroundColor:'#212121',
      
  },
  topHolder:{
    height:"100px"  
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      //margin: theme.spacing(1),
    width: "99%",
     // height: theme.spacing(200),
      //backgroundColor:'#424242',
    backgroundImage: `url(${ImageDesktop})`,      
    backgroundPosition: 'center center',      
    backgroundRepeat: 'no-repeat',      
    backgroundAttachment: 'fixed',      
    backgroundSize: 'cover',    
    },
    
  },
  rootMobil:{
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      //margin: theme.spacing(1),
    width: "99%",
    //height: window.innerHeight,
    //width: window.screen.width,
    backgroundImage: `url(${ImageDesktop})`,      
    backgroundPosition: 'center center',      
    }
    //backgroundRepeat: 'no-repeat',      
    //backgroundAttachment: 'fixed',      
    //backgroundSize: 'cover',      
   // backgroundColor: '#464646'
   //verticalAlign:'bottom',
   
   //textAlign:'center',
  },
  divContacts:{
   justifyContent:"center"
  },
  title:{
    //width:"100%",
    fontSize:"20px",
    color:"#eeeeee",
    marginLeft:"20px",
    //marginTop:"10pt"
    textShadow: "black 0 0 5px",
  }
}));

export default function Body() {
  const classes = useStyles();

  return (
      <div className={  classes.bodydiv}>
            <div className={classes.topHolder} ></div>

            <Grid className={ (window.screen.width>800) ? classes.root : classes.rootMobil}
            container
            direction="column"
            justify="center"
            alignItems="center">

              <Paper elevation={3}>
                <div id="events"></div>
                <Events />
                <Grid 
                container
                justify="center"
                direction="column"
                alignItems="center">
                  <div id="photos"></div>
                  <Photos/>
                  <Grid>
                    <div id="pressRelease" className={classes.title}>
                      <h1>ПРЕСС РЕЛИЗ</h1>
                    </div>
                    <PressRelease />
                    <br />
                    <div id="contacts" className={classes.title}>
                      <h1>КОНТАКТЫ</h1>
                    </div>
                    <Contacts  />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
      </div>
      
  );
}