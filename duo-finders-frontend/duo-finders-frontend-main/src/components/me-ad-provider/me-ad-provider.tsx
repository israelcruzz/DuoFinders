"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import MeAd from "../me-ad";

interface MeAdProviderProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
  gameName: string;
  session: Session;
}

export function MeAdProvider({
  session,
  gameName,
  hourEnd,
  hourStart,
  id,
  name,
  useVoiceChannel,
  weekDays,
  yearsPlaying,
}: MeAdProviderProps) {
  return (
    <SessionProvider session={session}>
      <MeAd
        gameName={gameName}
        hourEnd={hourEnd}
        hourStart={hourStart}
        id={id}
        name={name}
        useVoiceChannel={useVoiceChannel}
        weekDays={weekDays}
        yearsPlaying={yearsPlaying}
      />
    </SessionProvider>
  );
}
