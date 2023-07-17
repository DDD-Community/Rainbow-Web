export const userInfoParser = (userInfoRawData: any) => {
  const { email, nickname, birth, gender, salary, following } = userInfoRawData;
  return {
    userIdx: email,
    birth,
    gender,
    salary,
    nickname,
    following: following || null
  };
};
