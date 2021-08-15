import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Loader from '../loader/loader_1';
import Loader_2 from '../loader/Loader_2';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(0), //отступ от верхнего края, loader_2 его не мог закрасить. "/br не срабатывает перед компонентой" 
      paddingBottom: theme.spacing(4), //отступ от нижнего края, loader_2 его закрашивает
      // ключи важно какие, брал из справочник css
    },
  },
}));

export default function PaginationMaterialUI(props) {
  const classes = useStyles();

    let pageCount = Math.ceil(props.totalCount / props.pageSize)
  

    return (
    <div className={classes.root}>
      

      <Pagination
      siblingCount={2}
      count={pageCount} 
      onChange={(e,pageNum)=>{props.onPageChanged(pageNum)}} // запросит у сервера пользователей по страничке
      shape="rounded" 
      color='primary' 
      page={props.currentPage}  // отобразит жирным выбранную сейчас страничку
      disabled={props.isFetching}
      />
      
      {/* {props.isFetching ? <Loader_2/> : null} */}
    
    </div>
    )
    
}


