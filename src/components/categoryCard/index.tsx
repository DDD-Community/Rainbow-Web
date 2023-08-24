import Image from "next/image";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { IconPlusSmall } from "@/public/assets/images/icons";
import {
  IconHandHeart,
  IconBook,
  IconBus,
  IconMedical,
  IconFood,
  IconHealth,
  IconDrink,
  IconClothes,
  IconHome,
  IconPhone,
  IconDailyNecessity,
  IconTicket,
  IconOthers
} from "@/public/assets/images/icons/category";

const TEXT_PUBLIC_SCOPE_OPEN = "전체 공개";
const TEXT_PUBLIC_SCOPE_CLOSE = "비공개";

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

const convertBgImage = (categoryType: CategoryType): string => {
  switch (categoryType) {
    case "hand-heart":
      return IconHandHeart;
    case "book":
      return IconBook;
    case "bus":
      return IconBus;
    case "medical":
      return IconMedical;
    case "food":
      return IconFood;
    case "health":
      return IconHealth;
    case "drink":
      return IconDrink;
    case "clothes":
      return IconClothes;
    case "home":
      return IconHome;
    case "phone":
      return IconPhone;
    case "daily-necessity":
      return IconDailyNecessity;
    case "ticket":
      return IconTicket;
    case "others":
      return IconOthers;
    default:
      return IconHandHeart;
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
        "shrink-0 flex justify-center rounded-[10px] border-black/[0.03]",
        convertBgColorName(categoryType)
      )}
    >
      <Image
        src={convertBgImage(categoryType)}
        className="w-full h-full p-[12.5px] cursor-pointer"
        alt={`${categoryType} icon`}
      />
    </div>
  );
}
