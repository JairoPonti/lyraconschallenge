import React from 'react'
import Card from './Card'
import Aside from './Aside'
import  './Home.css'
import Data from './Data'

const Home = () => {
    return (
        <div className="Home">
        <Aside/>
        <div className="contieneCards">
        {Data.map((p)=> {
            return  < Card 
            titulo={p.titulo} />
        })}
        </div>
        </div>
    )
}

export default Home
