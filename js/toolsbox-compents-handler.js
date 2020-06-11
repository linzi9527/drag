$(function () {
    /***********************顶部bar事件处理******************************/
     $('.btn_del_all').click(function () {
         gridster.remove_all_widgets()
     });
    
    /***********************组件事件处理******************************/
    $('.sub_unit_text').click(function () {
        //alert($(this).attr('lang'))
        var id='v'+new Date().getTime();
        let flag=$(this).attr('lang')
        switch (flag) {
            case 'text':$(function() {
                let item = '<li id="'+id+'" class="new">The HTML of the widget[text]</li>'
                gridster.add_widget(item, 2, 1);
            });
                break;
            case 'viewpager':$(function() {
                let item = '<div id="'+id+'" class="new">The HTML of the widget[viewpager]</div>'
                gridster.add_widget(item, 2, 1);
            });
                break;
        }

        /**
         //组件坐标
         var json = gridster.serialize();
         console.log(JSON.stringify(json));
         **/
        //获取网页浏览器解析代码
        console.log($('.middle_build_panal').html())
    });
    /************************左侧组件面板处理ending*************************/
    //有开到关
    $('.left_top_close').click(function () {
            $('.left_toolbox').hide();
            $('.left_top_open').show();
        }
    );
    //有关到开
    $('.left_top_open').click(function () {
            $('.left_toolbox').show();
            $('.left_top_open').hide();
        }
    );

    /************************右侧属性面板处理**************************/
    //有开到关
    $('.right_top_close').click(function () {
            $('.right_settingbox').hide();
            $('.right_top_open').show();
        }
    );
    //有关到开
    $('.right_top_open').click(function () {
            $('.right_settingbox').show();
            $('.right_top_open').hide();
        }
    );
    /************************右侧属性面板处理ending*************************/



});