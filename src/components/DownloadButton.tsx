import { Button } from 'reactstrap'
import { donwloadIcon } from '../assets'

export const DownloadButton = () => {
  return (
    <Button color="primary" outline>
      <img src={donwloadIcon} alt="donwload icon" width="22" height="22" />
    </Button>
  )
}
