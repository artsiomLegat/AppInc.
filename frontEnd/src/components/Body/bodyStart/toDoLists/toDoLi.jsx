import React,{useRef} from 'react';
import BodyStartModule from '../bodyStart.module.scss';
import Imagick from '../../../../images/tick.png'
export const ToDoLi = ()=>{
    let getDragElem = useRef(null);
    let getEditElem = useRef(null);
    // when mouse over on taskContainer add New Ability's for component
    let MouseEvent = ()=>{
      if(getDragElem.current.style.visibility != 'visible'){
        getDragElem.current.style.visibility = 'visible';
        getEditElem.current.style.visibility = 'visible';
  
      } else {
          if(getDragElem.current.style.visibility === 'visible'){
            getDragElem.current.style.visibility = 'hidden';
            getEditElem.current.style.visibility = 'hidden';
          }
      }
    }
  
       
    return (
        <div onMouseLeave={MouseEvent} onMouseEnter={MouseEvent} className={BodyStartModule.mainTaskContainer}>
         <div className={BodyStartModule.dragNdrop}>
               <div ref={getDragElem} className={BodyStartModule.dragDropElem}>

               </div>
               <div  className={BodyStartModule.d_grid}>
                
               </div> 
         </div>
       <div className={BodyStartModule.withBorder}>
        <div  className={BodyStartModule.taskContainer}>
         <div className={BodyStartModule.completedTaskAndMoveTask}>
            <div className={BodyStartModule.d_grid}>
              <div className={BodyStartModule.completedTasks}>

              </div>
            </div>
         </div>
         <div className={BodyStartModule.d_grid}>
        
            <div className={BodyStartModule.taskText}>
            Выписать все быть раз два два  Выписать все быть раз два два
            Выписать все быть раз два два Выписать все быть раз два два
            Выписать все быть раз два два
            </div>
            {/* <div className={BodyStartModule.commentImages}>
                comment-Images
            </div> */}
            <div className={BodyStartModule.taskDate}>
                Дата:{`${new Date().getDate()},${new Date().getMonth()},${new Date().getHours()}`}
             </div>
            </div>
            <div ref={getEditElem}  className={BodyStartModule.correctTaskElementContainer}>
              <div className={BodyStartModule.correctTaskElementWrapper}>
                <div  className={BodyStartModule.correctTaskElementEdit}>
                 
                </div>
              </div>
              <div className={BodyStartModule.correctTaskElementWrapper}>
                <div  className={BodyStartModule.correctTaskElementContainerTerm}>
                 
                </div>
              </div>  
              <div className={BodyStartModule.correctTaskElementWrapper}>
                <div  className={BodyStartModule.correctTaskElementComment}>
                 
                </div>
              </div>
              <div className={BodyStartModule.correctTaskElementWrapper}>
                <div  className={BodyStartModule.correctTaskElementMainEdit}>
                
                </div>
             </div> 
            </div>
           </div>
          </div>  
        </div>
    );
}