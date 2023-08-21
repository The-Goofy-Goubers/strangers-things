import React, { useState, useEffect } from "react";

export default function EditPost({ post, onCancel, onSave}) {
    const [editedTitle, setEditedTitle] = useState(post.title);
    const [editedDesc, setEditedDesc] = useState(post.description);
    const [editedPrice, setEditedPrice] = useState(post.price)
    const [isSaving, setIsSaving] = useState(false);
    
    const handleSave = () => {
       setIsSaving(true);
    };

    useEffect(() => {
        if (isSaving) {
            
        const updatedPost = {
            ...post,
            title: editedTitle,
            description: editedDesc,
            price: editedPrice,
        };

        fetch(`https://strangers-things.herokuapp.com/api/posts/${post._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(updatedPost)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                onSave(updatedPost);
            } else {
                console.error("error updating post", data.error.message);
            }
        })
        .catch((error) => {
            console.error("error updating", error);
        })
        .finally(() => {
            setIsSaving(false);
        })
    }
    }, [isSaving, post, editedTitle, editedDesc, editedPrice, onSave]);

    return (
        <div>
            <h2>Edit</h2>
            <label>Title:</label>
            <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            />

            <label>Description</label>
            <textarea
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            />

            <label>Price:</label>
            <input 
            type="text"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            />
            <button onClick={handleSave} disabled={isSaving}>Save</button>
            <button onClick={onCancel} disabled={isSaving}>Cancel</button>
        </div>
    );
}