const Card = () => {
    return (
        <>
            <div className="flex flex-col items-center m-1 p-4 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shirt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" /></svg>
                <p>Shirt</p>
            </div>
        </>
    )
}

export default Card