import { styled } from "styled-components";

export const Appst = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #dadbd3;
`;

export const Appbody = styled.section`
  display: flex;
  background-color: #fff;
  margin-top: -50px;
  height: 80vh;
  width: 90vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* display: grid; */
`;

export const Leftside = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0.4;
`;

export const Leftinner = styled.section`
  width: 60%;
  height: 60%;
  margin: auto;
`;
export const Rightside = styled.section`
  display: flex;
  /* flex-direction: column; */

  flex: 0.6;
`;
export const Rightinner = styled.section`
  width: 95%;
  height: 90%;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
`;

export const Label = styled.h2`
  color: black;
  margin-bottom: 0.9rem;
  font-weight: semibold;
  font-size: 14px;
`;
export const Input = styled.input`
  /* max-width: 80%; */
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Check = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Checkin = styled.div`
  display: flex;
`;
export const Form = styled.div`
  width: 90%;
  margin: auto;
`;

export const Inputcheck = styled.input``;
export const Button = styled.button`
  background-color: #4169e1;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  width: 70%;
`;
export const Checkinbut = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const Anchor = styled.a`
  color: orange;
`;
