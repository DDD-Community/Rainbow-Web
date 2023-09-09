import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  emailState,
  nickNameState,
  genderState,
  birthDateState,
  salaryState,
  contractAgreedState,
  kaKaoIdState
} from "@/src/recoil/user.atoms";

function FormSubmitComponent() {
  const email = useRecoilValue(emailState);
  const nickName = useRecoilValue(nickNameState);
  const gender = useRecoilValue(genderState);
  const birthDate = useRecoilValue(birthDateState);
  const salary = useRecoilValue(salaryState);
  const kaKaoId = useRecoilValue(kaKaoIdState);
  const contractAgreed = useRecoilValue(contractAgreedState);

  useEffect(() => {
    if (contractAgreed) {
      const formData = {
        birthDate,
        email,
        gender,
        kaKaoId,
        nickName,
        salary
      };
      // 예시로 console.log로 출력하겠습니다.
      console.log("제출 폼 데이터:", formData);
    }
  }, [email, nickName, gender, birthDate, kaKaoId, salary, contractAgreed]);

  return null;
}

export default FormSubmitComponent;
