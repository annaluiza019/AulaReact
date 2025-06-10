export default function Exercicio11({custo})
{
  let custodist = Number (custo)*0.28;
  let impostos = Number (custo)*0.45;
  let custofinal = Number(custo) + Number (custodist)+ Number (impostos)
  return (
    <div>
        Valor custo de Fábrica: {custo} <br/>
        Valor custo do distribuidor: {custodist}<br/>
        Valor dos impostos: {impostos}<br/>
        Valor Final: {custofinal}
    </div>
  );
}