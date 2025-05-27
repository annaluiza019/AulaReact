export default function Exercicio7({ n1,n2,n3})
{
    let media = (n1+n2+n3)/3;
    return (
        <div> 
            Nota 1: {n1} <br/>
            Nota 2: {n2} <br/>
            Nota 3: {n3} <br/>

            A média aritimética das notas é: {media}
        </div>
    );
}