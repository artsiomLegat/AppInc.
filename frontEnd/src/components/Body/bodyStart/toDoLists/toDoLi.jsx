import React from 'react';
import BodyStartModule from '../bodyStart.module.scss';
import Imagick from '../../../../images/tick.png'
export const ToDoLi = ()=>{
    // when mouse over on taskContainer add New Ability's for component
    // const addMouseOver = (elem)=>{
    //    let getMoveAbolity =  elem.
    // };
    return (
        <div className={BodyStartModule.mainTaskContainer}>
        <div className={BodyStartModule.dragNdrop}>
               <div  className={BodyStartModule.dragDropElem}>
                
               </div>
               <div  className={BodyStartModule.d_grid}>
                
               </div> 
            </div>
        <div  className={BodyStartModule.taskContainer}>
         <div className={BodyStartModule.completedTaskAndMoveTask}>
            <div className={BodyStartModule.d_grid}>
              <div className={BodyStartModule.completedTasks}>

              </div>
            </div>
         </div>
         <div className={BodyStartModule.d_grid}>
        
            <div className={BodyStartModule.taskText}>
            Выписать все принципы solid и как они используются ,
             типо свойства класса нельзя изменять или переопределять, 
            а должны быть  приватные свойства в самом верху, и их уже изменять 
            из параметров которые приходят в  класс . 
            А далее в инстанс определить
            </div>
            {/* <div className={BodyStartModule.commentImages}>
                comment-Images
            </div> */}
            <div className={BodyStartModule.taskDate}>
                Дата:{`${new Date().getDate()},${new Date().getMonth()},${new Date().getHours()}`}
             </div>
            </div>
            <div className={BodyStartModule.correctTaskElementContainer}>
                <div  className={BodyStartModule.correctTaskElementEdit}>
                 
                </div>
                <div  className={BodyStartModule.correctTaskElementContainerTerm}>
                 
                </div>
                <div  className={BodyStartModule.correctTaskElementComment}>
                 
                </div>
                <div  className={BodyStartModule.correctTaskElementMainEdit}>
                
                </div>
            </div>
        </div>
        </div>
    );
}