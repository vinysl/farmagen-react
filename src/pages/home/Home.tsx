import homeLogo from '../../assets/home.svg'

function Home() {
    
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl '>Bem vindo a Drogaxil sua farmácia digital!</h2>
                        <p className='text-xl'>Aqui você encontra todos os tipos de medicamentos e cosméticos que você procura.</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-red-600 text-white py-2 px-4'>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;