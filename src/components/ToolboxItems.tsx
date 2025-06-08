
import Image from "next/image";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

const ToolboxItems = ({
  items,
  className,
  ItemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  ItemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          ItemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center py-1  px-1 gap-4 outline outline-2 outline-white/10 rounded-lg"
              >
                
                {/* <Image src={item.iconType} width="43" height="43" alt="Logo" className="" /> */}
                <TechIcon component={item.iconType}/>
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
