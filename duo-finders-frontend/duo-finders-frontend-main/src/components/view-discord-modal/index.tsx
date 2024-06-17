"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface ViewDiscordModalProps {
  name: string;
}

export default function ViewDiscordModal({ name }: ViewDiscordModalProps) {
  return (
    <Dialog.Content className="bg-[#2A2634] px-[40px] py-8 rounded-lg fixed inset-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[311px] md:rounded-md flex flex-col overflow-hidden z-50">
      <div className="w-full h-full items-center justify-center flex flex-col">
        <IoMdCheckmarkCircleOutline size={64} className="text-[#34D399]" />
        <h1 className="font-black text-white text-2xl">Lets play!</h1>
        <h2 className="text-[#A1A1AA] font-normal text-base">
          Agora é só começar a jogar!
        </h2>

        <h3 className="text-white font-semibold text-base mt-6 mb-2">
          Adicione no Discord
        </h3>

        <div className="w-full px-4 py-3 bg-[#18181B] text-white text-center">{name}</div>
      </div>
    </Dialog.Content>
  );
}
