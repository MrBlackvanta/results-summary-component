import { MemorySVG, ReactionSVG, VerbalSVG, VisualSVG } from "assets";
import type { DataItem } from "types";

export const data: DataItem[] = [
  {
    category: "Reaction",
    score: 80,
    icon: ReactionSVG,
    color: { bgColor: "bg-light-red/5", textColor: "text-light-red" },
  },
  {
    category: "Memory",
    score: 92,
    icon: MemorySVG,
    color: { bgColor: "bg-orangey-yellow/5", textColor: "text-orangey-yellow" },
  },
  {
    category: "Verbal",
    score: 61,
    icon: VerbalSVG,
    color: { bgColor: "bg-green-teal/5", textColor: "text-green-teal" },
  },
  {
    category: "Visual",
    score: 72,
    icon: VisualSVG,
    color: { bgColor: "bg-cobalt-blue/5", textColor: "text-cobalt-blue" },
  },
];

export const averageScore = Math.floor(
  data.reduce((acc, item) => acc + item.score, 0) / data.length,
);
