var ua=navigator.userAgent;isTabletOrSmartPhone=false;isSmartPhone=false;isIOS=false;isAndroid=false;var language=$("html").attr("lang");if(language=="el"||language=="ru"){$("html").addClass("excludeHiragino");}if(ua.indexOf("iPhone")>0||ua.indexOf("iPad")>0||ua.indexOf("iPod")>0||ua.indexOf("Android")>0||ua.indexOf("Mobile")>0){isTabletOrSmartPhone=true;}if(ua.indexOf("iPhone")>0||ua.indexOf("iPad")>0||ua.indexOf("iPod")>0){isIOS=true;}else{if(ua.indexOf("Android")>0){isAndroid=true;}}if((ua.indexOf("iPhone")>0&&ua.indexOf("iPad")==-1)||ua.indexOf("iPod")>0||(ua.indexOf("Android")>0&&ua.indexOf("Mobile")>0)){isSmartPhone=true;appendCss($.constants.parameters.s3UrlStaticBase+"/css/sp.css",$.constants.parameters.s3UrlStaticBase+"/css/sp-font.css");$.getScript($.constants.parameters.s3UrlStaticBase+"/js/sp.js");if(window.devicePixelRatio<2.5){appendCss($.constants.parameters.s3UrlStaticBase+"/css/x2.css");}else{if(window.devicePixelRatio>=2.5){appendCss($.constants.parameters.s3UrlStaticBase+"/css/x3.css");}}}else{appendCss($.constants.parameters.s3UrlStaticBase+"/css/pc-font.css",$.constants.parameters.s3UrlStaticBase+"/css/pc.css");$.getScript($.constants.parameters.s3UrlStaticBase+"/js/pc.js");}if(isTabletOrSmartPhone&&!isSmartPhone){$("html").addClass("isTablet");}function appendCss(){for(var i=0;i<appendCss.arguments.length;i++){$("head").append('<link href="'+appendCss.arguments[i]+'" rel="stylesheet" type="text/css" />');}}