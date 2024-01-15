"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { useState } from "react";
import { useCreateCandidate } from "@/app/lib/queries/candidate";

export default function Form() {
  const [skills, setSkills] = useState([""]);
  const createCandidateMutation = useCreateCandidate();
  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const regex = /^skill-\d+$/;
    const candidate: any = { skills: [] };
    formData.forEach((value, key) => {
      if (key.match(regex)) {
        candidate.skills.push(value.toString().toLocaleLowerCase());
      } else {
        candidate[key] = value;
      }
    });
    createCandidateMutation.mutate(candidate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="name"
              name="name"
              placeholder="Enter candidate name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
        <>
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
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder="Enter candidate skill"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          ))}
          <button
            onClick={handleAddSkill}
            type="button"
            className="rounded-md border p-2 bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          >
            <PlusIcon className="w-5" />
          </button>
        </>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
