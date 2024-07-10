import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/userThunk';

export default function useLoginHandler() {

    const [email, setEmail] = useState("");
    const [password, setPasswod]= useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefult;

        const userInfo = {email , password};
        dispatch(userLogin(userInfo));

        setEmail("");
        setPasswod("");
    } 

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswod(e.target.value)
    }
    
    return {
        email,
        password,
        handleSubmit,
        handleEmail,
        handlePassword
    }
}