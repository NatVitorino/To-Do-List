let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefas = document.querySelector('listaTarefas');

inputNovaTarefa.addEventListener('keypress', (e)=> {

    if(e.keyCode == 13) {
        let tarefa = {
            nome:inputNovaTarefa.value,
            id: gerarId(),
        }
        // TODO:: Adicionar a tarefa ao HTML
    }
});

btnAddTarefa.addEventListener('click', (e) => {

    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
    }
    // TODO:: Adicionar a tarefa ao HTML

})

function gerarId() {
    return Math.floor(Math.random() * 3000);
}
