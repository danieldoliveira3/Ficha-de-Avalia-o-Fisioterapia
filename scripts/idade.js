/*funcao para calcular a idade*/
function Idade() {
    hoje = new Date;
    dataDeNascimento = new Date($("#data-de-nascimento").val());
    var diferencaAnos = hoje.getFullYear() - dataDeNascimento.getFullYear();
    if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
      new Date(hoje.getFullYear(), dataDeNascimento.getMonth(), dataDeNascimento.getDate()))
      diferencaAnos--;
    $("#idade").val(diferencaAnos);
  
  }