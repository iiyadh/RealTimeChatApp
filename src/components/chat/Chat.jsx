import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useEffect, useState,useRef} from "react"
import {doc,onSnapshot} from "firebase/firestore"
import {db} from "../../lib/firebase"
function Chat(){
    const [open,setOpen] = useState(false);
    const [chat,setChat] = useState();
    const [inputField,setInputField] = useState('');
    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior: "smooth"});
    },[]);

    useEffect(()=>{
        const unSub = onSnapshot(doc(db,"chats","S5p2qkKaaD9oA0bzGlVl"),(res)=>{
            setChat(res.data());
        })
        return () =>{unSub()}
    },[]);
    const handleEmojiClick = (e)=>{
        setInputField(inputField+e.emoji);
    }
    return(
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet </p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_srQHWm05VKnAtAmIq0voNJFefq473KcyOp6YJxMzDvs53-AMjbYpsr2AmI4UdDoxIsMfatN3OX_cYTFpReobX92z6iEnN34erwDk_Q9xf6cdZALrA2sZuRk9KCDwg=s0-d"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi ratione hic doloremque maiores maxime aperiam minus dolores reiciendis aut! Aliquam debitis perferendis id quaerat totam quod repellat eaque et.</p>
                         <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message ..." value={inputField} onChange={(e)=>setInputField(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen(!open)}/>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={(e)=>handleEmojiClick(e)}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}
export default Chat;