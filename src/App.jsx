import "./App.css"
import { Botao } from "./components/Botao"

export default function App() {
  return (
    <>
      <main>
        <div>
          <p>Hello World</p>
          
          <Botao corDeFundo="blue">Clique aqui</Botao>
          <Botao corDeFundo="green">Clique aqui</Botao>
          <Botao corDeFundo="brown">Clique aqui</Botao>
        </div>
      </main>
    </>
  )
}