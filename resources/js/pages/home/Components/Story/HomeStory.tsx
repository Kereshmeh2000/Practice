import React from 'react';
import './story.css';
import Story from '../../../../models/Story';
import Stories from 'react-insta-stories';



export const HomeStory = () => {

    //getttin the story data from the Story model
    const [userStories, setUserStories] = React.useState<Story[]>([]);

    React.useEffect(() => {
        const fetchStories = async () => {
            try {
                const storyList = await Story.all();
                setUserStories(storyList);
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

    return (
        <>
            <div className="my-3">
                <div className=" overflow-x-auto scrollbar-hide">
                    <div className='flex flex-row w-max'>
                            {userStories.map((story)=> {
                                return(
                                    <div className="cursor-pointer mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                                        <div key={story.id}>
                                            <img onClick={showStoryModalHandler} className="w-14 h-14 rounded-full border-4 border-white" src={story.image} alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            {showStoryModal && (
                <div className="fixed top-0 left-0 right-0 buttom-0 w-full h-full bg-black bg-opacity-50 z-50">
                        <div className='flex mx-auto'>
                            {/* story header */}
                            <div>
                                <button onClick={closeStoryModalHandler}>X</button>
                            </div>
                            <div className='flex items-center'>
                                <img src={userStories.image} className='w-14 h-14 rounded-full' />
                                <div className='ml-3'>
                                    {/* <p className='font-bold'>{userStories.user.name}</p> */}
                                    {/* <p>{formattedStory}</p> */}
                                </div>
                            </div>
                            {/* story body */}
                            <div>
                                <img src={userStories.image} className='w-full' />
                            </div>
                            {/* story footer */}
                            <div className='w-full flex'>
                                <input type="text" />
                                <button>Send</button>
                            </div>
                        </div>

                        <Stories
                            stories={userStories}
                            defaultInterval={1500}
                            loop={true}
                         />
                </div>
            )}
        </>
    );
};