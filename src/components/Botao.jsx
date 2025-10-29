export function Botao() {
  function saudacao() {
    alert('Seja bem-vindo!')
  }

  return (
    <button type="button" onClick={saudacao}>Clique aqui</button>
  )
}