import React, { useContext } from 'react'
import { ThemeContext } from '../context/GeneralContext'
import './aside.css'


const Aside = () => {

    const { interruptor, sideColor, accesoGlobal } = useContext(ThemeContext)
    console.log(sideColor)
    console.log(accesoGlobal)
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
