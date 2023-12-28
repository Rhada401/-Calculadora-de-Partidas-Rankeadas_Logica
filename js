// Definição das variáveis de vitórias e derrotas
let vitorias = 23
let derrotas = 2

// Cálculo do saldo de vitórias
function saldoVitorias(vitorias, derrotas){
	return vitorias - derrotas 
}

// Chamada da função para obter o saldo de vitórias
let saldo = saldoVitorias(vitorias, derrotas)

// Determinação do nível de classificação
function determinarNivel(saldo){
	if(saldo <= 10){
    return "Ferro"
    } else if(saldo >= 11 && saldo <= 20){
    return "Bronze"
    }else if(saldo > 20 && saldo <= 50){
    return "Prata"
    }else if(saldo > 50 && saldo <= 80){
    return "Ouro"
    }else if(saldo > 80 && saldo <= 90){
    return "Diamante"
    }else if(saldo > 90 && saldo <= 100){
    return "Lendario"
    }else{
    return "Imortal"
    }
    }

// Chamada da função para obter o nível de classificação
let nivel = determinarNivel(saldo)

// Mensagem de saída exibindo o saldo e o nível de classificação
console.log("O heroi tem o saldo de " + saldo + " está no nivel de " + nivel)
