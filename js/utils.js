var utils={
    loadCss:function (css_file_url, link_id){
        var head = document.head || document.getElementByTagName("head")[0] || document.documentElement;
        var cssLink = document.createElement("link");
        cssLink.setAttribute("rel","stylesheet");
        cssLink.setAttribute("href",css_file_url);
        cssLink.setAttribute("id",link_id);
        cssLink.setAttribute("charset","utf-8");

       var linkId = document.getElementById(link_id);
        // 如果已经添加了，删除掉。
        if(linkId){
            head.removeChild(linkId);
        }
        head.appendChild(cssLink);
    },

    loadJs:function (script_file_url, script_id){
            var head = document.head || document.getElementByTagName("head")[0] || document.documentElement;
            var script = document.createElement("script");
            script.setAttribute("type","text/javascript");
            script.setAttribute("src",script_file_url);
            script.setAttribute("id",script_id);
            script.setAttribute("charset","utf-8");

            var scriptId = document.getElementById(script_id);
            // 如果已经添加了，删除掉。
            if(scriptId){
                head.removeChild(scriptId);
            }
            head.appendChild(script);

            if(window.all){
                script.onreadystatechange = function(){
                    if(script.readyStatus === "loaded" || script.readyState === "complete"){
                        // 执行后续事件
                        console.log(script_file_url+'文件加载完成，此处可以调用，执行后续事件')
                    }
                }
            }
            else{
                script.onload = function(){
                    // 执行后续操作。
                    console.log(script_file_url+'文件加载完成，此处可以调用相关操作')
                }
            }
    }


}