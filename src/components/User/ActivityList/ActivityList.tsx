import styled from "styled-components";
import {ActivityItem} from "../ActivityItem";

const activitiesCollection = [
    {id: 1, name: "lorem ipsum", description: "lorem ipsum", services: "Автомобиль", date: "10.03.2022-10.05.2022", price: 10000, rating: "4"},
    {id: 2, name: "lorem ipsum", description: "lorem ipsum", services: "Автомобиль", date: "10.03.2022-10.05.2022", price: 10000, rating: "4"},
    {id: 3, name: "lorem ipsum", description: "lorem ipsum", services: "Автомобиль", date: "10.03.2022-10.05.2022", price: 10000, rating: "4"},
    {id: 4, name: "lorem ipsum", description: "lorem ipsum", services: "Автомобиль", date: "10.03.2022-10.05.2022", price: 10000, rating: "4"},
]

export const ActivityList = () => {
    return (
        <Container>
            {activitiesCollection.map(activity =>
                <ActivityItem key={activity.id} activityInfo={activity} />
            )}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`