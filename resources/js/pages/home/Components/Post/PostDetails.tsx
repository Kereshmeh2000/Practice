import React from 'react';
import { FaGift } from 'react-icons/fa';
import { FaRegSmile } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';

import Post from '../../../../models/Post';
import useInfiniteScroll from './useInfiniteScroll';


export const PostDetails = ({post, showComment}) => {

    return (
        <>
            <div>
                    <div className="lg:ml-5 bg-slate-50 mb-20" key={post.id}>
                        {/* Post header */}
                        <div className="border border-slate-200 p-3 flex items-center w-full">
                            <img
                                src={post.user.profileImage}
                                className="rounded-full w-10 h-10 mr-3"
                            />
                            <div className="flex flex-col text-sm leading-3 w-full">
                                <div className="flex space-x-2">
                                    <span>{post.user.name}</span>
                                    <span></span>
                                </div>
                                <div className="flex space-x-2 mt-1 justify-between w-full">
                                    <span>{post.user.location}</span>
                                    <span>{post.createdAt}</span>
                                </div>
                            </div>
                        </div>
                        {/* Post body */}
                        <div className="bg-slate-50 border border-slate-200 pt-3">
                            <img
                                src={post.image}
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
                                src={post.user.profileImage}
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
                
            </div>

            
        </>
    );
};