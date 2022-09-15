import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../Contexts/UserProvider";

const MenuWrapper = styled.div`
  display: flex;
  width: calc(100% - 64px - 48px);
  justify-content: end;
  padding: 48px;
`;

const MenuList = styled.div`
  font-size: 16px;
  font-weight: ${(props) => props.weight};
  margin-right: 48px;
`;

export default function Menu() {
  const menuList = ["บริการ", "รายการ"];
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState();
  const { userAction } = useUserContext();

  const handleClickLogin = () => {
    userAction.Login();
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    switch (index) {
      case 0:
        navigate("/");
        break;

      case 1:
        navigate("/order");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/order":
        setIsActive(1);
        break;
      case "/":
        setIsActive(0);
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <>
      <MenuWrapper>
        {!sessionStorage.getItem("token") && (
          <MenuList onClick={handleClickLogin}>Login</MenuList>
        )}
        {menuList.map((menu, index) => {
          return (
            <MenuList
              key={index}
              weight={isActive === index ? 900 : 500}
              onClick={(e) => handleClick(e, index)}
            >
              {menu}
            </MenuList>
          );
        })}
      </MenuWrapper>
      <Outlet />
    </>
  );
}
