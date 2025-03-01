"use client"
import { Dropdown } from "@/app/components/dropdown";
import { useState } from "react";

const languageOptions = [
  {
    value: "en",
    label: "English"
  },
  {
    value: "fr",
    label: "French"
  },
  {
    value: "de",
    label: "German"
  },
  {
    value: "es",
    label: "Spanish"
  }
]

export default function Home() {
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("fr");

  const handleLanguageFromChange = (value) => {
    setLanguageFrom(value);
  }

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4">
          <div className="container flex flex-col">
            <Dropdown
              name='LanguageFrom'
              options={languageOptions}
              value={languageFrom}
              onChange={handleLanguageFromChange} />
            <textarea className="border border-slate-800 rounded-md p-4 " />
          </div>
          <div className="container flex flex-col">
            <Dropdown
              name='LanguageFrom'
              options={languageOptions}
              value={languageTo}
              onChange={handleLanguageToChange} />
            <textarea className="border border-slate-800 rounded-md p-4 " />
          </div>
        </div>
        <button className="p-3 rounded-md bg-slate-800 text-white">Translate</button>
      </main>
    </div>
  );
}
