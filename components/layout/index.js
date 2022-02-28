import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
    return(

        <div className='bg-slate-300 m-0 h-screen'>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}