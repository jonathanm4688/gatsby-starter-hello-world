import React, { Component } from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.blog}>
          <h1 className={styles.title}>This is our blog page</h1>
          <h2>Second heading</h2>
        </div>
      </Layout>
    )
  }
}
