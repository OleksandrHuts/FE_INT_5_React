import { useContext } from "react";
import { UserContext } from '../App.js'
import useWindowSize from '../Hooks/WindowSize.js'

export function UserComponent() {
    const user = useContext(UserContext);
    const {width, height} = useWindowSize();

    return (
        <p>Width: { width }, height: { height }</p>
    )
}