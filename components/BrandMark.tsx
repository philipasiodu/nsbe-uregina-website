import Image from "next/image";

export default function BrandMark({ size = 40 }: { size?: number }) {
  const scale = size / 40;

  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/5"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/media/branding/nsbe-logo-options.png"
        alt=""
        width={2000}
        height={405}
        priority
        className="absolute max-w-none"
        style={{
          width: 346 * scale,
          height: 70 * scale,
          left: -4 * scale,
          top: -14 * scale,
        }}
      />
    </span>
  );
}
