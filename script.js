// Array de filmes e séries com sinopses e links dos trailers
const conteudos = [
    { titulo: 'Harry Potter e a Pedra Filosofal', descricao: 'Harry descobre que é um bruxo e entra para a escola de magia Hogwarts, onde enfrenta desafios e faz novos amigos.', trailer: 'https://www.youtube.com/watch?v=VyHV0BRtdxo' },
    { titulo: 'Harry Potter e a Câmara Secreta', descricao: 'Harry retorna a Hogwarts e investiga uma série de ataques misteriosos, descobrindo segredos sombrios da escola.', trailer: 'https://www.youtube.com/watch?v=1b6v8lL3iX4' },
    { titulo: 'Harry Potter e o Prisioneiro de Azkaban', descricao: 'Harry enfrenta o fugitivo Sirius Black, enquanto descobre mais sobre seu passado e seus pais.', trailer: 'https://www.youtube.com/watch?v=H3b1Y8gL3cM' },
    { titulo: 'Harry Potter e o Cálice de Fogo', descricao: 'Harry participa do Torneio Tribruxo e deve enfrentar tarefas perigosas, além do retorno de Voldemort.', trailer: 'https://www.youtube.com/watch?v=G0uE2S3aE6Y' },
    { titulo: 'Harry Potter e a Ordem da Fênix', descricao: 'Harry luta contra a negação do retorno de Voldemort e forma uma resistência contra o Ministério da Magia.', trailer: 'https://www.youtube.com/watch?v=2nD3zWfM8B0' },
    { titulo: 'Stranger Things', descricao: 'Um grupo de crianças investiga o desaparecimento de um amigo e se depara com fenômenos sobrenaturais em sua cidade.', trailer: 'https://www.youtube.com/watch?v=XWxyRG_t2Mg' },
    { titulo: 'Game of Thrones', descricao: 'Nobres famílias lutam pelo controle do Trono de Ferro em um mundo repleto de traições e batalhas épicas.', trailer: 'https://www.youtube.com/watch?v=6hlA1Pp2Y3g' },
    { titulo: 'Breaking Bad', descricao: 'Walter White, um professor de química, se torna um fabricante de metanfetamina após ser diagnosticado com câncer.', trailer: 'https://www.youtube.com/watch?v=HDoJg3iL7Qg' },
    { titulo: 'The Mandalorian', descricao: 'Um caçador de recompensas navega pela galáxia após a queda do Império, enquanto protege uma misteriosa criatura.', trailer: 'https://www.youtube.com/watch?v=1A5tV8hRl1I' },
];

// Seleciona o modal e o botão de fechar
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];
const adicionarListaBtn = document.getElementById("adicionar-lista");
const listaContainer = document.getElementById("lista-container");

// Armazena os itens da Minha Lista
let minhaLista = [];

// Função para exibir a descrição do conteúdo
function mostrarDescricao(conteudo) {
    document.getElementById("modal-titulo").innerText = conteudo.titulo;
    document.getElementById("modal-descricao").innerText = conteudo.descricao;
    modal.style.display = "block";
    adicionarListaBtn.onclick = () => adicionarAMinhaLista(conteudo);
}

// Adiciona o conteúdo à Minha Lista
function adicionarAMinhaLista(conteudo) {
    if (!minhaLista.includes(conteudo.titulo)) {
        minhaLista.push(conteudo.titulo);
        atualizarMinhaLista();
    } else {
        alert('Este item já está na sua lista.');
    }
}

// Atualiza a seção Minha Lista
function atualizarMinhaLista() {
    listaContainer.innerHTML = ''; // Limpa a lista atual
    if (minhaLista.length > 0) {
        minhaLista.forEach(titulo => {
            const conteudo = conteudos.find(c => c.titulo === titulo); // Encontra o conteúdo correspondente
            const item = document.createElement('div');
            item.className = 'filme'; // Usando a mesma classe para estilo
            item.innerText = conteudo.titulo;
            item.onclick = () => window.open(conteudo.trailer, '_blank'); // Redireciona para o trailer
            listaContainer.appendChild(item);
        });
    } else {
        listaContainer.innerHTML = '<p>Nada adicionado ainda.</p>';
    }
}

// Exibir a descrição ao clicar no filme ou série
document.querySelectorAll('.filme, .serie').forEach((element, index) => {
    element.onclick = () => mostrarDescricao(conteudos[index]);
});

// Fecha o modal ao clicar no botão de fechar
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Função para alternar entre filmes e séries
document.getElementById("filmes-link").onclick = function() {
    document.getElementById("filmes").style.display = "block";
    document.getElementById("series").style.display = "none";
    document.getElementById("minha-lista").style.display = "none";
};

document.getElementById("series-link").onclick = function() {
    document.getElementById("filmes").style.display = "none";
    document.getElementById("series").style.display = "block";
    document.getElementById("minha-lista").style.display = "none";
};

document.getElementById("minha-lista-link").onclick = function() {
    document.getElementById("filmes").style.display = "none";
    document.getElementById("series").style.display = "none";
    document.getElementById("minha-lista").style.display = "block";
};
