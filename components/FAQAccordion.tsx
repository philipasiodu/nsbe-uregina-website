export default function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#122019]">
      {items.map((item, index) => (
        <details key={item.question} name="membership-faq" open={index === 0} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-gray-950 dark:text-white">{item.question}<span className="text-2xl font-light text-[#006B3C] transition-transform group-open:rotate-45 dark:text-green-400">+</span></summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-gray-500 dark:text-gray-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
