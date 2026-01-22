import Image from 'next/image';
import Link from 'next/link';

export default function Back() {
  return (
    <Link href="/home">
      <div className='flex justify-center items-center w-10 h-10 rounded-full bg-dusk fixed bottom-6 right-6 cursor-pointer'>
        <Image
          src="/ui/arrow_back.svg"
          alt="Back"
          width={18}
          height={18}
        />
      </div>
    </Link>
  );
}