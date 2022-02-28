import RandomGradient from "../RandomGradient";
import {useContext} from "react";
import {AppContext} from "../../utils/app-context";


export default function Templates() {

    const {templates, shuffleTemplates} = useContext(AppContext);

    return(
        <div className='bg-transparent text-gray-900 md:p-5 md:m-16 rounded shadow-lg'>
            <div className="flex justify-between">
                <span className='md:font-semibold font-bold uppercase'>Templates</span>
                <button onClick={shuffleTemplates}>Reshuffle</button>
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