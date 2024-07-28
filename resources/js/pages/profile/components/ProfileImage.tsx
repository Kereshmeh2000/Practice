import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import avatar from '../../../../../public/assets/images/avatar.png';

export default function ProfileImage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const dropImage = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setSelectedFile(file);
            const fileUrl = URL.createObjectURL(file);
            setSelectedImage(fileUrl);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop: dropImage, accept: 'image/*' });

   
    const handleRemoveImage = () => {
        if (selectedImage) {
            URL.revokeObjectURL(selectedImage); 
            setSelectedImage(null);
            setSelectedFile(null);
        }
    };

    return (
        <div className='w-full cursor-pointer p-4 text-center'>
            <p>Click to select image, or drop down</p>
            <div
                {...getRootProps()}
                className='mx-auto'
                style={{ position: 'relative' }} 
            >
                <input {...getInputProps()} />
                <img
                    className='mx-auto'
                    src={selectedImage ? selectedImage : avatar}
                    alt="Profile"
                />
                {selectedImage && (
                    <button
                        onClick={handleRemoveImage}
                        className='absolute top-0 right-0 mt-1 mr-1 text-red-500'
                        style={{ background: 'white', borderRadius: '50%', padding: '0.2rem', cursor: 'pointer' }}
                    >
                        &times;
                    </button>
                )}
            </div>
        </div>
    );
}