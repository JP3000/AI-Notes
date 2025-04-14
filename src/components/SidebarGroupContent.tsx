"use client";

import { Note } from "@prisma/client";

type Props = {
  notes: Note[];
};

export function SidebarGroupContent({ notes }: Props) {
  console.log(notes);

  return <div>Your notes here</div>;
}
