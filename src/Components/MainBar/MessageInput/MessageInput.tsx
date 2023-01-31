import React from 'react'
import './MessageInput.css'
import { ReactComponent as CameraIcon } from '../../../Assets/images/camera.svg'
export default function MessageInput() {
  return (
    <div className='message-group'>
      <button>
        <CameraIcon />
      </button>
      <input type='text' placeholder='Type a message' />
    </div>
  )
}
