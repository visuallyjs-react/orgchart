import {DEFAULT, EVENT_TAP} from "@visuallyjs/browser-ui";
import PersonComponent from "./PersonComponent.jsx";
import React from "react";


function createViewOptions(selectPerson) {
    /**
     * View options map node/group types to the JSX used to render them and optionally to various aspects of the given vertex type's
     * behaviour.
     */
    return {
        // For all nodes, use this JSX to render. It uses a `PersonComponent` to render the person's
        // card, and attaches a tap handler which invokes the selectPerson method passed in to this module.
        nodes: {
            [DEFAULT]: {
                events: {
                    [EVENT_TAP]: (p) => {
                        selectPerson(p.obj)
                    }
                },
                jsx: (ctx) => <PersonComponent ctx={ctx}/>
            }

        }
    }
}

export default createViewOptions
