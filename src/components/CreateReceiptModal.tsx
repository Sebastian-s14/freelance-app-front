import { useForm, SubmitHandler, Controller } from 'react-hook-form'
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
import { useReceipts } from '../hooks'

import { Receipt } from '../interfaces'

interface FormReceipt
  extends Omit<Receipt, 'receiptId' | 'userId' | 'user' | 'createAt'> {}
interface CreateReceiptModalProps {
  modal: boolean
  toggle: () => void
}

export const CreateReceiptModal = ({
  modal,
  toggle,
}: CreateReceiptModalProps) => {
  const { addReceipt } = useReceipts()
  const { control, handleSubmit } = useForm<FormReceipt>({
    defaultValues: {
      title: '',
      description: '',
      address: '',
      name: '',
      lastName: '',
      currency: '',
      logo: '',
      numberDocument: '',
      payment: 0,
      typeDocument: '',
    },
  })

  const onSubmit: SubmitHandler<FormReceipt> = (data) => {
    console.log('on submit')
    console.log(data)
    addReceipt(data)
  }

  const saveReceipt = handleSubmit(onSubmit)

  return (
    <Modal isOpen={modal} toggle={toggle} centered scrollable size="lg">
      <ModalHeader toggle={toggle}>Crear nuevo recibo</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Tìtulo</Label>
            {/* <Input id="title" placeholder="Título" /> */}
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input id="title" placeholder="Título" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Descripción</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input
                  id="description"
                  placeholder="Descripción"
                  type="textarea"
                  {...field}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Nombres</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input id="name" placeholder="Nombres" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Apellidos</Label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input id="lastName" placeholder="Apellidos" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Dirección de domicilio</Label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input id="address" placeholder="Av/Calle/Mz" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="inputFile">Logo</Label>
            <Controller
              name="logo"
              control={control}
              render={({ field }) => (
                <Input id="inputFile" type="text" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="select">Tipo de documento</Label>
            <Controller
              name="typeDocument"
              control={control}
              render={({ field }) => (
                <Input id="select" type="select" defaultValue="" {...field}>
                  <option value="" disabled>
                    Seleccione uno
                  </option>
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>
                </Input>
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nroDocument">Nro de documento</Label>
            <Controller
              name="numberDocument"
              control={control}
              render={({ field }) => (
                <Input id="nroDocument" placeholder="77777777" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="select">Tipo de moneda</Label>

            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Input id="select" type="select" defaultValue="" {...field}>
                  <option value="" disabled>
                    Seleccione uno
                  </option>
                  <option value="USD">Dólares $</option>
                  <option value="PEN">Soles S/.</option>
                </Input>
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="payment">Monto a cobrar</Label>
            <Controller
              name="payment"
              control={control}
              render={({ field }) => (
                <Input
                  id="payment"
                  type="number"
                  placeholder="1000"
                  min={0}
                  {...field}
                />
              )}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveReceipt}>
          Guardar
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  )
}
