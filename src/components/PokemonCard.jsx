

export function PokemonCard({ imageurl, name }) {

    return (
        <>
            <section className="card-container">
                <div >
                    <div className="btn-2" onClick={() => { }} >
                        <div className="setflex" >
                            <div>
                                <button>{imageurl}</button>
                            </div>
                            <div>
                                <button>{name}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}