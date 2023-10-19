'use client'
import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect } from 'react'

const Maps = () => {

    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
      const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            version: 'weekly'
        })

        const { Map } = await loader.importLibrary('maps')

        const position = {
            lat: 108.23234655417257,
            lng: -7.333557737402616
        }

        // map options
        const mapOptions: google.maps.MapOptions = {
            center: position,
            zoom: 17,
            mapId: 'MY_NEXTJS_MAPID'
        }

        // setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
      }

      initMap()
    }, [])
    


    return (
        <div className='m-auto h-[350px] w-[296px] md:h-[482px] md:w-[794px]' ref={mapRef} />
    )
}

export default Maps