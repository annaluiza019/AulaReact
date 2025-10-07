import { useState } from "react";
export default function Exercicio2 ()
{ 

    const[numero, setNumero] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular()
    {
      let temp;

      temp = ((Number(numero) - 32) * 5)/ 9;

      setResultado("Temperatura Celcius: " + temp );
    }

    return (
        <div> 
            <h1> Exercício 2 </h1>

        <div className= "conteudo">

            <h3>Calculo temperatura</h3>

        <form> 
            <p> Digite a temperatura em graus Fahrenheit:<br />
                <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} /> 
            </p>

            <p> 
                <input type="button" value= "Exercício 2 💕" onClick={calcular} /> 
            </p>

            <p> 
                <b>Resultado</b>
                <br/> 
                Número é {numero} <br/> 
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