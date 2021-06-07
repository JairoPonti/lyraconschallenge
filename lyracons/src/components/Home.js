import React, { useContext }  from 'react'
import Card from './Card'
import Aside from './Aside'
import  './Home.css'
import Data from './Data'
import { ThemeContext } from '../context/GeneralContext'

const Home = () => {

    const { interruptorItems } = useContext(ThemeContext);
    return (
        <div className="Home">
        <Aside/>
        {interruptorItems === 'off' 
           ?
           <div className="contieneCards">
           {Data.map((p)=> {
               return  < Card 
               titulo={p.titulo}
               marca={p.marca}
               precio={p.precio} />
           })}
           </div>
            : null}
      
        </div>
    )
}

export default Home
