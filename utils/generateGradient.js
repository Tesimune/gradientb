
export function generateColor() {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const A = 1;
    return `rgba(${R}, ${G}, ${B}, ${A})`;
}

export function generateColors(count){
    let colorsArray = [];
    for (let num = 1; num <= count; num++){colorsArray.push(generateColor());}
    return colorsArray;
}

export function generateGradient(){
    const colors = generateColors(3);
    const bgs = [
        `linear-gradient(140deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 75%)`,
        // `radial-gradient(circle, ${colors[0]} 0%, ${colors[2]} 100%)`
    ];

    // return bgs[Math.floor(Math.random() * 2)]
    return bgs[0];
}

export function generateGradients(count){
    let gradientsArray = [];
    for (let num = 1; num <= count; num++){gradientsArray.push(generateGradient());}
    return gradientsArray;
}