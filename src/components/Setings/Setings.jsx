import React from 'react';
import Loader_3 from '../loader/loader_3';
import Setings_style from'./setings.module.css'


const Setings = (props) => {
 return (
     <div className={Setings_style.text}>
        Settings
        <Loader_3/>
    </div>
 )
}

export default Setings;