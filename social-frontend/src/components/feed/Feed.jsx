import Post from "../post/Post";
import { useEffect, useState } from "react";
import Share from "../share/Share.jsx";
import "./feed.css";
import axios from "axios";
 // import { Posts } from "../../dummyData";

export default function Feed({username}) {
  const [posts,setPosts] = useState([])
  
  useEffect(() => {
  //  console.log("feed rendered")
      const fetchPosts = async() =>{
      const res = username 
       ? await axios.get("/posts/profile/" + username)
       : await axios.get("posts/timeline/611d9155b2ebb04c5ce8a7d3");  
    
      setPosts(res.data);
    }
    fetchPosts();
},[username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        { posts.map((p) => (
          <Post key={p._id} post={p} />
          
        ))}
      </div>
    </div>
   
  );
}
