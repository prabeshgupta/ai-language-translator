"use client"
import { Dropdown } from "@/app/components/dropdown";
import { useState } from "react";
import { translate } from "@/app/actions/translate";
import VoiceRecorder from '@/app/components/voice-recorder';

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

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleLanguageFromChange = (value) => {
    setLanguageFrom(value);
  }

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
  }

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={async (formData) => {
          const result = await translate(formData);
          setTranslatedText(result.translation);
        }}>
          <div className="flex flex-row gap-4">
            <div className="container flex flex-col">
              <Dropdown
                name='languageFrom'
                options={languageOptions}
                value={languageFrom}
                onChange={handleLanguageFromChange} />
              <textarea
                name="text"
                placeholder="Enter the text to translate"
                className="border border-slate-800 rounded-md p-4 lg:w-[400px]"
                value={inputText}
                onChange={handleInputChange}
              />
            </div>
            <div className="container flex flex-col">
              <Dropdown
                name='targetLanguage'
                options={languageOptions}
                value={languageTo}
                onChange={handleLanguageToChange} />
              <textarea
                placeholder="Translated text shows up here"
                className="border border-slate-800 rounded-md p-4 lg:w-[400px]"
                value={translatedText}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 h-16">
            <button type='submit' className="p-3 rounded-md bg-slate-800 text-white">Translate</button>
            {languageFrom === "en" && <VoiceRecorder />}
          </div>
        </form>
      </main>
    </div >
  );
}
