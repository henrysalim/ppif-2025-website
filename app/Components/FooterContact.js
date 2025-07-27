import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-6'>
            <div className='container mx-auto flex flex-col items-center space-y-4'>
                <div className='flex flex-wrap justify-center gap-8'>
                    <Image src="/Images/FooterContact/Prodi.png" alt='Logo Prodi IF' width={80} height={40}/>
                    <Image src="/Images/FooterContact/HMIF.png" alt='Logo HMIF' width={80} height={40}/>
                    <Image src="/Images/FooterContact/ppif.png" alt='Logo PPIF' width={80} height={40}/>
                </div>

                <p className='text-sm text-gray-400'>
                    © 2025 Perkenalan Prodi Informatika UMN. All rights reserved.
                </p>
            </div>
        </footer>
    );
}