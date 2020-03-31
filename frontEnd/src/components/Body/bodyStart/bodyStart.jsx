import React from 'react';
import BodyStartModule from './bodyStart.module.scss';

export const BodyStart = () => {
    return (
     <div className={BodyStartModule.bodyContainer}>
            <div className={BodyStartModule.offersLinks}>
                <div>
                    Для дома
                </div>
                <div>
                    Авто и мото
                </div>
                <div>
                   Техника
                </div>
                <div>
                    Для дома
                </div>
                <div>
                    Авто и мото
                </div>
                <div>
                   Техника
                </div>
            </div>
            <div className={BodyStartModule.commentsContainer}>
                <div className={BodyStartModule.commentsContainerTitle}>
                commentns about this offer
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
     </div>
    )
}