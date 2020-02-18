import React from 'react';
import headerScss from './headerStyle.scss';
import {BodyContainer} from '../Body/body';

export const Header: React.FC = ()=>{
    return(
        <>
        <div className={headerScss.headerContainer}>
          {/* <Link text={'Все фильмы'} route={}/>
          <Link text={'Отзывы'}route={}/>
          <Link text={'Добавить отзыв'}route={}/> */}
          <a href="/">Все фильм</a>
          <a href="/">Отзывы</a>
         {/* {props.registration? <a href="/">Добавить отзыв</a>:null}  */}
          <a href="/">Добавить отзыв</a>
        </div>
        <BodyContainer/>
        </>
    )
}

