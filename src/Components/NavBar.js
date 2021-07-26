import React,{useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles((theme) => ({
  mainMenuToolBarTransparent:{
    backgroundColor: 'rgba(33, 33, 33,0)',
    justifyContent:'center',
  },
  mainMenuToolBar:{
    justifyContent:'center',
    backgroundColor: 'rgba(33, 33, 33,1)',
  },
  mainMenuToolBarTransparentMobil:{
    justifyContent:'flex-end',
    backgroundColor: 'rgba(33, 33, 33,0)',
 
  },
  mainMenuToolBarMobil:{
    backgroundColor: 'rgba(33, 33, 33,1)',
    justifyContent:'flex-end',

  },


  buttonNav:{
    fontSize:'30px',
  },
  
  AppBar:{
    backgroundColor: 'transparent'
    
  },
  ButtonsGroup:{
    justifyContent:'center',
  },
  MenuButton:{
    height:40,
    width:40,
    textShadow: "black 0 0 5px",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [backgrogroundColorFlag,setBackgrogroundColorFlag] = useState(0);
  const [mobilVersionFlag,setMobilVersionFlag] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMainMenuToolBarClass = ()=>{
    if(mobilVersionFlag)
      return  backgrogroundColorFlag ? classes.mainMenuToolBarMobil : classes.mainMenuToolBarTransparentMobil;
    else
      return backgrogroundColorFlag ? classes.mainMenuToolBar : classes.mainMenuToolBarTransparent;
  };
  
  useEffect(()=>{
    setMobilVersionFlag(document.getElementsByTagName('body')[0].offsetWidth<758);
    window.addEventListener('resize', event => {
      setMobilVersionFlag(document.getElementsByTagName('body')[0].offsetWidth<758);
    }, false);
    window.addEventListener('scroll', ()=>{
        setBackgrogroundColorFlag(window.pageYOffset>window.innerHeight);
    });
  });

  const scrolToId=(id)=>{
    document.getElementById(id).scrollIntoView({ block: 'start',  behavior: 'smooth' })
  };

  return (
      <AppBar elevation={0} className={classes.AppBar}>
        <Toolbar className={getMainMenuToolBarClass()}>
          <div hidden={!mobilVersionFlag} > 
            <Tooltip title="Menu" TransitionComponent={Zoom} arrow > 
              <IconButton color="secondary" onClick={handleClick}>
                <MenuIcon className={classes.MenuButton}  />
              </IconButton>
            </Tooltip>

            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={()=> scrolToId("events")}>
                <ListItemIcon>
                  <SpeakerNotesIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="СОБЫТИЯ" />
              </StyledMenuItem>
              <StyledMenuItem onClick={()=> scrolToId("photos") }>
                <ListItemIcon>
                  <PhotoLibraryIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="ФОТО" />
              </StyledMenuItem>
              <StyledMenuItem onClick={()=> scrolToId("pressRelease")}>
                <ListItemIcon>
                  <DescriptionIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="ПРЕСС РЕЛИЗ" />
              </StyledMenuItem>
              <StyledMenuItem  onClick={()=> scrolToId("contacts") }>
                <ListItemIcon>
                  <ContactMailIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="КОНТАКТЫ" />
              </StyledMenuItem>
            </StyledMenu>      
          </div>


          <div hidden={mobilVersionFlag}>
            <Button  color="secondary" onClick={()=> scrolToId("events")} className={classes.buttonNav}>СОБЫТИЯ</Button>
            <Button  color="secondary" onClick={()=> scrolToId("photos") } className={classes.buttonNav}>ФОТО</Button>
            <Button  color="secondary" onClick={()=> scrolToId("pressRelease")} className={classes.buttonNav}>ПРЕСС РЕЛИЗ</Button>
            <Button  color="secondary" onClick={()=> scrolToId("contacts") } className={classes.buttonNav}>КОНТАКТЫ</Button>
          </div>
        </Toolbar>
      </AppBar>
  );
}