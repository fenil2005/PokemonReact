import { useState } from "react"
import { NavLink } from "react-router-dom";

export function Pagination() {
    const [count, setCount] = useState(1);
    return (
        <>
            <section className="pagination-container">
                <div className="pagination-flex">
                    <div>
                        <button className="btn-4">Previous</button>
                    </div>
                    <div>
                        <p>Page {count}</p>
                    </div>
                    <div>
                        <NavLink className="btn-5" to="about-us">Next</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}