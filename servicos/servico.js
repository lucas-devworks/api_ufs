const colecaoUf = require('../data/dados');

// retorna a coleção
const buscarUfs = () => {
    return colecaoUf;
}

// faz uma busca por nome parcial sem ser 'case sensitive'
const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
}

// busca objeto por meio do ID
const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}

// exportando as funções
module.exports = { buscarUfs, buscarUfsPorNome, buscarUfPorId };