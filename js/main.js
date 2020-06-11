$(function () {

    gridster = $(".gridster > ul").gridster({
        widget_selector: "li",                        //确定哪个元素是widget
        widget_margins: [5, 5],                       //margin大小,模块的边距，第一个参数是上下边距，第二个参数是左右边距
        widget_base_dimensions: [80, 40],             //每个模块的基本单位的宽度和高度，拖动或者改变大小都会以这个宽高为一个单位来改变

        //extra_rows:6,                              //增加更多的横数确保空隙合适
        //extra_cols: 0,                              //增加更多的列数确保空隙合适

        //max_size_x: 6,                              //一个widget最大多少列
        //max_size_y: 6,                              //一个widget最大多少横

        //max_cols: null,                             //最多创建多少列，null表示没有限制
        //max_rows: null,                             //最多创建多少横，null表示没有限制
        //min_cols: 1,                                //至少创建多少列
        //min_rows: 15,                               //至少创建多少横

        //autogenerate_stylesheet: true,   //默认true、允许通过CSS自动生成，例如：[data-col="1"] { left: 10px; }
        //avoid_overlapped_widgets: false,  //默认true、不允许widgets加载的时候重叠

        //resize.enabled: false,//允许改变大小
        //resize.axes: ['both'],      //能通过X,Y轴去改变大小
        //resize.handle_class: 'gs-resize-handle',          //把某个class当做改变大小的控件
        //resize.handle_append_to: '',//set a valid CSS selector to append resize handles to. If value evaluates to false it's appended to the widget.
        //resize.max_size: [Infinity, Infinity],  //改变大小的最大值

        //min_cols: 6,                                     //至少创建多少列
        helper: 'clone',
        //拖动模块的右下角改变模块大小
        resize:{
            enabled: true,
            handle:'.gs-resize-handle',
            start:function (e, ui, $widget) {
                console.log('resize：',$widget)
            }}

        //拖动事件
       /* draggable: {
            //设置拖动控件
            //handle: '.gs-resize-handle',
            start: function (event, ui) {
                console.log('start:', ui)
            },
            drag: function (event, ui) {
                console.log('drag:', ui)
            },
            stop: function (event, ui) {
                console.log('stop:', ui)
            }
        }*/
    }).data('gridster');


    //console.log(gridster)
    //添加一个widget
    //gridster.add_widget();

    //gridster.remove_widget();
    //gridster.disable( );//禁止拖动
    //gridster.enable( );
    //增加事件
    /* gridster.$el
              .on('mouseenter', '> li', function() {
                  gridster.resize_widget($(this), 3, 3);
              })
              .on('mouseleave', '> li', function() {
                  gridster.resize_widget($(this), 1, 1);
              });*/

});