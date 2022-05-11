import { Alert, Loader } from '@mantine/core'
import React from 'react'

export default function Loading() {
  return (
    <Alert icon={<Loader />} title="Cargando..." color="orange">
        Paciencia, espera mientras cargamos los datos.
    </Alert>
  )
}
