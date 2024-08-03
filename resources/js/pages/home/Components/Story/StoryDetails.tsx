import React from 'react';
import './story.css';
import Story from '../../../../models/Story';
import StoryModal from './StoryModal';
import StoryItem from './StoryItem';


export const StoryDetails = () => {
    // Getting the story data from the Story model
    const [userStories, setUserStories] = React.useState<Story[]>([]);
    const [selectedStory, setSelectedStory] = React.useState<Story | null>(null);

    React.useEffect(() => {
        const fetchStories = async () => {
            try {
                const storyList = await Story.all();
                const formattedStories = storyList.map((story) => ({
                    url: story.image,
                    header: {
                        heading: story.user.name,
                        subheading: story.createdAt,
                        image: story.user.image,
                    },
                }));
                setUserStories(formattedStories);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchStories();
    }, []);

    // Story modal
    const [showStoryModal, setShowStoryModal] = React.useState(false);
    const showStoryModalHandler = (story: Story) => {
        setShowStoryModal(true);
        setSelectedStory(story);
    };
    const closeStoryModalHandler = () => {
        setShowStoryModal(false);
        setSelectedStory(null);
    };

    
    return (
        <>
            <div className="my-3">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex flex-row w-max">
                        {userStories.map((story: Story) => (
                            <React.Fragment key={story.image}>
                                <StoryItem onClick={() => showStoryModalHandler(story)} story={story} />
                                {showStoryModal && selectedStory && (
                                    <StoryModal
                                        story={selectedStory}
                                        onClose={closeStoryModalHandler}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};