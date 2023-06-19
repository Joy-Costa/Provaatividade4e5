let nome = document.getElementById ("nome")
let notahtml = document.getElementById ("notahtml")
let notacss = document.getElementById ("notacss")
let notajava = document.getElementById ("notajava")
let aprovacao = document.getElementById ("aprovacao")
let resposta = document.getElementById ("resposta")

function Aperte()
{
    switch(nome.value)
    {
      case "fulano":
      notahtml.innerHTML = ("Nota HTML = 10"); 
      notacss.innerHTML = ("Nota CSS = 10");
      notajava.innerHTML = ("Nota Javascript = 9")
      aprovacao.innerHTML = ("APROVADO")
      break;

      case "fulaninho":
      notahtml.innerHTML = ("Nota HTML = 10"); 
      notacss.innerHTML = ("Nota CSS = 9");
      notajava.innerHTML = ("Nota Javascript = 8")
      aprovacao.innerHTML = ("APROVADO")
      break;

      case "fulaninho de tal":
      notahtml.innerHTML = ("Nota HTML = 6"); 
      notacss.innerHTML = ("Nota CSS = 5");
      notajava.innerHTML = ("Nota Javascript = 7")
      aprovacao.innerHTML = ("REPROVADO")
      break;

      default:
      resposta.innerHTML = ("Inexistente")
      break;
    }
    
}





































