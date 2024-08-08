import React from 'react';
import { Range, getTrackBackground } from 'react-range';

const RangeSlider = ({ values, setValues, min, max, step, label }) => {
  return (
    <div className="mt-5">
      <p className="text-gray-500">{label}</p>
      <div className="flex flex-col items-center mt-5">
        <div className="w-full max-w-md">
          <Range
            values={values}
            step={step}
            min={min}
            max={max}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="relative w-full h-1 bg-gray-200 rounded"
              >
                <div
                  ref={props.ref}
                  className="absolute w-full h-full"
                  style={{
                    background: getTrackBackground({
                      values,
                      colors: ['pink', 'pink'],
                      min,
                      max,
                    }),
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-pink-500 rounded-full"
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
  );
};

export default RangeSlider;
