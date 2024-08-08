// import React from 'react';

// export default function Tabs() {
//     const [activeTab, setActiveTab] = React.useState('ONLINE MEMBERS');
//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     }
//     return (
//         <>
//             <div className=' mt-5 border border-slate-200 grid grid-cols-7 text-sm text-gray-700 [&>*]:py-2'>
//                 <button onClick={() => handleTabChange('DETAILED SEARCH')} className={`${activeTab === 'DETAILED SEARCH' ? 'bg-gray-100' : 'bg-white'}`}>DETAILED SEARCH</button>
//                 <button onClick={() => handleTabChange('ONLINE MEMBERS')} className={`${activeTab === 'ONLINE MEMBERS' ? 'bg-gray-100' : 'bg-white'}`}>ONLINE MEMBERS</button>
//                 <button onClick={() => handleTabChange('TO LOCATION')} className={`${activeTab === 'TO LOCATION' ? 'bg-gray-100' : 'bg-white'}`}>TO LOCATION</button>
//                 <button onClick={() => handleTabChange('NEW MEMBERS')} className={`${activeTab === 'NEW MEMBERS' ? 'bg-gray-100' : 'bg-white'}`}>NEW MEMBERS</button>
//                 <button onClick={() => handleTabChange('APPROVED MEMBERS')} className={`${activeTab === 'APPROVED MEMBERS' ? 'bg-gray-100' : 'bg-white'}`}>APPROVED MEMBERS</button>
//                 <button onClick={() => handleTabChange('NEW PHOTOS')} className={`${activeTab === 'NEW PHOTOS' ? 'bg-gray-100' : 'bg-white'}`}>NEW PHOTOS</button>
//                 <button onClick={() => handleTabChange('BORN TODAY')} className={`${activeTab === 'BORN TODAY' ? 'bg-gray-100' : 'bg-white'}`}>BORN TODAY</button>
//             </div>
//         </>
//     )
// }