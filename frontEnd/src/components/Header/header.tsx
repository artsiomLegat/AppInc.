import React from 'react';
import './headerStyle.scss';


export const Header: React.FC = ()=>{
    return(
        <>
        <div className={"headerContainer"}>
          <a href="/">Onew</a>
          <a href="/">Two</a>
          <a href="/">О The</a>
        </div>
        </>
    )
}

