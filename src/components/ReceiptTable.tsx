import { Button, Table } from 'reactstrap'

import { DownloadButton } from '.'
import { formatDate } from '../helpers'
import { useReceipts } from '../hooks'
import { Receipt } from '../interfaces'
import { useStore } from '../store'

interface ReceiptTableProps {
  receipts: Receipt[]
  toggle: () => void
}

export const ReceiptTable = ({ receipts, toggle }: ReceiptTableProps) => {
  const { mutateDelete } = useReceipts()
  const setActiveReceipt = useStore((state) => state.setActiveReceipt)

  const handleEdit = (receipt: Receipt) => {
    toggle()
    setActiveReceipt(receipt)
  }

  const handleDelete = (receiptId: string) => {
    console.log(receiptId)
    mutateDelete(receiptId)
  }

  return (
    <Table className="mt-3" responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Título</th>
          <th scope="col">Descripción</th>
          {/* <th scope="col">Moneda</th>
          <th scope="col">Total</th> */}
          <th scope="col">Última actualización</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {receipts?.map((r, index) => (
          <tr key={r.receiptId}>
            <th scope="row">{index + 1}</th>
            <td>{r.title}</td>
            <td>{r.description}</td>
            {/* <td>{r.currency}</td>
            <td>{r.payment}</td> */}
            {/* <td>{new Date(r.createAt).toLocaleDateString()}</td> */}
            <td>{formatDate(r.createAt)}</td>
            <td style={{ display: 'flex', gap: '8px' }}>
              <DownloadButton receiptId={r.receiptId} />
              <Button color="warning" outline onClick={() => handleEdit(r)}>
                ✍
              </Button>
              <Button
                color="danger"
                outline
                // className="mx-3"
                onClick={() => handleDelete(r.receiptId)}>
                ✖
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
