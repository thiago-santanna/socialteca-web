import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

import styles from './livro.module.css'

const Livro = () => {
    return (
        <>
            <div className='min-h-screen min-w-full flex flex-col items-center justify-center bg-gray-300 font-sans'>
                <div className='container p-2 mx-auto items-start justify-center bg-gray-200'>
                    <section className=" block md:mx-auto md:w-1/2">                    
                        <form className={styles.formulario} action="#">
                            <div className={styles.formulario__grupo}>
                                <label className={styles.formulario__label} htmlFor="nome">Nome</label>
                                <input className={styles.formulario__campo} id="nome" type="text" name="nome" />
                            </div>

                            <div className={styles.formulario__grupo}>
                                <label className={styles.formulario__label} htmlFor="autor">Autor</label>
                                <input className={styles.formulario__campo} id="autor" type="text" name="autor" />
                            </div>

                            <div className={styles.formulario__grupo}>
                                <label className={styles.formulario__label} htmlFor="ano">Ano</label>
                                <input className={styles.formulario__campo} id="ano" type="text" name="ano" />
                            </div>

                            <div className={styles.formulario__grupo}>
                                <label className={styles.formulario__label} htmlFor="isbn">ISBN</label>
                                <input className={styles.formulario__campo} id="isbn" type="text" name="isbn" />
                            </div>

                            <div className={styles.formulario__grupo}>
                                <label className={styles.formulario__label} htmlFor="paginas">Páginas</label>
                                <input className={styles.formulario__campo} id="paginas" type="number" name="paginas" />
                            </div>

                            <div className={styles.formulario__grupo}>
                                <label className={styles.formulario__label} htmlFor="sinopse">Sinopse</label>
                                <textarea className={styles.formulario__campo} id="sinopse" name="sinopse" cols={30} rows={5} ></textarea>
                            </div>

                            <input className={styles.formulario__botao + ` hover:bg-red-200`} type="submit" value="Salvar" />
                        </form>                        
                    </section>
                </div>
            </div>            
        </>
    );
}

export default Livro;

