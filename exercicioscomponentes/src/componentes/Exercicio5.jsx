export default function Exercicio5 ({quant})
{
  let salario = (quant*150)
  let desconto = (salario*0.08)
  let salarioliqu = (salario-dsconto)
  return (
    <div>
        Quantidade de consultas: (quant)
        Salário Bruto: R$ (salario)
        Desconto INSS: R$ (desconto)
        Slário liquido: R$ (salarioliqu)
    </div>
  )
};
