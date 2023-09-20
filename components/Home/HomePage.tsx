import "@/styles/globals.css";
import GreetingCard from "./Cards/GreetingCard";
import ProfileCard from "./Cards/ProfileCard";
import SearchCard from "./Cards/SearchCard";

function HomePage() {
  return (
    <div className="flex justify-between mx-auto w-full">
      <div className="flex flex-col gap-4 mx-auto w-[70%]">
        <GreetingCard />
        <SearchCard />
      </div>
      <div className="w-[calc(30%-2rem)]">
        <ProfileCard />
      </div>
    </div>
  );
}

export default HomePage;
