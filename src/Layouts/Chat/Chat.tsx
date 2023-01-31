import FooterBar from '../../Components/MainBar/FooterBar/FooterBar'
import MainChat from '../../Components/MainBar/MainChat/MainChat'
import { MainPanel } from '../../Components/MainBar/MainPanel/MainPanel'

import './Chat.css'

export function Chat() {
  return (
    <main className='main-container'>
      <MainPanel />
      <MainChat />
      <FooterBar />
    </main>
  )
}
