import styled from "styled-components";
import { useContext } from "react";
import { SearchInput } from "../molecules/SearchInput";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserCard } from "../organisms/user/UserCard";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ-${val}`,
    image: "https://source.unsplash.com/awin-9RBlpE",
    email: "1111@aaa.com",
    phone: "000-9999-8888",
    company: {
      name: "あああああ会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => {
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    setUserInfo({ isAdmin: !isAdmin });
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
