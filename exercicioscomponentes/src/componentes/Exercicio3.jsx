export default function Exercicio3({ valor, tempo, taxa }) 
{
    let valorparcela = valor + (valor * (taxa*taxa/ 100) * tempo ); 

    return (
        <div> 
           valor: R$ {valor}
           Taxa: {taxa}%
           Tempo: {tempo}
           O valor da parcela em atraso é {valorparcela}  
        </div>
    )
}
