

$(".btns>li").click(function(){
$(this).addClass("on")
$(this).siblings().removeClass("on")
//속성변경시 --->$(this).attr('date-filter('속성명')','속성값');
//속성값 호출시(변수안에 넣어줌) -->a=$(this).attr('속성명)';
let a=$(this).attr('data-filter');
$(".contents").isotope({filter:a});

 })

 $(".contents").isotope();

 $(".fancybox").fancybox();