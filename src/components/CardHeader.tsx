import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col  p-6 md:py-8 md:px-6", className)}>
      <div className="inline-flex  items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif  text-nowrap">{title}</h3>
      </div>
      <p className="text-sm md:text-md lg:text-md  lg:text-base w-full text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
