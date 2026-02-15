'use strict'

import{
    getCursos,
    getAlunos,
    getAlunosByCurso,
    getAlunosById
} from './script.js'

const main = document.querySelector('main')
const container = document.getElementById('container')
const btnCursos = document.getElementById('cursos')

async function carregarCursos() {

    const cursos = await getCursos()

    cursos.forEach(curso => {

        const botao = document.createElement('button')
        botao.innerHTML = `
            <span>${curso.sigla}</span>
        `;

        botao.addEventListener('click', () => {
            carregarAlunos(curso.id)
        })

        btnCursos.appendChild(botao)

    })
    
}

carregarCursos()

async function carregarAlunos(id_curso){

    main.classList.remove('home')
    main.classList.add('alunos')

    const alunos = await getAlunosByCurso(id_curso)

    alunos.forEach(aluno => {
        
        const card = document.createElement('div')
        card.classList.add('cards')

        card.innerHTML = `
            <img src="${aluno.foto}" alt="">
            <span>${aluno.nome}</span>
        `;

        card.addEventListener('click', () => {
            carregarInfoAluno(aluno.id)
        })

        container.appendChild(card)
    });
}

async function carregarInfoAluno(id_aluno){

    const aluno = getAlunosById(id_aluno)

    aluno.forEach(infoAluno => {
        const card = document.createElement('div')
        card.classList.add('card-aluno')
        const info = document.createElement('div')
        info.classList.add('info-aluno')

        card.innerHTML = `
            <img src="${infoAluno.foto}" alt="">
            <span>${infoAluno.nome}</span>
        `;

        info.innerHTML = `
            
        `;

    })
}