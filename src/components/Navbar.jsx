export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Most Popular</a></li>
              <li><a>Most Recent</a></li>
              <li><a>Classic</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl">My Games List</a>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="data:image/jpeg;base64,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" />
              </div>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </>
  )
}
