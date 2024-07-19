import React from 'react';
import Story from '../../../../models/Story';

//The function receives an object as an argument and directly accesses its story property.
export default function StoryContent({story}: {story: Story}) {

    const formattedStory = story.getFormattedStory();
    
    return (
        <div className='flex flex-col'>
            {/* story header */}
            <div className='flex items-center'>
                <img src={formattedStory.storyHeader.profile} className='w-14 h-14 rounded-full' />
                <div className='ml-3'>
                    <p className='font-bold'>{formattedStory.storyHeader.name}</p>
                    <p>{formattedStory.storyHeader.time}</p>
                </div>
            </div>
            {/* story body */}
            <div>
                <img src={formattedStory.imageUrl} className='w-full' />
            </div>
            {/* story footer */}
            <div className='w-full flex'>
                <input type="text" />
                <button>Send</button>
            </div>
        </div>
    )}