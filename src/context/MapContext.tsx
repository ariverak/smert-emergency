import React, { createContext, FC, ReactNode, useState } from 'react'
import { IContextValues } from 'interfaces'

export const MapContext = createContext<IContextValues | null>(null)

interface IProps {
  children: ReactNode;
}

const MapContextProvider: FC<IProps> = ({ children }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  return (
    <MapContext.Provider value={{ viewport, setViewport }}>
      {children}
    </MapContext.Provider>
  )
}

export default MapContextProvider
