import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Navbar, NavbarBrand } from 'reactstrap'

import { CreateReceiptModal, ReceiptTable } from '../components'
import { useReceipts } from '../hooks/useReceipts'
import './DashboardPage.css'

export const DashboardPage = () => {
  const { receipts } = useReceipts()

  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const toggle = () => setModal(!modal)

  return (
    <div className="dashboard__container">
      <Navbar color="dark" dark>
        <NavbarBrand>Dashaboard</NavbarBrand>
        <Button color="danger" onClick={() => navigate('/login')}>
          Salir
        </Button>
      </Navbar>
      <div className="container mx-auto mt-5">
        <h2>Mis recibos</h2>
        <Button color="success" onClick={toggle}>
          Crear nuevo recibo
        </Button>
        <ReceiptTable receipts={receipts} />
      </div>
      <CreateReceiptModal modal={modal} toggle={toggle} />
    </div>
  )
}
