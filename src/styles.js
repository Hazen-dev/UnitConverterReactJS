import styled from "styled-components";

export const styles = {
  header: styled.h1`
    margin: 0 auto;
    display: table;
    font-family: "Inter", sans-serif;
    font-family: "Poppins", sans-serif;
    color: #eff7f6;
  `,
  container: styled.div`
    width: min-content;
    padding 1rem 5vw;
    background: #eff7f6;
    border-radius: 15px;
    font-family: "Inter", sans-serif;
    font-family: "Poppins", sans-serif;
    margin: 0 auto;
    margin-top: 1.5rem;
    
    @media (min-width: 768px) {
      width: 70%;
    }
    
    @media (min-width: 1920px) {
      width: 40%
    }
  `,
  button: styled.button`
    margin: 0 0 0 1rem;
    background: white;
    border: none;
    border-radius: 14px;
    color: #558f87;
    padding: 0.6rem;

    @media (min-width: 768px) {
      padding: 1rem 2rem;
      margin-left: auto;
      font-size: 1.4rem;
    }
  `,
  input: styled.input`
    text-indent: 4px;
    outline: none;
    border: solid 2px #ffffff;
    font-size: 1rem;
    border-radius: 14px;
    color: #558f87;

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media (min-width: 1360px) and (min-height: 663px) {
      width: 70%;
    }
  `,
  option: styled.option`
    border: none;
    color: #558f87;
    border-radius: 14px;
  `,
  topWrapper: styled.div`
    display: flex;
  `,
  select: styled.select``,
  ErrorMsg: styled.p`
    color: #558f87;
    text-decoration: underline;
    @media (min-width: 768px) {
      text-decoration: none;
    }
  `,
  modal: styled.div`
    position: fixed;
    display: flex;
    //justify-content: center;
    width: 85%;
    left: 7.5%;
    background: #eff7f6;
    border-radius: 20px;
    top: 33vh;
    margin: 0 auto;

    @media (min-width: 1360px) and (min-height: 663px) {
      width: 30%;
      left: 35%;
    }
  `,
  modalText: styled.p`
    font-size: 1rem;
    margin: 0 0 0 0.5rem;
    padding: 1rem 0;
    font-family: "Inter", sans-serif;
    font-family: "Poppins", sans-serif;
    margin: 1.2rem 1rem;
    padding: 0;
  `,
  modalText_container: styled.div``,
};
