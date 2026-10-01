type MediaPlaceholderProps = {
  label: string;
  detail?: string;
  className?: string;
};

export default function MediaPlaceholder({ label, detail = "Media needed", className = "aspect-[4/3]" }: MediaPlaceholderProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#006B3C]/30 bg-[#edf6f1] p-6 text-center dark:border-green-400/20 dark:bg-[#102019] ${className}`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(#006B3C18 1px,transparent 1px),linear-gradient(90deg,#006B3C18 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="relative">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#006B3C] text-xl font-black text-white">+</span>
        <p className="font-bold text-gray-800 dark:text-white">{label}</p>
        <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">{detail}</p>
      </div>
    </div>
  );
}
