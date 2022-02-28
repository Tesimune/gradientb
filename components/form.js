import {useState} from 'react';


export const Input = (props) => {

    const [bg, setBG] = useState('#55fcfe')
    const handleChange = (e) => setBG(e.target.value);

    return(
        <div>
            <label htmlFor='set-color' className={`text-xl`}>{props.label}</label>
            <input {...props} className='bg-slate-400 m-2' type='color' />
        </div>
    )
}

