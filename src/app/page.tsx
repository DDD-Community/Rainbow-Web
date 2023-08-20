"use client";

import React, { useState } from "react";
import { Button, PrimaryButton, SubButton } from "../components/Common/Button";
import { RoundedButton } from "../components/Common/Button/Rounded/Sub/RoundedButton";
import { TextInput } from "../components/Common/Input";
import { Select } from "../components/Common/Select";

function Home() {
  const [input, setInput] = useState();
  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  const SELECTOPTIONS = [
    { value: "apple", name: "사과" },
    { value: "banana", name: "바나나" },
    { value: "orange", name: "오렌지" }
  ];
  const handleSelect = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex-center align-items justify-between h-screen">
      <p>바이바이</p>
      <PrimaryButton size="large" color="hover">
        + Button
      </PrimaryButton>
      <SubButton size="large" color="hover">
        + Button
      </SubButton>
      <Button size="large" color="hover">
        + Button
      </Button>
      <RoundedButton size="large" color="hover">
        + Button
      </RoundedButton>
      <TextInput>
        <TextInput.Border>
          <TextInput.Content value={input} onChange={handleInput} />
        </TextInput.Border>
      </TextInput>
      <Select options={SELECTOPTIONS} onChange={handleSelect} />
    </div>
  );
}

export default Home;
