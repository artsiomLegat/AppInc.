import React,{useRef} from 'react';
import BodyStartModule from '../bodyStart.module.scss';
import { ToDoLi } from './toDoLi.jsx';

export const TodayToDoList = ({createTime})=>{
    
    return (
        <div className={BodyStartModule.sectionToday}>
            <div className={BodyStartModule.sectionHeader}>
                {createTime}
                <div className={BodyStartModule.sectionSort}>
                 Сортировка по:
                     <select>
                      <option>Убыванию</option>
                      <option>Возрастанию</option>
                      <option>По важвности'Хотел только это оставить'</option>
                     </select>
                </div>
            </div>
            <div className={BodyStartModule.sectionSubHeader}>
                {createTime}
            </div>
            <ToDoLi/>
            <ToDoLi/>
            <ToDoLi/>
        </div>
    );
}