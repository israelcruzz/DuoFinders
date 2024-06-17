"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "sonner";

export function SearchInput() {
  const [query, setQuery] = useState("");

  const router = useRouter()

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    if (!query) {
      toast.error("Campo Vazio");
      return;
    }

    router.push(`http://localhost:3000/search?q=${String(query)}`);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-full h-[52px] p-6 bg-black text-[#7B7B7B] flex rounded-lg justify-between items-center gap-2 cursor-pointer">
        <input
          name="q"
          type="text"
          placeholder="Pesquise Jogos..."
          className="bg-transparent outline-none flex-1"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <FiSearch size={24} />
      </div>
    </form>
  );
}
