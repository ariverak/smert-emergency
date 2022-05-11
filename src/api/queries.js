import { gql } from '@apollo/client'

export const ALL_EDIFICIOS_QUERY = gql`
  query allEdificios {
    allEdificios {
      id
      coordinates
    }
  }
`

export const GET_EDIFICIO_QUERY = gql`
  query getEdificio($id: Int!) {
    getEdificio(id: $id) {
      id
      nombre
      calle
      numero
      comentarios
      numeroPisos
      deptosPiso
      estacionamiento
      pisosEstacionamiento
      basement
      plantaGeneral
      planoAscensor
      piscina
      material
      opcionRedSeca
      opcionRedHumeda
      opcionRedInerte
      comuna {
        id
        nombre
        regionId
      }
      contactos {
        id
        nombre
        cargo
        telefono
      }
      pisos {
        id
        nombre
        plano
        prioridades {
          id
          depto
          discapacidad {
            id
            nombre
            observacion
          }
        }
      }
      settings {
        floor_singular
        floor_plural
      }
      coordinates
    }
  }
`
