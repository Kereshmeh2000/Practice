import React from 'react';
import StoryContent from './StoryContent';


export const HomeStory = () => {
    return (
        <>
            <div className="my-3">
                <div className=" overflow-x-auto  hide-scrollbar">
                    <div className='flex w-max'>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                             />
                        </div>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                             />
                        </div>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                             />
                        </div>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                             />
                        </div>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                            />
                        </div>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                            />
                        </div>
                        <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                            <img 
                                className="w-14 h-14 rounded-full border-4 border-white" 
                                src="https://picsum.photos/101/101" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <StoryContent />
        </>
    );
};