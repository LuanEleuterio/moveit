import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} exp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Corpo exercitando" />
            <strong>Novo desafio!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}>
              Falhei</button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}>
              Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo
            para receber desafios a
            serem completados</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Complete-os e ganhe experiência e avance de level.
            </p>
          </div>
        )}

    </div >
  )
}