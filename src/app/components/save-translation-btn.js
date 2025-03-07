'use client'
import { Bookmark } from 'lucide-react'
import { saveTranslation } from '@/app/actions/save-translations'

export default function SaveBtn({ sourceLan, targetLan, sourceText, translatedText, isSaved, onHandleSave }) {
    const btnColor = isSaved ? 'fill-yellow-500' : ''
    const isEmpty = !sourceText?.trim() || !translatedText?.trim()

    return (
        <button
            type='button'
            disabled={isEmpty}
            onClick={async () => {
                await saveTranslation(sourceLan, targetLan, sourceText, translatedText);
                onHandleSave()
            }}
            className={`${isEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <Bookmark className={btnColor} />
        </button>
    )
}