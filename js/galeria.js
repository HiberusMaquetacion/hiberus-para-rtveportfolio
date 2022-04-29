$(function () {
    var moveLeft = 20;
    var moveDown = 10;

    if ($('a.trigger' == ":hover")) {
        $('a.trigger').hover(function (e) {
        $('div#pop-up').show();
        //.css('top', e.pageY + moveDown)
        //.css('left', e.pageX + moveLeft)
        //.appendTo('body');
        }, function () {
        $('div#pop-up').hide();
        });
        $('a.trigger').mousemove(function (e) {
        $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
                } if ($('a.triggerdos' == ":hover")) {
                    $('a.triggerdos').hover(function (e) {
                    $('div#pop-updos').show();

                    }, function () {
                    $('div#pop-updos').hide();
                    });
                    $('a.triggerdos').mousemove(function (e) {
                    $("div#pop-updos").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
                    });
                    } if ($('a.triggertres' == ":hover")) {
                        $('a.triggertres').hover(function (e) {
                        $('div#pop-uptres').show();

                        }, function () {
                        $('div#pop-uptres').hide();
                        });
                        $('a.triggertres').mousemove(function (e) {
                        $("div#pop-uptres").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
                        });
                        } if ($('a.triggercuatro' == ":hover")) {
                                $('a.triggercuatro').hover(function (e) {
                                $('div#pop-upcuatro').show();

                                }, function () {
                                $('div#pop-upcuatro').hide();
                                });
                                $('a.triggercuatro').mousemove(function (e) {
                                $("div#pop-upcuatro").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
                                });
                                    } if ($('a.triggercinco' == ":hover")) {
                                            $('a.triggercinco').hover(function (e) {
                                            $('div#pop-upcinco').show();

                                             }, function () {
                                                $('div#pop-upcinco').hide();
                                                });
                                                $('a.triggercinco').mousemove(function (e) {
                                                $("div#pop-upcinco").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
                                                });
    }
});