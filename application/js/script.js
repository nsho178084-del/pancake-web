
const getScrollPrecent=()=>{
    const scrolled=window.scrollY;
    const pageHeight=document.documentElement.scrollHeight;
    const viewHeight=document.documentElement.clientHeight;
    const percentage=scrolled/(pageHeight-viewHeight)*100;
    console.log(document.querySelector('#bar'));
    document.querySelector('#bar').style.width=`${percentage}%`;
};
window.addEventListener('scroll',getScrollPrecent);
const showCake=(entries)=>{
    const keyframes={
        opacity: [0,1],
        translate: ['200px 0',0],
    };
    entries[0].target.animate(keyframes,600);
};
const cakeObserver=new IntersectionObserver(showCake);
cakeObserver.observe(document.querySelector('#cake'));