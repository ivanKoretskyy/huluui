'use client'
import { useState } from "react"

export default function Card()  {
    const [counter, setCounter] = useState(0)

    return <div onClick={() => setCounter(counter + 1)}>Counter: {counter}</div>

}