type CardHeroProps = {
  text: string;
  icon: React.ComponentType<any>;
};

export default function CardHero({ text, icon: Icon }: CardHeroProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4 rounded-md shadow-xl border-muted bg-gradient-to-l from-violet-500 via-violet-700 to-violet-900'>
      <Icon className='w-14 h-14 text-zinc-200' />
      <span className='font-light text-center label-text text-zinc-200'>
        {text}
      </span>
    </div>
  );
}
