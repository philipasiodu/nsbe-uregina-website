type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#006B3C] dark:text-green-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg dark:text-gray-300">{description}</p>}
    </div>
  );
}
