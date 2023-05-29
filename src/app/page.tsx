import Sidebar from "./components/Molecules/SideBar/Sidebar";
import Main from "./components/Organism/Main/Main";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Sidebar />
      <Main />
    </div>
  );
}
