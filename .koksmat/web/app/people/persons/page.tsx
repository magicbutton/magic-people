"use client";
import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";

export default function Person() {
  const router = useRouter();
  return (
    <div>
      <SearchPerson
        onItemClick={(item) => {
          router.push(`/people/persons/${item.id}`);
        }}
      />
    </div>
  );
}
