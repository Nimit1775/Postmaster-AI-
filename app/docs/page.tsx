import { Navbar } from "@/components/Navbar"

export default function DocsPage () {
    return ( 
        <div className="min-h-screen bg-black text-gray-100"> 
        <Navbar/>
        <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
        Docs page 
        </h1>    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
        </div>
          </main>
        </div>
    )
}