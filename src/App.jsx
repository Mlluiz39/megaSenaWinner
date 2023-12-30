import { useState } from 'react'

import './App.css'
import megaLogo from './assets/logo-mega.png'

const MegaSenaSorteio = () => {
  const numerosMaisSorteados = [
    10, 53, 5, 37, 23, 34, 33, 30, 35, 41, 32, 4, 38, 42, 44, 17, 28, 56, 27,
    43,
  ]
  const [numerosSorteados, setNumerosSorteados] = useState([])

  const sortearNumeros = () => {
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

    setNumerosSorteados([...numerosSorteadosTemp])
  }

  return (
    <div className="game">
      <div className='logo'>
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
