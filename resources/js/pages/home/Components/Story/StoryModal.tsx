import React from 'react';
import Stories from 'react-insta-stories';
import { RxCross2 } from 'react-icons/rx';
import { FaHeart } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export default function StoryModal({ story, onClose }) {
    // Heart color handler
    const [heartColor, setHeartColor] = React.useState(false);
    const heartColorHandler = () => {
        setHeartColor(!heartColor);
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                <div className="relative w-full h-full">
                    <button
                        className="absolute top-4 right-4 text-4xl text-white"
                        onClick={onClose}
                    >
                        <RxCross2 />
                    </button>

                    <Stories
                        stories={[
                            {
                                url: story.image,
                                header: {
                                    heading: story.user.name,
                                    subheading: story.createdAt,
                                    profileImage: story.user.profileImage,
                                },
                            },
                        ]}
                        defaultInterval={10000}
                        loop={false}
                    />

                    {/* Story footer */}
                    <div className="absolute bottom-0  p-4">
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="flex-1 p-2 border border-gray-300 bg-black text-white rounded-full"
                                placeholder="Send a message"
                            />
                            <button
                                onClick={heartColorHandler}
                                className={`ml-2 text-xl ${
                                    heartColor ? 'text-red-500' : 'text-white'
                                }`}
                            >
                                <FaHeart />
                            </button>
                            <button className="ml-2 text-white text-xl">
                                <FiSend />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}