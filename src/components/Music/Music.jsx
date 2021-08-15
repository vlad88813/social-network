import React from 'react';
import AudioPlayer_Material from './Material_UI_Player.jsx';
import Music_style from'./music.module.css'


const Music = (props) => {
 return (<div>
     <div className={Music_style.text}>
       Music
    </div>
    <br/>
    <div>
       <AudioPlayer_Material/>
   </div>
    </div>
 )
}

export default Music;