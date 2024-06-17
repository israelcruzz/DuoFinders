import Image from "next/image";
import Link from "next/link";

interface RecentAdsCardProps {
  gameId: string;
  imageUri: string;
  title: string;
  category: string;
}

export function RecentAdsCard({
  gameId,
  category,
  imageUri,
  title,
}: RecentAdsCardProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2">
        <Image
          src={imageUri}
          width={46}
          height={46}
          alt="game card"
          className="w-[46px] h-[46px] rounded-md"
          style={{ objectFit: "cover" }}
        />

        <div className="flex flex-col">
          <h1 className="font-medium text-xs xl:text-base text-white">
            {title}
          </h1>
          <span className="text-[#FAFAFA]/40 text-[8px] xl:text-sm">
            {category}
          </span>
        </div>
      </div>
      <div>
        <Link
          href={`/ads/${gameId}`}
          className="rounded-lg border border-white/10 text-white font-medium text-xs p-1 xl:p-2.5 hover:bg-white hover:text-black"
        >
          Ver Anúncios
        </Link>
      </div>
    </div>
  );
}
