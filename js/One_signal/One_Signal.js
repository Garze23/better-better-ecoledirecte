(()=>{
    "use strict";
    var t = {
        967: (t,i)=>{
            function o() {
                return void 0 !== window.safari && void 0 !== window.safari.pushNotification
            }
            function e() {
                return "undefined" != typeof PushSubscriptionOptions && PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey")
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.isIosSafari = i.supportsVapidPush = i.supportsSafariLegacyPush = i.isPushNotificationsSupported = void 0,
            i.isPushNotificationsSupported = function() {
                return e() || o()
            }
            ,
            i.supportsSafariLegacyPush = o,
            i.supportsVapidPush = e,
            i.isIosSafari = function() {
                return "Apple Computer, Inc." === navigator.vendor && navigator.maxTouchPoints > 0
            }
        }
        ,
        935: (t,i,o)=>{
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.OneSignalShimLoader = void 0;
            var e = o(967)
              , n = function() {
                function t() {}
                return t.addScriptToPage = function(t) {
                    var i = document.createElement("script");
                    i.src = t,
                    i.defer = !0,
                    document.head.appendChild(i)
                }
                ,
                t.getPathAndPrefix = function() {
                    return "https://cdn.onesignal.com/sdks/web/v16/"
                }
                ,
                t.loadFullPageSDK = function() {
                    t.addScriptToPage("".concat(t.getPathAndPrefix(), "OneSignalSDK.page.es6.js?v=").concat(t.VERSION))
                }
                ,
                t.start = function() {
                    (0,
                    e.isPushNotificationsSupported)() ? t.loadFullPageSDK() : this.printEnvironmentNotSupported()
                }
                ,
                t.printEnvironmentNotSupported = function() {
                    var t = "OneSignal: SDK is not compatible with this browser.";
                    (0,
                    e.isIosSafari)() && (t += " To support iOS please install as a Web App. See the OneSignal guide https://documentation.onesignal.com/docs/safari-web-push-for-ios"),
                    console.log(t)
                }
                ,
                t
            }();
            i.OneSignalShimLoader = n,
            n.VERSION = Number(160101)
        }
    }
      , i = {};
    function o(e) {
        var n = i[e];
        if (void 0 !== n)
            return n.exports;
        var r = i[e] = {
            exports: {}
        };
        return t[e](r, r.exports, o),
        r.exports
    }
    o(935).OneSignalShimLoader.start()
}
)();
//# sourceMappingURL=OneSignalSDK.page.js.map