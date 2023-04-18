import Search from "@/components/Search"
import RepoCard from "@/components/RepoCard"
import UserCard from "@/components/UserCard"

export default function Home() {
  return (
    <main className="flex flex-col gap-2 ">
        <Search/>
        <UserCard/>
        <RepoCard/>
    </main>
  )
}
