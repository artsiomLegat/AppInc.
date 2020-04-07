import React from 'react';
import BodyStartModule from './bodyStart.module.scss';
import {ToDoList} from './toDoList/toDoList.jsx';

export const BodyStart = () => {
    return (
     <div className={BodyStartModule.bodyContainer}>
            <div className={BodyStartModule.offersLinks}>
                <div>
                   Задания за всё время
                   {/* 'сделать разбивку типо
                    Вместо За всё время,
                    сделать недавно , за последнюю неделю, 
                    за последний месяц . И дальше пошло
                   ' */}
                </div>
                <div>
                    Задания за сегодня
                    'Сегодня'
                </div>
                <div>
                    На следующие 7 дней
                </div>
                <div>
                   Приоритеты
                </div>
                <div>
                    Авто и мото
                </div>
                <div>
                   Техника
                </div>
            </div>
           <ToDoList />
     </div>
    )
}