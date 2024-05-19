"use client";

import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="space-x-2 h-[90vh]">
      <SearchPerson
        onItemClick={(item) => {
          router.push(`/people/persons/${item.id}`);
        }}
      />
    </div>
  );
}
