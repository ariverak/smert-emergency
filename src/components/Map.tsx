import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { MAPBOX_TOKEN } from 'config/constants'
import mapboxgl from 'mapbox-gl'
import Image from 'next/image'
import React, { memo, useEffect, useMemo, useRef } from 'react'
import Map, {
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  MapRef,
  Marker
} from 'react-map-gl'

export const BaseMap = function BaseMap({
  children,
  markers,
  ...props
}: React.ComponentPropsWithoutRef<typeof Map> & {
  children?: React.ReactNode;
  markers: any[];
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

  const pins = useMemo(
    () =>
      markers.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          latitude={marker.coordinates[0]}
          longitude={marker.coordinates[1]}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation()
            // setPopupInfo(city)
          }}
        >
          <Image src={require('assets/marker.png')} width={36} height={45} />
        </Marker>
      )),
    [markers]
  )

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      onLoad={() => {
        geolocateControlRef.current?.trigger()
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      ref={mapRef}
      {...props}
    >
      {pins}
      <NavigationControl />
      <ScaleControl />
      <GeolocateControl
        ref={geolocateControlRef}
        showUserHeading
        fitBoundsOptions={{ animate: true, zoom: 14 }}
      />
      {children}
    </Map>
  )
}

export default memo(BaseMap)
