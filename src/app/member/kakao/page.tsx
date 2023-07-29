"use client";

import React, { useEffect } from "react";
import { LoginHandler } from "./LoginHandler";

function Login() {
  const code: string = new URL(window.location.href).searchParams.get("code")!;
  // const [email, setEmail] = useState("");
  // const [props, setProps] = useRecoilState<Props>(propsState);

  useEffect(() => {
    LoginHandler(code);
  }, []);

  return <div />;
}
export default Login;
