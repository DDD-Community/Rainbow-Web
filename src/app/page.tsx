"use client";

import React from "react";
// import Start from "./auth/onboarding/start/page";
import { useForm } from "react-hook-form";
import Login from "./member/kakao/Start";
import { Button } from "../components/Common/Button";
import { TextInput, useTextInput } from "../components/Common/Input";

function Home() {
  const { register } = useForm({
    defaultValues: {
      emailInput: "이메일"
    }
  });

  const { onChangeHandler } = useTextInput({
    onChange: register("emailInput").onChange
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Login />
      <Button size="large" color="primary">
        확인
      </Button>
      <TextInput>
        <TextInput.Border>
          <TextInput.Content {...register("emailInput")} onChange={onChangeHandler} />
        </TextInput.Border>
      </TextInput>
    </div>
  );
}

export default Home;
