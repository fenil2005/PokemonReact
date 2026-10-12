import axios from 'axios';
import { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { SearchBar } from './SearchBar';
import { Modal } from './Modal';

export function PokemonList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const [search, setSearch] = useState("");
    const [card, setCard] = useState();
    console.log(search);
    useEffect(() => {
        const PokemonFetch = async () => {
            try {
                setLoading(true);
                setErr("");
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
                setData(response.data.results)
            } catch (error) {
                setErr("Failed to Load Data");
            }
            finally {
                setLoading(false);
            }
        }
        PokemonFetch();
    }, []);
    if (loading)
        return <p>Loading...</p>
    if (err)
        return <p style={{ color: "red" }}>{err}</p>
    const filteredPokemon = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    });
    return (
        <>
            <SearchBar value={search} onChange={setSearch} />
            <section>
                <div>
                    <div>
                        <ul className='order-lists all-card'>
                            {filteredPokemon.map((fenildata) => {
                                return (
                                    <PokemonCard
                                        imageurl={<img src={fenildata.url} />}
                                        name={fenildata.name}

                                    />

                                )

                            })}

                            <Modal
                                url={<img src={fenildata.url} />}
                                fenilbhattname={fenildata.name}
                            />

                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}