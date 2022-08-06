
enum Trabalho {
    Advogada,
    Atleta
}

type Perfil = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Perfil = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Advogada
};

let pessoa2: Perfil = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Atleta
};

let pessoa3: Perfil = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atleta
};

let pessoa4: Perfil = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Atleta
}