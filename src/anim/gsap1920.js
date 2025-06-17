import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

const anim1920 = (d,s,a)=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);  /* register the MotionPath plugin */
    gsap.from('.progress__left',{
        x:      '-50%',
        opacity: 0,
        scrollTrigger:{
            trigger:'.progress__center',
            start: "20% 100%", // Начало анимации, когда верхняя часть .MP3Bl достигает центра экрана
            end: "40% 70%",   // Конец анимации, когда нижняя часть .MP3Bl достигает верхней части экрана
            scrub: true, // Плавная анимация при прокрутке
            // pin:true,
            // markers: true,
            onEnter:()=>{
                console.log('onEnter');
            },
            onLeave:()=>{
                console.log('onLeave');
                
                // gsap.to('.MPBarrels',{
                //     marginTop:'-103%',
                //     scrollTrigger:{
                //         trigger:'.MPSectB3',
                //         start:"10% 40%",
                //         end:"40% 20%",
                //         scrub:1,
                //         // markers: true,
                //     },
                // });
            },
        }
    });
}

export default anim1920;