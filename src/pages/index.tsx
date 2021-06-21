import Image from 'next/image'
import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'


export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
        <div className='flex mx-auto px-2 items-center justify-center bg-gray-100 rounded-lg shadow-md'>
          <div className='flex flex-col gap-2 p-3 items-center justify-center'>
            <div className='mb-8'>
              <Image src='/logo.png' alt='logo marca socialteca' height={220} width={500} loading='eager' />
            </div>
            <div className='flex flex-col gap-2 items-center mb-5'>
              <form className='flex flex-col gap-2 items-center'>
                <input className='bg-white border-2 border-gray-100 px-7 py-3 rounded-lg mb-2' type="text" placeholder='E-mail' />
                <input className='bg-white border-2 border-gray-100 px-7 py-3 rounded-lg mb-2' type="password" placeholder='Senha' />
                <button className='bg-red-600 text-white text-lg font-semibold px-24 py-3 rounded-lg my-5'>Entrar</button>
              </form>
              <Link href='/cadastro' >
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
