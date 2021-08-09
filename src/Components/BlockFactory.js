import React from 'react';
import Block from './Description';
import Black from '../images/MONO BLACK.png';
import Colour from '../images/COLOURWAY 2.png';

//Objects can be added to the 'inside' variable with text and logo properties to create new 'blocks'.

const BlockFactory = (props) => {
    const inside = [
        {text: 'TACO NOT TACO serves traditional Mexican tacos with non-traditional fillings. We Serve Our Tacos from an iconic Mercedes 508D',
        logo: Black}
]


    return (
    <section>
        {inside.map((ary) => (
        <Block in={ary.text} logo={ary.logo}/>
        ))}
    </section>
    )
}

export default BlockFactory
