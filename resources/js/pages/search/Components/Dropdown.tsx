// MultiSelectDropdowns.jsx
import React, { useState } from 'react';

const dropdownData = [
  {
    category: 'Country of residence',
    options: ['United States', 'Canada', 'United Kingdom', 'Australia']
  },
  {
    category: 'Current city',
    options: ['New York', 'Los Angeles', 'Chicago', 'Houston']
  },
  {
    category: 'Profession',
    options: ['Engineer', 'Doctor', 'Teacher', 'Artist']
  },
  {
    category: 'Marital status',
    options: ['Single', 'Married', 'Divorced', 'Widowed']
  },
  {
    category: 'Hijab',
    options: ['Worn', 'Not Worn']
  }
];

export default function Dropdown () {
    return (
        <>
         {dropdownData.map((item, index) => (
            <div key={index} className="dropdown">
                <select id={item.category} className='py-2 px-6 bg-gray-100 mt-3 w-full text-gray-600 cursor-pointer'>
                    <option value="" disabled selected>
                        {item.category}
                    </option>
                        {item.options.map((option) => (
                            <option value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </>
    )
}