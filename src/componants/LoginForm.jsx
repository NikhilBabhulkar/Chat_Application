import React, { useState } from 'react'
import axios from 'axios'


function LoginForm() {

    const [username,SetUserName] = useState('')
    const [password,SetPassword] = useState('')
    const [error,setError] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const authObject = {'project-ID':'2a36fd2e-7e30-488e-9763-2678836211aa','User-Name':username,'User-Secret':password}
        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject})
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)

            window.location.reload()

        } catch (error) {
            setError('Opps','incorrect Credential')
        }
    }

  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application </h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=> SetUserName(e.target.value)} className='input' placeholder='USERNAME' required/>
                <input type="text" value={password} onChange={(e)=> SetPassword(e.target.value)} className='input' placeholder='PASSWORD' required/>
                <div align='center'>
                    <button type='submit' className='button'>
                        <span>Start Chatting</span>
                    </button>

                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm