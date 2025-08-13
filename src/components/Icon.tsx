import { useEffect } from "react";
import * as feather from 'feather-icons'

export default function Icon(props: {icon: keyof typeof feather.icons}) {
    useEffect(() => {
        feather.replace()
    })

    return <i data-feather={`${props.icon}`}></i>
}