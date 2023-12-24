import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 } from 'uuid';
import { config } from "react-spring";
import CardApp from "./CardApp";
import img from '../assets/BotAvatar.png';

const getTouches = (evt) => {
    return (
        evt.touches || evt.originalEvent.touches // browser API
    );
};

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 4,
        showNavigation: false,
        enableSwipe: true,
        config: config.gentle
    };


    slides = [
            {
                key: v4(),
                content: (
                    <CardApp
                        name="Frank C. McGee"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus!"
                        title="Customer"
                        image={img}
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident!"
                    />
                )
            },
            {
                key: v4(),
                content: (
                    <CardApp
                        name="Aarsh Shukla"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus!"
                        title="Customer"
                        image={img}
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident!"
                    />
                )
            },
            {
                key: v4(),
                content: (
                    <CardApp
                        name="Bhargav Thakar"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus!"
                        title="Customer"
                        image={img}
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident!"
                    />
                )
            },
            {
                key: v4(),
                content: (
                    <CardApp
                        name="Bhargav Dabhi"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus!"
                        title="Customer"
                        image={img}
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, provident!"
                    />
                )
            },
    ];

    componentDidMount() {
        setTimeout(() => {
            this.setState({ goToSlide: 2 }); // Jump to the second card
            this.automaticSlideChangeInterval = setInterval(() => {
                const { goToSlide } = this.state;
                const nextSlide = (goToSlide + 1) % this.slides.length;
                this.setState({ goToSlide: nextSlide });
            }, 3000);
        }, 10);
    }
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    handleTouchStart = (evt) => {
        if (!this.state.enableSwipe) {
            return;
        }

        const firstTouch = getTouches(evt)[0];
        this.setState({
            ...this.state,
            xDown: firstTouch.clientX,
            yDown: firstTouch.clientY
        });
    };

    handleTouchMove = (evt) => {
        if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.state.xDown - xUp;
        let yDiff = this.state.yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                /* left swipe */
                this.setState({
                    goToSlide: (this.state.goToSlide + 1) % this.slides.length,
                    xDown: null,
                    yDown: null
                });
            } else {

                this.setState({
                    goToSlide: (this.state.goToSlide - 1 + this.slides.length) % this.slides.length,
                    xDown: null,
                    yDown: null
                });
            }
        }
    };

    render() {
        return (
            <div
                style={{ width: "100%", height: "400px"}}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
            >
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />

            </div>
        );
    }
}
