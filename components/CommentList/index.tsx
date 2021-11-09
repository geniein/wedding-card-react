import React, { FC, useState } from 'react';
import gravatar from 'gravatar';
import dayjs from 'dayjs'
import './styles.css';

interface Props{
    key: number;
    text: string;
    name: string;
    nickName: string;    
    createdAt: Date;
    thumbnailImage: string;
    profileImage: string;
}

const CommentList:FC<Props>= ({name,nickName,text, createdAt, thumbnailImage, profileImage}) =>{
    const comment = text;

    const [toogleReply, setToogleReply] = useState(false);
    const onClickReply = () =>{
        setToogleReply(!toogleReply);
    }
    const actions = [
        <span onClick={onClickReply} key="comment-basic-reply-to">Reply to</span>
    ];

    return (
        <div>            
            <div className="genie-comment">
                <div className="genie-comment-inner">
                    <div className="genie-comment-avatar">
                        <a href={profileImage}>
                        <img className="genie-comment-avatar" src={thumbnailImage !== undefined ? thumbnailImage : gravatar.url(nickName? nickName : name, { s: '40px', d: 'retro' })} />
                        </a>
                    </div>
                    <div className="genie-comment-content">
                        <div className="genie-comment-content-author">
                            {nickName? nickName : name}
                            <div className="genie-comment-content-time">
                                <span>{dayjs(createdAt).format('YYYY-MM-DD')}</span>
                            </div>
                        </div>
                        
                        <div className="genie-comment-content-detail">
                            <p> {comment}</p>
                        </div>
                        {/* <ul className="genie-comment-actions">
                            {actions}
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentList;