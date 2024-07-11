import { useContext, useState } from "react";
import "./addUser.css";
import { collection, query, where,getDocs, setDoc, serverTimestamp,doc, updateDoc, arrayUnion } from "firebase/firestore";
import {db} from "../../../../lib/firebase";

import {ContextU} from "../../../../context/UserContext";

function AddUser(){
    const [user,setUser] = useState(null);
    const {userData,setUserData} = useContext(ContextU);
    const handleSearch = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        try{
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapShot = await getDocs(q);
            if(!querySnapShot.empty){
                setUser(querySnapShot.docs[0].data());
            }
        }catch(err){
            console.log(err.message);
        }
    }
    const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userChatRef = collection(db, "userchats");
        try {
            const newChatRef = doc(chatRef);
            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            });

            await updateDoc(doc(userChatRef,user.id),{
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId:userData.id,
                    updatedAt:Date.now(),
                })
            });
            await updateDoc(doc(userChatRef,userData.id),{
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId:user.id,
                    updatedAt:Date.now(),
                })
            });
            console.log(newChatRef.id);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="addUser">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Username" name="username" />
                <button type="submit">Search</button>
            </form>
            {user && (
                <div className="user">
                <div className="detail">
                    <img src={user.avatar || "./avatar.png"} alt="" />
                    <span>{user.username}</span>
                </div>
                <button onClick={handleAdd}>Add User</button>
            </div>)}
        </div>
    )
}
export default AddUser;