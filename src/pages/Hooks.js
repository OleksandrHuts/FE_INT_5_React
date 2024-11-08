import { useEffect, useState } from "react"
import { UserComponent } from "../components/UserComponent"

export default function Hooks() {
    // const [coffeeData, setCoffeeData] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://api.sampleapis.com/coffee/hot')
    //         .then(response => response.json())
    //         .then(res => {
    //             setCoffeeData(res);
    //             setLoading(false)
    //         })
    // }, []);

    // if(loading) {
    //     return (
    //         <h2>Loading...</h2>
    //     )
    // }
    // return (
    //     <div className="container">
    //         <pre>
    //             {JSON.stringify(coffeeData, null, 2)}
    //         </pre>
    //     </div>
    // )

    return (
        // <div>
        //     <p>Hooks:</p>
        //     <div className="container">
        //         <ul>
        //             <li>useState: creates State</li>
        //             <li>useEffect: run some code at some moment</li>
        //             <li>useContext: get some data from component's context</li>
        //         </ul>
        //     </div>
        // </div>
        <UserComponent />
    )
}