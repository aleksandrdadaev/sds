'use client'

import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotificationContainer: FC = () => {
	return <ToastContainer position='top-right' draggable closeOnClick />
}

export default NotificationContainer
