import React from 'react';
import {MobileBottomMenu} from '../../constract';

export default function MobileNav() {
    return (
        // <div className="fixed bottom-0 w-full text-slate-400 md:hidden border-t border-gray-200">
        //     <div className="flex justify-around py-2">
        //         {MobileBottomMenu.map((item, index) => (
        //             <div key={index} className="flex flex-col items-center">
        //                 {item.icon}
        //                 <p className="text-xs">{item.title}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <>
        <div>
            <div className="fixed bottom-0 w-full text-slate-400 md:hidden border-t border-gray-200">
                <div className="flex justify-around py-2">
                    {MobileBottomMenu.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {item.icon}
                            <p className="text-xs">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}   