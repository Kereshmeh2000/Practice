import React, {useState, useEffect} from "react";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/userThunk";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {

    //login form
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const dispatch = useDispatch();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const userInfo = {email , password};
        dispatch(userLogin(userInfo));

        setEmail("");
        setPassword("");
    }

    // show or hide the password
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    //User login after entering information
    const {isAuthenticated} = useSelector((state: any) => state.user)
    const navigate = useNavigate();

        useEffect(() => {
            if(isAuthenticated) 
                return navigate('/profile')
            
        }, [isAuthenticated, navigate]);


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder='email' className='w-full text-black border border-gray-300 px-5 py-2 rounded block' type="email" onChange={handleEmail} value={email} required />
            <div className='flex items-center'>
                <input placeholder='password' className='w-full text-black border border-gray-300 px-5 py-1 rounded my-5 block' type={showPassword ? 'text' : 'password'} onChange={handlePassword} value={password} required />
                <div onClick={togglePassword} className='text-gray-400 cursor-pointer'>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
            </div>
            <button type="submit" className="w-full text-black bg-gray-300 px-5 rounded py-2">Submit</button>
        </form>
        </>
    )
}