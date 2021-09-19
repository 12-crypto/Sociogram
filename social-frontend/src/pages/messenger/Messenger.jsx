import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Conversation from "../../components/converstions/Conversation"; 
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/chatOnline";
import {AuthContext} from "../../context/AuthContext"
import { useContext,useEffect, useState,useRef } from "react";
import axios from "axios";

export default function Messenger() {
    const [conversations, setconversations] = useState([])
    const {user} = useContext(AuthContext);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const scrollRef = useRef();
  

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

    useEffect(() => {
        const getMessages = async ()=>{
            try {
                const res = await axios.get("/messages/"+ currentChat?._id)
                setMessages(res.data);
            } catch (err) {
            console.log(err)     
            }
        };
        getMessages()
    }, [currentChat]);
    // console.log(messages)
    // console.log(currentChat)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
          sender: user._id,
          text: newMessage,
          conversationId: currentChat._id,
        };
    }    
    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu" >
                    <div className="chatWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c)=>(
                         <div onClick={() => setCurrentChat(c)}>
                         <Conversation conversation={c} currentUser={user} />
                       </div>
                    ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                     {
                         currentChat ?(
                     <>
                     <div className="chatBoxTop">
                        {messages.map(m=>(
                            <Message message={m} own={m.sender === user._id}/>
                        ))}                     
                     </div>
                        <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" 
                        placeholder="write something...">
                            onChange{(e)=>setNewMessage(e.target.
                            value={newMessage})}
                        </textarea>
                        <button className="chatSubmitButton" onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                    </> 
                    ) :( <span className="noConversationText">Open a conversation to chat</span>
                    )}
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
