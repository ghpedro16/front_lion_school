'use strict'

import{
    getCursos,
    getAlunos,
    getAlunosByCurso,
    getAlunosById
} from './script.js'

const main = document.querySelector('main')
const container = document.getElementById('container')

async function carregarAlunos(id_curso){
    const alunos = await getAlunosByCurso(id_curso)

    

}