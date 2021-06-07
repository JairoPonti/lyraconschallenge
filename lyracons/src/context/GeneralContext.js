import React, { useState } from 'react'
export const ThemeContext = React.createContext()

const GeneralContext = (props) => {
    const [interruptor, setInterruptor] = useState('off')
    const [sideColor, setSidecolor ] = useState('aside')
    const [interruptorItems, setInterruptorItems] = useState('off')
    const accesoGlobal = 'tres'
    console.log(sideColor)
    return (
        <ThemeContext.Provider value={{setInterruptor, interruptor, sideColor, setSidecolor, accesoGlobal, setInterruptorItems, interruptorItems}}>
            {props.children}
        </ThemeContext.Provider >
    )
}

export default GeneralContext
