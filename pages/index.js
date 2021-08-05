import Head from 'next/head'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import homeStyles from '../styles/home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment task</title>
      </Head>
      <div className={homeStyles.homeContainer}>
            <div className={homeStyles.sidebar}>
                <Sidebar />
            </div>
            <div className={homeStyles.main_part}>
                <Main />
            </div>
        </div>
    </div>
  )
}
