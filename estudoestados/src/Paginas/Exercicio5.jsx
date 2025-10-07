import { useState } from "react";
export default function Exercicio5 ()
{ 
    const[lado, setLado] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular()
    {
      let area;

      area = Number(lado) * Number(lado);

      setResultado("Valor área: " + area );
    }

    return (
        <div> 
            <h1> Exercício 5 </h1>

        <div className= "conteudo" >

            <h3> Valor lado</h3>

        <form> 
            <p> Digite o valor do lado: <br />
               <input type= "text" value={lado} onChange={(e) => setLado(e.target.value)}/> 
            </p>

            <p> 
                <input type="button" value= "Exercício 5 💕" onClick={calcular}/> 
            </p>

            <p> 
                <b>Resultado</b>
                <br/> 
                Valor lado é {lado} <br/> 
                Resuldado é {resultado} 
            </p>

            <p> 
                <a href="/" >Voltar</a>
            </p>
            
        </form>    
     </div>
    </div>
    );
}