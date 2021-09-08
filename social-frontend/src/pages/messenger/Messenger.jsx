import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Conversation from "../../components/converstions/Conversation"; 
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/chatOnline";

export default function Messenger() {
    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu" >
                    <div className="chatWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
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
