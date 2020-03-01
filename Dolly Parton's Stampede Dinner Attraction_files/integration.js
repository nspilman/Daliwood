function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}


/**
 * 
 * @param {type} name
 * @param {type} url
 * @returns {String}
 */
function getUrlParamByName(name, url) {
    if (typeof url == 'undefined') url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}

if(typeof jQuery == 'undefined'){
  loadScript("https://code.jquery.com/jquery-3.2.1.min.js",function(){
    initIntegration();
  });
}
else{
  initIntegration();
}

/**
 * 
 * @returns {undefined}
 */
function initIntegration(){
  window.$ = jQuery.noConflict();
    $(document).ready(function () {
        let lastheight;
        setInterval(function () {
            let mainWidget = document.getElementById('mainWidget');
            if (mainWidget && mainWidget.contentWindow.document.body && mainWidget.contentWindow.document.body.scrollHeight != lastheight) {
                lastheight = mainWidget.contentWindow.document.body.scrollHeight;
                mainWidget.height = mainWidget.contentWindow.document.body.scrollHeight;
            }
        }, 450);
        const eventId = getUrlParamByName('eventId');
        let venuelocation = getUrlParamByName('venuelocation');
        if (!venuelocation) {
            venuelocation = window.venuelocation;
        }

        const m = getUrlParamByName('mth');
        const y = getUrlParamByName('yth');
        let combo = getUrlParamByName('combo');

        if (!combo) {
            combo = window.widgetcombo;
        }
        let promoCoupon = getUrlParamByName('promoCoupon');
        if (!promoCoupon) {
            promoCoupon = window.promoCoupon;
        }

        let curUrl = '/tktTsV2/index.php?mainWidget=1&venuelocation=' + venuelocation;
        let newUrl = curUrl;

        if (eventId) {
            newUrl = updateQueryStringParameter(newUrl, 'eventId', eventId);
        }

        if (venuelocation) {
            newUrl = updateQueryStringParameter(newUrl, 'venuelocation', venuelocation);
        }

        if (combo) {
            newUrl = updateQueryStringParameter(newUrl, 'combo', combo);
        }

        if (promoCoupon) {
            newUrl = updateQueryStringParameter(newUrl, 'promoCoupon', promoCoupon);
        }

        if (m && y) {
            newUrl = updateQueryStringParameter(newUrl, 'mth', m);
            newUrl = updateQueryStringParameter(newUrl, 'yth', y);
        }
        // Load main widget
        jQuery('#mainWidget').attr('src', newUrl);
        if (venuelocation) {
            jQuery('#mainWidget').attr('src', newUrl);
        }


        // Load universal widget
        jQuery('#universalWidget').attr('src', '/tktTsV2/index.php?isUniversalWidget=1&venuelocation=PF');
        window.mainWidget = jQuery('#universalWidget');
    });
}
