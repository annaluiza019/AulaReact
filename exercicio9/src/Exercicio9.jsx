export default function Exercicio9({capital, juros, tempo})
{
  let montante = capital * Math.pow(1 + juros / 100, tempo);
  return (
    <div>
        O capital é: {capital} <br/>
        O juros é: {juros} <br/>
        O tempo é: {tempo} <br/>
        A montante é: {montante} 
    </div>
  );
}