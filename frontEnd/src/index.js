import './styled/style.sass';
import React from 'react';
import Logo from './images/phot.png'
import ReactDOM from 'react-dom';
window.addEventListener('load',(e)=>{console.log('Site is load')});
const ImageTool = ()=>(
    <div>
    <img alt={'soImg'} src={Logo}/>
    <h1>HHEsesSEHhh</h1>
    </div>
// <div><h1>Hiworld</h1></div>
);
ReactDOM.render(<ImageTool/>,document.getElementsByClassName('App')[0]);