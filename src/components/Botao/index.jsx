import './style.css'

export function Botao(props) {
  const { children, corDeFundo, corDoTexto } = props

  function saudacao() {
    alert('Seja bem-vindo!')
  }

  return (
    <button type="button" onClick={saudacao} style={{ backgroundColor: corDeFundo, color: corDoTexto }}>{children}</button>
  )
}