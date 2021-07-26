import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    grid:{
      margin:"40px",    
      
      marginBottom:"10%",
      //background:"transparent"  
    },
    mobilGrid:{
      marginBottom:"20px",
      //marginTop:"80px"
      
    },
    title:{
      fontSize:"30pt",
      color:"#eeeeee",
      marginLeft:"5px",
      textShadow: "black 0 0 5px",
      
    },
    date:{
      fontSize:"12pt",
      color:"#eeeeee",
      marginLeft:"5px",
      textShadow: "black 0 0 5px",
    },
    mainText:{
      fontSize:"20pt",
      color:"#eeeeee",
      marginLeft:"5px",
      textShadow: "black 0 0 5px",
    },
    bodyGrid:{
        marginTop:"20px",
        backgroundColor: "rgba(0, 0, 0, 0.8 )", //'#  ',
        //height:"135%"
        

    },
    playerCode:{
        marginRight:"20px",
        marginLeft:"20px",
        alignContent:"center",
        alignItems:"center",
        textAlign:"center"

    },
  }));

export default function Event({title,customeClass,children}) {
 const classes = useStyles();
 const [mobilFlag,setMobilFlag] = useState(0);

 useEffect(()=>{
  setMobilFlag(document.getElementsByTagName('body')[0].offsetWidth<856);
   window.addEventListener('resize', event => {
    setMobilFlag(document.getElementsByTagName('body')[0].offsetWidth<856);

   }, false);
 });

  return (
    
    <Grid container item direction="row" className={ (mobilFlag)? classes.mobilGrid : classes.grid} >
      <Grid xs={12} item className={classes.title} >
        <strong>{title}</strong>
      </Grid>
      <Grid container  className={customeClass? customeClass: classes.bodyGrid} item  >
       {children}
      </Grid>
      </Grid>
  );
}