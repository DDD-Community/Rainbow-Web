import Image from "next/image";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { IconPlusSmall } from "@/public/assets/images/icons";

import IconHandHeart from "@/public/assets/images/icons/category/handHeart";
import IconBook from "@/public/assets/images/icons/category/book";
import IconBus from "@/public/assets/images/icons/category/bus";
import IconMedical from "@/public/assets/images/icons/category/medical";
import IconFood from "@/public/assets/images/icons/category/food";
import IconHealth from "@/public/assets/images/icons/category/health";
import IconDrink from "@/public/assets/images/icons/category/drink";
import IconClothes from "@/public/assets/images/icons/category/clothes";
import IconHome from "@/public/assets/images/icons/category/home";
import IconPhone from "@/public/assets/images/icons/category/phone";
import IconDailyNecessity from "@/public/assets/images/icons/category/dailyNecessity";
import IconTicket from "@/public/assets/images/icons/category/ticket";
import IconOthers from "@/public/assets/images/icons/category/others";

export const TEXT_PUBLIC_SCOPE_OPEN = "전체 공개";
export const TEXT_PUBLIC_SCOPE_CLOSE = "비공개";

export type CategoryType =
  | "book"
  | "bus"
  | "clothes"
  | "daily-necessity"
  | "drink"
  | "food"
  | "hand-heart"
  | "health"
  | "home"
  | "medical"
  | "others"
  | "phone"
  | "ticket";

interface CategoryCardProps {
  categoryType?: CategoryType;
  categoryText: string;
  isOpen?: boolean;
}

function CategoryCard({
  categoryType = "health",
  categoryText = "Category Text",
  isOpen = true
}: CategoryCardProps) {
  return (
    <div className="flex items-center gap-2.5	w-full h-[60px] bg-gray-50 rounded-10 border border-black/[0.03] pl-[12px] pr-[18px]">
      {/* icon */}
      {/* bg-${} 와 형태로 template literal 사용 시 동작 안됨... */}
      <CategoryImage categoryType={categoryType} />

      {/* category Text */}
      <div className="flex flex-col gap-0.5 w-full">
        <span className="text-gray-700 sb-13-600">{categoryText}</span>
        <span className="text-gray-500 m-11-500">
          {isOpen ? TEXT_PUBLIC_SCOPE_OPEN : TEXT_PUBLIC_SCOPE_CLOSE}
        </span>
      </div>

      {/* plus icon */}
      <Image src={IconPlusSmall} className="cursor-pointer" alt="plus icon" />
    </div>
  );
}
export default CategoryCard;

const convertBgImage = (categoryType: CategoryType) => {
  switch (categoryType) {
    case "hand-heart":
      return <IconHandHeart width={40} height={40} />;
    case "book":
      return <IconBook width={40} height={40} />;
    case "bus":
      return <IconBus width={40} height={40} />;
    case "medical":
      return <IconMedical width={40} height={40} />;
    case "food":
      return <IconFood width={40} height={40} />;
    case "health":
      return <IconHealth width={40} height={40} />;
    case "drink":
      return <IconDrink width={40} height={40} />;
    case "clothes":
      return <IconClothes width={40} height={40} />;
    case "home":
      return <IconHome width={40} height={40} />;
    case "phone":
      return <IconPhone width={40} height={40} />;
    case "daily-necessity":
      return <IconDailyNecessity width={40} height={40} />;
    case "ticket":
      return <IconTicket width={40} height={40} />;
    case "others":
      return <IconOthers width={40} height={40} />;
    default:
      return <IconHandHeart width={40} height={40} />;
  }
};

const convertBgColorName = (categoryType: CategoryType): string => {
  switch (categoryType) {
    case "hand-heart":
      return "bg-category-yellow";
    case "book":
      return "bg-category-mint";
    case "bus":
      return "bg-category-navy";
    case "medical":
      return "bg-category-light-red";
    case "food":
      return "bg-category-orange";
    case "health":
      return "bg-category-light-orange";
    case "drink":
      return "bg-category-brown";
    case "clothes":
      return "bg-category-light-pink";
    case "home":
      return "bg-category-aero-blue";
    case "phone":
      return "bg-category-light-green";
    case "daily-necessity":
      return "bg-category-sky";
    case "ticket":
      return "bg-category-light-purple";
    case "others":
      return "bg-category-light-gray";
    default:
      return "bg-category-yellow";
  }
};

export function CategoryImage({
  categoryType = "health",
  width = "w-10",
  height = "h-10"
}: {
  categoryType: CategoryType;
  width?: string;
  height?: string;
}) {
  return (
    <div
      className={twMerge(
        width,
        height,
        "flex items-center justify-center shrink-0 flex justify-center rounded-[10px] border-black/[0.03]",
        convertBgColorName(categoryType)
      )}
    >
      <div className="flex items-center justify-center cursor-pointer p-[12.5px] [&>*:first-child]:w-[100%]">
        {convertBgImage(categoryType)}
      </div>
    </div>
  );
}
