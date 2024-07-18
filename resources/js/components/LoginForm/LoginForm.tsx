import React, {useState} from "react";
import useLoginHandler from "../../custom-hooks/useLoginHandler";
import useUserRedirect from "../../custom-hooks/useUserRedirect";
import { FaEye, FaEyeSlash  } from "react-icons/fa";


export default function LoginForm() {

    const {email, password, handleSubmit, handleEmail, handlePassword} = useLoginHandler();
    useUserRedirect();

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

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