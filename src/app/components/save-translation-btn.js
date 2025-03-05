'use client'
import { Bookmark } from 'lucide-react'
import { saveTranslation } from '@/app/actions/save-translations'

export default function SaveBtn({ sourceLan, targetLan, sourceText, translatedText, isSaved, onHandleSave }) {

    const btnColor = isSaved ? 'fill-yellow-500' : ''

    return (
        <button
            type='button'
            onClick={
                async () => {
                    await saveTranslation(sourceLan, targetLan, sourceText, translatedText);
                    onHandleSave()
                }}>
            <Bookmark className={btnColor} />
        </button>
    )
}