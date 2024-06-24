import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link className="font-semibold hover:text-primary duration-300" href={'/'}>Home</Link>
      </li>

      <li>
        <Link href={'/services'}>Services</Link>
      </li>
      <li>
        <Link href={'/guides'}>Guides</Link>
      </li>
      <li>
        <Link href={'/provider'}>Become a service provider</Link>
      </li>
    </>
  );
  return (
  <div className="bg-base-100 shadow">
      <div className="navbar flex justify-around container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link href={'/'}>
        <Image
        className="object-cover"
        src="/logo.png"
        alt=""
        width={100}
        height={60}
        />
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end ">
      <label className="input w-xs input-bordered flex items-center gap-0 rounded-full">
  <input type="text" className="w-32  max-w-xs" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        <Link href="/log in" className="bg-[#F0EEFF] btn rounded-full">
          Log In
        </Link>
        <Link href="/dashboard" className="btn text-white bg-[#5F4BDB] rounded-full">
          Sign Up
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
