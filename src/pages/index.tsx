import Image from 'next/image'
import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'

import styles from './login.module.css'


export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300 font-sans'>
        <div className='flex mx-auto px-2 items-center justify-center bg-gray-200'>
          <div className='flex flex-col gap-2 p-3 items-center justify-center'>
            <div className='mb-8'>
              <Image src='/logo.png' alt='logo marca socialteca' height={220} width={500} loading='eager' />
            </div>
            <div className='flex flex-col gap-2 items-center mb-6'>
              <form className={styles.formulario}>
                <div className={styles.formulario__grupo}>
                  <label className={styles.formulario__label} htmlFor="email">E-mail</label>
                  <input id="email" name="email" className={styles.formulario__campo} type="text" />
                </div>

                <div className={styles.formulario__grupo}>
                  <label className={styles.formulario__label} htmlFor="senha">Senha</label>
                  <input id="senha" name="senha" className={styles.formulario__campo} type="password" />
                </div>               
                
                <input className={styles.formulario__botao + ` hover:bg-red-200`} type="submit" value="Entrar" />
              </form>
              
              <Link href='/cadastros/usuarios' >
                <a className='flex gap-2 items-center'><FiLogIn size='20' color='#E02041' />Não Tenho cadastro</a>
              </Link>
            </div>
          </div>
          <div className='hidden md:flex'>
            <Image src='/image-side.png' alt='logo marca socialteca' height={560} width={600} loading='eager' />
          </div>
        </div>        
      </div>
    </>
  )
}
