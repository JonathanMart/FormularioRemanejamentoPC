
/*variaveis */
const tela = document.getElementById("dadospessoais") // tela de dados pessoais tela 1
const tela2 = document.getElementById("formularioremanejamento") //tela de remanejamento tela 2
const mensagem = document.getElementById("mensagem") // div de mensagem de autenticidade


const nomeuser = document.getElementById("nomeuser") //input nome do usuario na tela1
const ramaluser = document.getElementById("ramaluser")//input ramal do usuario na tela1
const emailuser = document.getElementById("emailuser")//input email do usuario na tela1



const campodispositivo = document.getElementById("campodispositivo") // input campo do dispositivo da tela 2
const  selecionardispositivos = document.getElementById("selecionardispositivos") // select do dispositivo
    
const numeroramal = document.getElementById("numeroramal") // input do ramal da tela 2
const campodoRamal = document.getElementById("campodoramal")   //  campo do ramal da tela 2

const numeroPatrimonio = document.getElementById("numeropatrimonio") //input numero do patrimonio tela 2
const campoPatrimonio = document.getElementById("campopatrimonio")  // campo do numero do patrimonio tela 2

const numerodeSerie = document.getElementById("numerodeserie")
const campoNumeroSerie = document.getElementById("camponumeroserie")

const estacaoorigem = document.getElementById("numerodaestacao")
const campoestacaoorigem = document.getElementById("campoestacao")

const estacaodestino = document.getElementById("estacaodedestino")
const campoestacaodestino = document.getElementById("campoestacaodestino")

const pontoorigem = document.getElementById("numeropontorede")
const campopontodeorigem = document.getElementById("campopontoorigem")

const pontodestino = document.getElementById("numeropontorededestino")
const campopontodestino = document.getElementById("campopontodestino")

const estacaovazia = document.getElementById("estacaovazia")
const campoestacaovazia = document.getElementById("campoestacaovazia")

const condicaoestacao = document.getElementById("condicaoestacao")
const campocondicaoestacao = document.getElementById("campocondicaoestacao")

const setororigem = document.getElementById("setororigem")
const camposetororigem = document.getElementById("camposetororigem")

const setordestino = document.getElementById("setordedestino")
const camposetordestino = document.getElementById("camposetordestino")
 
const campobtnexcluir = document.getElementById("btnexcluir")
const icon = document.createElement("i")




/*funções */


function proximo(){ /*verifica campos e se estiverem preenchidos vai para a tela de remanejamento*/



    if(nomeuser.value == ""){
        mensagem.innerText = "Nome não informado!"
        mensagem.classList.add("msgError")
        nomeuser.focus()
        
        

    }
        

    
    if(ramaluser.value == ""){
        mensagem.innerText = "Ramal não informado!"
        mensagem.classList.add("msgError")
        ramaluser.focus()
        
    }

        // 
    
        if(emailuser.value == ""){
            mensagem.innerText = "E-mail não informado!"
            mensagem.classList.add("msgError")
            emailuser.focus()
            return

        }if(nomeuser.value && ramaluser.value && emailuser.value !== ""){
            
            mensagem.innerText = "Carregando..."
            mensagem.classList.add("msgSuccess")

        setTimeout (() => {  /*Função para aguardar ao preencher dados pessoais */
                tela.style.display = "none"
            tela2.classList.remove("invisible")

       
        }, "1500")
}

}

function adicionar(){ //botão de adicionar na tela 2, salva as informações preenchidas e salva no modal



    var opcaotexto = selecionardispositivos.options[selecionardispositivos.selectedIndex].value
    campodispositivo.innerHTML = opcaotexto

    var mostrarramal = numeroramal.value
    campodoRamal.innerHTML = mostrarramal
    
    var mostrarPatrimonio = numeroPatrimonio.value
    campoPatrimonio.innerHTML = mostrarPatrimonio

    var mostrarSerie = numerodeSerie.value
    campoNumeroSerie.innerHTML = mostrarSerie

    var mostrarestacaoorigem = estacaoorigem.value
    campoestacaoorigem.innerHTML = mostrarestacaoorigem

    var mostrarestacaodestino = estacaodestino.value
    campoestacaodestino.innerHTML = mostrarestacaodestino

    var mostrarpontoorigem = pontoorigem.value
    campopontodeorigem.innerHTML = mostrarpontoorigem

    var mostrarpontodestino = pontodestino.value
    campopontodestino.innerHTML = mostrarpontodestino

   var mostrarestacaovazia = estacaovazia.options[estacaovazia.selectedIndex].value
   campoestacaovazia.innerHTML= mostrarestacaovazia

   var mostrarcondicaoestacao = condicaoestacao.options[condicaoestacao.selectedIndex].value
   campocondicaoestacao.innerHTML = mostrarcondicaoestacao

   var mostrarsetororigem = setordestino.value
   camposetororigem.innerHTML = mostrarsetororigem

   var mostrarsetordestino = setordestino.value
   camposetordestino.innerHTML = mostrarsetordestino

   campobtnexcluir.document.getElementById("i").classList.add("fa-regular")
   campobtnexcluir.document.getElementById("i").classList.add("fa-trash-xmark")

}





function limpar(){  /* botão limpar tela 1*/
nomeuser.value = ""
ramaluser.value = ""
emailuser.value = ""
}













function deletar(){
    alert("deletando")
}

function cancelar(){
    tela.classList.remove("invisible")
    tela2.classList.add("invisible")
}

function ocultar(){
 
        tela.classList.add("invisible")
        tela2.classList.add("invisible")
    }
