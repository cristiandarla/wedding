import React from "react";
import { photos } from '../data'

const Photos = () => {

    const message = photos.message;
    const buttonLabel = photos.buttonLabel;

    return (
        <section id="photos" className="p-0 bg-[#e7ebde] w-full h-full">
            <div className="h-full w-full py-8 md:py-16 flex flex-col justify-center items-center md:grid md:grid-cols-12 gap-8 md:gap-0 text-center ">
                <div className="h-full w-full md:col-span-1 md:flex md:flex-col md:justify-center md:items-center">
                    <h1 className="font-gistesy text-3xl md:-rotate-90">Poze</h1>
                </div>
                <div className="relative h-48 w-full md:col-span-11 md:flex mt-16 mb-16">
                    <div id="images" className="opacity-30">
                        <div id="center" className="z-20">
                            <img className="rounded-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-full max-w-fit w-7/12 -mt-16 -ml-16 sm:-ml-36 lg:-ml-40 xl:-ml-32" src="/images/wedding_1.jpg" alt="wedding_1" />
                            <img className="rounded-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-full max-w-fit w-7/12 mt-14 -ml-14 sm:-ml-28 lg:-ml-32 xl:-ml-24" src="/images/wedding_2.jpg" alt="wedding_2" />
                            <img className="rounded-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-full max-w-fit w-7/12 mt-16 ml-12 sm:ml-28 lg:ml-32 xl:ml-24" src="/images/wedding_5.jpg" alt="wedding_5" />
                            <img className="rounded-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-full max-w-fit w-7/12 -mt-20 ml-16 sm:ml-36 lg:ml-40 xl:ml-32" src="/images/wedding_4.jpg" alt="wedding_4" />
                            <img className="rounded-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-full max-w-fit w-7/12" src="/images/wedding_3.jpg" alt="wedding_3" />
                        </div>
                    </div>
                    <div id="images_action" className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-wedding w-full h-full rounded-md bg-opacity-70 flex flex-col justify-around items-center px-4">
                        <p className="font-blackmango text-xl md:text-2xl 2xl:text-4xl">{message}</p>
                        <a className="max-w-fit w-1/2 px-4 sm:px-10 inline-block bg-wedding border-2 border-black rounded-3xl shadow-[4px_4px_0_0_black] 
                            text-black cursor-pointer font-semibold leading-10 text-center no-underline select-none hover:bg-wedding_hover hover:animate-colorChange
                            active:shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] active:translate-x-0.5 active:translate-y-0.5 md:min-w-32" href="https://www.dropbox.com/request/kqPbhCW4ZCqfY1AxCLMR" target="_blank" rel="noopener noreferrer">
                            <p className="font-tt-commons-pro-thin-italic">{buttonLabel}</p>

                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Photos;
