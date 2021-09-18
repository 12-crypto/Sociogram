import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Conversation from "../../components/converstions/Conversation"; 
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/chatOnline";
import {AuthContext} from "../../context/AuthContext"
import { useContext,useEffect, useState  } from "react";
import axios from "axios";

export default function Messenger() {
    const [conversations, setconversations] = useState([])
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const getConversations = async ()=>{
            try{
                const res = await axios.get("/conversations/" + user._id)
                setconversations(res.data)
            }catch(err){
                console.log(err);
            }       
        };
        getConversations();
    }, [user._id]);
    
    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu" >
                    <div className="chatWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c)=>(
                        <Conversation conversation={c} currentUser={user}/>
                    ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                     <div className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message/> 
                        <Message/> 
                        <Message/> 
                        <Message/> 
                        <Message/>                         
                     </div>
                        <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                        <button className="chatSubmitButton">Send</button>
                    </div>
                </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                    
                    </div>
                </div>
            </div>
        </>
    );
}
