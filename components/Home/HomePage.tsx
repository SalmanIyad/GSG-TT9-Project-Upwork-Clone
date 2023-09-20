import "@/styles/globals.css";
import GreetingCard from "./Cards/GreetingCard";
import ProfileCard from "./Cards/ProfileCard";
import SearchCard from "./Cards/SearchCard";
import TapsSection from "./TapsSection";

function HomePage() {
  return (
    <div className="flex justify-between flex-col-reverse gap-4 lg:flex-row mx-auto w-full">
      <div className="flex flex-col gap-4 mx-auto w-full lg:w-[70%]">
        <GreetingCard />
        <SearchCard />
        <TapsSection/>
      </div>
      <div className="lg:w-[calc(30%-2rem)]">
        <ProfileCard />
      </div>
    </div>
  );
}

export default HomePage;
