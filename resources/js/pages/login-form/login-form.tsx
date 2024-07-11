import React from "react";
import useLoginHandler from "../../custom-hooks/useloginhandler";
import useUserRedirect from "../../custom-hooks/useUserRedirect";

export default function LoginForm() {

    const {email, password, handleSubmit, handleEmail, handlePassword} = useLoginHandler();
    useUserRedirect();

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder='email' className='border border-black' type="email" onChange={handleEmail} value={email} required />
            <input placeholder='password' className='border border-black' type="password" onChange={handlePassword} value={password} required />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}