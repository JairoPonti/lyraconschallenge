import React, { useContext } from 'react'
import { ThemeContext } from '../context/GeneralContext'
import './aside.css'


const Aside = () => {

    const { interruptor, sideColor } = useContext(ThemeContext)
    console.log(sideColor)
 
    return (
      
        <div className={sideColor}>
            {interruptor === 'on' ? <p>Hola mundo!</p> : null}
            {/* <script type="text/javascript">
            $('#accesoGlobal').change(function() {
             alert("escuchando")
    } 
 
            </script> */}
         
       </div>  
    )
}

export default Aside
