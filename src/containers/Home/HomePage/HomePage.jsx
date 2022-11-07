import React from 'react';
import { Header } from '../../../Common/Header/Header';
import ImageCarouselContainer from '../../../components/ImageScroller/ImageScroller';

class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="bg-[#efffcf] h-screen">
                <Header />
                <ImageCarouselContainer />
            </div>
        );
    }
};

export default HomePage;