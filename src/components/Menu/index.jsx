import { Botao } from '../Botao'
import './style.css'

export default function Menu() {
  return (
    <header>
      <img src="" alt="Logo" />
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Serviços</a></li>
          <li><a href="">Sobre</a></li>
        </ul>
      </nav>
      <Botao corDoTexto="black" corDeFundo="red">Login</Botao>
    </header>
  )
}