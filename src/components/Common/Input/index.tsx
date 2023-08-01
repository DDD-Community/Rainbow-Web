import { TextInputBorder } from "./TextInputBorder";
import { TextInputContent } from "./TextInputContent";
import { TextInputWrapper } from "./TextInputWrapper";

export * from "./useTextInput";

export const TextInput = Object.assign(TextInputWrapper, {
  Content: TextInputContent,
  Border: TextInputBorder
});
