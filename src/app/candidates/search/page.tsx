"use client";

import { useGetCandidates } from "@/app/lib/queries/candidate";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState<string>("");
  const candidates = useGetCandidates(filter);

  if (candidates.isLoading || !candidates.data) return <div>is loading...</div>;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Filter</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search
          searched={filter}
          onHandleSkillFilter={(filtered: string[]) =>
            setFilter(filtered.join(","))
          }
        />
      </div>
      <div className="flex w-full items-center justify-between mt-6">
        <h1 className={`${lusitana.className} text-2xl`}>
          {filter === "" ? "All " : "Filtered "}Candidates
        </h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {candidates.data?.map((candidate) => (
          <div className="bg-slate-100 rounded-lg mt-2 p-4" key={candidate.id}>
            <div className="flex gap-1">
              <p className="font-bold">Name:</p>
              {candidate.name}
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Skills:</p>
              {candidate.skills.map((skill) => (
                <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-blue-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                  <span className="">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
