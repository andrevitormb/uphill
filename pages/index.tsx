import Search from "@/components/Search"
import RepoCard from "@/components/RepoCard"
import MostCards from "@/components/MostCards"
import TrendingCards from "@/components/TrendingCards"

export default function Home() {
  return (
    <main className="flex flex-col gap-2 bg-white items-center">
        <Search/>
        <TrendingCards/>
        <MostCards/>
        <RepoCard/>
    </main>
  )
}
