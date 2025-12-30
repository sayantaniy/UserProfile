import React, { useState } from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Modal from './components/modal'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [open, setOpen] = useState(null)

  const onOpenModal = (type) => setOpen(type)
  const onCloseModal = () => setOpen(null)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 onOpenModal={onOpenModal} />} />
        <Route path="/playlist" element={<Page2 />} />
      </Routes>

      {open && (
        <Modal title={open} onClose={onCloseModal} />
      )}
    </div>
  )
}

export default App
