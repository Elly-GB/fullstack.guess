import styles from "./app.module.css"

import { Tip } from "./components/Tip"
import { Input } from "./components/Input"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"

export default function App() {
  function handleRestartGame() {
    alert("Jogo reiniciado!")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>
        <div>
          <Input autofocus maxLength={1} placeholder="?" />
        </div>

      </main>
    </div>
  )
}