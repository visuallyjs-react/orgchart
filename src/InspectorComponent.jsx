import {useState} from "react";
import officeLocations from "./office-locations"

import { InspectorComponent } from "@visuallyjs/browser-ui-react"

/**
 * Inspector for person cards. Shows the person's details, manager and reports, if any. Clicking on a name brings that
 * person into focus in the canvas.
 */
export default function OrgchartInspector({onSelect}) {

    const [current, setCurrent] = useState(null)
    const [manager, setManager] = useState(null)
    const [reports, setReports] = useState([])

    function getImage(person) {
        return `/avatars/${person.data.img}`
    }

    function renderPersonLink(person) {
        return <a className="vjs-orgchart-inspector-person" href="#" data-id={person.data.id} onClick={() => onSelect(person)} key={person.data.id}>
                <img src={getImage(person)} alt={person.data.name}/>
                <div>
                    {person.data.name}
                    <span>{person.data.title}</span>
                </div>
                </a>
    }

    // invoked by the InspectorComponent when nothing is selected. We clear all our state.
    const renderEmptyContainer = () => {
        setCurrent(null)
        setManager(null)
        setReports([])
    }

    // Invoked by the InspectorComponent when something is selected. We update our state.
    const refresh = (obj, cb) => {
        setCurrent(obj)
        setManager(obj.getTargetEdges().map(e => e.source)[0])
        setReports(obj.getSourceEdges().map(e => e.target))
    }

    return <InspectorComponent refresh={refresh} renderEmptyContainer={renderEmptyContainer}>

        {current== null && ''}

        {current != null &&
            <div className="vjs-orgchart-inspector">

                <h1>{current.data.name}</h1>
                <h2>{current.data.title}</h2>

                <div className="vjs-orgchart-inspector-details">
                    <div className="vjs-node-status-container">
                        <span className={`vjs-node-status ${current.data.online ? 'vjs-node-status-online' : 'vjs-node-status-offline'}`}></span>
                        <span className="vjs-node-status-text">{current.data.online ? 'Online' : 'Offline'}</span>
                    </div>
                    <a href={`mailto:${current.data.email}`} className="vjs-node-email">{current.data.email}</a>
                    <span className="vjs-node-location">
                        {current.data.location}
                        {(() => {
                            const locationData = officeLocations.find(loc => loc.name === current.data.location)
                            const timezone = locationData ? locationData.timezone : ""
                            return timezone && <span className="vjs-node-timezone"> ({timezone.match(/\((UTC[+-]\d+)\)/)?.[1] || timezone})</span>
                        })()}
                    </span>
                </div>

                {manager != null && <>
                    <h5>Reports to:</h5>
                    {renderPersonLink(manager)}
                </>}

                {reports.length > 0 && <>
                    <br/>
                    <h5>Reports:</h5>
                    {reports.map(r => renderPersonLink(r))}
                </>}

            </div>
        }

    </InspectorComponent>

}
