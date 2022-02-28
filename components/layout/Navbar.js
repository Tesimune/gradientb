import React from 'react';
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
    return (
        <React.Fragment>

            <div className='flex justify-between border-b p-5'>

                <a href="#" rel="">
                    <span>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={14} />
                    </span>
                    {' '}GradienB
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