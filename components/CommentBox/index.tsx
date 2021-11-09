import React, { FC, useCallback, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,InputGroup, InputGroupAddon, InputGroupText, Input, Alert } from 'reactstrap';
import "./styles.css"

interface Props{
    modalSave: (name: string , nickName: string, text: string, thumbnail?: string, profile?: string) => void;
}

const CommentBox:FC<Props> = ({modalSave}) =>{
    const [commentValue, setCommentValue] = useState('');
    const [modal, setModal] = useState(false);
    const [userName, setUserName] = useState('');      
    const [nickName, setNickName] = useState('');      
    const [alert, setAlert] = useState(false);
    const toogleAlert = () => {    
        setAlert(!alert);
        setTimeout(() => {
            setAlert(false);
        }, 1500);
    }
    const toggle = () => {    
        setModal(!modal);
    }
    const onSubmit = (e:any) =>{
        e.preventDefault();        
        toggle();        
    }
    const onChangeComment = (e:any) =>{
        setCommentValue(e.currentTarget.value);
    }

    const onClickSave = () =>{
        if(userName===''){
            return toogleAlert();
        }
        modalSave(userName,nickName,commentValue);
        toggle();
        setCommentValue(''); //reset commentBox
        setUserName('');
        setNickName('');
    }

    const onClickKaKao = useCallback( async() => {                   
        await window.Kakao.Auth.login({          
          success: async (res:any)=>{             
            await window.Kakao.API.request({
                url: '/v2/user/me',
                success: function(res:any) {                                      
                  modalSave(res.properties.nickname,nickName,commentValue,res.properties.thumbnail_image,res.properties.profile_image);
                  toggle();
                  setCommentValue(''); 
                  setUserName('');
                  setNickName('');                  
                },
                fail: function(error:any) {
                  console.error(error)
                }
              })
          },
          fail :  (e:any)=>{      
            console.log(e);
          },          
        });
      }, [commentValue,modal]);
    
    return (
        <div>
        <form style={{display: 'flex'}} onSubmit={onSubmit}>
            <textarea
            className="genie-comment-box"
            value={commentValue}
            onChange={onChangeComment}
            placeholder="Write Commments"
            />
            <br />
            <button className="genie-button">Sumbit</button>
        </form>
        <Modal isOpen={modal} toggle={toggle}>            
            <ModalHeader className="modal-header">댓글을 남겨주셔서 감사합니다<br/>별명은 이름을 대체해서 보여집니다.</ModalHeader>            
            <ModalBody>
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input id="fullName" placeholder="이름" onChange={(e:any) => {setUserName(e.target.value);}} required/>
            </InputGroup>
            <br />
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>#</InputGroupText>
            </InputGroupAddon>
            <Input id="nickName" placeholder="별명" onChange={(e:any) => {setNickName(e.target.value);}}/>
            </InputGroup>              
            </ModalBody>
            <ModalFooter>
            <Button color="warning" onClick={onClickKaKao}>카카오로그인</Button>
            <Button color="primary" onClick={onClickSave}>Save</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        <Modal isOpen={alert} toggle={toogleAlert} color="primary">
            {/* <Alert color="primary">이름은 필수로 입력해 주세요!!</Alert> */}
            <div className="genie-alert">
                이름은 필수로 입력해 주세요!!<br/>                
                별명은 이름을 대체해서 보여집니다.
            </div>
        </Modal>        
    </div>
    )
}

export default CommentBox;