import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
} from 'reactstrap'

import { CreateReceiptModal, ReceiptTable } from '../components'
import { useAuth } from '../hooks'
import { useReceipts } from '../hooks/useReceipts'
import { useStore } from '../store'

import './DashboardPage.css'

export const DashboardPage = () => {
  const { receipts, refetch } = useReceipts()

  const modal = useStore((state) => state.modal)
  const setModal = useStore((state) => state.setModal)

  const activeReceipt = useStore((state) => state.activeReceipt)
  const setActiveReceipt = useStore((state) => state.setActiveReceipt)

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { logout } = useAuth()

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)

  const toggle = () => setModal(!modal)

  const handleAdd = () => {
    setActiveReceipt(undefined)
    toggle()
  }

  return (
    <div className="dashboard__container">
      <Navbar color="dark" dark>
        <NavbarBrand>Dashaboard</NavbarBrand>
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
          direction="down">
          <DropdownToggle caret>user name</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Opciones</DropdownItem>
            <DropdownItem onClick={logout}>Salir</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
      <div className="container mx-auto mt-5">
        <h2>Mis recibos</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button color="success" onClick={handleAdd}>
            Crear nuevo recibo
          </Button>
          <Button onClick={() => refetch()}>Recargar</Button>
        </div>
        <ReceiptTable receipts={receipts || []} toggle={toggle} />
      </div>
      <CreateReceiptModal
        key={activeReceipt?.receiptId}
        modal={modal}
        toggle={toggle}
        receipt={activeReceipt}
      />
    </div>
  )
}
