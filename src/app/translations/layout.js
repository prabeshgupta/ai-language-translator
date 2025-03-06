export default function Layout({ children }) {
    return (
        <main className="min-h-screen bg-gray-200 py-8">
            <div className="container mx-auto px-4">{children}</div>
        </main>
    )
}