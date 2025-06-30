"use client"
import React from 'react'
import { useState } from 'react'
 
interface FormDataInterface {
     
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;

}

const SignupPage = () => {


    const [formData, setFormData] = useState<FormDataInterface>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    });

    const [errors, setErrors] = useState<string>("");


    // Form Validation
    const handleSubmit = async (event: any) {
        event.preventDefault();



        const {username, email, password, confirmPassword, terms} = formData;

        if(!username) {
            setErrors("Username is required");
            return;
        }
        if(username.length < 3) {
            setErrors("Username must be at least 3 characters");
            return;
        }

        if(!email) {
            setErrors("Email is required");
            return;
        }

        if(!password) {
            setErrors("Password is required");
            return;
        }

        if(password.length < 8) {
            setErrors("Password must be at least 8 characters");
            return;
        }

        if(password !== confirmPassword) {
            setErrors("Password and Confirm Password must match");
            return;
        }

        if(!formData.terms) {
            setErrors("You must agree to the terms and conditions");
            return;
        }

        //  Connect to the backend API
        try {
            const response = await fetch(`${backendUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    
    }

   


  return (
    <div className='bg-blue-50 flex items-center justify-center min-h-screen container mx-auto px-6 py-12'>
         <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">

            {/* Create Form */}
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
        {errors && <p className="text-red-500 text-center mb-4">{errors}</p>}
        
        {/* Form */}
        <form action="#" method="POST">
            <div className="mb-5">

                {/* Username  */}
                <label className="block text-gray-700 font-medium mb-2">Username</label>
                <input 
                value={formData.username} 
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                type="text" id="name" name="name" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-5">

                {/* Email */}
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email" id="email" name="email" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-5">

                {/* Password */}
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input 
                value={formData.password} 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password" id="password" name="password" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-5">

                {/* Confirm Password  */}
                <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input 
                value={formData.confirmPassword} type="password" id="confirm_password" 
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} 
                name="confirm_password" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            
            <div className="flex items-center mb-5">
                {/* Terms and Conditions */}
                <input checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} type="checkbox" id="terms" name="terms" 
                className="mr-2" />
                <label htmlFor="terms" className="text-gray-700">I agree to the <a href="#" className="text-green-500 hover:underline">terms and conditions</a></label>
            </div>
            {/*  */}
            <button onClick={handleSubmit} type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300">Register</button>
        </form>
        <p className="mt-6 text-center text-gray-600">Already have an account? <a href="/login" className="text-green-500 hover:underline">Sign in</a></p>
    </div>
    </div>



  )

}

export default SignupPage