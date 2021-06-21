import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'


const Usuario = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300 font-sans'>
                <div className='flex mx-auto p-8 gap-5  items-start justify-center bg-gray-200'>
                    <div className='hidden md:flex'>
                        <div className='flex flex-col items-center'>
                            <div className='flex'>
                                <Image src='/logo.png' alt='logo marca socialteca' height={220} width={500} loading='eager' />
                            </div>
                            <h1 className='flex font-medium text-2xl'>Cadastro de Usuário</h1>
                            <p className=' felx font-normal mt-5 mb-5'>Faça seu cadastro, entre no aplicativo e controle suas leituras.</p>
                            <div className='flex'>
                                <Link href='/' >
                                    <a className='flex gap-2 items-center font-semibold'><FiArrowLeft size='20' color='#E02041' />Voltar a Home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-2 items-center mb-6'>
                            <h1 className='font-medium text-2xl md:hidden'>Cadastro de Usuário</h1>
                            <form className='flex flex-col gap-2 items-center'>
                                <input className='bg-white border-2 border-gray-400 px-10 py-3 rounded-lg mb-2 outline-none' type="text" placeholder='Nome' />
                                <input className='bg-white border-2 border-gray-400 px-10 py-3 rounded-lg mb-2 outline-none' type="text" placeholder='Login' />
                                <input className='bg-white border-2 border-gray-400 px-10 py-3 rounded-lg mb-2 outline-none' type="email" placeholder='E-mail' />
                                <input className='bg-white border-2 border-gray-400 px-10 py-3 rounded-lg mb-2 outline-none' type="number" placeholder='Telefone' />
                                <input className='bg-white border-2 border-gray-400 px-10 py-3 rounded-lg mb-2 outline-none' type="password" placeholder='Senha' />
                                <button className='bg-red-600 text-white text-lg font-semibold px-24 py-3 rounded-lg my-5'>Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}

export default Usuario;
