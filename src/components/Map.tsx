import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { MAPBOX_TOKEN } from 'config/constants'
import mapboxgl from 'mapbox-gl'
import React, { memo, useEffect, useRef } from 'react'
import Map, {
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  MapRef
} from 'react-map-gl'

export const BaseMap = function BaseMap({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Map> & {
  children?: React.ReactNode;
}) {
  const mapRef = useRef<MapRef>(null)
  const geolocateControlRef = useRef<{ trigger:() => boolean }>(null)
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_TOKEN,
      mapboxgl: mapboxgl as any,
      placeholder: 'Buscar ubicación'
    })
    if (!document.querySelector('#geocoder')?.childNodes.length) {
      geocoder.addTo('#geocoder')
      geocoder.on('result', (e) => {
        console.log(e.result.center)
        mapRef.current?.flyTo({
          center: e.result.center
        })
      })
    }
    // }
  }, [])
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      onLoad={() => geolocateControlRef.current?.trigger()}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      ref={mapRef}
      {...props}
    >
      <NavigationControl />
      <ScaleControl />
      <GeolocateControl
        ref={geolocateControlRef}
        fitBoundsOptions={{ animate: true, zoom: 14 }}
      />
      {children}
    </Map>
  )
}

export default memo(BaseMap)
