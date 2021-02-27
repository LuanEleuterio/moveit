import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você subiu de Level!!!</p>

        <button type='button' onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Opção fechar modal" />
        </button>
      </div>
    </div>
  )
}