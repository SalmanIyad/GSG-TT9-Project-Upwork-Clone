import "@/styles/globals.css";
import GreetingCard from "./Cards/GreetingCard";
import ProfileCard from "./Cards/ProfileCard";

function HomePage() {
  return (
    <div className="flex justify-between mx-auto px-4 w-full">
      <div className="leftSide w-[70%]">
        <GreetingCard />
      </div>
      <div className="rightSide w-[calc(30%-2rem)]">
        <ProfileCard />
      </div>
    </div>
  );
}

export default HomePage;
