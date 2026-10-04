export function AnswerBlock({
  question,
  children,
  id,
}: {
  question: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="rounded-xl border border-white/8 bg-black/35 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
    >
      <h2 className="text-base font-semibold text-zinc-100">{question}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-zinc-300">
        {children}
      </div>
    </section>
  );
}
