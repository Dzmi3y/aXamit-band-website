import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Event from './Event'
import ImageDesktop from '../Images//Background3.jpg';


const useStyles = makeStyles((theme) => ({
  grid:{
    //margin:"20px",
    //background:"transparent"
    backgroundImage: `url(${ImageDesktop})`,      
    backgroundPosition: 'center center',      
    backgroundRepeat: 'no-repeat',      
    backgroundAttachment: 'fixed',      
    backgroundSize: 'cover',    
  },
  gridMobil:{
    //height: window.innerHeight,
    //width: window.screen.width,
    backgroundImage: `url(${ImageDesktop})`,      
    backgroundPosition: 'center center',      
    //backgroundRepeat: 'no-repeat',      
    //backgroundAttachment: 'fixed',      
    //backgroundSize: 'cover',      
   // backgroundColor: '#464646'
   //verticalAlign:'bottom',
   
   //textAlign:'center',
  },
  textGrid:{
    fontSize:"20pt",
    color:"#eeeeee"
  },
  title:{
    fontSize:"20pt",
    color:"#eeeeee"
  },
  mainText:{
    fontSize:"20pt",
    color:"#eeeeee"
  },
  bandcampIframe:{
    border:0,
    width:"100%",
    height:"100%",
  },
  bandcampEventClass:{
    marginTop:"20px",
    backgroundColor: "rgba(0, 0, 0, 0.8 )",
    height:"135%"
  },
  bandcampEventMobilClass:{
    marginTop:"10px",
    backgroundColor: "rgba(0, 0, 0, 0.8 )",
    //height:""
  },
  bandcampPlayersMobilGrid:{
    marginTop:"20px"
  },
  
}));

export default function Events() {
const classes = useStyles();
const isMobilVersion = (document.getElementsByTagName('body')[0].offsetWidth<=1300);


 var maxWv=(window.screen.width>872) ? window.innerWidth-120 : window.innerWidth-30;
 var maxHv=(window.screen.width>872) ? (window.innerWidth-120)/1.7 : (window.innerWidth-30)/1.7;
  return (
    <Grid container className={ (window.screen.width>872) ? classes.grid : classes.gridMobil }  direction="row">


      <Event item title = {'Последние релизы'}  customeClass={ isMobilVersion? classes.bandcampEventMobilClass :classes.bandcampEventClass }>
        <BandcampPlayers isMobil={isMobilVersion} />
      </Event>
     
    

      <Event item title = {'Меланин на выпускном'} >
        <Grid container justify="center" >
          <Grid item>
            <iframe width={maxWv} height={maxHv} src='https://www.youtube.com/embed/yUHllr7iaYM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
          </Grid>
        </Grid>
      </Event>
    

      
    </Grid>
  );
}

function BandcampPlayers({isMobil}){
  const classes= useStyles();
  if(isMobil)
    return(
      <Grid display className={classes.bandcampPlayersMobilGrid} container justify="center" spacing={0}>
        <Grid xs={10} item>
          <iframe className={classes.bandcampIframe} src='https://bandcamp.com/EmbeddedPlayer/track=3382471337/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/' seamless><a href='https://axamit.bandcamp.com/track/--5'>Золак</a></iframe>  
        </Grid>
        <Grid xs={10} item>
          <iframe className={classes.bandcampIframe} src='https://bandcamp.com/EmbeddedPlayer/track=633893516/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/' seamless><a href='https://axamit.bandcamp.com/track/--4'>Зарядка</a></iframe> 
        </Grid>
        <Grid xs={10} item>
          <iframe className={classes.bandcampIframe} src='https://bandcamp.com/EmbeddedPlayer/track=808055122/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/' seamless><a href='https://axamit.bandcamp.com/track/-'>Котэ</a></iframe>  
        </Grid>
        <Grid xs={10} item>
          <iframe className={classes.bandcampIframe} src="https://bandcamp.com/EmbeddedPlayer/album=2162898275/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://axamit.bandcamp.com/album/--2">Ведаю цябе</a></iframe>
        </Grid>
      </Grid>
    );
  else
    return(
      <Grid display  container justify="center" spacing={1}>
        <Grid item>
          <iframe className={classes.bandcampIframe} src='https://bandcamp.com/EmbeddedPlayer/track=3382471337/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/' seamless><a href='https://axamit.bandcamp.com/track/--5'>Золак</a></iframe>  
        </Grid>
        <Grid item>
          <iframe className={classes.bandcampIframe}  src='https://bandcamp.com/EmbeddedPlayer/track=633893516/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/' seamless><a href='https://axamit.bandcamp.com/track/--4'>Зарядка</a></iframe> 
        </Grid>
        <Grid item >
          <iframe className={classes.bandcampIframe} src='https://bandcamp.com/EmbeddedPlayer/track=808055122/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/' seamless><a href='https://axamit.bandcamp.com/track/-'>Котэ</a></iframe>  
        </Grid>
        <Grid item >
        <iframe className={classes.bandcampIframe} src="https://bandcamp.com/EmbeddedPlayer/album=2162898275/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/" seamless><a href="https://axamit.bandcamp.com/album/--2">Ведаю цябе</a></iframe>
        </Grid>
      </Grid>
    );

}