import React from "react"

export default function PersonComponent({ctx}) {

    const { obj, ui, model } = ctx

    function getImage() {
        return `/avatars/${obj.data.img}`
    }

    return <>
            <img src={getImage()} alt={obj.data.name}/>
        <div>
            <strong>{obj.data.name}</strong>
            <span>{obj.data.title}</span>
        </div>
    </>

}
