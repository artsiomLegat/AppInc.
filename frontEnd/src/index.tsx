import './styled/style.scss';
import {Header} from './components/Header/header';

import React from "react";

// import Logo from '../../images/phot.png';
// import Logo from '../images/phot.png';
import ReactDOM from 'react-dom';

const ImageTool: React.FC = ()=>(
    <div className={'AppContainer'}>
        <Header/>
    </div>
// <div><h1>Hiworld</h1></div>
);
ReactDOM.render(<ImageTool/>,document.getElementsByClassName('App')[0]);
{/* <img alt={"someLogo"} src={Logo} /> */}