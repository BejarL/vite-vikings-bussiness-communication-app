import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <>
      <div className="h-screen md:flex">
        <div className="flex md:w-full justify-center py-10 items-center bg-amber-500">
          <form className="bg-amber-500">
            <h1 className="text-white font-bold text-2xl mb-1">Emanate</h1>
            <h2 className="text-white font-bold text-2xl mb-1">
              Forgot your password?
            </h2>
            <p className="text-sm font-normal text-white mb-7">
              Please enter the email address you would like your
              password reset information sent to
            </p>
            <div className="flex items-center bg-amber-400 py-2 px-3 rounded-2xl mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-gray-400" 
                fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
              </svg>
              <input 
                className="pl-2 bg-amber-400 placeholder-white outline-none border-none" 
                type="email" 
                name="" 
                id="" 
                placeholder="Email" />
            </div>
            <button 
              type="submit" 
              className="block w-full bg-white hover:bg-amber-600 hover:text-white  text-amber-600 mt-4 py-2 rounded-2xl font-bold mb-2">
                Request reset link
              </button>
            <Link to='/'> 
            <button 
              type="submit" 
              className="block w-full hover:bg-white bg-amber-600 text-white hover:text-amber-600 mt-4 py-2 rounded-2xl font-bold mb-2">
                Back to log in
            </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword