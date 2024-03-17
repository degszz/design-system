const Form = () => {
    return (
        <>
            <div>
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-octagon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                </div>
                <form className="flex flex-col">
                    <b><p className="ml-1">Name</p></b>
                    <input placeholder="Lorem" className="border rounded-md p-2 m-1 dark:bg-black-950" type="text" />
                    <b><p className="ml-1">Email</p></b>
                    <input placeholder="loremipsum@hotmail.com" className="border rounded-md p-2 m-1 dark:bg-black-950" type="Email" />
                    <b><p className="ml-1">Message...</p></b>
                    <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sunt tenetur rerum beatae sint unde, pariatur incidunt repellendus expedita, hic ab aperiam? Explicabo placeat exercitationem repudiandae voluptas, vel numquam saepe?" className="border rounded-md p-2 m-1 dark:bg-black-950" name="message" id="" cols="5" rows="3"></textarea>
                    <div className="flex justify-center">
                        <input className="w-fit m-2 flex-row justify-center text-black cursor-pointer hover:bg-black-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-black-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-black-300 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100" type="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form