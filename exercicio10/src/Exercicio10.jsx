export default function Exercicio10({dist, velo})
{
  let tempo = Number(dist)/ Number (velo);
  return (
    <div>
        A distancia é: {dist} Km <br/>
        A velocidade é: {velo}Km/h<br/>
        O tempo estimado de viagem é: {tempo} Horas
    </div>
  );
}