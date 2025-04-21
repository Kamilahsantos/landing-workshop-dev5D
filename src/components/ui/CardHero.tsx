type CardHeroProps = {
  text: string;
  icon: React.ComponentType<any>;
};

export default function CardHero({ text, icon: Icon }: CardHeroProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-md shadow-xl bg-gradient-to-l from-violet-500 via-violet-700 to-violet-900">
      <Icon className="w-14 h-14 text-zinc-200" aria-hidden="true" />
      <span className="text-center label-text text-zinc-200">
        {text}
      </span>
    </div>
  );
}
