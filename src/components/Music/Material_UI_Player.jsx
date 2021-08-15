import { createMuiTheme,ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import style from './player.module.css';


// const muiTheme = createMuiTheme({});

const src = [
  'https://s4.я.wiki/11/56168_4cbc5ef939578785fcd4eec887795d78.mp3',
  'https://download.я.wiki/listen_-2001680416_78680416_1_35b6f2fa47224281e50a7088e758e922/Hiromitsu%20Agatsuma%2C%20Chen%20Min%2C%20Akira%20Senju-Furinkazan%20-Tsuki%20Sayu%20Yoru-.mp3',
];




export default function AudioPlayer_Material() {
return ( <div className= {style.position}>
<ThemeProvider >
    
  <AudioPlayer
    elevation={1}
    width="600px"
    margintop='200px'
    variation="default"
    spacing={3}
    download={false}
    autoplay={false}
    order="standart"
    preload="auto"
    loop={true}
    src={src}
  />
</ThemeProvider>
</div>
)
}





