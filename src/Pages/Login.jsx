import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail]= useStateate ('')
    const [password, setPassword] = useState('')
    const {user, logIn } = UserAuth ()
    const navigate = useNavigate ()

    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            navigate('/')
        }catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-ful object-cover' src='https://www.logitheque.com/en/wp-content/uploads/sites/6/2019/07/netflix-image.jpg' alt='/' />
            <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen  '></div>
            <div className='fixed w-full px-4 py-24 z-50 '>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        <form onSubmit={handleSumbit } className='w-full flex flex-col py-4'>
                            <input className='p-3 my-2 bg-gray-500 rounded' type="email" placeholder='Email' autoComplete='email' />
                            <input className='p-3 my-2 bg-gray-500 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                                <p className='py-8 text-gray-600'>Haven't Subscribe to Netflix yet? <span className='text-white'><Link to='/signup'>Sign Up</Link></span></p>
                        </form>
                    </div>

                </div>
            </div>

    </div></>
  )
}

export default Login