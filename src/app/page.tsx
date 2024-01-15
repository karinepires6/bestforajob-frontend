import { lusitana } from "@/app/ui/fonts";
import SideNav from "./ui/candidates/sidenav";

export default function Home() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Utilize o menu ao lado para a navegação
        </h1>
      </div>
    </div>
  );
}
