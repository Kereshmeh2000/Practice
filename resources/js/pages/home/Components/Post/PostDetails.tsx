import React, { lazy, Suspense } from 'react';
import { FaGift } from 'react-icons/fa';
import { FaRegSmile } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import PostAllComments from './PostAllComments';
import { RxCross2 } from 'react-icons/rx';
import Post from '../../../../models/Post';



export const PostDetails = () => {
    // Lazy load the PostDetails component
    const PostDetails = lazy(() => import('./PostDetails'));


    //show all comments when the user clicks on the comment input
    const [showAllComment, setShowAllComment] = React.useState(false);
    const showComment = () => {
        setShowAllComment(true);
    };
    const closeComment = () => {
        setShowAllComment(false);
    };

    //getting the data of posts from the Post model
    const [post, setPost] = React.useState<Post[]>([]);
    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postList = await Post.all();
                setPost(postList);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <div>
                {post.map((posts) => (
                    <div className="lg:ml-5 bg-slate-50 mb-20" key={posts.id}>
                        {/* Post header */}
                        <div className="border border-slate-200 p-3 flex items-center w-full">
                            <img
                                src={posts.user.profileImage}
                                className="rounded-full w-10 h-10 mr-3"
                            />
                            <div className="flex flex-col text-sm leading-3 w-full">
                                <div className="flex space-x-2">
                                    <span>{posts.user.name}</span>
                                    <span></span>
                                </div>
                                <div className="flex space-x-2 mt-1 justify-between w-full">
                                    <span>{posts.user.location}</span>
                                    <span>{posts.createdAt}</span>
                                </div>
                            </div>
                        </div>
                        {/* Post body */}
                        <div className="bg-slate-50 border border-slate-200 pt-3">
                            <img
                                src={posts.image}
                                className="h-screen w-screen"
                            />
                            <div className="mt-5 flex justify-end">
                                <div className="py-2 px-4 border border-slate-200">
                                    <FaGift />
                                </div>
                                <div className="py-2 px-4 border border-slate-200">
                                    <FaRegSmile />
                                </div>
                                <div className="py-2 px-4 border border-slate-200">
                                    <FaTelegramPlane />
                                </div>
                                <div className="py-2 px-4 border border-slate-200">
                                    <FaFlag />
                                </div>
                            </div>
                        </div>
                        {/* comment section */}
                        <div className="border border-slate-200 p-3 flex items-center">
                            <img
                                src={posts.user.profileImage}
                                className="w-7 h-7 rounded-full mr-3"
                                alt=""
                            />
                            <div className="flex items-center w-full">
                                <input
                                    type="text"
                                    onClick={showComment}
                                    className="w-full mr-2 p-1 bg-slate-50 border border-gray-100 rounded"
                                    placeholder="Add a comment"
                                />
                                <div className="">
                                    <FaTelegramPlane />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showAllComment && (
                <>
                    <button
                        className="fixed top-4 text-xl z-10 cursor-pointer"
                        onClick={closeComment}
                    >
                        <RxCross2 />
                    </button>
                    <PostAllComments />
                </>
            )}
        </>
    );
};