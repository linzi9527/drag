1.widget_selector
示例：widget_selector:"li"
说明：widget_selector用了配置一个girdster里面可拖动模块的html元素名称，支持css选择器，如:widget_selector:"div.drag > .items"。

2.widget_margins
示例：widget_margins:[10,10]
说明：模块的边距，第一个参数是上下边距，第二个参数是左右边距。

3.widget_base_dimensions
示例：widget_base_dimensions:[140,140]
说明：每个模块的基本单位的宽度和高度，拖动或者改变大小都会以这个宽高为一个单位来改变。

autogenerate_stylesheet
示例：autogenerate_stylesheet:true
说明：默认是true，用控制台查看你会发现在head结束前插入了<style>样式代码，大概是这样 [data-col="1"] { left: 10px; }，这些决定了拖动模块的相对位置，如果设置为false，你就要手动的定义这些模块的位置（top和left）

avoid_overlapped_widgets
示例：avoid_overlapped_widgets:true
说明：设置为true，不允许模块叠加，如果两个模块的位置一样（data-col和data-row来决定），程序会自动调整他们的位置，这样可以防止模块错乱。

serialize_params
示例：serialize_params:function($w, wgd) { return { col: wgd.col, row: wgd.row, size_x: wgd.size_x,size_y: wgd.size_y } }
说明：自定义配置序列化的格式，这个函数的返回值将作为返回数组的一个元素，每个模块生成一个元素。使用serialize()方法时才用到此配置，wgd的意思是widget data，gridster通过wgd可以直接取得诸如data-col等的配置，但是如果你想去的模块元素的id，，我们可以通过$w.attr("id")获取。

draggable.start
示例：draggable.start:function(event, ui){}
说明：拖动开始执行的函数

draggable.drag
示例：draggable:{drag:function(event, ui){}}
说明：拖动过程中鼠标移动时执行的函数

draggable.stop
示例：draggable:{stop:function(event, ui){}}
说明：拖动结束后执行的函数

resize.enabled
示例：resize:{enabled:false}
说明：默认false，设置为true时表示可以拖动模块的右下角改变模块大小

resize.axes
示例：resize:{axes:['both']}
说明：设置改变模块大小时，鼠标可以向X轴还是Y轴移动，意思就是说你可以设置改变模块大小的宽度还是高度，设置为x只能改变模块宽度，设置为y只能改变高度，设置为both高和宽都可以改变。

resize.handle_class
示例：resize:{handle_class:'gs-resize-handle'}
说明：设置改变模块大小时，拖动按钮的classname，默认是gs-resize-handle

resize.handle_append_to
示例：resize:{handle_append_to:''}
说明：通过css选择器设置一个元素，这个元素将是拖动按钮的父元素，如果不设置，默认是这个模块（也就是widget_selector的值）

resize.max_size
示例：resize:{max_size:[Infinity, Infinity]}
说明：在改变模块大小的时候，为模块的最大宽高做限制

resize.start
示例：resize:{start:function(e, ui, $widget) {}}
说明：鼠标开始拖动大小的时候执行的函数

resize.resize
示例：resize:{resize:function(e, ui, $widget) {}}
说明：大小一旦改变执行的函数

resize.stop
示例：resize:{stop:function(e, ui, $widget) {}}
说明：停止改变大小（释放鼠标）执行的函数

 

补充 by xiangm 2016-12-14

autogrow_cols

示例：autogrow_cols: true

说明：是否允许列自增，若允许，则可将模块向右拖动，会出现滚动条，若不允许，则向右拖动时到浏览器窗口边界（？）时便不能再拖动。

 

min_cols

示例：min_cols: 2

说明：模块最小宽度

 

max_cols

示例：max_cols: 6

说明：模块最大宽度