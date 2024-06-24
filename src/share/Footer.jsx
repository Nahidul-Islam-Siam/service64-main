import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin,  FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
    return (
    <div className=''>
       <div>
       <footer className="  footer bg-[#1F2131] text-white   p-10">
        <aside>
        <Image className='object-cover h-auto' alt='' src={'/logo2.png'} height={60} width={100}/>
          <p className=''>
          We are a directory website, where we have a large <br /> number of hand vetted professionals to answer your call <br /> and get the problem solved.
          </p>
          <div className='flex space-x-3'>
         < FaFacebook />
         <FaTwitter/>
         <FaYoutube/>
         <FaLinkedin/>
         <FaInstagram/>
          </div>
        </aside>
        <nav>
          <h6 className="text-xl font-semibold">Ziro</h6>
          <a className="link link-hover">Why Ziro</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Customer Story</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold">Resources</h6>
          <a className="link link-hover">Download</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Guides</a>
          <a className="link link-hover">Partner</a>
          <a className="link link-hover">Directories</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Login</a>
          <a className="link link-hover">Sign Up</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold">Get in Touch with Us</h6>
          <a className="link link-hover  flex gap-2"><IoLocationOutline size={20}/> 832  Thompson Drive, San Fransisco <br />
          CA 94107, United States</a>
       
          <a className="link link-hover  flex gap-2"><BsTelephone size={20}/> +123 345123 556</a>
          <a className="link link-hover  flex gap-2"><MdOutlineMailOutline size={20}/>support@ziro.id</a>
          
        </nav>
      </footer>
       </div>
   <div>
   <footer className="footer bg-[#1F2131] text-white items-center p-4">
      <aside className="grid-flow-col items-center">
        
        <p>Copyright @{new Date().getFullYear()} - Service64.com | All Rights Reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        
        
        <a>
        Privacy Policy
        </a>
      </nav>
    </footer>
   </div>
    </div>
    );
};

export default Footer;