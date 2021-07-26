import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Insta } from "../Images/icons/instagram.svg";
import { ReactComponent as Youtube  } from "../Images/icons/youtube.svg";
import { ReactComponent as Facebook  } from "../Images/icons/facebook.svg";
import { ReactComponent as Itunes  } from "../Images/icons/itunes.svg";
import { ReactComponent as Spotify  } from "../Images/icons/spotify-logo-fill.svg";
import { ReactComponent as Tiktok  } from "../Images/icons/tiktok.svg";
import { ReactComponent as Vk  } from "../Images/icons/vk-with-circle.svg";
import { ReactComponent as YandexMusic  } from "../Images/icons/yandex-music2.svg";



export function InstaIcon(props) {
    return (
      <SvgIcon {...props}>
        <Insta/>
      </SvgIcon>
    );
  }

export function YoutubeIcon(props){
  return(
    <SvgIcon {...props}>
      <Youtube/>
   </SvgIcon>
  );
}
 

export function FacebookIcon(props){
  return(
    <SvgIcon {...props}>
      <Facebook/>
    </SvgIcon>
  );
}

export function ItunesIcon(props){
  return(
    <SvgIcon {...props}>
     <Itunes/>
    </SvgIcon>
  );
}

export function SpotifyIcon(props){
  return(
    <SvgIcon {...props}>
      <Spotify/>
    </SvgIcon>
  );
}

export function TiktokIcon(props){
  return(
    <SvgIcon {...props}>
      <Tiktok/>
    </SvgIcon>
  );
}

export function VkIcon(props){
  return(
    <SvgIcon {...props}>
     <Vk/>
    </SvgIcon>
  );
}

export function YandexMusicIcon(props){
  return(
    <SvgIcon {...props}>
      <YandexMusic/>
    </SvgIcon>
  );
}