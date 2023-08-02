import { authInstance } from "@/src/api/auth/client";
// import { LoginDataType } from "@/src/constant/api.constant";
// import { useState } from "react";

// interface CheckUserDuplicateProps {
//   isNicknameDuplicate: boolean;
//   isNickNameSameWithOrigin: boolean;
//   onClickCheckDuplicateNickname: Promise<void>;
//   isEmailDuplicate: boolean;
//   data: LoginDataType;
// }
export const fetchAuth = () => authInstance.get(`/auth/user/duplicate`);

// const useCheckUserDuplicate = (initValue: string): CheckUserDuplicateProps => {
// const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(true);

// const isNickNameSameWithOrigin = (newNickname: string): boolean => newNickname === initValue;

// const onClickCheckDuplicateNickname = async (newNickname: string): Promise<void> => {
//   let isOverStandard = true;
//   setTimeout(() => {
//     if (isOverStandard) console.log("처리 중입니다...");
//   }, 1500);
//   // 원래 사용하던 닉네임과 같으면 확인하지 않음.
//   if (newNickname === initValue) {
//     console.log("원래 닉네임이어서 사용가능합니다!");
//     isOverStandard = false;
//     return;
//   }
//   try {
//     const response = fetchAuth(initValue);
//     const isDuplicated = response.data;
//     if (isDuplicated) {
//       console.log("이미 사용중인 닉네임입니다!");
//       setIsNicknameDuplicate(true);
//     } else {
//       console.log("사용가능한 닉네임입니다!");
//       setIsNicknameDuplicate(false);
//     }
//   } catch (error) {
//     console.error(error);
//     setIsNicknameDuplicate(true);
//   } finally {
//     isOverStandard = false;
//   }
// };

// return {
//   isNickNameSameWithOrigin,
//   onClickCheckDuplicateNickname,
// };
// };

// export default useCheckUserDuplicate;
