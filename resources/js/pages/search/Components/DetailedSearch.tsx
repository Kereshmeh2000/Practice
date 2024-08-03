import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function DetailedSearch() {
    const [values, setValues] = useState([18, 99]);

    return (
        <div>
            <div className='grid grid-cols-4 mt-10'>
                <div className='col-span-1 h-72 border border-gray-200 overflow-y-auto w-full'>
                    <div className='p-3'>
                        <div className='flex'>
                            <button className='border border-gray-200 py-1 px-10 text-gray-500 mr-2'>
                                Reset
                            </button>
                            <button className='border border-gray-200 py-1 px-10 bg-green-500 text-white'>
                                Search
                            </button>
                        </div>
                        <div className='text-center mt-8 border-b border-gray-200 pb-5'>
                            <p className='text-sm'>Nick</p>
                            <input
                                type='text'
                                placeholder='Nick'
                                className='border border-black mx-auto'
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-gray-500'>Age Range</p>
                            <div className="flex flex-col items-center mt-5">
                                <div className="w-full max-w-md">
                                    <Range
                                        values={values}
                                        step={1}
                                        min={18}
                                        max={99}
                                        onChange={(values) => setValues(values)}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                className="relative w-full h-2 bg-gray-200 rounded"
                                            >
                                                <div
                                                    ref={props.ref}
                                                    className="absolute w-full h-full"
                                                    style={{
                                                        background: getTrackBackground({
                                                            values,
                                                            colors: ['pink', 'pink'],
                                                            min: 18,
                                                            max: 99,
                                                        }),
                                                    }}
                                                />
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                className="w-6 h-6 bg-pink-500 rounded-full"
                                            />
                                        )}
                                    />
                                    <div className="flex justify-between text-sm mt-2">
                                        <span>{values[0]}</span>
                                        <span>{values[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
