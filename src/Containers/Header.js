import React,{useEffect,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconsBar from '../Components/IconsBar';
import NavBar from '../Components/NavBar';
import ImageDesktop from '../Images//Background.jpg';
import ImageMobil from '../Images//BackgroundMobil.jpg';
import catlogo from '../Images/catlogo.png'



const useStyles = makeStyles((theme) => ({
  photoDivDesktop:{
    //height: window.innerHeight,
    backgroundImage: `url(${ImageDesktop})`,      
    backgroundPosition: 'center center',      
    backgroundRepeat: 'no-repeat',      
    backgroundAttachment: 'fixed',      
    backgroundSize: 'cover',    
    textAlign:'center',  
    backgroundColor: '#212121',
    transition: 'opacity 1s',
    opacity:".0",
    //position:'absolute'
  },
  photoDivMobil:{
    height: window.innerHeight,
    //width: window.screen.width,
    backgroundImage: `url(${ImageMobil})`,      
    backgroundPosition: 'center center',      
    transition: 'opacity 1s',
    opacity:".0",
    //backgroundRepeat: 'no-repeat',      
    //backgroundAttachment: 'fixed',      
    //backgroundSize: 'cover',      
   // backgroundColor: '#464646'
   //verticalAlign:'bottom',
   
   //textAlign:'center',
  },

  navbarstyle:{
    //marginTop:'-200px',
     //paddingTop:window.innerHeight-350,
  },

  logo:{
    paddingTop:window.innerHeight-250,
    width:"50%",
    transition: 'opacity 2s',
    opacity:".0"
  },
  logoMobil:{
    paddingTop:window.innerHeight-290,
    width:"100%",
    transition: 'opacity 2s',
    opacity:".0"
  },
}));

export default function Header() {
    const classes = useStyles();
    const logo = useRef();
    const div = useRef();
   
    useEffect(()=>{
      setTimeout(()=>{logo.current.style.opacity="1"; div.current.style.opacity="1" },50)
      ;
    })
   
  
    return (
        <div>
            <NavBar className={classes.navbarstyle} /> 
            <div ref={div} className={ (window.screen.width>800) ? classes.photoDivDesktop : classes.photoDivMobil }>
              <img ref={logo} className={(document.getElementsByTagName('body')[0].offsetWidth>856) ? classes.logo: classes.logoMobil}  src={catlogo} alt="aXamit cat logo" />
              <IconsBar />
            </div>
           
        </div>
  );
}