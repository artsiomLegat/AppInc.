import React from 'react';
import BodyStartModule from '../bodyStart.module.scss';
import {ToDoLi} from '../toDoLists/toDoLi.jsx';

export const ToDoListComponent = ()=>{
    return (
        <div className={BodyStartModule.toDoContainer}>
        <div className={BodyStartModule.toDoContainerHeaderTitle}>
        <div>
            За всё время
        </div>
        <div>
           Сортировка по: <select>
                      <option>Убыванию</option>
                      <option>Возрастанию</option>
                      <option>По важвности'Хотел только это оставить'</option>
                     </select>
         </div>
        </div>
       <ToDoLi />
       <ToDoLi />
       <ToDoLi />
    </div>
    );
}