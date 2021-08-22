import React from 'react';
import Loader_3 from '../loader/loader_3';
// import Setings_style from'./setings.module.css'
import styled from 'styled-components';
import Title from './Title';
import Console from './Console';
import Button from './Button';

const SettingsWrapper = styled.div`
width: 100%;
min-height: 88vh;
padding: 2rem;
background: BurlyWood;
font-size: 13px;
display: flex;
flex-direction: column;
`


const Setings = (props) => {
    // throw new Error('произошла ошибка');
    //строка выше нужна для того чтобы проверить работу предохранителя ErrorBoundary
 return (
     <SettingsWrapper>
        <Title color={'red'}>
            Hello my friend
        </Title>
        <Console/>
        <Button primary color={'red'} background={'blue'} align='end'> Отправить </Button>
    </SettingsWrapper>
 )
}

export default Setings;