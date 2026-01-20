import Image from 'next/image';
import Link from 'next/link';

export default function Back() {
  return (
    <Link href="/home">
    <div className='flex justify-center items-center w-7.5 h-7.5 bg-dusk fixed bottom-6 right-6 cursor-pointer'>
      <Image
        src="/arrow_back.svg"
        alt="Back"
        width={18}
        height={18}
      />
    </div>
    </Link>
  );
}