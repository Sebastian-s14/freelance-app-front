import { useState } from 'react'
import { Button, Spinner } from 'reactstrap'
import { generatePdf } from '../api/receipts'
import { donwloadIcon } from '../assets'

interface DownloadButtonProps {
  receiptId: string
}

export const DownloadButton = ({ receiptId }: DownloadButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handlePdf = async () => {
    setIsLoading(true)
    const { data } = await generatePdf(receiptId)
    setIsLoading(false)

    downloadPDF(data, receiptId)
  }

  const downloadPDF = (pdf: string, receiptId: string) => {
    const linkSource = `data:application/pdf;base64,${pdf}`
    const downloadLink = document.createElement('a')
    const fileName = `${receiptId}.pdf`
    downloadLink.href = linkSource
    downloadLink.download = fileName
    downloadLink.click()
  }
  return (
    <Button color="primary" outline onClick={handlePdf} disabled={isLoading}>
      {isLoading ? (
        <Spinner color="primary" size="sm" />
      ) : (
        <img src={donwloadIcon} alt="donwload icon" width="22" height="22" />
      )}
    </Button>
  )
}
