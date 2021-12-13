import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './test.module.css'

const Test = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Senior Integration Planner</title>
        <meta property="og:title" content="Senior Integration Planner" />
      </Helmet>
    </div>
  )
}

export default Test
