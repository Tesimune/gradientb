import Portal from "../utils/Portal";
import {useContext, createRef} from "react";
import {AppContext} from "../utils/app-context";


export default function Textarea(){

    const {openModal, toggleModal, html, setHTML} = useContext(AppContext)

    if (!openModal) return null

    return(
        <Portal portalID="modal">
            <div className="fixed top-0 left-0 w-screen h-screen bg-grat-100">
                <div className="p-10">

                    <textarea
                        className="block w-full p-5 resize-none h-96 focus:shadow rounded-lg outline-none bg-gray-500"
                        onChange={setHTML} // handle innerHTML change
                        value={html}
                    />

                    <button className="mt-10 rounded-lg text-lg shadow px-5 py-3 bg-blue-500 text-white font-bold"
                            onClick={toggleModal}>
                        Submit
                    </button>

                </div>
            </div>
        </Portal>
    )
}