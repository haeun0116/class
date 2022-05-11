$(function(){
    $('.header').load('./inc/header.html',function(){
        var loc =[];
        var ind=0;
        // 바디아래의 디아이브이는 랩 그래서 꼭 바로 아래로 가져와야함
        for(var i=0; i <$('body>div').length; i++){
            loc[i] = $('body>div').eq(i).offset().top;
        }
        $('.hdrLeft .nav li').click(function(){
            ind=$(this).index();
            $('html').animate({scrollTop:loc[ind]});
            console.log(loc);
        });
    });
    $('.footer').load('./inc/footer.html');
});