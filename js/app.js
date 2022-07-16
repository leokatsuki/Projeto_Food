document.addEventListener('DOMContentLoaded', () => {

    let tl = new TimelineMax();

    tl.fromTo('.logo', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.navbar', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.footer', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-1', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-2', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-3', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
})