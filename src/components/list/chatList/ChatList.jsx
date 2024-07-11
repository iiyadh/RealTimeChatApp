import AddUser from "./addUser/AddUser";
import "./chatList.css"
import {useEffect, useState,useContext} from 'react';
import { ContextU } from "../../../context/UserContext";
import { doc, onSnapshot,getDoc } from "firebase/firestore";
import {db} from "../../../lib/firebase";

function ChatList(){
    const [chats,setChats] = useState([]);
    const [addMode,setAddMode] = useState(false);
    const {userData} = useContext(ContextU);
    useEffect(()=>{
        const unSub = onSnapshot(doc(db,"userchats",userData.id),async(res)=>{
            const items = res.data().chats;
            const allItems = items.map(async(item)=>{
                let user = await getDoc(doc(db,"users",item.receiverId));
                user = user.data();
                return {...item,user};
            });
            const chatData = await Promise.all(allItems);
            setChats(chatData.sort((a,b)=>{b.updatedAt-a.updatedAt}));
        })
        return () =>{
            unSub();
        };
    },[userData.id]);
    const handleSelect = ()=>{
        
    }
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={addMode ? "./minus.png":"./plus.png"} onClick={()=>setAddMode(!addMode)} alt="" className="add"/>
            </div>
            {chats.map((chats)=>{
                return (
                    <div className="item" key={chats.chatId} onClick={handleSelect}>
                        <img src={chats.user.avatar || "./avatar.png"} alt="" />
                        <div className="texts">
                            <span>{chats.user.username}</span>
                            <p>{chats.lastMessage}</p>
                        </div>
                    </div>
                )
            })}
            {addMode && <AddUser/>}
        </div>
    )
}
export default ChatList;