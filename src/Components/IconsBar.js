import React, {useState,useEffect}from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import * as Icons from './Icons';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';



const useStyles = makeStyles((theme) => ({
  toolbarNav:{
    justifyContent:'center',
  },

  bottomIconDivDesktop:{
   // paddingTop:window.innerHeight-70,
   //marginTop: "-1%",
    //height:'70px',
    backgroundColor: 'rgba(51, 51, 51, 0)',
  },

  bottomIconDivMobil:{
    //marginTop:"-20%",
    //height:'70px',
    backgroundColor: 'rgba(51, 51, 51, 0)',
  },
 
  largeIcon: {
    width: 40,
    height: 40,
  },
}));

export default function IconsBar() {
  const classes = useStyles();
  const [iconBarMinimizeFlag,setIconBarMinimizeFlag] = useState(0);

  useEffect(()=>{
    setIconBarMinimizeFlag(document.getElementsByTagName('body')[0].offsetWidth<856);
    window.addEventListener('resize', event => {
      setIconBarMinimizeFlag(document.getElementsByTagName('body')[0].offsetWidth<856);

    }, false);
  });

  return (
   
      <div className={iconBarMinimizeFlag? classes.bottomIconDivMobil : classes.bottomIconDivDesktop}>
      <div hidden={!iconBarMinimizeFlag}>
      <Toolbar className={classes.toolbarNav}> 
        <Tooltip title="Spotify" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://open.spotify.com/artist/6HFVhZ91sPwiKtKyQumZAE">
            <Icons.SpotifyIcon className={classes.largeIcon} color="secondary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Youtube" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://www.youtube.com/channel/UCRAW1Ro-Zw7u4x-PwVMvPow">
            <Icons.YoutubeIcon className={classes.largeIcon} color="secondary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Yandex Music" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://music.yandex.ru/artist/6509151">
            <Icons.YandexMusicIcon className={classes.largeIcon} color="secondary"/>
          </IconButton>
        </Tooltip>
       
      </Toolbar>
      </div>
      <Toolbar className={classes.toolbarNav}> 
        <Tooltip title="Tiktok" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://www.tiktok.com/@axamitband">
            <Icons.TiktokIcon className={classes.largeIcon} color="secondary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagramm" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://www.instagram.com/axamitband">
            <Icons.InstaIcon className={classes.largeIcon} color="secondary" />
          </IconButton>
        </Tooltip>
        <div hidden={iconBarMinimizeFlag}>
        <Tooltip title="Spotify" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://open.spotify.com/artist/6HFVhZ91sPwiKtKyQumZAE">
            <Icons.SpotifyIcon className={classes.largeIcon} color="secondary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Youtube" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://www.youtube.com/channel/UCRAW1Ro-Zw7u4x-PwVMvPow">
            <Icons.YoutubeIcon className={classes.largeIcon} color="secondary" />
         </IconButton>
        </Tooltip>
        <Tooltip title="Yandex Music" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://music.yandex.ru/artist/6509151">
            <Icons.YandexMusicIcon className={classes.largeIcon} color="secondary"/>
          </IconButton>
        </Tooltip>
        </div>
        <Tooltip title="VK" TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://vk.com/axamitband">
            <Icons.VkIcon className={classes.largeIcon} color="secondary"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Facebook"  TransitionComponent={Zoom} arrow >
          <IconButton target="_blank" href="https://www.facebook.com/axamitband">
            <Icons.FacebookIcon className={classes.largeIcon} color="secondary" />
          </IconButton>
        </Tooltip>
      </Toolbar>
      </div>

     
  );
}