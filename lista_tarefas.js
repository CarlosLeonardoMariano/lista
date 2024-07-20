let texto = document.querySelector('.texto')
let botao = document.querySelector('.botao')
let tarefas = document.querySelector('.tarefas')



botao.addEventListener('click',function() {
    if(! texto.value ) return;
    criarTarefa(texto.value)})



    function criarli(){
        let li = document.createElement('li')
        return li
    }
    



 // CRIANDO A LISTA DE TAREFAS 
function criarTarefa(texto){
    let li = criarli()
li.innerHTML = texto
tarefas.appendChild(li)
limparcaixa()
criarBotaoApagar(li)
salvarTarefas()


}





// ESSA FUNÇÃO SERVE PARA AO CLICAR COM O MOUSSE ELE ADICIONAR AS LISTA COM O CLICK
texto.addEventListener('keypress', function(evento){ 
    if(evento.keyCode === 13)
    {if(! texto.value) return
        criarTarefa(texto.value)}
    })






    // FUNÇAO PRA LIMPAR MINHA CAIXA DE TEXTO
    function limparcaixa(){
        texto.value = '';
        texto.focus()
    }






// FUNÇÃO PRA CRIAR UM BOTAO PRA APAGAR MINHA LISTA

function criarBotaoApagar(li){
    li.innerHTML+='  '
    let botaoapagar = document.createElement('buttonon')
    botaoapagar.innerText = 'Delete'
    li.appendChild(botaoapagar)
    botaoapagar.classList.add('apagar') // ADICIONANDO UMA CLASS PRO MEU BOTAO APAGAR
    }








// FUNÇÃO PRA APAGAR TUDO OQUE TEM NA LISTA NA HORA QUE EU APERTAR O BOTÃO DE APAGAR DA MINHA LI
document.addEventListener('click',function(evento){
    let elemento = evento.target
 if(elemento.classList.contains('apagar')){
    elemento.parentElement.remove()
    salvarTarefas() }
})



// FUNÇÃO PARA SALVAR AS TAREFAS 

function salvarTarefas(){
    let liTarefas = tarefas.querySelectorAll('li')
    let listasdeTarefas = []

    for(let tarefaa of liTarefas){
        let tarefa_texto = tarefaa.innerText
        tarefa_texto = tarefa_texto.replace('apagar','')
        listasdeTarefas.push(tarefa_texto)} 



        const tarefasJSON = JSON.stringify(listasdeTarefas)
   localStorage.setItem('lista_tarefas',tarefasJSON)}


   function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listasdeTarefas = JSON.parse('tarefas')
    for(let tarefa of listasdeTarefas){
        criarTarefa(tarefa)}}
   adicionaTarefasSalvas()









   
