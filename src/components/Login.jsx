import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="h-screen md:flex">
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-amber-400">
          <form className="bg-amber-400">
            <h1 className="text-white font-bold text-2xl mb-1">Emanate</h1>
            <p className="text-sm font-normal text-white mb-7">Login</p>
              <div className="flex bg-amber-500 items-center  py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                </svg>
                <input className="pl-2 bg-amber-500 placeholder-white outline-none border-none" type="text" name="" id="" placeholder="Email" />
            </div>
                  <div className="flex bg-amber-500 items-center  py-2 px-3 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                      fill="currentColor">
                    </svg>
                    <input className="pl-2 outline-none placeholder-white bg-amber-500 border-none" type="text" name="" id="" placeholder="Password" />
            </div>  
                  <Link to='/dashboard'>
                    <button type="submit" className="block w-full bg-white hover:bg-amber-600 mt-4 py-2 rounded-2xl hover:text-white text-amber-600 font-bold mb-2">Log in</button>
                    <span className="text-sm ml-2 hover:text-blue-800 cursor-pointer">Forgot Password ?</span>
                  </Link>
          </form>
        </div>
        <div
          className="relative overflow-hidden md:flex w-1/2 bg-amber-500 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Welcome!</h1>
            <p className="text-white mt-1">If you do not have an account, sign up here</p>
            <Link to='/signup'>
            <button type="submit" className="block w-28 bg-white hover:bg-amber-600 hover:text-white text-amber-600 mt-4 py-2 rounded-2xl font-bold mb-2">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}