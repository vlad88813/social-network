import React from 'react';
import s from './loader_2.module.css';


const Loader_2 = () => {
    
return <div className={s.l}>
    <div className={s.loader_items}>
    <span className={s.loader_item}></span>
    <span className={s.loader_item}></span>
    <span className={s.loader_item}></span>
    </div>
    <p className={s.loading}>loading</p>
</div>

}

export default Loader_2;