function P(a,c,b,d){switch(a[0]){case 21:M("domready"+b);sa(function(){var a=M("_domready"+b,"domready"+b,"domReady","domReady");c(["domReady","\u00f8",a])});break;case 22:var e=1;a[1]&&a[1][15]&&(e=a[1][15]);M("raf"+b);RAF(function(){var a=M("_raf"+b,"raf"+b,"requestAnimationFrame","rAF");c(["rAF frame #",e,a])},e);break;case 23:var f,g;a[1]&&a[1][16]&&(f=a[1][16]);a[1]&&a[1][17]&&(g=function(b){setTimeout(b,a[1][17])});M("ric"+b);D(function(){var a=M("_ric"+b,"ric"+b,"requestIdleCallback","rIC");
c(["rIC",f?f:"\u00f8",a])},f,g);break;case 24:var h,k;a[1]&&a[1][18]&&(h=a[1][18]);a[1]&&a[1][19]&&(k=a[1][19]);M("inview"+b);jc(h,k,function(){var a=M("_inview"+b,"inview"+b,"inview","inview");c(["inView",h,a])});break;case 20:var q="all";a[1]&&a[1][20]&&(q=a[1][20]);Na(q,function(){c([{responsive:q},"\u00f8",null])},function(){var a={responsive:q};d&&d([a,"\u00f8",null])})}};
