interface ClothingIconProps {
  type: 'tee' | 'hoodie';
  size?: number;
}

export function TeeIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 120 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 8 L30 4 L4 22 L18 36 L28 28 L28 98 L92 98 L92 28 L102 36 L116 22 L90 4 L75 8 C72 18 48 18 45 8Z" fill="#4ade80" />
      <path d="M45 8 C48 18 72 18 75 8" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="28" y="42" width="64" height="10" fill="#22c55e" opacity="0.5" />
    </svg>
  );
}

export function HoodieIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.92} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 10 L26 6 L4 28 L18 42 L28 32 L28 104 L92 104 L92 32 L102 42 L116 28 L94 6 L78 10 C74 22 62 26 60 26 C58 26 46 22 42 10Z" fill="#c4a882" />
      <path d="M42 10 C46 22 58 26 60 26 C62 26 74 22 78 10 L72 6 C68 16 52 16 48 6Z" fill="#b8976e" />
      <line x1="60" y1="26" x2="60" y2="104" stroke="#b8976e" strokeWidth="2" />
      <circle cx="60" cy="32" r="3" fill="#b8976e" />
      <circle cx="60" cy="42" r="3" fill="#b8976e" />
      <circle cx="60" cy="52" r="3" fill="#b8976e" />
      <circle cx="60" cy="62" r="3" fill="#b8976e" />
      <circle cx="60" cy="72" r="3" fill="#b8976e" />
    </svg>
  );
}

export function ClothingIcon({ type, size }: ClothingIconProps) {
  if (type === 'hoodie') return <HoodieIcon size={size} />;
  return <TeeIcon size={size} />;
}
