import {
  Form,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  ModalFooter,
  Button,
} from 'reactstrap'

interface CreateReceiptModalProps {
  modal: boolean
  toggle: () => void
}

export const CreateReceiptModal = ({
  modal,
  toggle,
}: CreateReceiptModalProps) => {
  return (
    <Modal isOpen={modal} toggle={toggle} centered scrollable size="lg">
      <ModalHeader toggle={toggle}>Crear nuevo recibo</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" placeholder="Título" />
          </FormGroup>
          <FormGroup>
            <Label for="title">Description</Label>
            <Input id="title" placeholder="Descripción" type="textarea" />
          </FormGroup>
          <FormGroup>
            <Label for="name">Nombres</Label>
            <Input id="name" placeholder="Nombres" />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Apellidos</Label>
            <Input id="lastname" placeholder="Apellidos" />
          </FormGroup>
          <FormGroup>
            <Label for="address">Dirección de domicilio</Label>
            <Input id="address" placeholder="Av/Calle/Mz" />
          </FormGroup>
          <FormGroup>
            <Label for="inputFile">Logo</Label>
            <Input id="inputFile" name="file" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="select">Tipo de documento</Label>
            <Input id="select" name="select" type="select" defaultValue="">
              <option value="" disabled>
                Seleccione uno
              </option>
              <option value={0}>DNI</option>
              <option value={1}>RUC</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="nroDocument">Nro de documento</Label>
            <Input id="nroDocument" placeholder="77777777" />
          </FormGroup>
          <FormGroup>
            <Label for="select">Tipo de moneda</Label>
            <Input id="select" name="select" type="select" defaultValue="">
              <option value="" disabled>
                Seleccione uno
              </option>
              <option value="USD">Dólares $</option>
              <option value="PEN">Soles S/.</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="nroDocument">Monto a cobrar</Label>
            <Input id="nroDocument" type="number" placeholder="1000" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Guardar
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  )
}
