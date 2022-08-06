// Resposta 1
const funcionario = {
    codigo: 27,
    nome: 'Jessica'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 27,
    nome: 'jessica'
}

// Respostas 3 e 4
interface Funcionario { 
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 27;
funcionarioObj.nome = 'Jessica';

const funcionarioObj2: Funcionario = {
    codigo: 27,
    nome: 'Jessica'
}