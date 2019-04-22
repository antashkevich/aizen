function scrollToAnchor(aid){
    var aTag = $("[name='"+ aid +"']");
    $( aTag ).css( "display", "block" );
    $('html,body').animate({scrollTop: (aTag.offset().top - 190)},'slow');
}

$(".next-step a").click(function(e) {
    e.preventDefault();
    if ($( this ).data( "step" ) === 'step2' ) {
        scrollToAnchor('step2');
    } else {
        scrollToAnchor('step3');
    }
});


// let showSteps = function () {
//     // let anchors = document.querySelectorAll('.next-step a');
//     // for (let i = 0; i < anchors.length; i++) {
//     //     anchors[i].addEventListener('click', function() {
//     //         let anchor = anchors[i].getAttribute('href');
//     //         anchors[0].dataset.step2
//     //         let stepBlock = document.querySelector(anchor);
//     //         stepBlock.style.display = 'block';
//     //         scrollTo(anchor);
//     //     }); 
//     // }

//     let anchorlinks = document.querySelectorAll('a[href^="#step"]');
//     for (let item of anchorlinks) {
//         item.addEventListener('click', (e)=> {
//             let hashval = item.getAttribute('href');
//             let target = document.querySelector(hashval);
//             target.style.display = 'block';

//             // let count = target.offsetTop + 194;

//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });

//             // let count = target.offsetTop - 194;
//             // target.scrollIntoView({
//             //     top: count, 
//             //     left: 0, 
//             //     behavior: 'smooth'
//             // });


//             //target.scrollTop += '194px';

//             // let scrolledY = window.scrollY;
//             // if(scrolledY){
//             //     window.scroll(0, scrolledY + 400);
//             // }

//             history.pushState(null, null, hashval);
//             e.preventDefault();
//         })
//     }
// };
// showSteps();
