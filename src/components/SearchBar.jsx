export function SearchBar({ value, onChange }) {

    return (
        <>
            <section className="search-container">
                <div className="search-input">
                    <input
                        className="set-input"
                        type="text"
                        placeholder="Search Pokemon..."
                        value={value}
                        onChange={(e) => onChange(e.target.value)}

                    />

                </div>
            </section>
        </>
    )
}