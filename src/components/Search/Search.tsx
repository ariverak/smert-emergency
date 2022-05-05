// import { MAPBOX_TOKEN } from 'config/constants'
import { Box } from '@mantine/core'
import { MapContext } from 'context/MapContext'
import { IContextValues } from 'interfaces'
import { useCallback, useContext } from 'react'

function Search() {
  const { setViewport } = useContext(MapContext) as IContextValues

  const handleViewportChange = useCallback(
    (newViewport: any) => setViewport(newViewport),
    []
  )

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport: any) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 }

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      })
    },
    [handleViewportChange]
  )

  console.log(handleGeocoderViewportChange)

  return (
    <Box id="geocoder" style={{ zIndex: 1 }} />
  )
}

export default Search
