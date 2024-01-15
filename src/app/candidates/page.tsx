import { lusitana } from "@/app/ui/fonts";
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Utilize o menu ao lado para a navegação
      </h1>
    </main>
  );
}
