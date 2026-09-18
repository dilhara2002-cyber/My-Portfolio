interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-accent-cyan opacity-80">
          <span className="w-8 h-px bg-accent-cyan/60" />
          {label}
          <span className="w-8 h-px bg-accent-cyan/60" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
