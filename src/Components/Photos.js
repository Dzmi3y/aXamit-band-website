import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { makeStyles } from '@material-ui/core/styles';
///import * as axamitbass from '../Images/slider' ;
const images = importAll(require.context('../Images/slider', false, /\.(png|jpe?g|svg)$/));
const useStyle = makeStyles((theme) => ({
    carousel:{
        height: window.screen.height-210
        
    }
}));

const Photos = () => {
  const classes = useStyle();
  const images =getSliderImagesArray([
    'axamit bass.jpg',
    'axamit sasha.jpg',
    'axamit nastua.jpg',   
    'axamit sfera.jpg',
    'axamit vupuscnoy.jpg']);
  return (
    <div className={classes.carousel}>
     
        <Carousel  images={images} />
    </div>
  );
};

export default Photos;


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


function getSliderImagesArray(imgNamesArray=[]){
  return imgNamesArray.map((name)=>({"src":images[name].default,sizes: ' 100px',}))
}
