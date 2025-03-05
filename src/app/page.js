"use client"
import { Dropdown } from "@/app/components/dropdown";
import { useState } from "react";
import { translate } from "@/app/actions/translate";
import VoiceRecorder from '@/app/components/voice-recorder';
import SaveBtn from "@/app/components/save-translation-btn";

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
  const [languageTo, setLanguageTo] = useState("es");

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [isSaved, setIsSaved] = useState(true);

  const onSave = () => {
    setIsSaved(true);
  }

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

  const handleInputSet = async (value) => {
    setInputText(value);
    //   const formData = new FormData();
    //   formData.append('text', value)
    //   formData.append('languageTo', languageTo)
    //   formData.append('languageFrom', languageFrom)
    //   const translation = await translate(formData);
    //   setTranslatedText(translation.translation);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={async (formData) => {
          const result = await translate(formData);
          setTranslatedText(result.translation);
          if (isSaved) {
            setIsSaved(false)
          }
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
              <div className="justify-between flex">
                <Dropdown
                  name='targetLanguage'
                  options={languageOptions}
                  value={languageTo}
                  onChange={handleLanguageToChange} />
                <SaveBtn
                  sourceLan={languageFrom}
                  targetLan={languageTo}
                  sourceText={inputText}
                  translatedText={translatedText}
                  onHandleSave={onSave}
                  isSaved={isSaved}
                />
              </div>
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
            {languageFrom === "en" && <VoiceRecorder handleSetText={handleInputSet} />}
          </div>
        </form>
      </main>
    </div >
  );
}
