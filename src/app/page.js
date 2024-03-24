import Image from "next/image";
import bdImage from './files/BD_C.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-orange-500">
      <h1 className="xl:text-15xl md:text-9xl sm:text-9xl text-7xl">BIRD DOG</h1>
      <Image
          src={bdImage}
          alt="Bird Dog logo"
          priority
        />
    </main>
  );
}
