import { Button, Table } from 'reactstrap'

import { Receipt } from '../interfaces'
import { DownloadButton } from '.'
import { formatDate } from '../helpers'

interface ReceiptTableProps {
  receipts: Receipt[]
}

export const ReceiptTable = ({ receipts }: ReceiptTableProps) => {
  return (
    <Table className="mt-3" responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Título</th>
          <th scope="col">Descripción</th>
          {/* <th scope="col">Moneda</th>
          <th scope="col">Total</th> */}
          <th scope="col">Fecha</th>
          <th>Descargar</th>
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
              <DownloadButton />
              <Button color="danger" outline className="mx-3">
                ✖
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
