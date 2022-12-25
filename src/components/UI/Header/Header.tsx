import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "assets/svg/logo.svg";
import ToursIcon from "assets/svg/compass.svg";
import HomeIcon from "assets/svg/home.svg";
import ProfileIcon from "assets/svg/person.svg";
import React from "react";
import styled from "styled-components";

export const Header = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
                      rel="stylesheet" />
            </Head>
            <HeaderContainer></HeaderContainer>
            <HeaderInner>
                <Link href="/">
                    <LogoContainer>
                        <Image src={LogoIcon} alt="traveler" />
                    </LogoContainer>
                </Link>
                <NavigationContainer>
                    <NavigationItem href="/">
                        <NavigationButton>
                            <Image src={ToursIcon} alt="tours" />
                        </NavigationButton>
                        <NavigationButtonText>Туры</NavigationButtonText>
                    </NavigationItem>
                    <NavigationItem href="/">
                        <NavigationButton>
                            <Image src={ToursIcon} alt="services" />
                        </NavigationButton>
                        <NavigationButtonText>Услуги</NavigationButtonText>
                    </NavigationItem>
                    <NavigationItem href="/">
                        <NavigationButton>
                            <Image src={HomeIcon} alt="about" />
                        </NavigationButton>
                        <NavigationButtonText>О нас</NavigationButtonText>
                    </NavigationItem>
                    <NavigationItem href={{
                        pathname:"/auth",
                        query: {type: "register"}
                    }}>
                        <NavigationButton>
                            <Image src={ProfileIcon} alt="profile" />
                        </NavigationButton>
                        <NavigationButtonText>Профиль</NavigationButtonText>
                    </NavigationItem>
                </NavigationContainer>
            </HeaderInner>
        </>
    );
};

const HeaderContainer = styled.div`
  min-width: 132px;
  height: 100vh;
`
const HeaderInner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`
const LogoContainer = styled.div`
  background: #393D46;
  padding: 28px 40px;
`
const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  gap: 30px;
  background: #F6F7FB;
  flex: auto;
`
const NavigationItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover div{
    box-shadow: 0px 10px 20px rgba(88, 92, 229, 0.25);
  }
`
const NavigationButton = styled.div`
  padding: 13px;
  background: #fff;
  border-radius: 10px;
  transition: all .3s ease;
  
`
const NavigationButtonText = styled.p`
  font-size: 12px;
  color: #1D2A5F;
`