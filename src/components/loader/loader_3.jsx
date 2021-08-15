import React from 'react';
import style from './loader_3.module.css';


const Loader_3 = () => {
    
return <div className= {style.middle}>
  <div className={`${style.bar} ${style.bar1}`}></div>
  <div className={`${style.bar} ${style.bar2}`}></div>
  <div className={`${style.bar} ${style.bar3}`}></div>
  <div className={`${style.bar} ${style.bar4}`}></div>
  <div className={`${style.bar} ${style.bar5}`}></div>
  <div className={`${style.bar} ${style.bar6}`}></div>
  <div className={`${style.bar} ${style.bar7}`}></div>
  <div className={`${style.bar} ${style.bar8}`}></div>
  <div className= {style.loading_String}>Loading</div>
</div>
}

export default Loader_3;

