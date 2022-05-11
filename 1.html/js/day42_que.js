$(function(){
    i=0;
    $('.cntWrap01>button').first().click(function(){
        i++;
        if(i>=4){
            i=4
        }
        $('.artView01>div.artGroup.artGroup01').css('margin-left',i*-100+'%');
    });

    $('.cntWrap01>button').last().click(function(){
        i--;
        if(i<=0){
            i=0
        }
        $('.artView01>div.artGroup.artGroup01').css('margin-left',i*-100+'%');
    });

    $('.cntWrap02>button').first().click(function(){
        i++;
        if(i>=4){
            i=4
        }
        $('.artView02>div.artGroup.artGroup02').css('margin-top',i*-500+'px');
        $('.artView02>ul.paging>li').removeClass('on')
        $('.artView02>ul.paging>li').eq(i).addClass('on');
        console.log(i);
    });

    $('.cntWrap02>button').last().click(function(){
        i--;
        if(i<=0){
            i=0
        }
        $('.artView02>div.artGroup.artGroup02').css('margin-top',i*-500+'px');
        $('.artView02>ul.paging>li').removeClass('on')
        $('.artView02>ul.paging>li').eq(i).addClass('on');
        console.log(i);
    });
    
    $('.artView02>ul.paging>li').click(function(){
        var ind = $(this).index();
        $('.artView02>div.artGroup.artGroup02').css('margin-top',ind*-500+'px');
        $('.artView02>ul.paging>li').removeClass('on')
        $(this).addClass('on');
        i=ind;
    });

    $('.cntWrap03>div.thumbnails>div.article').click(function(){
        var m =$(this).css('background-image');
        $('.cntWrap03>div.thumbView').css('background-image',m);
    });


    $('.cntWrap04>div.thumbView>div.thumbnails>div.article').click(function(){
        var v = $(this).index();
        $('.cntWrap04>div.thumbView>div.thumbGroup').css('margin-left',v*-100+'%');
    });

});