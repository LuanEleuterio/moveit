import { BsStar } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

  return (
    <header className={styles.experienceBar}>
      <span><BsStar /> 0 exp </span>
      <div>
        <div style={{ width: '60%' }} />
        <IoIosRocket className={styles.svgRocket} style={{ left: '60%' }} />
        <span className={styles.currentExperience} style={{ left: '60%' }}><BsStarHalf /> 400px</span>
      </div>
      <span><BsStarFill /> 600 exp</span>
    </header>
  )
}