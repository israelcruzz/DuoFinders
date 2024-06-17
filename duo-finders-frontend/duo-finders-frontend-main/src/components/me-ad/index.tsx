"use client";

import { api } from "@/services/api";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface MeAdProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
  gameName: string;
}

export default function MeAd({
  id,
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel,
  gameName,
}: MeAdProps) {
  const { data } = useSession();

  const removeAd = async () => {
    try {
      if (data?.token) {
        await api.delete(`/user/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        toast.success("Anúncio deletado com sucesso");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro no Servidor");
    }
  };

  return (
    <main className="bg-[#2A2634] px-4 py-6 rounded-lg flex flex-col gap-3">
      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">Nome</h2>
        <h1 className="font-bold text-sm text-white">{gameName}</h1>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">Tempo de Jogo</h2>
        <h1 className="font-bold text-sm text-white">{yearsPlaying} anos</h1>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">Disponibilidade</h2>
        <h1 className="font-bold text-sm text-white">
          {weekDays} | {hourStart}h - {hourEnd}h
        </h1>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">
          Chamada de áudio?
        </h2>
        <h1
          className={`font-bold text-sm text-white ${
            useVoiceChannel ? "text-green-400" : "text-red-700"
          }`}
        >
          {useVoiceChannel ? "Sim" : "Não"}
        </h1>
      </div>
      <button
        className="bg-red-600 w-full py-3 text-white flex items-center justify-center font-semibold rounded-lg"
        onClick={() => removeAd()}
      >
        Apagar
      </button>
    </main>
  );
}
