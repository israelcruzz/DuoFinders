import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          width={56}
          height={56}
          alt="logo image"
          className="animate-bounce"
        />

        <h1 className="text-white">Carregando</h1>
      </div>
    </div>
  );
}
