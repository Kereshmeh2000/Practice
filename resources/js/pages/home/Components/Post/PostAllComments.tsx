import React from 'react';
import Comment from '../../../../models/Comment';
import { FaTelegramPlane } from "react-icons/fa";




export default function PostAllComments() {

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
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-white text-black">
                <div className='w-full h-full flex flex-col'>
                    <h3 className='text-center text-xl py-2 font-semibold'>Comments</h3>
                    <div className='flex-1 overflow-y-auto p-3'>
                        {comment.map((comments) => (
                            <div key={comments.id} className='p-3'>
                                <div className='flex'>
                                    <img src={comments.user.profileImage} className='w-7 h-7 rounded-full' alt="" />
                                    <p className='mx-3'>{comments.user.name}</p>
                                    <p className='text-xs text-slate-500'>{comments.createdAt}</p>
                                </div>
                                <p className='ml-10'>{comments.comment}</p>
                                <div className='flex text-xs text-slate-500 ml-10'>
                                    <p className='mr-5'>Replay</p>
                                    <p>See translation</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='fixed bottom-0 w-full bg-white'>
                        <div className='border border-slate-200 p-3 flex items-center'>
                            <img src={comment.userProfile} className='w-7 h-7 rounded-full mr-3' alt="" />
                            <div className='flex items-center w-full'>
                                <input type="text" className='w-full mr-2 p-1 bg-slate-50 border border-gray-100 rounded' placeholder='Add a comment' />
                                <div className=''>
                                    <FaTelegramPlane />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}