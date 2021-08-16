import React from 'react';
import Loader_3 from '../loader/loader_3';
import Setings_style from'./setings.module.css'


const Setings = (props) => {
    // throw new Error('произошла ошибка');
    //строка выше нужна для того чтобы проверить работу предохранителя ErrorBoundary
 return (
     <div className={Setings_style.text}>
        Settings
        <Loader_3/>
    </div>
 )
}

export default Setings;