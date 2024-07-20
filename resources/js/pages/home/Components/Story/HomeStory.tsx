import React from 'react';
import './story.css';
import Story from '../../../../models/Story';


export const HomeStory = () => {

    //getttin the story data from the Story model
    const [stories, setStories] = React.useState<Story[]>([]);

    React.useEffect(() => {
        const fetchStories = async () => {
            try {
                const storyList = await Story.all();
                setStories(storyList);
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        };

        fetchStories();
    }, []);

    return (
        <>
            <div className="my-3">
                <div className=" overflow-x-auto scrollbar-hide">
                    <div className='flex flex-row w-max'>
                            {stories.map((stories)=> {
                                return(
                                    <div className="mx-1 p-1 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                                        <div key={stories.id}>
                                            {/* <img 
                                            className="w-14 h-14 rounded-full border-4 border-white" 
                                            src={stories.image.url} 
                                            /> */}
                                            <img className="w-14 h-14 rounded-full border-4 border-white" src={stories.image} alt="" />
                                        </div>
                                    </div>

                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};