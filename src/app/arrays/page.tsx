"use client"
import {useState,useEffect} from "react"
export default function Home() {

  const [valor1,setValor1]=useState(1)
  const [valor2,setValor2]=useState(10)
  const [aleatorio,setAleatorio]=useState(0)

  const verValor1 = (e:any) =>{     
    setValor1(e.target.value)
  }

  const verValor2 = (e:any) =>{     
    setValor2(e.target.value)
  }

  const nmAleatorio = () =>{   
    setAleatorio((Math.floor(Math.random()* (valor2 - valor1 + 1))) + Math.floor(valor1))
  }

    return (
      <>
        <div className="container-fluid text-white text-center">
          <div className="colum-3 text-black">
            <div>
              <div className="mt-5">
                <p></p>
              </div>
              
                <input className="text-center m-2" type="text" min={1} value={valor1} onChange={verValor1}/>

                <input className="text-center heit-10 m-2" type="text"  min={10} value={valor2}onChange={verValor2} />
              <p className="mt-2">Número</p>  
              <p>{aleatorio}</p>

              <button type="button" className="btn btn-success"onClick={nmAleatorio}>Gerar</button>
          </div>
            </div>
        </div>    
        
      </>
        
    )
    
}
