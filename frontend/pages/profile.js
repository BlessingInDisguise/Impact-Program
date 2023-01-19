
const profile = ()=>{
    return(
        <div className="bg w-full h-screen flex justify-center">
            <div className="my-6 w-full md:w-2/5 lg:w-4/5 block p-6 rounded-lg   bg-white  max-w-sm-wrap items-center">
                <div className="flex flex-row justify-between">
                <section>
                    <img 
                        src="https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" 
                        className=" "

                    />
                </section>
                <section className="flex flex-col items-center justify-center">

                    <div className="flex flex-col justify-evenly">
                        <div>
                        <h1 className="text-6xl text-black">SDFG QWERT</h1>
                        <h3 className="text-4xl text-black">xyz@hotmail.com</h3>
                        </div>
                        <div>

                        </div>
                    </div>
                    
                </section>
                <section></section>
                </div>
            </div>
        </div>
    )
}

export default profile;