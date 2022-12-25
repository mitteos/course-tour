import {TourState} from "./types";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import PointIcon from "assets/svg/point.svg";

interface TourItemProps {
    tourInfo: TourState
    setIsOpen: (e: boolean) => void;
}

export const TourItem: React.FC<TourItemProps> = ({tourInfo, setIsOpen}) => {
    return (
        <Container onClick={() => setIsOpen(true)}>
            <Picture src={tourInfo.img} alt="picture"/>
            <Name>{tourInfo.name}</Name>
            <LocationContainer>
                <Image src={PointIcon} alt="location icon" />
                <LocationInner>{tourInfo.location}</LocationInner>
            </LocationContainer>
        </Container>
    );
};

const Container = styled.div`
  padding: 15px 15px 25px 15px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0px 100px 80px rgba(153, 165, 236, 0.05), 0px 64.8148px 46.8519px rgba(153, 165, 236, 0.037963), 0px 38.5185px 25.4815px rgba(153, 165, 236, 0.0303704), 0px 20px 13px rgba(153, 165, 236, 0.025), 0px 8.14815px 6.51852px rgba(153, 165, 236, 0.0196296), 0px 1.85185px 3.14815px rgba(153, 165, 236, 0.012037);
  transition: all .3s ease;

  &:hover {
    background: #f8f8f8;
  }
`
const Picture = styled(Image)`
  border-radius: 20px;
  margin-bottom: 15px;
  max-width: 318px;
`
const Name = styled.h1`
  color: #353646;
  font-size: 15px;
  margin-bottom: 9px;
`
const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const LocationInner = styled.p`
  font-size: 14px;
  color: #353646;
  opacity: 0.4;
`