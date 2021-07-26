import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles((theme) => ({
  grid:{
    //margin:"20px",
    background:"transparent"
  },
  textGrid:{
    fontSize:"20pt",
    color:"#eeeeee"
  },
  root: {
    //width: '700px',
    maxWidth:"700px",
    backgroundColor: "transparent",
    fontSize:"30px"
  },
  listItemTextPrimary:{
    fontSize:"30px",
    color:"#eeeeee"
  },
  listItemTextSecondary:{
    fontSize:"20px",
    color:"#9e9e9e"
  }
}));

const useMobilStyles = makeStyles((theme) => ({
  grid:{
    //margin:"20px",
    background:"transparent"
  },
  textGrid:{
    fontSize:"20pt",
    color:"#eeeeee"
  },
  root: {
    //width: '700px',
    maxWidth:"700px",
    backgroundColor: "transparent",
    fontSize:"30px"
  },
  listItemTextPrimary:{
    fontSize:"20px",
    color:"#eeeeee"
  },
  listItemTextSecondary:{
    fontSize:"20px",
    color:"#eeeeee"
  }
}));


export default function Contacts() {
  
  const desctopClasses = useStyles();
  const mobilClasses = useMobilStyles();

 
 const [mobilFlag, setMobilFlag] = useState(0);
 const classes = mobilFlag ? mobilClasses: desctopClasses;

 useEffect(()=>{
  setMobilFlag(document.getElementsByTagName('body')[0].offsetWidth<856);
    window.addEventListener('resize', event => {
    setMobilFlag(document.getElementsByTagName('body')[0].offsetWidth<856);
   }, false);
 });
  return (
    <div className={classes.root}>
        <List >
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                <Phone />
            </Avatar>
            </ListItemAvatar>
            <ListItemText classes={{primary:classes.listItemTextPrimary,secondary:classes.listItemTextSecondary,}} primary="+375298629480" secondary="Phone" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                <Email />
            </Avatar>
            </ListItemAvatar>
            <ListItemText classes={{primary:classes.listItemTextPrimary,secondary:classes.listItemTextSecondary,}} primary="axamitband@gmail.com" secondary="Email" />
        </ListItem>
        </List>
    </div>
  );
}