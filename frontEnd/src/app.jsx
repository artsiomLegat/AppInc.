import './styled/style.scss';
import {Header} from './components/Header/header';
import {Index} from './index';
import ReactDOM from "react-dom";


ReactDOM.render(
    <div className={'App'}>
      <Index/>
    </div>
,document.getElementsByClassName('App')[0]);