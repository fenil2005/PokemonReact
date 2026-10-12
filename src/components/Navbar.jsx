import { useState } from "react"

export function Navbar() {
    const [count, setCount] = useState(0);
    return (
        <>
            <section>
                <div className="nav-bar">
                    <div>
                        <p className="nav-title">Pokedex Explorer</p>
                    </div>
                    <div>
                        <button className="btn-1">Favorities: {count} </button>
                    </div>
                </div>
            </section>
        </>
    )
}