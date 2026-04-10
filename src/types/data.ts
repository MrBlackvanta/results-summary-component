export type DataItem = {
  category: string;
  score: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: { bgColor: string; textColor: string };
};
