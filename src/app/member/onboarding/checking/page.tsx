"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import {
  emailState,
  nicknameState,
  genderState,
  birthDateState,
  salaryState
} from "@/src/recoil/user.atoms";
import { Button } from "@/src/components/Common/Button";

export default function Checking() {
  const [email, setEmail] = useRecoilState(emailState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [gender, setGender] = useRecoilState(genderState);
  const [birthDate, setBirthDate] = useRecoilState(birthDateState);
  const [salary, setSalary] = useRecoilState(salaryState);

  const data = [
    { id: uuidv4(), label: "이메일:", value: email, setter: setEmail },
    { id: uuidv4(), label: "닉네임:", value: nickname, setter: setNickname },
    { id: uuidv4(), label: "성별:", value: gender, setter: setGender },
    { id: uuidv4(), label: "생일:", value: birthDate, setter: setBirthDate },
    { id: uuidv4(), label: "연봉:", value: salary, setter: setSalary }
  ];

  const [submitted, setSubmitted] = useState(false);
  const [editingId, setEditingId] = useState(null); // State to track which field is being edited

  const handleEdit = (id: any) => {
    setEditingId(id); // Set the ID of the field being edited
  };

  const handleSave = (id: any) => {
    const editedField = data.find(item => item.id === id);

    if (editedField) {
      const newValue = editedField.value; // Store the new value before updating
      editedField.setter(newValue); // Update the Recoil state with the new value
      setEditingId(null); // Clear the editing state
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

  return (
    <div className="flex flex-col justify-between h-screen gap-[26px] px-4 py-10">
      <div className="flex flex-col pt-20">
        <span>🤫</span>
        <span className="sb-25-600 text-gray-700">
          입력한 정보를 <br />
          한번 더 확인해주세요
        </span>
      </div>
      <div className="flex flex-col">
        {data.map(item => (
          <span className="flex justify-between r-14-400" key={item.id}>
            <span className="text-primary-default">{item.label}</span>
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
              <button type="button" className="text-gray-500" onClick={() => handleSave(item.id)}>
                저장
              </button>
            ) : (
              <button type="button" className="text-gray-500" onClick={() => handleEdit(item.id)}>
                수정
              </button>
            )}
          </span>
        ))}
      </div>
      <Button color="default" size="small" onClick={handleNext}>
        확인
      </Button>
      {submitted && <p>폼이 성공적으로 제출되었습니다!</p>}
    </div>
  );
}
