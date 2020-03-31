import React,{useState} from 'react';
import HeaderStyle from './headerStart.module.scss'
import 'normalize.css';

export const Header = ()=>{
  let [offer,onchangeOffer] = useState('');
    return(
      <div className={HeaderStyle.headerContainer}>
         <div>
           Some logo
         </div>
         <div>
           Поиск отзывов
           <input value={offer} onChange={(elem)=>{onchangeOffer(elem.target.value.toString());console.log(offer)}}  placeholder={'Ведите название товара'} />
         </div>
      </div>
    )
};

