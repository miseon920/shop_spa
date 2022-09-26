import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ list }) => {
  const { num } = useParams(); //id가 바뀌면 문제가 되므로 link를 넘겨준것
  const match = list.find((it) => String(it.id) == num);
  /*파라미터에서는 숫자 또는 문자열이 들어오므로 match 조건문에 === 을 쓸 수 없음
   it.id === Number(num) 또는 문자열로 바꿀수있음
  */
  //   const LI = styled.li`
  //     display: inline-block;
  //     width: 20px;
  //     height: 20px;
  //     ${(props) =>
  //       props.primary &&
  //       css`
  //         background: white;
  //         color: black;
  //       `}
  //   `;
  const liStyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    background: "#fff",
    margin: "0 5px",
  };
  return (
    // <ul>
    //   {/* {num} */}
    //   {/* {match.des}
    //   {console.log(match)} */}
    //   {/* <li>{match.id}</li>
    //   <li>{match.con}</li>
    //   <li>{match.des}</li> */}
    // </ul>
    <>
      <img src={`${process.env.PUBLIC_URL}${match.img}`} alt="" />
      <div>{match.name}</div>
      <div>{match.des.substring(0, 2)}</div>
      <div>{match.con}</div>
      <div>{match.price}</div>
      <ul>
        {match.color.map((color) => (
          <li style={{ ...liStyle, background: color }}>color</li>
        ))}
      </ul>
    </>
  );
};
export default Detail;

//https://think0wise.tistory.com/6
//https://defineall.tistory.com/951
