export default function Exercicio8({peso, altura})
{
  let imc = peso/(altura*altura);
  return (
    <div>
        O peso é: {peso} <br/>
        A altura é: {altura} <br/>
        O IMC é: {imc} 
    </div>
  );
}
