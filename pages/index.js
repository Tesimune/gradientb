import Layout from "../components/layout";
import {Input} from "../components/form";
import About from "../components/About";
import Templates from "../components/Templates";
import {useContext} from 'react';
import Textarea from "../components/Textarea";
import {AppContext} from "../utils/app-context";

export default function Home(){

    const {toggleModal, html, bg, setBG, gradient} = useContext(AppContext);

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(gradient.backgroundImage)
    }

    return (
        <Layout>
            <main className='bg-slate-300 p-2'>

                <div className="hidden md:block">
                    <div className='grid grid-cols-5'>

                        <div dangerouslySetInnerHTML={{__html: html}} style={gradient}
                            className='relative col-span-4 mx-5 mt-8 h-96 rounded shadow-2xl overflow-auto'>
                        </div>

                        <div className='bg-slate-500 font-bold text-slate-800 m-3 h-full rounded shadow-2xl'>

                            <div className="flex justify-center ">
                            <button className="bg-blue-500 m-3 p-2 w-full rounded shadow-xl uppercase font-bold" onClick={toggleModal}>HTML & CSS</button>

                            </div>

                            <div className="grid grid-cols-2 justify-center m-3 p-2 rounded shadow-xl" style={gradient}>
                                <Input label="GB" onChange={setBG} name="topLeft" value={bg.topLeft} />
                                <Input label="GT" onChange={setBG} name="topRight" value={bg.topRight} />
                                <Input label="GR" onChange={setBG} name="bottomLeft" value={bg.bottomLeft}/>
                                <Input label="GL" onChange={setBG} name="bottomRight" value={bg.bottomRight}/>
                            </div>

                            <div className="m-3 h-28" style={gradient} />

                            <div className="flex justify-center bg-blue-500 m-3 p-2 rounded shadow-xl ">
                                <button onClick={copyToClipboard} className="uppercase font-bold w-full">
                                    Copy to Clipboard
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="hidden xm:block"> */}
                    <div className="bg-red-400 p-3 m-3 rounded font-semibold grid justify-items-center md:hidden">
                        <span>Oops GradientB!!!</span>
                        <span>not available on mobile view</span><br></br>
                        <span>switch to Desktop mode to view</span>
                    </div>

                <About />

                <Templates />

                <Textarea />

            </main>

        </Layout>
    )
}