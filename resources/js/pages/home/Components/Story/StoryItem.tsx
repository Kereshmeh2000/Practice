import React from 'react';

export default function StoryItem({ story, onClick }) {
    return (
        <>
            <div onClick={() => onClick(story)} className="cursor-pointer mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                <div key={story.id}>
                    <img
                        className="w-14 h-14 rounded-full border-4 border-white"
                        src={story.header.image}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
