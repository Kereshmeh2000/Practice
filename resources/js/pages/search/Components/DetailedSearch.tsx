import React, { useState } from 'react';
import Slider from './Slider';
import Dropdown from './Dropdown';


export default function DetailedSearch() {

    //Values of the sliders
    const [ageValues, setAgeValues] = useState([18, 99]);
    const [highValues, setHighValues] = useState([120, 209]);
    const [weightValues, setWeightValues] = useState([40, 150]);

    //Dropdown


    return (
        <div>
            <div className='grid grid-cols-4 mt-10'>
                <div className='col-span-1 h-96 border border-gray-200 overflow-y-auto w-full'>
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
                            <div className="flex flex-col items-center mt-5">
                                <div className="w-full max-w-md">
                                    <Slider
                                        values={ageValues}
                                        setValues={setAgeValues}
                                        min={18}
                                        max={99}
                                        step={1}
                                        label='Age range'
                                    />
                                    <Slider
                                        values={highValues}
                                        setValues={setHighValues}
                                        min={120}
                                        max={209}
                                        step={1}
                                        label='Height range'
                                    />
                                    <Slider
                                        values={weightValues}
                                        setValues={setWeightValues}
                                        min={40}
                                        max={150}
                                        step={1}
                                        label='Weight range'
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
