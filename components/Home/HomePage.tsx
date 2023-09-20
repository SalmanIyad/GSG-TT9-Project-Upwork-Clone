import "@/styles/globals.css";
import GreetingCard from "./Cards/GreetingCard";
import ProfileCard from "./Cards/ProfileCard";

function HomePage() {
  return (
    <div className="flex justify-between mx-auto w-full">
      <div className="w-[70%]">
        <GreetingCard />
      </div>
      <div className="w-[calc(30%-2rem)]">
        <ProfileCard />
      </div>
    </div>
  );
}

export default HomePage;
