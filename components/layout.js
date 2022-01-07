import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {children}
        <div className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Dummy Blog
          </a>
        </div>
      </div>
    </>
  )
}
