$(document).ready(function () {
    //检测ie 6789
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        window.scrollReveal = new scrollReveal({
            reset: true
        });
    }
    /*nav show or hide*/
    $('.nav>li').hover(function () {
        $(this).children('ul').stop(true, true).show(400);
    }, function () {
        $(this).children('ul').stop(true, true).hide(400);
    });
    /*search*/
    $('.search_ico').click(function () {
        $('.search_bar').toggleClass('search_open');
        if ($('#keyboard').val().length > 2) {
            $('#keyboard').val('');
            $('#searchform').submit();
        } else {
            return false;
        }
    });
    /*banner*/
    $('#banner').easyFader();

    /*topnav select*/
    var obj = null;
    var allMenu = document.getElementById('topnav').getElementsByTagName('a');
    // console.log(allMenu);
    obj = allMenu[0];
    for (i = 1; i < allMenu.length; i++) {
        if (window.location.href.indexOf(allMenu[i].href) >= 0) {
            obj = allMenu[i];
        }
    }
    obj.id = 'topnav_current';

    /*mnav dl open*/
    var oH2 = document.getElementsByTagName('h2')[0];
    var oUl = document.getElementsByTagName('dl')[0];
    oH2.onclick = function () {
        var style = oUl.style;
        style.display = style.display == 'block' ? 'none' : 'block';
        oH2.className = style.display == 'block' ? 'open' : '';
    };
    //菜单点击效果
    $('.list_dt').on('click', function () {
        $('.list_dd').stop();
        $(this).siblings('dt').removeAttr('id');
        if ($(this).attr('id') == 'open') {
            $(this).removeAttr('id').siblings('dd').slideUp();
        } else {
            $(this).attr('id', 'open').next().slideDown().siblings('dd').slideUp();
        }
    });
    // 返回顶部
    $(window).on('scroll',function () {
        var v = document.body.scrollTop || document.documentElement.scrollTop;
        if (v >= 300) {
            $('#toTop').css('display', 'block');
            console.log('aaa')
        } else {
            $('#toTop').css('display', 'none');
        }
    })
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0,
        }, 700);
    })



    //设置固定关注我们

    if ($('#follow-us')) {
        var followUsPosition = $('#follow-us').offset().top;
        window.onscroll = function () {
            var nowPosition = document.documentElement.scrollTop;
            if (nowPosition - followUsPosition > 0) {
                setTimeout(function () {
                    $('#follow-us').attr('class', 'guanzhu gd');
                }, 150);
            } else {
                $('#follow-us').attr('class', 'guanzhu');
            }
        };
    }
});