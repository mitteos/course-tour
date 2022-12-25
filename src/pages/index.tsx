import React, {useState} from 'react';
import {MainLayout} from "layouts";
import {SelectedTour, TourList} from "components/Tour";

const Home = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <MainLayout>
            <TourList setIsOpen={setIsOpen}/>
            <SelectedTour isOpen={isOpen} setIsOpen={setIsOpen}/>
        </MainLayout>
    );
};

export default Home;