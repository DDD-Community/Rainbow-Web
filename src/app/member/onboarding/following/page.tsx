import React from "react";
// import { useRecoilState } from "recoil";
// import { propsState } from "../../selector";

// interface Props {
// email: string;
// nickname: string;
// birthDate: string;
// salaryStart: number;
// salaryEnd: number;
// gender: string;
// }
export default function Following() {
  const handleClickNextButton = () => {
    console.log("마지막 페이지");
  };

  return (
    <div>
      <h2>또래 친구와 친구를 맺어보세요</h2>
      <button type="button" onClick={handleClickNextButton}>
        명 친구 맺고 시작하기
      </button>
    </div>
  );
}
