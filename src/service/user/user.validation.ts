export const userValidation = ({
  email,
  nickname,
  birth,
  gender,
  salary
}: {
  email: string;
  nickname: string;
  birth: string;
  gender: string;
  salary: string;
}) => {
  const validateErrors = {
    email: "",
    nickname: "",
    birth: "",
    gender: "",
    salary: ""
  };

  if (!email) {
    validateErrors.email = "회원정보가 존재하지 않습니다.";
  }

  if (!nickname) {
    validateErrors.nickname = "닉네임이 입력되지 않았습니다.";
  }

  if (!birth) {
    validateErrors.birth = "생년월일이 입력되지 않았습니다.";
  }

  if (!gender) {
    validateErrors.gender = "성별이 입력되지 않았습니다.";
  }

  if (!salary) {
    validateErrors.salary = "연봉이 입력되지 않았습니다.";
  }

  return validateErrors;
};
