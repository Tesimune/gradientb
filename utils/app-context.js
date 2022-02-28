import {createContext, useEffect, useState} from "react";
import {generateGradients} from "./generateGradient";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [state, setState] = useState({
        openModal: false,
        html: "<div class='nav'> <a href='#' class='icon'> <span> <Image src='/gradientb.png' alt='GradientB Logo' width='18' height='14' /> </span> <b class='mx-1'>GradienB</b> </a> <nav> <ul class='li'> <a href='#templates'><li class='mx-1'>Templates</li></a> <a href='#about'><li class='mx-1'>About</li></a> <li class='mx-1'>FAQ</li> </ul> </nav> </div><style> .icon{ display: flex; } .nav{ display: flex; justify-content: space-between; padding: 20px; border-bottom-width:1px ; } .li{ display: flex; text-transform: uppercase; font-weight: 600; } .mx-1{margin-left: 4px; margin-right: 4px;}</style>",
        bg: {
            topRight: "#00fadd",
            topLeft: "#07b4ed",
            bottomRight: "#88bebf",
            bottomLeft: "#8e70e1",
        },
        templates: generateGradients(6)
    });

    const toggleModal = () => setState({...state, openModal: !state.openModal})
    const setHTML = (e) => setState({...state, html: e.target.value})
    const setBG = e => {
        const bg = state.bg;
        bg[e.target.name] = [e.target.value]
        setState({...state, bg})
    }
    const gradient = {
        backgroundImage: `linear-gradient(to right, 
            ${state.bg.topLeft} , ${state.bg.topRight}, ${state.bg.bottomLeft}, ${state.bg.bottomRight})`
    }

    const shuffleTemplates = () => {
        const linearGradient = (colors) => {
            return `linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)`
        }
        const radialGradient = (colors) => {
            return `radial-gradient(red 5%, yellow 15%, green 60%)`
        }
        setState({...state, templates: generateGradients(6)})
    }

    return(
        <AppContext.Provider value={{
                ...state, toggleModal, setHTML, setBG, gradient, shuffleTemplates
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;