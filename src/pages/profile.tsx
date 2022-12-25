import {NextPage} from "next";
import {MainLayout} from "layouts";
import styled from "styled-components";
import Image from "next/image";
import AvatarImage from "assets/img/tour3.png";
import {ActivityList} from "../components/User";

const Profile: NextPage = () => {
    return (
        <MainLayout>
            <Container>
                <ProfileContainer>
                    <Avatar src={AvatarImage} alt="Avatar" />
                    <ProfileInfo>
                        <Name>Виктория Вебер</Name>
                        <InfoRow>
                            <TextInfo>17 лет</TextInfo>
                            <TextInfo>Россия, Омск</TextInfo>
                        </InfoRow>
                        <TextInfo>Предпочтения: южные страны</TextInfo>
                    </ProfileInfo>
                </ProfileContainer>
                <Title>Моя активность</Title>
                <ActivityList />
            </Container>
        </MainLayout>
    );
};

export default Profile;

const Container = styled.div`
  width: 85%;
  max-width: 1118px;
  margin: 50px auto;
`
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
const Avatar = styled(Image)`
  width: 231px;
  height: 231px;
  object-fit: cover;
  border-radius: 100%;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Name = styled.h1`
  font-size: 24px;
`
const InfoRow = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
`
const TextInfo = styled.p`
  font-size: 16px;
`
const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  margin: 90px 0 16px 0;
`