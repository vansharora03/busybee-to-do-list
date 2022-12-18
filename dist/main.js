(()=>{"use strict";const e=function(e,t,n,r){let a=0;return{setTitle:function(t){e=t},getTitle:function(){return e},setDescription:function(e){t=e},getDescription:function(){return t},setDueDate:function(e){n=e},getDueDate:function(){return n},getPriority:function(){return r},setPriority:function(e){r=e},setIndex:function(e){a=e},getIndex:function(){return a}}},t=function(e,t){let n=0,r=[];return{setColor:function(e){t=e},getColor:function(){return t},setTitle:function(t){e=t},getTitle:function(){return e},registerTask:function(e){e.setIndex(r.length),r.push(e)},getTasks:function(){return r},removeTask:function(e){const t=e.getIndex();r.splice(t,1)},getIndex:function(){return n},setIndex:function(e){n=e}}};function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){return n(1,arguments),e instanceof Date||"object"===r(e)&&"[object Date]"===Object.prototype.toString.call(e)}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===o(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function u(e){if(n(1,arguments),!a(e)&&"number"!=typeof e)return!1;var t=i(e);return!isNaN(Number(t))}function d(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e,t){n(2,arguments);var r=i(e).getTime(),a=d(t);return new Date(r+a)}function c(e,t){n(2,arguments);var r=d(t);return s(e,-r)}var l=864e5;function m(e){n(1,arguments);var t=1,r=i(e),a=r.getUTCDay(),o=(a<t?7:0)+a-t;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function f(e){n(1,arguments);var t=i(e),r=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var o=m(a),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var d=m(u);return t.getTime()>=o.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function h(e){n(1,arguments);var t=f(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=m(r);return a}var g=6048e5,v={};function w(){return v}function y(e,t){var r,a,o,u,s,c,l,m;n(1,arguments);var f=w(),h=d(null!==(r=null!==(a=null!==(o=null!==(u=null==t?void 0:t.weekStartsOn)&&void 0!==u?u:null==t||null===(s=t.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==o?o:f.weekStartsOn)&&void 0!==a?a:null===(l=f.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=i(e),v=g.getUTCDay(),y=(v<h?7:0)+v-h;return g.setUTCDate(g.getUTCDate()-y),g.setUTCHours(0,0,0,0),g}function b(e,t){var r,a,o,u,s,c,l,m;n(1,arguments);var f=i(e),h=f.getUTCFullYear(),g=w(),v=d(null!==(r=null!==(a=null!==(o=null!==(u=null==t?void 0:t.firstWeekContainsDate)&&void 0!==u?u:null==t||null===(s=t.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==a?a:null===(l=g.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(h+1,0,v),b.setUTCHours(0,0,0,0);var p=y(b,t),T=new Date(0);T.setUTCFullYear(h,0,v),T.setUTCHours(0,0,0,0);var k=y(T,t);return f.getTime()>=p.getTime()?h+1:f.getTime()>=k.getTime()?h:h-1}function p(e,t){var r,a,o,i,u,s,c,l;n(1,arguments);var m=w(),f=d(null!==(r=null!==(a=null!==(o=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(u=t.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==a?a:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),h=b(e,t),g=new Date(0);g.setUTCFullYear(h,0,f),g.setUTCHours(0,0,0,0);var v=y(g,t);return v}var T=6048e5;function k(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const C=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return k("yy"===t?r%100:r,t.length)},D=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):k(n+1,2)},S=function(e,t){return k(e.getUTCDate(),t.length)},M=function(e,t){return k(e.getUTCHours()%12||12,t.length)},x=function(e,t){return k(e.getUTCHours(),t.length)},E=function(e,t){return k(e.getUTCMinutes(),t.length)},P=function(e,t){return k(e.getUTCSeconds(),t.length)},U=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return k(Math.floor(r*Math.pow(10,n-3)),t.length)};function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+k(o,2)}function L(e,t){return e%60==0?(e>0?"-":"+")+k(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+k(Math.floor(a/60),2)+n+k(a%60,2)}const Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return C(e,t)},Y:function(e,t,n,r){var a=b(e,r),o=a>0?a:1-a;return"YY"===t?k(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):k(o,t.length)},R:function(e,t){return k(f(e),t.length)},u:function(e,t){return k(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return D(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,r,a){var o=function(e,t){n(1,arguments);var r=i(e),a=y(r,t).getTime()-p(r,t).getTime();return Math.round(a/T)+1}(e,a);return"wo"===t?r.ordinalNumber(o,{unit:"week"}):k(o,t.length)},I:function(e,t,r){var a=function(e){n(1,arguments);var t=i(e),r=m(t).getTime()-h(t).getTime();return Math.round(r/g)+1}(e);return"Io"===t?r.ordinalNumber(a,{unit:"week"}):k(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):S(e,t)},D:function(e,t,r){var a=function(e){n(1,arguments);var t=i(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),o=r-a;return Math.floor(o/l)+1}(e);return"Do"===t?r.ordinalNumber(a,{unit:"dayOfYear"}):k(a,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return k(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return k(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return M(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):x(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):E(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):P(e,t)},S:function(e,t){return U(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return L(a);case"XXXX":case"XX":return W(a);default:return W(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return L(a);case"xxxx":case"xx":return W(a);default:return W(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");default:return"GMT"+W(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");default:return"GMT"+W(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return k(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return k((r._originalDate||e).getTime(),t.length)}};var O=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},H=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},N={p:H,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return O(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",O(a,t)).replace("{{time}}",H(o,t))}};const B=N;function F(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var I=["D","DD"],A=["YY","YYYY"];function j(e){return-1!==I.indexOf(e)}function z(e){return-1!==A.indexOf(e)}function Q(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var R={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function G(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var X,_={date:G({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:G({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:G({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},$={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function V(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?Z(d,(function(e){return e.test(u)})):K(d,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var c=t.slice(u.length);return{value:i,rest:c}}}function K(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Z(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const ee={code:"en-US",formatDistance:function(e,t,n){var r,a=R[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:_,formatRelative:function(e,t,n,r){return $[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:J({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:J({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:J({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:J({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:J({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(X.matchPattern);if(!n)return null;var r=n[0],a=e.match(X.parsePattern);if(!a)return null;var o=X.valueCallback?X.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var te=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ne=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,re=/^'([^]*?)'?$/,ae=/''/g,oe=/[a-zA-Z]/;function ie(e){var t=e.match(re);return t?t[1].replace(ae,"'"):e}const ue=function(r,a){let o,s=[],l=[],m=0,f=["#bef264","#fcd34d","#fda4af","#a5b4fc","#f87171","#86efac","#94a3b8"];const h=function(e){e.setIndex(s.length),s.push(e);const t=document.createElement("div");t.style.backgroundColor=e.getColor(),t.classList.add("renderedHive"),t.id="hive-"+e.getIndex();const n=document.createElement("h2");n.classList.add("renderedTitle"),n.textContent=e.getTitle(),t.appendChild(n);const a=document.createElement("div");return a.classList.add("clickListen"),a.dataset.clickOf=t.id,a.addEventListener("click",p),t.appendChild(a),r.appendChild(t),T(),t},g=function(t){const r=t.target;r.remove();const a=document.createElement("div");a.classList.add("addTaskForm");const o=document.createElement("input");o.classList.add("addTaskTitle"),o.id="addTaskTitle",o.placeholder="Task Title",a.appendChild(o);const l=document.createElement("textarea");l.classList.add("addTaskDescription"),l.id="addTaskDescription",l.placeholder="Task Description",a.appendChild(l);const m=document.createElement("input");m.type="date",m.classList.add("addTaskDueDate"),m.id="addTaskDueDate",m.placeholder="Task Due Date",a.appendChild(m);const f=document.createElement("input");f.classList.add("addTaskPriority"),f.id="addTaskPriority",f.placeholder="Task Priority",a.appendChild(f);const h=document.createElement("button");h.classList.add("addTaskSubmitBtn"),h.id=t.target.id,h.textContent="+",h.addEventListener("click",(t=>{a.remove();const h=e(o.value,l.value,function(e,t,r){var a,o,s,l,m,f,h,g,v,y,b,p,T,k,C,D,S,M;n(2,arguments);var x=String(t),E=w(),P=null!==(a=null!==(o=null==r?void 0:r.locale)&&void 0!==o?o:E.locale)&&void 0!==a?a:ee,U=d(null!==(s=null!==(l=null!==(m=null!==(f=null==r?void 0:r.firstWeekContainsDate)&&void 0!==f?f:null==r||null===(h=r.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:E.firstWeekContainsDate)&&void 0!==l?l:null===(v=E.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==s?s:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=d(null!==(b=null!==(p=null!==(T=null!==(k=null==r?void 0:r.weekStartsOn)&&void 0!==k?k:null==r||null===(C=r.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==T?T:E.weekStartsOn)&&void 0!==p?p:null===(S=E.locale)||void 0===S||null===(M=S.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==b?b:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var L=i(e);if(!u(L))throw new RangeError("Invalid time value");var W=F(L),O=c(L,W),H={firstWeekContainsDate:U,weekStartsOn:q,locale:P,_originalDate:L},N=x.match(ne).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,P.formatLong):e})).join("").match(te).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ie(n);var o=Y[a];if(o)return null!=r&&r.useAdditionalWeekYearTokens||!z(n)||Q(n,t,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!j(n)||Q(n,t,String(e)),o(O,n,P.localize,H);if(a.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return N}(m.valueAsDate.addDays(1),"MM-dd-yyyy"),f.value);s[parseInt(t.target.id)].registerTask(h),v("#hive-"+t.target.id,h),document.querySelector("#hive-"+t.target.id).appendChild(r)})),a.appendChild(h),document.querySelector("#hive-"+t.target.id).appendChild(a)};Date.prototype.addDays=function(e){let t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};const v=function(e,t){const n=document.createElement("div");n.classList.add("renderedTask"),n.setAttribute("id","task-"+m);const r=document.createElement("h3");r.classList.add("renderedTaskTitle"),r.textContent=t.getTitle(),n.appendChild(r);const a=document.createElement("p");a.classList.add("renderedTaskDescription"),a.textContent=t.getDescription(),n.appendChild(a);const o=document.createElement("p");o.classList.add("renderedTaskDueDate"),o.textContent="Due: "+t.getDueDate(),n.appendChild(o);const i=document.createElement("p");i.classList.add("renderedTaskPriority"),i.textContent="Priority: "+t.getPriority(),n.appendChild(i);const u=document.createElement("button");u.classList.add("deleteTaskBtn"),u.textContent="-",u.dataset.tasksOf=e.substring(1),u.setAttribute("id",m+""),u.addEventListener("click",(e=>{s[parseInt(u.dataset.tasksOf.substring(5))].removeTask(t),document.querySelector("#task-"+e.target.id).remove(),T()})),n.appendChild(u),T(),document.querySelector(e).appendChild(n),m++},y=function(){const e=document.createElement("button");e.classList.add("addHiveBtn"),e.id="addHiveBtn",e.textContent="+",e.addEventListener("click",b),r.appendChild(e)},b=function(){const e=document.querySelector("#addHiveBtn");e.remove();const n=document.createElement("div");n.classList.add("addHiveForm"),n.id="addHiveForm";const a=document.createElement("input");a.setAttribute("placeholder","Title"),a.id="newHiveTitle",a.classList.add("newHiveTitle"),n.appendChild(a);const o=document.createElement("input");o.type="color",o.value=f[Math.floor(6*Math.random())],o.classList.add("newHiveColor"),n.appendChild(o);const i=document.createElement("button");i.textContent="+",i.classList.add("addHiveSubmit"),i.addEventListener("click",(()=>{const a=t(""===document.querySelector("#newHiveTitle").value?"New Hive":document.querySelector("#newHiveTitle").value,o.value);h(a),T(),n.remove(),r.appendChild(e)})),n.appendChild(i),r.appendChild(n)},p=function(e){const t=document.querySelector("#"+e.target.dataset.clickOf);t.classList.add("expandedHive"),t.removeEventListener("click",p);const n=e.target;n.remove(),document.querySelector("body").style.overflow="hidden",r.style.overflowY="hidden",function(e){const t=document.createElement("button");t.textContent="+Task",t.setAttribute("id",e.id.substring(5)),t.classList.add("addTaskBtn"),t.addEventListener("click",g),e.appendChild(t)}(t),function(e){const t=document.createElement("button");t.classList.add("deleteHiveBtn");const n=document.createElement("img");n.src="images/trash.svg",t.appendChild(n),t.id=e.id.substring(5),t.addEventListener("click",(()=>{s.splice(parseInt(t.id),1),e.remove();for(let e=0;e<s.length;e++){const t=document.querySelector("#hive-"+s[e].getIndex());t.id="hive-"+e,s[e].setIndex(e),t.querySelector(".clickListen").dataset.clickOf=t.id,t.contains(t.querySelector(".deleteTaskBtn"))&&t.querySelectorAll(".deleteTaskBtn").forEach((e=>{e.dataset.tasksOf=t.id}))}document.querySelector(".blurScreen").remove(),document.querySelector("body").style.overflowY="auto",r.style.overflowY="auto",T()})),e.appendChild(t)}(t),r.contains(document.querySelector(".deleteTaskBtn"))&&t.querySelectorAll(".deleteTaskBtn").forEach((e=>{e.style.visibility="visible"}));const a=document.createElement("div");a.classList.add("blurScreen"),r.appendChild(a),a.addEventListener("click",(()=>{a.remove(),t.classList.remove("expandedHive"),t.contains(document.querySelector(".addTaskForm"))&&t.querySelector(".addTaskForm").remove(),t.contains(document.querySelector(".addTaskBtn"))&&t.querySelector(".addTaskBtn").remove(),r.contains(document.querySelector(".deleteTaskBtn"))&&t.querySelectorAll(".deleteTaskBtn").forEach((e=>{e.style.visibility="hidden"})),document.querySelector("body").style.overflowY="auto",r.style.overflowY="auto",t.querySelector(".deleteHiveBtn").remove(),t.appendChild(n)}))},T=function(){o="{\n";let e=0;s.forEach((t=>{o+=`"hive-${e}":`,o+=`{\n"title": "${t.getTitle()}",\n"color": "${t.getColor()}",\n"index": "${t.getIndex()}",\n"tasks": {`;let n=0;t.getTasks().forEach((e=>{o+=`"task-${n}": {"title": "${e.getTitle()}",\n"description": "${e.getDescription()}",\n"dueDate": "${e.getDueDate()}",\n"priority": "${e.getPriority()}"}\n`,n<t.getTasks().length-1&&(o+=","),n++})),o+="}\n}\n",e<s.length-1&&(o+=","),e++})),o+="\n}",a.setItem("hives",o)};return{loadInitial:function(){const e=t("My First Hive!",f[6]);h(e),y()},loadHives:function(){!function(){console.log(a.getItem("colorNum"));const n=JSON.parse(a.getItem("hives"));for(let r in n){const a=t(n[r].title,n[r].color);a.setIndex(l.length);for(let t in n[r].tasks){const o=e(n[r].tasks[t].title,n[r].tasks[t].description,n[r].tasks[t].dueDate,n[r].tasks[t].priority);a.registerTask(o)}l.push(a)}}(),l.forEach((e=>{h(e),e.getTasks().forEach((t=>{v("#hive-"+e.getIndex(),t)}))})),document.querySelectorAll(".deleteTaskBtn").forEach((e=>{e.style.visibility="hidden"})),y()},getHives:function(){return s}}},de=document.querySelector("#content");!function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()?ue(de,localStorage).loadInitial():ue(de,localStorage).loadHives()})();