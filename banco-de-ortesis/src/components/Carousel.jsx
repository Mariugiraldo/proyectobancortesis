import React, { useState } from 'react'

export default function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-4xl min-h-84 mx-auto bg-blue-100">
            <div className="flex overflow-hidden relative min-h-84">
                <div
                    className="whitespace-nowrap transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <div key={index} className="inline-block w-full h-full">
                            <img src={item} alt={`Slide ${index}`} className="w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Carousel buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75"
            >
                ›
            </button>
            {/* Sliders */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-1.5">
                {items.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`cursor-pointer w-3 h-3 rounded-full shadow-black shadow-sm ${currentIndex === index ? 'bg-blue-500' : 'bg-white'}`}
                    ></div>
                ))}
            </div>

        </div>
    );
}
