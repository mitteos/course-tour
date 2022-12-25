import {ActivityState} from "../types";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ActivityPicture from "assets/img/tour1.png";

interface ActivityItemProps {
    activityInfo: ActivityState
}
export const ActivityItem: React.FC<ActivityItemProps> = ({activityInfo}) => {
    return (
        <Container>
            <Picture src={ActivityPicture} alt="activity image" />
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  box-shadow: 0px 10px 20px rgba(88, 92, 229, 0.25);
  padding: 20px 27px 20px 14px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  gap: 45px;
`
const Picture = styled(Image)`
  border-radius: 20px;
  width: 231px;
  height: 147px;
  object-fit: cover;
`