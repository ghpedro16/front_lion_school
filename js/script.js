'use strict'

export async function getCursos() {
    
    const url = 'https://lion-school-phbo.onrender.com/cursos'

    const response = await fetch (url)

    const cursos = await response.json()

    return cursos
}

export async function getAlunos() {
    
    const url = 'https://lion-school-phbo.onrender.com/alunos'

    const response = await fetch (url)

    const alunos = await response.json()

    return alunos
}

export async function getAlunosByCurso(curso_id) {
    
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${curso_id}`

    const response = await fetch (url)

    const alunos = await response.json()

    return alunos
}

export async function getAlunosById(aluno_id) {
    
    const url = `https://lion-school-phbo.onrender.com/alunos/${aluno_id}`

    const response = await fetch (url)

    const aluno = await response.json()

    return aluno
}