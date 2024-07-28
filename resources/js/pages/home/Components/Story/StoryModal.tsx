// import React from 'react';
// import Story from '../../../../models/Story';
// import Stories from 'react-insta-stories';

// //The function receives an object as an argument and directly accesses its story property.
// export default function StoryModal({story}: {story: Story}) {

//     // const formattedStory = story.getFormattedDate();

//     const [stories, setStories] = React.useState<Story[]>([]);
//     React.useEffect(() => {
//         const fetchStories = async () => {
//             try {
//                 const storyList = await Story.all();
//                 const formattedStories = storyList.map((story) => ({
//                     url: story.image,
//                     duration: 5000,
//                     header: {
//                         heading: story.user.name,
//                         subheading: story.createdAt,
//                     },
//                 }));
//                 setStories(formattedStories);
//             } catch (error) {
//                 console.error("Error fetching stories:", error);
//             }
//         };

//         fetchStories();
//     }
//     , []);
    
//     return (
//         <>
//             <div className='flex flex-col'>
//             {/* story header */}
//             <div className='flex items-center'>
//                 <img src={stories.image} className='w-14 h-14 rounded-full' />
//                 <div className='ml-3'>
//                     {/* <p className='font-bold'>{stories.user.name}</p> */}
//                     {/* <p>{formattedStory}</p> */}
//                 </div>
//             </div>
//             {/* story body */}
//             <div>
//                 <img src={stories.image} className='w-full' />
//             </div>
//             {/* story footer */}
//             <div className='w-full flex'>
//                 <input type="text" />
//                 <button>Send</button>
//             </div>
//         </div>

//         <Stories
//                 stories={stories}
//                 defaultInterval={1500}
//                 width={432}
//                 height={768}
//                 loop={true}
//             />
//     </>

//     )}