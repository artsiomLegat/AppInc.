
import './styled/style.scss'; //Попробовать убрать style.scss , т.к у app.jsx он же подключен
import {Header} from './components/Header/header.jsx';
import {BodyStart} from './components/Body/bodyStart/bodyStart.jsx';
import React from "react";
import {Footer} from '../src/components/Footer/footer.jsx';



export const App = ()=>(
    <>
        <Header/>
        <BodyStart/>
        <Footer />

  </>
);

