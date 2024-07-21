import React from 'react';
import Comment from '../../../../models/Comment';
import { FaTelegramPlane } from "react-icons/fa";



export default function allComments() {
    //getting the data of comments from the Comment model
    const [comment, setComment] = React.useState<Comment[]>([]);
    React.useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentList = await Comment.all();
                setComment(commentList);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        fetchComments();
    }
    , []);
    return (
        <>
            <div class='w-full h-full bg-gray-500'>
                {comment.map((comment, index) => (
                    <div key={index} className='border border-slate-200 p-3 flex items-center'>
                        <img src={comment.userProfile} className='w-7 h-7 rounded-full mr-3' alt="" />
                        <div className='flex items-center w-full'>
                            <input type="text" className='w-full mr-2 p-1 bg-slate-50 border border-gray-100 rounded' placeholder='Add a comment' />
                            <div className=''>
                                <FaTelegramPlane />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}