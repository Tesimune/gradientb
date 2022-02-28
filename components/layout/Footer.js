import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="flex justify-center bg-slate-300 p-0 font-bold">
        <a href="#" rel="">
          Powered by{' '}
          <span>
            <Image src="/gradientb.png" alt="GradientB Logo" width={18} height={16} />
          </span>
          {' '}GradientB
        </a>
      </footer>
     );
}
 
export default Footer;