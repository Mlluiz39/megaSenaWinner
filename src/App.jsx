import { useState } from 'react'

import './App.css'
import megaLogo from './assets/logo-mega.png'

const MegaSenaSorteio = () => {
  const [numerosSorteados, setNumerosSorteados] = useState([])

  const sortearNumeros = () => {
    const numerosMaisSorteados = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60
    ]

    const numerosSorteadosTemp = []
    const quantidadeNumerosSortear = 6

    // Função auxiliar para obter um número aleatório não repetido
    const obterNumeroNaoRepetido = () => {
      const numero =
        numerosMaisSorteados[
          Math.floor(Math.random() * numerosMaisSorteados.length)
        ]
      if (!numerosSorteadosTemp.includes(numero)) {
        numerosSorteadosTemp.push(numero)
        return numero
      } else {
        return obterNumeroNaoRepetido()
      }
    }

        // Sortear os números
    for (let i = 0; i < quantidadeNumerosSortear; i++) {
      obterNumeroNaoRepetido()
    }

    // Ordenar os números em ordem crescente
    numerosSorteadosTemp.sort((a, b) => a - b);

    setNumerosSorteados([...numerosSorteadosTemp])
  }

  return (
    <div className="game">
      <div className="logo">
        <img src={megaLogo} className="logo" alt="Mega Sena logo" />
      </div>
      <h2>Números da Mega-Sena</h2>
      <button className="button" onClick={sortearNumeros}>
        Gerar Jogo
      </button>
      {numerosSorteados.length > 0 && (
        <div className="numeros">
          <ul>
            {numerosSorteados.map((numero, index) => (
              <li key={index}>
                Número {index + 1}: {numero}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MegaSenaSorteio
