import { useState } from "react";
export default function Exercicio1 ()
{ 

    const[numero, setNumero] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular()
    {
      let quadrado, cubo;

      quadrado = Number(numero) * Number(numero);
      cubo = Number(numero) * Number(numero) * Number(numero);

      setResultado("Quadrado: " + quadrado + " Cubo: " + cubo );
    }

    return (
        <div> 
            <h1>Exercício 1</h1>
     
        <div className="conteudo"> 

        <h3> Calculo do quadrado/cubo</h3>

         <form> 
            <p>
              Digite um número qualquer:<br />
              <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
            </p>

            <p>
              <input type="button" value="Calcular💕" onClick={calcular} />
            </p>

            <p> 
                <b>Resultado</b>
                <br/> 
                Número é {numero} <br/> 
                Resuldado é {resultado} 
            </p>

            <p> 
                <a href="/"> Voltar </a>
            </p>
        </form>
    </div>
    </div>
    );
}