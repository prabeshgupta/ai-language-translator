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
  },
  {
    value: "np",
    label: "Nepali"
  },
  {
    value: "in",
    label: "Hindi"
  },
  {
    value: "ch",
    label: "Chinese"
  },
  {
    value: "jp",
    label: "Japanese"
  },
  {
    value: "kr",
    label: "Korean"
  },
  {
    value: "it",
    label: "Italian"
  },
  {
    value: "ru",
    label: "Russian"
  },
  {
    value: "ar",
    label: "Arabic"
  },
  {
    value: "pt",
    label: "Portuguese"
  }
]

export default function Home() {
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("es");

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [isSaved, setIsSaved] = useState(false);

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
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900  sm:text-5xl md:text-6xl">Translate Text With <span className="text-purple-700">Ease</span></h1>
        <p className="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">AI-powered language translation. Translate, save, and use voice input instantly.
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
        <div className="grid grid-rows-[20px_1fr_20px] items-start justify-center p-2 pb-2 gap-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
            <form
              className="w-full"
              action={async (formData) => {
                const result = await translate(formData);
                setTranslatedText(result.translation);
                if (isSaved) {
                  setIsSaved(false)
                }
              }}>
              <div className="flex flex-row gap-10">
                <div className="container flex flex-col">
                  <Dropdown
                    name='languageFrom'
                    options={languageOptions}
                    value={languageFrom}
                    onChange={handleLanguageFromChange} />
                  <textarea
                    name="text"
                    placeholder="Enter the text to translate"
                    className="border border-slate-800 rounded-md p-4"
                    value={inputText}
                    onChange={handleInputChange}
                    required
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
                    className="border border-slate-800 rounded-md p-4 "
                    value={translatedText}
                    readOnly
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 h-16">
                <button type='submit' className="p-3 rounded-md bg-purple-700 text-white">Translate</button>
                {languageFrom === "en" && <VoiceRecorder handleSetText={handleInputSet} />}
              </div>
            </form>
          </main>
        </div >
      </div>
    </section>
  );
}
