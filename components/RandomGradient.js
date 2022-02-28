import {generateColor} from "../utils/generateGradient";

export default function RandomGradient(props) {

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(props.gradient)
    }

    return(
        <div className='bg-slate-500 text-slate-800 m-3 h-80 rounded shadow-2xl hover:shadow-lg mt-2 flex flex-col gap-4 p-3 items-flex'>
            <div className="flex-grow rounded" style={props.style} />
            <button onClick={copyToClipboard}
                className='bg-blue-500 p-2 rounded font-bold shadow-lg hover:bg-blue-300'>
                Copy to Clipboard
            </button>
        </div>
    )
}