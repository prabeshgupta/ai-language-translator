import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(request) {
    const formData = await request.formData();
    const audioFile = formData.get("audio");

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    try {
        // Generate content using a prompt and the metadata of the uploaded file.
        const result = await model.generateContent([
            {
                inlineData: {
                    mimeType: "audio/wav",
                    data: audioFile
                }
            },
            { text: "Please transcribe the audio." },
        ]);

        return Response.json({ result: result.response.text() });
    } catch (error) {
        console.log(error);
        return Response.json({ error });
    }
}