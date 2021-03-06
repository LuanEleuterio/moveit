import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafio Completados</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}