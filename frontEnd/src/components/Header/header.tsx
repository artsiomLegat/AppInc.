import React from 'react';
import headerScss from './headerStyle.scss';


export const Header: React.FC = ()=>{
    return(
        <>
        <div className={headerScss.headerContainer}>
          <a href="/">Onew</a>
          <a href="/">Two</a>
          <a href="/">О The</a>
          <a href="/">This</a>
        </div>
        </>
    )
}

