import React, { useState } from "react";
import EditPost from "./EditPost";

export default function PostModal({post, currentUser, onClose}) {
const [messageText, setMessageText] = useState("")
const [messages, setMessages] = useState([]);
const [showEditModal, setShowEditModal] = useState(false);

const handleSendMessage = async () => {
try {
    const respose = await fetch(
        `https://strangers-things.herokuapp.com/api/posts/${post_id}/messages`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                message: {
                    content: messageText,
                },
            }),
        }
    );
    const data = await response.json();
    if (data.success) {
        setMessages((prevMessages) => [...prevMessages, data.data.message]);
        setMessageText("");
    } else {
        console.error("Error sending message:", data.error.message);
    }
} catch (error) {
    console.error("Error sending message:", error);
}
};

const handleDeletePost = async () => {
    try {
        const response = await fetch(
            `https://strangers-things.herokuapp.com/api/posts/${post_id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            onClose();
        } 
        } catch (error) {
            console.error("errror deleting post:", error);
        }
    }
    const handleEditPost = () => {
        setShowEditModal(true);
    };

    const handleEditModalClose = () => {
        setShowEditModal(false)
    }

    return (
        <div className="modal">
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h4>Location: {post.location}</h4>
            <p>Seller: {post.author.username}</p>
            <p>Price: {post.price}</p>
            {currentUser && currentUser.username === post.author.username && (
                <div>
                    <button onClick={handleDeletePost}>Delete Post</button>
                    <button onClick={handleEditPost}>Edit Post</button>
                    </div>
            )}

            {currentUser && (
                <div>
                    <textarea 
                    placeholder="Enter Message" 
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    />
                    <button onClick={handleSendMessage} type="submit">Send Message</button>
                </div>
            )}

            <button onClick={onClose}>Close</button>

           <div>
            <h3>Messages</h3>
            <ul>
                {post.messages.map((message) =>(
                    <li key={message._id}>{message.content}</li>
                ))}
            </ul>

           </div>
            {showEditModal && (
                <div className="modal">
                    <EditPost 
                    post = {post}
                    onSave={handleEditModalClose}
                    onCancel={handleEditModalClose}
                    />
                </div>
            )}
        </div>
    );
}