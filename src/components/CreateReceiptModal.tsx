import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  UncontrolledAlert,
} from 'reactstrap'

import { uploadImage } from '../api/cloudinary'
import { useReceipts } from '../hooks'
import { Receipt } from '../interfaces'

interface FormReceipt extends Omit<Receipt, 'userId' | 'user' | 'createAt'> {}
interface CreateReceiptModalProps {
  modal: boolean
  toggle: () => void
  receipt?: Receipt
}

export const CreateReceiptModal = ({
  modal,
  toggle,
  receipt,
}: CreateReceiptModalProps) => {
  const [image, setImage] = useState<File>()
  const { mutateAdd, isLoadingAdd, mutateUpdate, isLoadingUpdate } =
    useReceipts()
  const { control, handleSubmit, watch, setValue } = useForm<FormReceipt>({
    defaultValues: {
      receiptId: receipt?.receiptId || '',
      title: receipt?.title || '',
      description: receipt?.description || '',
      address: receipt?.address || '',
      name: receipt?.name || '',
      lastName: receipt?.lastName || '',
      currency: receipt?.currency || '',
      logo: receipt?.logo || '',
      numberDocument: receipt?.numberDocument || '',
      payment: receipt?.payment || 0,
      typeDocument: receipt?.typeDocument || '',
    },
  })

  const watchCurrency = watch('currency')

  const imageLogo = watch('logo')

  const isLoading = isLoadingAdd || isLoadingUpdate

  const onSubmit: SubmitHandler<FormReceipt> = async (data) => {
    if (receipt) {
      mutateUpdate({
        receipt: data,
        userId: 'fe2de405-c38e-4c90-ac52-da0540dfb410',
      })
    } else {
      const { receiptId, ...restData } = data
      mutateAdd({
        receipt: restData,
        userId: 'fe2de405-c38e-4c90-ac52-da0540dfb410',
      })
    }
  }

  const handleImage = async () => {
    if (image) {
      const urlLogo = await uploadImage(image)
      setValue('logo', urlLogo)
    }
  }

  const saveReceipt = handleSubmit(onSubmit)

  return (
    <Modal isOpen={modal} toggle={toggle} centered scrollable size="lg">
      <ModalHeader toggle={toggle}>Crear nuevo recibo</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">T??tulo</Label>
            {/* <Input id="title" placeholder="T??tulo" /> */}
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input id="title" placeholder="T??tulo" {...field} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Descripci??n</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input
                  id="description"
                  placeholder="Descripci??n"
                  type="textarea"
                  rows={3}
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
            <Label for="address">Direcci??n de domicilio</Label>
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
            {/* <Controller
              name="logo"
              control={control}
              render={({ field }) => (
                <Input id="inputFile" type="file" {...field} />
              )}
            /> */}

            <InputGroup>
              <Input
                id="inputFile"
                type="file"
                onChange={(e) => setImage(e.target.files![0])}
              />
              <Button onClick={handleImage} outline>
                Cargar
              </Button>
            </InputGroup>
            {receipt?.logo && (
              <img
                src={receipt?.logo}
                style={{ objectFit: 'contain' }}
                width="100"
                height="100"
                alt="Logo image"
              />
            )}
            {imageLogo && (
              <UncontrolledAlert color="success" className="mt-3">
                Logo subido correctamente
              </UncontrolledAlert>
            )}
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
                  <option value="USD">D??lares $</option>
                  <option value="PEN">Soles S/.</option>
                </Input>
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="payment">Monto a cobrar</Label>
            <InputGroup>
              {watchCurrency !== '' && (
                <InputGroupText>
                  {watchCurrency === 'USD' ? '$' : 'S/.'}
                </InputGroupText>
              )}
              <Controller
                name="payment"
                control={control}
                render={({ field }) => (
                  <Input
                    id="payment"
                    // type="number"
                    placeholder="1000"
                    min={0}
                    {...field}
                  />
                )}
              />
            </InputGroup>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveReceipt} disabled={isLoading}>
          {isLoading ? (
            <Spinner color="primary" />
          ) : receipt ? (
            'Actualizar'
          ) : (
            'Guardar'
          )}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isLoading}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  )
}
