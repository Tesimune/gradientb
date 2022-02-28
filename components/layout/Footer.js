import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="flex justify-center bg-slate-300 p-0">
        <a href="#" rel="">
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
     );
}
 
export default Footer;