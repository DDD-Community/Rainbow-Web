// emoji string type
export type EmojiTypes = "happy" | "angry" | "sad" | "thinking" | "surprised";

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

// 지출등록 카테고리 타입
export type ExpenseCategoryTypes = {
  type: CategoryType;
  name: string;
  isOpen?: boolean;
};
