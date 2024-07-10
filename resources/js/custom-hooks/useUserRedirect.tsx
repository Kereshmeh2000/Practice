import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function useUserRedirect() {
    
    const {isAuthenticated} = useSelector((state: any) => state.user)
    const navigate = useNavigate();

        useEffect(() => {
            if(isAuthenticated) {
                navigate('/profile')
            }
        }, [isAuthenticated])
        
        return {
            isAuthenticated
        }
}