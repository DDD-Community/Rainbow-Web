"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import {
  emailState,
  nicknameState,
  genderState,
  birthDateState,
  salaryState
} from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { Information } from "@/src/components/Information/Information";
import { loadRecoilStateFromSessionStorage } from "@/src/recoil/recoilSessionstorage";

export default function Checking() {
  const email = useRecoilValue(emailState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [gender, setGender] = useRecoilState(genderState);
  const [birthDate, setBirthDate] = useRecoilState(birthDateState);
  const [salary, setSalary] = useRecoilState(salaryState);

  const data = [
    { id: uuidv4(), label: "닉네임", value: nickname, setter: setNickname },
    { id: uuidv4(), label: "성별", value: gender, setter: setGender },
    { id: uuidv4(), label: "생일", value: birthDate, setter: setBirthDate },
    { id: uuidv4(), label: "연봉", value: salary, setter: setSalary }
  ];

  const [submitted, setSubmitted] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id: any) => {
    setEditingId(id);
  };

  const handleSave = (id: any) => {
    const editedField = data.find(item => item.id === id);

    if (editedField) {
      const newValue = editedField.value;
      editedField.setter(newValue);
      setEditingId(null);
    }
  };

  const handleNext = () => {
    const formData = {
      email,
      nickname,
      gender,
      birthDate,
      salary
    };
    console.log("제출 폼 데이터:", formData);
    setSubmitted(true);
    window.location.replace("/member/onboarding/contract");
  };

  useEffect(() => {
    const savedNickname = loadRecoilStateFromSessionStorage("nicknameState", "");
    const savedGender = loadRecoilStateFromSessionStorage("genderState", "");
    const savedBirthDate = loadRecoilStateFromSessionStorage("birthDateState", "");
    const savedSalary = loadRecoilStateFromSessionStorage("salaryState", "");

    setNickname(savedNickname);
    setGender(savedGender);
    setBirthDate(savedBirthDate);
    setSalary(savedSalary);
    setSubmitted(false);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>👀</div>
        <div className="sb-25-600 text-gray-700">
          입력한 정보를 <br />
          한번 더 확인해주세요
        </div>
      </div>
      <div className="flex flex-col">
        {data.map(item => (
          <div className="flex justify-between " key={item.id}>
            <span className="text-primary-default r-14-400 p-2">{item.label}</span>
            {editingId === item.id ? (
              <input
                type="text"
                value={item.value}
                onChange={e => {
                  const newValue = e.target.value;
                  item.setter(newValue); // Update the Recoil state with the new value
                }}
              />
            ) : (
              <span className="text-gray-700">{item.value}</span>
            )}
            {editingId === item.id ? (
              <button
                type="button"
                className="text-gray-500 p-2"
                onClick={() => handleSave(item.id)}
              >
                저장
              </button>
            ) : (
              <button
                type="button"
                className="text-gray-500 p-2"
                onClick={() => handleEdit(item.id)}
              >
                수정
              </button>
            )}
          </div>
        ))}
      </div>
      <Information className="py-3">내 정보는 내 프로필에서 다시 수정할 수 있어요</Information>
      <ButtonField>
        <PrimaryButton color="default" size="small" onClick={handleNext}>
          확인
        </PrimaryButton>
      </ButtonField>
      {submitted && <p>폼이 성공적으로 제출되었습니다!</p>}
    </div>
  );
}
