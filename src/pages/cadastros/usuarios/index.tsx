import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

import styles from './usuario.module.css'


const Usuario = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300 font-sans'>
                <div className='flex mx-auto p-8 gap-5  items-start justify-center bg-gray-200'>
                    <div className='hidden md:flex md:flex-col md:gap-5'>

                        <Image src="/logo.png" alt="logo marca socialteca" height={212} width={550} />

                        <div className="flex flex-col mb-4 p-8">
                            <h1 className='font-medium text-2xl'>Cadastro de Usuário</h1>
                            <p className='font-normal text-lg mt-5 mb-5'>Faça seu cadastro, entre no aplicativo e controle suas leituras.</p>
                        </div>

                        <div  className="flex p-8">
                            <Link href='/' >
                                <a className='flex gap-2 items-center font-semibold'><FiArrowLeft size='20' color='#E02041' />Voltar a Home</a>
                            </Link>
                        </div>                            
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col gap-2 items-center mb-6'>
                            <h1 className='font-medium text-2xl md:hidden'>Cadastro de Usuário</h1>
                            
                            <form  className={styles.formulario} action="#">
                                <div className={styles.formulario__grupo}>
                                    <label className={styles.formulario__label} htmlFor="nome">Nome</label>
                                    <input id="nome" name="nome" className={styles.formulario__campo} type="text" />
                                </div>

                                <div className={styles.formulario__grupo}>
                                    <label className={styles.formulario__label} htmlFor="login">Login</label>
                                    <input id="login" name="login" className={styles.formulario__campo} type="text" />
                                </div>

                                <div className={styles.formulario__grupo}>
                                    <label className={styles.formulario__label} htmlFor="email">E-mail</label>
                                    <input id="email" name="email" className={styles.formulario__campo} type="email" />
                                </div>

                                <div className={styles.formulario__grupo}>
                                    <label className={styles.formulario__label} htmlFor="telefone">Telefone</label>
                                    <input id="telefone" name="telefone" className={styles.formulario__campo} type="number" />
                                </div>

                                <div className={styles.formulario__grupo}>
                                    <label className={styles.formulario__label} htmlFor="senha">Senha</label>
                                    <input id="senha" name="senha" className={styles.formulario__campo} type="password" />
                                </div>                    
                
                                <input className={styles.formulario__botao + ` hover:bg-red-200`} type="submit" value="Cadastrar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}

export default Usuario;
