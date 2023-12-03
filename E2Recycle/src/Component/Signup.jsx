import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
    const [user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        repassword:"",
       

    })

    const handleChange= e=>{
        const {name, value }= e.target 
        setUser({
            ...user,
            [name]:value
        })
    }

    const Signup1=()=>{
        const {name,email, password,repassword}= user
        if(name && email && password &&(password===repassword)){
            // alert("Sign-up Successfully")
            axios.post("http://localhost:9002/Signup1",user)
            .then(res=>alert(res.data.message))
        }else{
            alert("Fill Form properly")
        }
       
    }
  return (
    <>
    {console.log("user", user)}
      <section class="bg-gray-50  dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-44 h-44 mr-2" src={Logo} alt="logo"/>
          
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
            
              <htmlForm class="space-y-4 md:space-y-6" action="#">
                 
                  <div>
                      <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type='text' name="name" value={user.name} onChange={handleChange}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required=""/>
                  </div>
                  <div>
                      <label htmlhtmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type='text' name="email" value={user.email} onChange={handleChange}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type='password' name="password" value={user.password} onChange={handleChange}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="repassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">comfirm-Password</label>
                      <input type='password' name="repassword" value={user.repassword} onChange={handleChange}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <div class="flex items-start">
                  <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label htmlFor="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 " onClick={Signup1} >Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to='/Login'><a href="#" class="font-medium text-blue-600 hover:underline dark:text-primary-500">Login here</a></Link>
                  </p>
              </htmlForm>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Signup
