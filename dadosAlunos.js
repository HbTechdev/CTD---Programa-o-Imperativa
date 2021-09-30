//Criando objeto aluno, que recebe os métodos de entrada de dados
let alunos = {
     Aluno:function (_nome,_quantidadeFaltas,_notas){//comando que cria um método
        this.nome = _nome;
        this.quantidadeFaltas = _quantidadeFaltas;
        this.notas = _notas;
        this.calcularMedia = function(){//é possível receber dados através de outro método
            let somaNotas = 0;
            for(let i=0; i< this.notas.length; i+=1){//Estrutura para recebimento do contador do array de notas
                
                somaNotas = this.notas[i]+somaNotas;//soma dos elementos do array de notas
                }
            return somaNotas/this.notas.length//média das notas
        }
        this.faltas = function(){//método para acrescentar +1 ao elemento faltas
            this.quantidadeFaltas +=1;
        }
        
    }
}


let aluno1 = new alunos.Aluno('Alberto', 5,[2.0,2.0,2.0])
let aluno2 = new alunos.Aluno('Jorge', 4,[7.7,10.0,8.0])
let aluno3 = new alunos.Aluno('Amanda', 9,[5.9,9.7,10])
let aluno4 = new alunos.Aluno('Juliana', 3,[4.9,10.0,10.0])
let alunoExtra1 = new alunos.Aluno('Kaíque', 1,[6.7,9.1,7.0])
let alunoExtra2 = new alunos.Aluno('Saulo', 0,[5.0,8.0,7.0])
let alunoExtra3 = new alunos.Aluno('Fatima', 8,[0.0,10.0,10.0])
let alunoExtra4 = new alunos.Aluno('Sabrina', 6,[3.0,10.0,9.0])
let alunoExtra5 = new alunos.Aluno('Juvenal', 5,[4.9,9.5,5.0])
let alunoExtra6 = new alunos.Aluno('Marcela', 2,[8.7,9.9,10.0])

alunos.listaDeAlunos = [aluno1,aluno2,aluno3,aluno4]//declaração de alunos como objeto individual para exportação
alunos.listaAlunosExtra = [alunoExtra1,alunoExtra2,alunoExtra3,alunoExtra4,alunoExtra5,alunoExtra6]
module.exports = alunos//exportação de dados


