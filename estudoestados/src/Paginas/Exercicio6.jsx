import { useState } from "react";
export default function Exercicio6 ()
{ 
    const[quantidade, setQuantidade] = useState(0);
    const[preco, setPreco] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular()
    {
      let subtotal, desconto, vfinal;

      subtotal = Number(quantidade) * Number(preco);
      desconto = Number(subtotal) * 0.10;
      vfinal = Number(subtotal) - Number(desconto);

      setResultado("subtotal: " + subtotal + " desconto: " + desconto + " valor final: " + vfinal );
    }

    return (
        <div> 
            <h1> Exercício 6 </h1>

        <div className= "conteudo" >

        <form> 
            <p> Digite a quantidade: <br />
               <input type= "text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/> 
            </p>

            <p> Digite o preço: <br />
               <input type= "text" value={preco} onChange={(e) => setPreco(e.target.value)}/> 
            </p>

            <p> 
                <input type="button" value= "Exercício 6 💕" onClick={calcular}/> 
            </p>

            <p> 
                <b>Resultado</b>
                <br/> 
                Valor quantidade é {quantidade} <br/> 
                Valor preco é {preco} <br/> 
                Resuldado é: {resultado} 
            </p>

            <p> 
                <a href="/" >Voltar</a>
            </p>
            
        </form>    
     </div>
    </div>
    );
}