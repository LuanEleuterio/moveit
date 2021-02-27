import '../styles/global.css';
import { ChallengesProvider } from '../context/ChallengesContext';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp


