/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL: string
  readonly VITE_APP_CLOUDINARY_CLOUD_NAME: string
  readonly VITE_APP_CLOUDINARY_API_KEY: string
  readonly VITE_APP_CLOUDINARY_UPLOAD_PRESET: string
  // more env variables...
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
