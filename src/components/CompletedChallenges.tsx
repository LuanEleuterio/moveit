import styles from '../styles/components/CompletedChallenges.module.css'

export function CompleteChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafio Completados</span>
      <span>5</span>
    </div>
  )
}