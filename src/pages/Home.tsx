import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-row">
        <Header/>
        <div className="pl-4 pt-8">
            <h1 className="text-2xl font-bold">Welcome, Mudasir</h1>
        </div>
    </div>
  )
}