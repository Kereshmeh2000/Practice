// import React from 'react';
// import { TiEdit } from 'react-icons/ti';
// import Modal from './Modal';

// export default function ProfileText({}) {
//     // Profile Text Modal
//     const [profileTextModal, setProfileTextModal] = React.useState(false);
//     const handleProfileTextModalOpen = () => {
//         setProfileTextModal(true);
//     };
//     const handleProfileTextModalClose = () => {
//         setProfileTextModal(false);
//     };

//     // Text area limitation
//     const [text, setText] = React.useState('');
//     const maxLength = 500;

//     const handleTextChange = (e) => {
//         setText(e.target.value);
//     };

//     return (
//         <>
//             <div
//                 onClick={handleProfileTextModalOpen}
//                 className="border border-slate-100 p-5 flex items-center font-bold text-slate-500"
//             >
//                 <div className="mr-5 text-2xl">
//                     <TiEdit />
//                 </div>
//                 <p className="cursor-pointer text-sm">Profile Text</p>
//                 {profileTextModal && (
//                     <Modal
//                         showModal={profileTextModal}
//                         closeModal={handleProfileTextModalClose}
//                         title={'Profile Text'}
//                         icon={<TiEdit />}
//                     >
//                         <div className="text-sm text-gray-500 font-normal">
//                             <textarea
//                                 className="w-full h-48 bg-slate-100 p-2"
//                                 value={text}
//                                 maxLength={maxLength}
//                                 onChange={handleTextChange}
//                                 placeholder="PROFILE TEXT"
//                             ></textarea>
//                             <p>
//                                 {text.length}/{maxLength}
//                             </p>
//                             <div className="mt-5 flex justify-end">
//                                 <button
//                                     onClick={handleProfileTextModalClose}
//                                     className="py-2 px-4 m-1 border border-gray-300"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button className="py-2 px-4 m-1 border border-gray-300">Save</button>
//                             </div>
//                         </div>
//                     </Modal>
//                 )}
//             </div>
//         </>
//     );
// }