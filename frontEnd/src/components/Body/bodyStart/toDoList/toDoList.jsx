import React from 'react';
import BodyStartModule from '../bodyStart.module.scss';
export const ToDoList = ()=>{
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
                      <option>По важности'Хотел только это оставить'</option>
                     </select>
         </div>
        </div>
        <div className={BodyStartModule.comment}>
          <div className={BodyStartModule.commentHeader}>
            <div className={BodyStartModule.commentDate}>
                date
             </div>
            <div className={BodyStartModule.commentUser}>
                user
            </div>
          </div>
            <div className={BodyStartModule.commentText}>
                comment
            </div>
            <div className={BodyStartModule.commentImages}>
                comment-Images
            </div>
        </div>
    </div>
    );
}