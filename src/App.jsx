import {
    SurfaceProvider,
    SurfaceComponent,
    MiniviewComponent, ControlsComponent
} from "@visuallyjs/browser-ui-react"

import renderOptions from './render-options'
import createViewOptions from './view-options'

import OrgchartInspector from "./InspectorComponent.jsx";
import {useRef} from "react";

function App({url}) {

    const canvas = useRef(null)

    // set a person to be the current selection. We also zoom to focus on that individual.s
    function selectPerson(obj) {
        canvas.current.getModel().setSelection(obj)
        canvas.current.getSurface().centerOnAndZoom(obj, 0.15)
    }

    const viewOptions = createViewOptions(selectPerson)

  return <div className="vjs-orgchart">
      <SurfaceProvider>
          <div className="vjs-orgchart-canvas">
              <SurfaceComponent ref={canvas} renderOptions={renderOptions} viewOptions={viewOptions} url={url}>
                  <MiniviewComponent/>
                  <ControlsComponent clear={false} undoRedo={false}/>
              </SurfaceComponent>
          </div>
          <div className="vjs-orgchart-rhs">
              <OrgchartInspector onSelect={selectPerson}/>
          </div>
      </SurfaceProvider>
  </div>
}

export default App
