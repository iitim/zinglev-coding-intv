import React, { useState } from "react";
import styles from "./UserAccount.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here with email and password
    console.log("Logging in...", email, password);
  };

  return (
    <div className="login">
      <h2>会员登录</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            placeholder="澳大利亚手机号码"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="密码"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-button-container">
          <button type="submit">登录</button>
        </div>
        <h4>免费注册</h4>
        <h4>要求新密码</h4>
      </form>
    </div>
  );
};

export default Login;
