"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Search({
  onHandleSkillFilter,
  searched,
}: {
  onHandleSkillFilter: (filter: string[]) => void;
  searched: string;
}) {
  const [skills, setSkills] = useState<string[]>(
    searched !== "" ? searched.split(",") : [""]
  );

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  return (
    <div className="">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`skill-${index}`}
              className="mb-2 block text-sm font-medium"
            >
              {`Skill ${index + 1}`}
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id={`skill-${index}`}
                name={`skill-${index}`}
                value={skill}
                onChange={(e) => {
                  e.preventDefault()
                  handleSkillChange(index, e.target.value);
                }}
                placeholder="Enter candidate skill"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleAddSkill}
          type="button"
          className="rounded-md border p-2 bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          <PlusIcon className="w-5" />
        </button>
        <button
          onClick={() => onHandleSkillFilter(skills)}
          type="button"
          className="rounded-md border p-2 bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
