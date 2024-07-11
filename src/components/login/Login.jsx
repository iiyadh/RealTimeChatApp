import { toast } from "react-toastify";
import "./login.css"
import {useState} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {auth,db} from '../../lib/firebase';
import { setDoc,doc } from "firebase/firestore";
import upload from "../../lib/upload";

function Login(){
    
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })
    const [loading,setLoding] = useState(false);

    const handleAvatar = (e)=>{
        if(e.target.files[0]){
            setAvatar({
                file : e.target.files[0],
                url : URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const [signup,setSignup] = useState({
        username:"",
        email : "",
        password : "",
    });
    console.log(signup);
    console.log(avatar);
    const [signin,setSignin] = useState({
        email : "",
        password : "",
    });

    const handleSubmit1 = async (e)=>{
        setLoding(true);
        e.preventDefault();
        try{
            const resp = await createUserWithEmailAndPassword(auth,signup.email,signup.password);
            const imgUrl = await upload(avatar.file);
            await setDoc(doc(db,"users",resp.user.uid),{
                username : signup.username,
                email : signup.email,
                avatar:imgUrl,
                id: resp.user.uid,
                blocked : []
            });
            await setDoc(doc(db,"userchats",resp.user.uid),{
                chats:[],
            });
            toast.success("SignUp Successufully , You can Login Now");
        }catch(err){
            toast.warn(err.message);
        }finally{
            setLoding(false);
        }
    }

    const handleSubmit2 = async (e)=>{
        setLoding(true);
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,signin.email,signin.password);
            toast.success("Signin Successufully");
        }catch(err){
            toast.warn(err.message);
        }finally{
            setLoding(false);
        }
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit2}>
                    <input type="text" placeholder="Email" name="email" 
                    value={signin.email}
                    onChange={(e)=>{setSignin({...signin,[e.target.name]:e.target.value})}}
                    />
                    <input type="password" placeholder="Password" name="password" 
                    value={signin.password}
                    onChange={(e)=>{setSignin({...signin,[e.target.name]:e.target.value})}}/>
                    <button disabled={loading}>{loading? "Loading":"Sign In"}</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit1}>
                    <label htmlFor="file">
                     <img src={avatar.url || "./avatar.png"}/>
                        Upload an image
                    </label>
                    <input type="file" id="file" style={{display:"none"}} onChange={(e)=>handleAvatar(e)}/>
                    <input type="text" placeholder="Username" name="username" 
                    value={signup.username}
                    onChange={(e)=>{setSignup({...signup,[e.target.name]:e.target.value})}}/>
                    <input type="text" placeholder="Email" name="email" 
                    value={signup.email}
                    onChange={(e)=>{setSignup({...signup,[e.target.name]:e.target.value})}}/>
                    <input type="password" placeholder="Password" name="password" 
                    value={signup.password}
                    onChange={(e)=>{setSignup({...signup,[e.target.name]:e.target.value})}}/>
                    <button disabled={loading}>{loading? "Loading":"Sign Up"}</button>
                </form>
            </div>
        </div>
    )
}
export default Login;