import React from "react";
import useLoginHandler from "../../custom-hooks/useloginhandler";
import useUserRedirect from "../../custom-hooks/useUserRedirect";

export default function LoginForm() {

    const {email, password, handleSubmit, handleEmail, handlePassword} = useLoginHandler();
    useUserRedirect();

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder='email' className='w-full text-black border border-gray-300 px-5 py-2 rounded block' type="email" onChange={handleEmail} value={email} required />
            <input placeholder='password' className='w-full text-black border border-gray-300 px-5 py-1 rounded my-5 block' type="password" onChange={handlePassword} value={password} required />
            <button type="submit" className="w-full text-black bg-gray-300 px-5 rounded py-2">Submit</button>
        </form>
        </>
    )
}