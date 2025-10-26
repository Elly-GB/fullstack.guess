import styles from "./styles.module.css"

import { Letter } from "../Letter"

export type LettersUsedProps = {
  value: string
  correct: boolean
}

type Props = {
  data: LettersUsedProps[]
}

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="X" size="small" color="correct" />
        <Letter value="X" size="small" color="wrong" />
      </div>
    </div>
  )
}