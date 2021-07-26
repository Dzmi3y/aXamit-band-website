import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import  aXamit_band_press_release from '../Docs/aXamit_band_press_release.pdf'


const useStyle = makeStyles((theme) => ({
    card:{
        maxWidth:"700px",
        fontSize:"20px"
    }
}));

const PressRelease=()=>{
    const classes=useStyle();
    return(
        <Card className={classes.card}>
            <CardContent>
                <p>
                <b>aXamit</b> - молодой музыкальный коллектив
                играющий энергично-романтичный поп-панк. В
                группе нет профессиональных музыкантов, но их
                творчество уже крутят на радио. Песни написаны
                на русском, английском и белорусском языках.
                aXamit большие любители сделать кавер на
                популярную песню, но исполнить её на
                белорусском языке, например как песня Ольги
                Бузовой “Мало половин” - “Мала палоў”.
                </p>
                <p>
                Минск-арена, Лужники, Олимпийский - эти площадки группа планирует
                собрать в ближайшие годы. А пока они успели выступить на не менее
                известных площадках города Жодино:<br/>
                ● Фестиваль “Молодёжная жара”<br/>
                ● Экологический фэст “Эко фонарик”<br/>
                ● Концерт в честь дня рождения телеканала “Сфера”<br/>
                ● “Summer fest” - уличный концерт под открытым небом<br/>
                ● “Рок за свободу”<br/>
                </p>
                <p>
                Сейчас группа находится в активной стадии репетиций, но уже имеет в
                загашнике регулярные ротации на радио «Сталiца».
                </p>
                <p>

                    <a target="_blank" href="https://music.yandex.ru/artist/6509151">Yandex music</a>
                    <br />   
                    <a target="_blank" href="https://music.apple.com/by/artist/axamit/1448660012">Apple music</a>
                    <br />  
                    <a target="_blank" href="https://open.spotify.com/artist/6HFVhZ91sPwiKtKyQumZAE">Spotify</a>
                    <br />  
                    <a target="_blank" href="https://www.youtube.com/channel/UCRAW1Ro-Zw7u4x-PwVMvPow">Youtube</a>
                    <br />  
                    <a target="_blank" href="https://www.instagram.com/axamitband/">Instagram</a>
                    <br />   
                    <a target="_blank" href="https://www.tiktok.com/@axamitband">Tiktok</a>
                    <br />  
                    <a target="_blank" href="https://www.facebook.com/axamitband">Facebook</a>
                    <br />
                    <a target="_blank" href="https://vk.com/axamitband">Vk</a>
                    
                </p>
            </CardContent>
            <CardActions >
        <Button size="small" color="primary"  href={aXamit_band_press_release} download='aXamit band press release.pdf'  ><h3><strong>Скачать в pdf</strong></h3></Button>
      </CardActions>
        </Card>
    )
};


export default PressRelease;