import styled from "styled-components";
import Image from "next/image";
import TourImage from "assets/img/tour1.png";
import RatingIcon from "assets/svg/star.svg";
import ApartmentTypeIcon from "assets/svg/apartmentType.svg";
import ApartmentCountIcon from "assets/svg/apartmentCount.svg";
import ApartmentPositionIcon from "assets/svg/apartmentcPosition.svg";
import MapImage from "assets/img/map.png";
import React from "react";

interface SelectedTourProps {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
}

export const SelectedTour: React.FC<SelectedTourProps> = ({isOpen, setIsOpen}) => {
    return (
        <Container $isOpen={isOpen}>
            <CloseButton onClick={() => setIsOpen(!isOpen)}>+</CloseButton>
            <Picture src={TourImage} alt="" />
            <Name>25 Lakeland Terrace, Westland,
                Michigan, USA</Name>
            <Location>Тайланд</Location>
            <InfoContainer>
                <RatingContainer>
                    <RatingText>Рейтинг</RatingText>
                    <RatingCount>
                        <RatingText>4.8</RatingText>
                        <Image src={RatingIcon} alt="rating" />
                    </RatingCount>
                </RatingContainer>
                <Price>20000 ₽</Price>
            </InfoContainer>
            <ApartmentContainer>
                <ApartmentItem>
                    <Image src={ApartmentTypeIcon} alt="type" />
                    <ApartmentValue>Отель</ApartmentValue>
                </ApartmentItem>
                <ApartmentItem>
                    <Image src={ApartmentCountIcon} alt="type" />
                    <ApartmentValue>4</ApartmentValue>
                </ApartmentItem>
                <ApartmentItem>
                    <Image src={ApartmentPositionIcon} alt="type" />
                    <ApartmentValue>170 м2</ApartmentValue>
                </ApartmentItem>
            </ApartmentContainer>
            <Location>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi et facere facilis ipsum magni minus natus nulla officiis placeat quasi, quibusdam quis, quos recusandae saepe soluta tempore voluptate voluptatibus?</Location>
            <Map src={MapImage} alt="map" />
        </Container>
    );
};

const Container = styled.div<{$isOpen: boolean}>`
  position: fixed;
  right: ${({$isOpen}) => $isOpen ? 0 : "-100%" };
  top: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 25px 18px 11px 18px;
  background: #fff;
  max-width: 397px;
  transition: all 1s ease;
  box-shadow: 0px 100px 80px rgba(153, 165, 236, 0.05), 0px 64.8148px 46.8519px rgba(153, 165, 236, 0.037963), 0px 38.5185px 25.4815px rgba(153, 165, 236, 0.0303704), 0px 20px 13px rgba(153, 165, 236, 0.025), 0px 8.14815px 6.51852px rgba(153, 165, 236, 0.0196296), 0px 1.85185px 3.14815px rgba(153, 165, 236, 0.012037);
`
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: 5px;
  transform: rotate(45deg);
  font-size: 35px;
  cursor: pointer;
`
const Picture = styled(Image)`
  width: 360px;
  border-radius: 20px;
  margin-bottom: 25px;
`
const Name = styled.h1`
  font-size: 20px;
  color: #000000;
  width: 100%;
  margin-bottom: 29px;
`
const Location = styled.p`
  color: #757575;
  font-size: 16px;
  margin-bottom: 30px;
`
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
`
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`
const RatingText = styled.p`
  font-size: 20px;
  color: #F86549;
`
const RatingCount = styled.div`
  display: flex;
  align-items: center;
  gap: 7px
`
const Price = styled.p`
  font-size: 20px;
  color: #34A59F;
`
const ApartmentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
`
const ApartmentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const ApartmentValue = styled.p`
  font-size: 16px;
  color: #757575;
`
const Map = styled(Image)`
  width: 100%;
`