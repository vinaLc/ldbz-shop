/* toolbar-1.0.0 localStorageObj.js Date:2016-11-17 18:06:41 */
define("TB_ROOT/js/localStorageObj",function(require,a){var c=!!window.localStorage;var d={init:function(a){return{expire:a||7,ts:"_timestamp"}},get:function(a){if(!c)return!1;var b=this.init();return localStorage.getItem(a+b.ts)},set:function(a,b){if(!c)return!1;var d=this.init(),e=(new Date).getTime();b=b||e,localStorage.setItem(a+d.ts,b)},del:function(a){var b=this.init();c&&localStorage.removeItem(a+b.ts)},check:function(a,b){var e,d=this.init(b);return c?(e=this.get(a),e?((new Date).getTime()-e)/1e3/60/60/24>d.expire?(this.del(a),!0):!1:!0):void 0}};a.localStorage=d});
