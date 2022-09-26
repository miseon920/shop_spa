const Header = ({ data, profile }) => {
  //↑ 2번째 방식
  //(props) -1번째 방법
  //console.log(props);

  return (
    <header>
      {data.address}
      {profile.slogan}
      {/*↑ 2번째 방식*/}
      {/* 1번째 방법 {props.data.address} {props.profile.slogan} */}
    </header>
  );
};

export default Header;
