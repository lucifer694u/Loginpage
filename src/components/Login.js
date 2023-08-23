import React from "react";
import { Rightside } from "../styled components/App.style";
import { Rightinner } from "../styled components/App.style";
import { InputContainer } from "../styled components/App.style";
import { Label } from "../styled components/App.style";
import {
  Input,
  Inputcheck,
  Check,
  Checkin,
  Form,
  Button,
} from "../styled components/App.style";
import { Header, Checkinbut, Anchor } from "../styled components/App.style";

function Login() {
  return (
    <Rightside>
      <Rightinner>
        <Header>Login</Header>
        <Form>
          <InputContainer>
            <Label>Login ID</Label>
            <Input type="text" placeholder="Enter Login ID" />
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" />
          </InputContainer>
          <Check>
            <Checkin>
              <Inputcheck type="checkbox" />
              <Label>Remember me</Label>{" "}
            </Checkin>
            <Label>
              <Anchor>Change passsword</Anchor>
            </Label>
          </Check>
          <Checkin>
            <Inputcheck type="checkbox" />
            <Label>
              Agree to <Anchor href="">Terms and conditions</Anchor>
            </Label>
          </Checkin>
          <Checkinbut>
            <Button>Login</Button>
          </Checkinbut>
          <Checkinbut>
            <Label>
              Don't have an account <Anchor href="">Register here</Anchor>
            </Label>
          </Checkinbut>
        </Form>
      </Rightinner>
    </Rightside>
  );
}

export default Login;
