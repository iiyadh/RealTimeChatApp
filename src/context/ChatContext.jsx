import { createContext, useState ,useContext} from "react";
import {ContextU} from './UserContext'

export const ContextC = createContext(null);
function ChatContext(props){
    const {userData,setUserData} = useContext(ContextU);
    const currentUser = userData;
    const receiver = userData.chatInfo.user;
    const [chatInfo,setChatInfo] = useState({
        chatId:null,
        user:null,
        isCurrentUserBlocked:false,
        isReceiverBlocked:false,
    });
    const ContextValue = {chatInfo,setChatInfo};

    const ChangeChat = (chatId,user)=>{
        if(user.blocked.includes(currentUser.id)){
            setChatInfo({
                chatId:chatId,
                user:user,
                isCurrentUserBlocked:true,
                isReceiverBlocked:false,
            })
        }
        if(currentUser.blocked.includes(receiver.id)){
            setChatInfo({
                chatId:chatId,
                user:user,
                isCurrentUserBlocked:false,
                isReceiverBlocked:true,
            })
        }
    }

    const ChangeBlock = ()=>{
        if(chatInfo.isCurrentUserBlocked){
            setChatInfo({
                chatId:chatInfo.chatId,
                user:chatInfo.user,
                isCurrentUserBlocked:false,
                isReceiverBlocked:false,
                })
        }
    
    }
    return(
        <ContextC.Provider value={ContextValue}>
            {props.children}
        </ContextC.Provider>
    )
}

export default ChatContext;