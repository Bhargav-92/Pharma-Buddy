import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from '../assets/BotAvatar.png'


export default function App() {
  return (
      <FloatingWhatsApp
      phoneNumber="6354821279"
      accountName="Pharma-Buddy"
      allowEsc={true}
      allowClickAway={true}
      notification={true}
      notificationSound={true}
      avatar={avatar}
      darkMode='true'
      chatMessage={"Hello There !! \nHow Can I Help You??"}
       />
  )
}