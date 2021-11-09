import CommentBox from '@components/CommentBox';
import CommentList from '@components/CommentList';
import useScrollFadeIn from '@hooks/useScrollFadeIn';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useState } from 'react';
import useSWR from 'swr';

const Comments = () =>{    
    const [commentValue, setCommentValue] = useState('');
    let { data: commentData, error, revalidate, mutate } = useSWR('https://wedding-geniein-default-rtdb.firebaseio.com/Comments.json', fetcher);  
    const animatedItem = useScrollFadeIn('up',1,0.1)

    const commentPost = async (fullName : string ,nickName: string, text : string, thumbnailImage?: string, profileImage?: string) =>{        
        await axios
        .post('https://wedding-geniein-default-rtdb.firebaseio.com/Comments.json',
          {
          fullName,
          createdAt: new Date(),
          text,
          nickName,
          thumbnailImage,
          profileImage,
          }).then(()=>{
            revalidate();
          });    
      }    

    if (commentData) {        
        let valList:any = [];
        Object.entries(commentData).map((val:any,idx)=>{
          val[1].id= val[0];
          valList.push(val[1]);
        });
        commentData = valList;
        commentData?.map((val:any, idx:number)=>{
          commentData? commentData[idx].createdAt  = new Date(commentData[idx].createdAt) : null;
        });
        commentData?.sort((a:any,b:any) => a.createdAt - b.createdAt );
      }; 

    return(
    <div className="app-comment" {...animatedItem}>
        <br />
        <p> Comments</p>
        <hr/>
        {commentData && commentData.map((val: any, idx: number)=>(
            <CommentList key={val.id} name={val.fullName} nickName={val.nickName} text={val.text} createdAt={val.createdAt} thumbnailImage={val.thumbnailImage} profileImage={val.profileImage}/>
        ))}
        <CommentBox modalSave={commentPost}/>        
    </div>
)
}

export default Comments;