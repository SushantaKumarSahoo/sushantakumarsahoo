
const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) => {
  return (
    <>
      <div className="flex justify-center ">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif pt-16 uppercase text-3xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-sm text-white/60 mt-4 md:text-md lg:text-lg max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
