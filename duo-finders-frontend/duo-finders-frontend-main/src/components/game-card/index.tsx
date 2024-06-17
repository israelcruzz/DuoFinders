import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  id: string
  imageUri: string;
  title: string;
  countAds: number;
}

export function GameCard({ id, title, countAds, imageUri }: GameCardProps) {
  return (
    <Link href={`/ads/${id}`} className="w-[148px] h-[141px] xl:w-[167px] flex flex-col">
      <Image
        src={imageUri}
        quality={100}
        width={384}
        height={96}
        alt="game card"
        className="rounded-lg object-cover w-96 h-24"
      />
      <h1 className="font-medium text-white mt-2">{title}</h1>
      <span className="font-normal text-[#C4C4C4]">
        {countAds === 1 ? `${countAds} Anúncio` : `${countAds} Anúncios`}
      </span>
    </Link>
  );
}
