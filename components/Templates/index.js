import RandomGradient from "../RandomGradient";
import {useContext} from "react";
import {AppContext} from "../../utils/app-context";


export default function Templates() {

    const {templates, shuffleTemplates} = useContext(AppContext);

    return(
        <div className='bg-transparent text-gray-900 md:p-5 md:m-16 rounded shadow-lg'>
            <div className="flex justify-between">
                <span className='md:font-semibold font-bold uppercase'>Templates</span>
                <button onClick={shuffleTemplates} className='flex mx-9'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Reshuffle</span>
                </button>
            </div>
            <div className='grid md:grid-cols-3 md:m-12' id='templates'>

                {templates.map(template => (
                    <RandomGradient
                        key={template}
                        gradient={template}
                        style={{backgroundImage: template}}
                    />
                ))}

            </div>
        </div>
    )
}