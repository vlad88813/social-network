import React, { useEffect, useState } from 'react';
import styles from './Paginator_Style.module.css';
import cn from 'classnames';

let Paginator = (props) => {
    let portionSize = 10
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    
    let pages = [];
  
    for (let i=1; i <= Math.ceil(pageCount); i++){
        pages.push(i);
    }


    let portionCount = Math.ceil(pageCount / portionSize);
  
    let [portionNumber,setPortionNumber] = useState(1);
    useEffect(()=>setPortionNumber(Math.ceil(props.currentPage/portionSize)), [props.currentPage]);  // при уходе со страницы юзеров на другую и при повторном возвращении на неё, пагинация подгоняется под текущую страницу юзеров, которая записана в userReducer
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize; 

    return <div>
    {portionNumber > 1 &&
    <button onClick={()=> {setPortionNumber(portionNumber-1) }}> Previous </button>}
    {pages
    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map((p) => {
        return  <span className= {cn ({
            [styles.selectedPage]: props.currentPage === p
        }, styles.pageNumber)}
        key={p}
        onClick={(e)=>{
            props.onPageChanged(p);
        }}>{p}</span> 
    })}
    
{portionCount > portionNumber && 
<button onClick={()=>{setPortionNumber(portionNumber+1)}}> Next </button>}
</div>
}

export default Paginator;