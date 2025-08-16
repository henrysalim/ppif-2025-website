import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='bg-gradient-to-b from-[#3D3F44] to-[#25272B] border-t-4 border-gray-400 to-100% absolute bottom-0 text-white py-2 w-full'>
            <div className='flex flex-row justify-between items-center px-7 space-y-2'>
                <div className='flex flex-row items-center justify-center gap-8'>
                    <Image src="/Images/FooterContact/Prodi.png" alt='Logo Prodi IF' width={100} height={100} className='lg:h-14 h-7 w-auto opacity-50' />
                    <Image src="/Images/FooterContact/HMIF.png" alt='Logo HMIF' width={100} height={100} className='lg:h-10 h-6 w-auto opacity-50' />
                    <Image src="/Images/FooterContact/ppif.png" alt='Logo PPIF' width={100} height={100} className='lg:h-24 h-12 w-auto opacity-40 mt-2' />
                </div>
                <p className='text-[10px] text-gray-400' style={{ fontFamily: 'HongMengTi' }}>
                    © 2025 Perkenalan Prodi Informatika UMN. All rights reserved.
                </p>
            </div>
        </footer>
    );
}