const { Aluno } = require('./dadosAlunos')
let alunos = require('./dadosAlunos')

let curso = {
    nomeDoCurso: 'CTD',
    notaDeAprovacao: 8,
    faltasMaximas: 5,
    listaEstudantes: alunos.listaDeAlunos,
    listaNovosAlunos: alunos.listaAlunosExtra,
    alunoExtra: function(nome, quantidadeFaltas, notas) {
        novoAluno = new alunos.Aluno(nome, quantidadeFaltas, notas);
        this.listaEstudantes.push(novoAluno);
    },
    aprovacao: function(_nomeAluno){
        for(aluno of this.listaEstudantes){
            if (aluno.nome===_nomeAluno){            
               if(aluno.calcularMedia()>=this.notaDeAprovacao && aluno.quantidadeFaltas<this.faltasMaximas){
                   return true
               } else if(aluno.quantidadeFaltas===this.faltasMaximas && aluno.calcularMedia()>=(this.notaDeAprovacao)*1.1){
                   return true
               }else{
                   return false
               }
            }
        }
        return 'Aluno não encontrado' 
},
quempassou: function(){
    nome = [];
    resultados = [];
    for(let a = 0;a< this.listaEstudantes.length;a++){
        nome.push(this.listaEstudantes[a].nome);
    };
    for(i=0; i<nome.length; i++){
        resultados.push(this.aprovacao(nome[i]));
    }
    let relacao = []
    for(let p = 0; p<this.listaEstudantes.length;p++){
        relacao.push({'aluno': nome[p], 'aprovado': resultados[p]});
    }return relacao; 
}
}
curso.alunoExtra('Antônio', 2,[10,8,7])
console.log(curso.quempassou())
