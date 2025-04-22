export default function Exercicio1({ fah }) 
{
    let celsius = (fah - 32) * 5 /9;

    return (
        <div> 
            A temperatura {fah} °F em Celcius é {celcius} °C. 
        </div>
    )
}

