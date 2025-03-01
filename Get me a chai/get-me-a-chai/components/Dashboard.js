"use client"
import React,{useEffect,useState} from "react"
import { useSession,signIn,signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {

    const{data : session} = useSession()
    const router = useRouter()
    const [form, setForm] = useState({})

    useEffect(()=> {
        if(!session){
            router.push('/login')
        }
    },[router,session])

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <div className="container mx-auto py-5">
  <h1 className="text-center my-5 text-3xl font-bold">Welcome to your Dashboard</h1>
  <form className="max-w-2xl mx-auto">
    {/* Name Field */}
    <div className="my-2">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Name
      </label>
      <input
        value={form.name ? form.name : ""}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    {/* Email Field */}
    <div className="my-2">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Email
      </label>
      <input
        value={form.email ? form.email : ""}
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    {/* Username Field */}
    <div className="my-2">
      <label
        htmlFor="username"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Username
      </label>
      <input
        value={form.username ? form.username : ""}
        onChange={handleChange}
        type="text"
        name="username"
        id="username"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    {/* Profile Picture Field */}
    <div className="my-2">
      <label
        htmlFor="profile-picture"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Profile Picture URL
      </label>
      <input
        value={form.profilePicture ? form.profilePicture : ""}
        onChange={handleChange}
        type="text"
        name="profilePicture"
        id="profile-picture"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    {/* Cover Picture Field */}
    <div className="my-2">
      <label
        htmlFor="cover-pic"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Cover Picture URL
      </label>
      <input
        value={form.coverPic ? form.coverPic : ""}
        onChange={handleChange}
        type="text"
        name="coverPic"
        id="cover-pic"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    {/* Razorpay id */}
    <div className="my-2">
      <label
        htmlFor="razorpayid"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Razorpay ID
      </label>
      <input
        value={form.razorpayid ? form.razorpayid : ""}
        onChange={handleChange}
        type="text"
        name="razorpayid"
        id="razorpay"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

     {/* Razorpay Secret Field */}
     <div className="my-2">
      <label
        htmlFor="razorpaysecret"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Razorpay Secret
      </label>
      <input
        value={form.razorpaysecret ? form.razorpaysecret : ""}
        onChange={handleChange}
        type="text"
        name="razorpaysecret"
        id="razorpaysecret"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    {/* Submit Button */}
    <div className="my-5">
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm"
      >
        Save
      </button>
    </div>
  </form>
</div>

  )
}

export default Dashboard
