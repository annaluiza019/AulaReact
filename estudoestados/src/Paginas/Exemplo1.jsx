import {useState} from "react" ; 

export default function Exemplo1() {

  const[numero1, setNumero1] = useState(0);
  const[numero2, setNumero2] = useState(0);
  const[resultado, setResultado] = useState();

  function somar()
  {

  }

  function limpar()
  {

  }
  
  return (
    <div>
      <h1>Exemplo 1</h1>

      <div className="conteudo">
        
        <h3> Exemplo de uso do useState 🎀</h3>

          <p>
            O objetivo será somar dois números e exibir o resultado na tela
          </p>

          <form>
            <p>
              Digite o primeiro número <br />
              <input type="text" />
            </p>

            <p>
              Digite o segundo número <br />
              <input type="text" />
            </p>

            <p>
              <input type="button" value="Calcular 💕" />
            </p>

            <p> 
              <a href="/"> voltar </a>
            </p>

       </form>
     </div>
    </div >
  );
}
