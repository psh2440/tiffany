
/*   { var ovf, slider;
  $(function(){
  ovf = this.getElementById("overflow");
  slider = this.getElementById("slider");
  winResize();
  $(window).bind({resize: winResize, scroll: winScroll});
  });
  function winResize(){
  ovf.style.top = slider.offsetHeight + "px";
  }
  
  function winScroll(){
  var op = 1 - (window.pageYOffset / slider.offsetHeight);
  slider.style.opacity = op;
  } } */



  $(document).ready(function () {
    /* var ovf, slider;

    $(function () {
        ovf = this.getElementById("main");
        slider = this.getElementById("part1");
        winResize();
        $(window).bind({ resize: winResize, scroll: winScroll });
    });

    function winResize() {
        ovf.style.top = slider.offsetHeight + "px";
    }

    function winScroll() {
        var op = 1 - (window.pageYOffset / slider.offsetHeight);
        slider.style.opacity = op;
    } */


    /* $('.slide-box').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }); */


    /* $('.slide-box').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    }); */


    /*슬릭으로 자동슬라이드 한거*/
    /* $('.slide-box').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        SlidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 800

    }); */
    /*위 슬릭 해당 css*/
    /* .part1 {
        text-align: center;
    }
    
    
    .part1-txt {
        padding: 20px 10px;
        margin-bottom: 30px;
    }
    
    .part1 .article-tit {
    }
    
    .part1>p {}
    
    
    part1-slide {
        width: 100%;
    }
    
    .part1 ul {
        outline: 2px solid blue;
        width: 100%;
        margin-bottom: 80px;
    }
    
    .part1 ul li {
        outline: 2px solid pink;
        width: 33.33%;
        float: left;
    }
    
    .part1 ul li a {}
    
    .part1 ul li a img {
        width: 90%;
        display: inline-block;
        margin-bottom: 20px;
    }
    
    .part1 ul li a p {
        line-height: 2;
        font-size: 24px;
        font-weight: bold;
    }
    
    .part1 ul li a p:last-child {
        font-size: 100%;
        font-weight: normal;
    } */


    var liw = $('.slide-box li').width();

    $('.nextBtn').click(function (e) {
        e.preventDefault();

       /*  $('.slide-box').animate({
            marginLeft: '-=' + liw
        }, 800, function () {
            $(this).append($('.slide-box li:first')).css('margin-left', -liw);
        }); */




        /* $('.slide-box').append($('.slide-box li:first')).css('margin-left', -liw).animate({
            marginLeft: '-=' + liw
        }, 800); */


        $('.slide-box').animate({
            marginLeft: '-=' + liw
        }, 800, function(){
            $('.slide-box').append($('.slide-box li:first')).css('margin-left', 0);


        

    });

});




    /*이전버튼*/
    $('.prevBtn').click(function (e) {
        e.preventDefault();

        /* $('.slide-box').animate({
            marginLeft: '+=' + liw
        }, 800, function () {
            $(this).prepend($('.slide-box li:last')).css('margin-left', 0);
        }); */


        $('.slide-box').prepend($('.slide-box li:last')).css('margin-left', -liw).animate({
            marginLeft: '+=' + liw
        }, 800);




    });





});






/*셋 인터벌로 돌리기*/
/*  function set() {
     $('.slide-box').animate({
         marginLeft: -liw
     }, 800, function () {
         $(this).append($('.slide-box li:first')).css(
             { marginLeft: 0 }
         );
     });
 }
 
 
 
 setInterval(set, 3000); */

