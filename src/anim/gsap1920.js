import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

const anim1920 = (d,s,a)=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);  /* register the MotionPath plugin */
    console.log(document.querySelector('.MP3Bl'));
    gsap.to('.MPS',{
        x:'-50%',
        opacity:0,
        scrollTrigger:{
            trigger:'.MP3Bl',
            start: "-20% 90%", // Начало анимации, когда верхняя часть .MP3Bl достигает центра экрана
            end: "50% 50%",   // Конец анимации, когда нижняя часть .MP3Bl достигает верхней части экрана
            scrub: 1, // Плавная анимация при прокрутке
            // scrub: 1,
            // pin:true,
            markers: true, //JFT
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