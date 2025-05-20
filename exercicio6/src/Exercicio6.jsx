export default function Exercicio6({quant,preco})
{
    let subtotal= (quant*preco);
    let desconto= subtotal*0.10 
    let valorF= subtotal- desconto

    return (
    <div> 
        subtotal :R${subtotal}
        <br></br>
        desconto : R${desconto}
        <br></br>
        valor final: R${valorF}
    </div>
    ); 
}