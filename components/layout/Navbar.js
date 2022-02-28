import React from 'react';
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
    return (
        <React.Fragment>

            <div className='flex justify-between border-b p-5'>

                <a href="#" rel="" className='font-bold'>
                    <span>
                        <Image src="/gradientb.png" alt="BradientB Logo" width={18} height={14} />
                    </span>
                    {' '}GradientB
                </a>

                <nav>
                    <ul className='flex uppercase font-semibold text-blue-500'>
                        <a href='#templates'><li className='mx-1'>Templates</li></a>
                        <a href='#about'><li className='mx-1'>About</li></a>
                        <a href='#faq'><li className='mx-1'>FAQ</li></a>
                    </ul>
                </nav>
            </div>

        </React.Fragment>

     );
}
 
export default Navbar;