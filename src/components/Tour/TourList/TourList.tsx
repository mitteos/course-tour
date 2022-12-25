import {TourItem} from "../TourItem";
import React from "react";
import styled from "styled-components";
import {TourState} from "components/Tour/TourItem/types";
import Tour1 from "assets/img/tour1.png";
import Tour2 from "assets/img/tour2.png";
import Tour3 from "assets/img/tour3.png";
import Tour4 from "assets/img/tour4.png";

const toursCollection: TourState[] = [
    {id: 1, name: "Phi Phi Islands", location: "Тайланд", price: 14800, rating: "4.8", img: Tour1},
    {id: 2, name: "Kudahuvadhoo Island", location: "Майами", price: 12000, rating: "4.9", img: Tour2},
    {id: 3, name: "Phi Phi Islands", location: "Россия", price: 5000, rating: "1.2", img: Tour3},
    {id: 4, name: "Kudahuvadhoo Island", location: "Казахстан", price: 8000, rating: "3.5", img: Tour4},
    {id: 5, name: "Phi Phi Islands", location: "Тайланд", price: 14800, rating: "4.8", img: Tour1},
    {id: 6, name: "Kudahuvadhoo Island", location: "Майами", price: 12000, rating: "4.9", img: Tour2},
    {id: 7, name: "Phi Phi Islands", location: "Россия", price: 5000, rating: "1.2", img: Tour3},
    {id: 8, name: "Kudahuvadhoo Island", location: "Казахстан", price: 8000, rating: "3.5", img: Tour4},
]

interface TourListProps {
    setIsOpen: (e: boolean) => void;
}

export const TourList: React.FC<TourListProps> = ({setIsOpen}) => {
    return (
        <Container>
            {toursCollection.map(tour =>
                <TourItem key={tour.id} tourInfo={tour} setIsOpen={setIsOpen}/>
            )}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 35px;
  padding: 30px 32px;
  justify-content: center;
`