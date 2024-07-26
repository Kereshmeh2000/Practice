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

    return (
        <>
            <div
                {...getRootProps()}
                className='w-full cursor-pointer p-4 text-center'
            >
                <input {...getInputProps()} />
                <img className='mx-auto' src={avatar} />
            </div>
            {selectedImage && (
                <div>
                    <img src={selectedImage} alt="Selected Profile" />
                </div>
            )}
        </>
    );
}
