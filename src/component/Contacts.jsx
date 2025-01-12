import AnimatedTitle from "./AnimatedTitle.jsx";
import Button from "./Button.jsx";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";


// gsap.registerPlugin(ScrollTrigger);



const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
);

const Contacts = () => {
    // useGSAP(() => {
    //     const clipAnimation = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#clip",
    //             start: "center center",
    //             end: "+=800 center",
    //             scrub: 0.5,
    //             pin: true,
    //             pinSpacing: true,
    //         },
    //     });

    //     clipAnimation.to(".sword-man-clip-path", {
    //         width: "100vw",
    //         height: "100vh",
    //         borderRadius: 0,
    //     });
    // });


    return (
        <div id="contacts" className="my-20 min-h-96 w-screen  px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute overflow-hidden top-0 hidden -left-20 h-full w-72 sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contacts-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contacts-clip-path-2 translate-y-500 lg:translate-y-40"
                    />
                </div>

                <div className="absolute w-60 -top-40 left-20 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="font-general uppercase mb-10 text-[10px]">
                        Join Zentry
                    </p>

                    <AnimatedTitle
                        title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
                        className="special-font w-full font-zentry !md:text-[6.2rem] !text-5xl !font-black !leading-[.9]"
                        // The ! prefix is used to apply an important rule, which overrides any other conflicting styles.
                    />

                    <Button title="contacts us" containerClass="mt-10 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Contacts;