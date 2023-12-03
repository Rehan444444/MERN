import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

const Login = ({setLoginUser}) => {
  const navigate= useNavigate()
  const [user, setUser] = useState({

    email: "",
    password: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const Login1 = () => {
   

    axios.post("http://localhost:9002/Login1", user)
      .then(res => {alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
      
      

    })

  }
  return (
    <>
      {console.log("user", user)}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-44 w-44" src={Logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" value={user.email} onChange={handleChange} type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <p className="font-semibold text-blue-600 hover:text-indigo-500">Forgot password?</p>

                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" value={user.password} onChange={handleChange} type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={Login1} >Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link to='/Signup'><a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-700"> Create a Account</a></Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
