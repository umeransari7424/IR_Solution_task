import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="d-flex justify-content-between">
              <div className="login-card">
                <div className="d-flex align-items-center gap-2 heading ">
                  <img
                    className="img-fluid"
                    src="/Assets/Image (1).svg"
                    alt="logo"
                  />
                  <h3 className="logoipsum">logoipsum</h3>
                </div>
                <div>
                  <h1 className="head">
                    Welcome <br /> back
                  </h1>
                  <p>
                    You need to be signed in to access the project dashboard.
                  </p>
                </div>
                <form>
                  <div>
                    <Form>
                      <Form.Label className="email">
                        Email or Username
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="rounded-0 e-input"
                        placeholder="email@example.com"
                      />{" "}
                      <br />
                      <div className="position-relative">
                        <Form.Label className="email">Password</Form.Label>
                        <Form.Control
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Enter password"
                          className="rounded-0 e-input"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                        <Button
                          onClick={togglePasswordVisibility}
                          className="password-toggle-btn eye"
                          style={{
                            background: "transparent",
                            border: "none",
                            position: "absolute",
                            zIndex: 10000,
                            top: "44%",
                            right: 0,
                          }}
                        >
                          {passwordVisible ? (
                            <FaEyeSlash color="black" />
                          ) : (
                            <FaEye color="black" />
                          )}
                        </Button>
                      </div>
                      <br />
                      <div className="text-end email pb-3 d-flex justify-content-between">
                        <Form.Group id="formGridCheckbox">
                          <Form.Check
                            className="check rounded-0"
                            type="checkbox"
                            label="Remember me"
                          />
                        </Form.Group>
                        Forgot password?
                      </div>
                    </Form>
                    <Button
                      className="btn loginbtn py-2 w-100 mb-1"
                      style={{ border: "none" }}
                    >
                      Sign In
                    </Button>{" "}
                    <Button className="btn w-100 googlebtn  py-2">
                      <img
                        className="img-fluid"
                        src="/Assets/Image (2).svg"
                        alt="googleimg"
                      />
                      &nbsp;Sign in with Google
                    </Button>{" "}
                    <div className="mt-3 text-center">
                      <span className="join">
                        Haven't joined yet? &nbsp; &nbsp;
                        <b>Sign Up</b>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="/Assets/Image.svg"
              alt="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
