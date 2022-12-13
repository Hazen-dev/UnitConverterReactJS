import { styles } from "./styles";

export default function Msg(props) {
  return (
    <>
      <styles.ErrorMsg>Error: {props.msg}</styles.ErrorMsg>
    </>
  );
}
