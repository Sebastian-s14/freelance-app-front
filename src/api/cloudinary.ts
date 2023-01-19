import axios from 'axios'

export interface UploadResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: Date
  tags: any[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  original_filename: string
}

export const uploadImage = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('API_KEY', import.meta.env.VITE_APP_CLOUDINARY_API_KEY)
  formData.append(
    'upload_preset',
    import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET,
  )
  const {
    data: { secure_url },
  } = await axios<UploadResponse>({
    method: 'post',
    url: `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  })
  return secure_url
}
