import { useContext } from 'react';
import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import { ChallengesContext } from '../context/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const progressToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span><BsStar /> 0 exp </span>
      <div>
        <div style={{ width: `${progressToNextLevel}%` }} />
        <IoIosRocket className={styles.svgRocket} style={{ left: `${progressToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${progressToNextLevel}%` }}><BsStarHalf /> {currentExperience} exp</span>
      </div>
      <span><BsStarFill /> {experienceToNextLevel} exp</span>
    </header>
  )
}