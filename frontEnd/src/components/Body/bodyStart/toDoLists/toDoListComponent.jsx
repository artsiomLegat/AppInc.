import React from 'react';
import BodyStartModule from '../bodyStart.module.scss';
import {TodayToDoList} from '../toDoLists/todayToDoList.jsx';

export const ToDoListComponent = ()=>{
    return (
    <div className={BodyStartModule.toDoContainer}>
       <TodayToDoList createTime={'Сегодня'} />
       <TodayToDoList createTime={'Истек срок выполнения'} />
       <div  className={BodyStartModule.addTaskSection}>
              <div  className={BodyStartModule.buttonPlus}>
                  <div className={BodyStartModule.buttonElemHorizontal}>
                    
                  </div>
                 <div className={BodyStartModule.buttonElemVertical}>
                    
                 </div>
              </div>
              <div  className={BodyStartModule.buttonText}>
                 Добавить задачу 
             </div>
       </div>
    </div>
    );
}