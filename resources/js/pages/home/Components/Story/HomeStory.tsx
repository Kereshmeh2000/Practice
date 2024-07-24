import React from 'react';
import './story.css';
import Story from '../../../../models/Story';
import Stories from 'react-insta-stories';
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";




export const HomeStory = () => {

    //getttin the story data from the Story model
    const [userStories, setUserStories] = React.useState<Story[]>([]);

    React.useEffect(() => {
        const fetchStories = async () => {
            try {
                const storyList = await Story.all();
                const formattedStories = storyList.map((story) => ({
                    url: story.image,
                    header: {
                        heading: story.user.name,
                        subheading: story.createdAt,
                        profileImage: story.user.profileImage
                    }
                }));
                setUserStories(formattedStories);
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        };

        fetchStories();
    }, []);

    //story modal
    const [showStoryModal, setShowStoryModal] = React.useState(false);
    const showStoryModalHandler = () => {
        setShowStoryModal(true);
    };
    const closeStoryModalHandler = () => {
        setShowStoryModal(false);
    };

    //heart color handler
    const [heartColor, setHeartColor] = React.useState(false);
    const heartColorHandler = () => {
        setHeartColor(!heartColor);
    };

    return (
        <>
            <div className="my-3">
                <div className=" overflow-x-auto scrollbar-hide">
                    <div className='flex flex-row w-max'>
                            {userStories.map((story)=> {
                                return(
                                    <div className="cursor-pointer mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                                        <div key={story.id}>
                                            <img onClick={showStoryModalHandler} className="w-14 h-14 rounded-full border-4 border-white" src={story.header.profileImage} alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            {showStoryModal && (
                <>
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className='relative w-full h-full'>
                        <button
                            className='absolute top-4 right-4 text-4xl text-white'
                            onClick={closeStoryModalHandler}
                        >
                            <RxCross2 />
                        </button>

                        <Stories
                            stories={userStories}
                            defaultInterval={10000}
                            loop={false}
                        />

                        {/* story footer */}
                        <div className='absolute bottom-0 w-full p-4'>
                            <div className='flex items-center'>
                                <input
                                    type="text"
                                    className='flex-1 p-2 border border-gray-300 bg-black text-white rounded-full'
                                    placeholder='Send a message'
                                />
                                <button
                                    onClick={heartColorHandler}
                                    className={`ml-2 text-xl ${heartColor ? 'text-red-500' : 'text-white'}`}
                                >
                                    <FaHeart />
                                </button>
                                <button className='ml-2 text-white text-xl'>
                                    <FiSend />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        </>
    );
};