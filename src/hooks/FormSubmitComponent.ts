import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  emailState,
  nicknameState,
  genderState,
  birthDateState,
  salaryState,
  contractAgreedState
} from "@/src/recoil/user.atoms";

function FormSubmitComponent() {
  const email = useRecoilValue(emailState);
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const birthDate = useRecoilValue(birthDateState);
  const salary = useRecoilValue(salaryState);
  const contractAgreed = useRecoilValue(contractAgreedState);

  useEffect(() => {
    if (contractAgreed) {
      const formData = {
        email,
        nickname,
        gender,
        birthDate,
        salary
      };
      // 예시로 console.log로 출력하겠습니다.
      console.log("제출 폼 데이터:", formData);
    }
  }, [email, nickname, gender, birthDate, salary, contractAgreed]);

  return null;
}

export default FormSubmitComponent;
