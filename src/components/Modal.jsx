export function Modal({ url, fenilbhattname }) {
    return (
        <div className="modal-container">
            <div className="modal">
                <div>
                    <img src={url} />
                </div>
                <div>
                    <p>{fenilbhattname}</p>
                </div>
            </div>
        </div>
    )
}