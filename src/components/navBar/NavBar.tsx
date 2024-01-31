import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()

    return (
        <>
            <div className='w-full bg-red-600 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Drogaxil</div>

                    <div className='flex gap-4'>
                        <div className='hover:underline'>Categorias</div>
                        <div className='hover:underline'>Cadastrar categoria</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
