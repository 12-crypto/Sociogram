import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
//   const [friends, setFriends] = useState([]);
//   const [onlineFriends, setOnlineFriends] = useState([]);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const getFriends = async () => {
//       const res = await axios.get("/users/friends/" + currentId);
//       setFriends(res.data);
//     };

//     getFriends();
//   }, [currentId]);

//   useEffect(() => {
//     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
//   }, [friends, onlineUsers]);

//   const handleClick = async (user) => {
//     try {
//       const res = await axios.get(
//         `/conversations/find/${currentId}/${user._id}`
//       );
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div className="chatOnline">
 
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src=
          "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">heylo</span>
        </div>
      
    </div>
  );
}