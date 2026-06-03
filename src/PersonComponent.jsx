import React from "react"
import { useZoom } from "@visuallyjs/browser-ui-react"
import officeLocations from "./office-locations"

export default function PersonComponent({ctx}) {

    const { obj, ui, model } = ctx
    const zoom = useZoom(ui)

    function getImage() {
        return `/avatars/${obj.data.img}`
    }

    const locationData = officeLocations.find(loc => loc.name === obj.data.location)
    const timezone = locationData ? locationData.timezone : ""

    const isOnline = obj.data.online

    return <>
            <img src={getImage()} alt={obj.data.name}/>
        <div>
            <strong>{obj.data.name}</strong>
            <span className="vjs-node-title">{obj.data.title}</span>
            {zoom > 1 && <>
                <div className="vjs-node-status-container">
                    <span className={`vjs-node-status ${isOnline ? 'vjs-node-status-online' : 'vjs-node-status-offline'}`}></span>
                    <span className="vjs-node-status-text">{isOnline ? 'Online' : 'Offline'}</span>
                </div>
                <a href={`mailto:${obj.data.email}`} className="vjs-node-email">{obj.data.email}</a>
                <span className="vjs-node-location">{obj.data.location} {timezone && <span className="vjs-node-timezone">({timezone.match(/\((UTC[+-]\d+)\)/)?.[1] || timezone})</span>}</span>
            </>}
        </div>
    </>

}
