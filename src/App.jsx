import { useState } from 'react'

import './App.css'
import megaLogo from './assets/logo-mega.png'

const MegaSenaSorteio = () => {
  const [numerosSorteados, setNumerosSorteados] = useState([])

  const sortearNumeros = () => {
    const numerosMaisSorteados = [
      5, 10, 21, 22, 36, 54, 4, 16, 26, 49, 51, 54, 9, 18, 26, 27, 35, 47, 17,
      38, 44, 53, 23, 33, 34, 37, 41, 16, 26, 49, 51, 54, 30, 32, 34, 37, 41,
      16, 26, 49, 51, 54,
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
