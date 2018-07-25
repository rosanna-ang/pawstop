(function(e, t) {
	var n, r, i=typeof t, o=e.location, a=e.document, s=a.documentElement, l=e.jQuery, u=e.$, c= {}
	, p=[], f="1.10.2", d=p.concat, h=p.push, g=p.slice, m=p.indexOf, y=c.toString, v=c.hasOwnProperty, b=f.trim, x=function(e, t) {
		return new x.fn.init(e, t, r)
	}
	, w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T=/\S+/g, C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/, E=/^[\], : {}
	\s]*$/, S=/(?:^|:|, )(?:\s*\[)+/g, A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D=/^-ms-/, L=/-([\da-z])/gi, H=function(e, t) {
		return t.toUpperCase()
	}
	, q=function(e) {
		(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(), x.ready())
	}
	, _=function() {
		a.addEventListener?(a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)): (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
	}
	;
	x.fn=x.prototype= {
		jquery:f, constructor:x, init:function(e, n, r) {
			var i, o;
			if(!e)return this;
			if("string"==typeof e) {
				if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null, e, null]: N.exec(e), !i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
				if(i[1]) {
					if(n=n instanceof x?n[0]: n, x.merge(this, x.parseHTML(i[1], n&&n.nodeType?n.ownerDocument||n:a, !0)), k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i, n[i]);
					return this
				}
				if(o=a.getElementById(i[2]), o&&o.parentNode) {
					if(o.id!==i[2])return r.find(e);
					this.length=1, this[0]=o
				}
				return this.context=a, this.selector=e, this
			}
			return e.nodeType?(this.context=this[0]=e, this.length=1, this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector, this.context=e.context), x.makeArray(e, this))
		}
		, selector:"", length:0, toArray:function() {
			return g.call(this)
		}
		, get:function(e) {
			return null==e?this.toArray(): 0>e?this[this.length+e]:this[e]
		}
		, pushStack:function(e) {
			var t=x.merge(this.constructor(), e);
			return t.prevObject=this, t.context=this.context, t
		}
		, each:function(e, t) {
			return x.each(this, e, t)
		}
		, ready:function(e) {
			return x.ready.promise().done(e), this
		}
		, slice:function() {
			return this.pushStack(g.apply(this, arguments))
		}
		, first:function() {
			return this.eq(0)
		}
		, last:function() {
			return this.eq(-1)
		}
		, eq:function(e) {
			var t=this.length, n=+e+(0>e?t: 0);
			return this.pushStack(n>=0&&t>n?[this[n]]: [])
		}
		, map:function(e) {
			return this.pushStack(x.map(this, function(t, n) {
				return e.call(t, n, t)
			}
			))
		}
		, end:function() {
			return this.prevObject||this.constructor(null)
		}
		, push:h, sort:[].sort, splice:[].splice
	}
	, x.fn.init.prototype=x.fn, x.extend=x.fn.extend=function() {
		var e, n, r, i, o, a, s=arguments[0]|| {}
		, l=1, u=arguments.length, c=!1;
		for("boolean"==typeof s&&(c=s, s=arguments[1]|| {}
		, l=2), "object"==typeof s||x.isFunction(s)||(s= {}
		), u===l&&(s=this, --l);
		u>l;
		l++)if(null!=(o=arguments[l]))for(i in o)e=s[i], r=o[i], s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1, a=e&&x.isArray(e)?e: []):a=e&&x.isPlainObject(e)?e: {}
		, s[i]=x.extend(c, a, r)):r!==t&&(s[i]=r));
		return s
	}
	, x.extend( {
		expando:"jQuery"+(f+Math.random()).replace(/\D/g, ""), noConflict:function(t) {
			return e.$===x&&(e.$=u), t&&e.jQuery===x&&(e.jQuery=l), x
		}
		, isReady:!1, readyWait:1, holdReady:function(e) {
			e?x.readyWait++: x.ready(!0)
		}
		, ready:function(e) {
			if(e===!0?!--x.readyWait: !x.isReady) {
				if(!a.body)return setTimeout(x.ready);
				x.isReady=!0, e!==!0&&--x.readyWait>0||(n.resolveWith(a, [x]), x.fn.trigger&&x(a).trigger("ready").off("ready"))
			}
		}
		, isFunction:function(e) {
			return"function"===x.type(e)
		}
		, isArray:Array.isArray||function(e) {
			return"array"===x.type(e)
		}
		, isWindow:function(e) {
			return null!=e&&e==e.window
		}
		, isNumeric:function(e) {
			return!isNaN(parseFloat(e))&&isFinite(e)
		}
		, type:function(e) {
			return null==e?e+"": "object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
		}
		, isPlainObject:function(e) {
			var n;
			if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;
			try {
				if(e.constructor&&!v.call(e, "constructor")&&!v.call(e.constructor.prototype, "isPrototypeOf"))return!1
			}
			catch(r) {
				return!1
			}
			if(x.support.ownLast)for(n in e)return v.call(e, n);
			for(n in e);
			return n===t||v.call(e, n)
		}
		, isEmptyObject:function(e) {
			var t;
			for(t in e)return!1;
			return!0
		}
		, error:function(e) {
			throw Error(e)
		}
		, parseHTML:function(e, t, n) {
			if(!e||"string"!=typeof e)return null;
			"boolean"==typeof t&&(n=t, t=!1), t=t||a;
			var r=k.exec(e), i=!n&&[];
			return r?[t.createElement(r[1])]: (r=x.buildFragment([e], t, i), i&&x(i).remove(), x.merge([], r.childNodes))
		}
		, parseJSON:function(n) {
			return e.JSON&&e.JSON.parse?e.JSON.parse(n): null===n?n:"string"==typeof n&&(n=x.trim(n), n&&E.test(n.replace(A, "@").replace(j, "]").replace(S, "")))?Function("return "+n)():(x.error("Invalid JSON: "+n), t)
		}
		, parseXML:function(n) {
			var r, i;
			if(!n||"string"!=typeof n)return null;
			try {
				e.DOMParser?(i=new DOMParser, r=i.parseFromString(n, "text/xml")): (r=new ActiveXObject("Microsoft.XMLDOM"), r.async="false", r.loadXML(n))
			}
			catch(o) {
				r=t
			}
			return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n), r
		}
		, noop:function() {}
		, globalEval:function(t) {
			t&&x.trim(t)&&(e.execScript||function(t) {
				e.eval.call(e, t)
			}
			)(t)
		}
		, camelCase:function(e) {
			return e.replace(D, "ms-").replace(L, H)
		}
		, nodeName:function(e, t) {
			return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
		}
		, each:function(e, t, n) {
			var r, i=0, o=e.length, a=M(e);
			if(n) {
				if(a) {
					for(;
					o>i;
					i++)if(r=t.apply(e[i], n), r===!1)break
				}
				else for(i in e)if(r=t.apply(e[i], n), r===!1)break
			}
			else if(a) {
				for(;
				o>i;
				i++)if(r=t.call(e[i], i, e[i]), r===!1)break
			}
			else for(i in e)if(r=t.call(e[i], i, e[i]), r===!1)break;
			return e
		}
		, trim:b&&!b.call("﻿ ")?function(e) {
			return null==e?"": b.call(e)
		}
		:function(e) {
			return null==e?"": (e+"").replace(C, "")
		}
		, makeArray:function(e, t) {
			var n=t||[];
			return null!=e&&(M(Object(e))?x.merge(n, "string"==typeof e?[e]: e):h.call(n, e)), n
		}
		, inArray:function(e, t, n) {
			var r;
			if(t) {
				if(m)return m.call(t, e, n);
				for(r=t.length, n=n?0>n?Math.max(0, r+n): n:0;
				r>n;
				n++)if(n in t&&t[n]===e)return n
			}
			return-1
		}
		, merge:function(e, n) {
			var r=n.length, i=e.length, o=0;
			if("number"==typeof r)for(;
			r>o;
			o++)e[i++]=n[o];
			else while(n[o]!==t)e[i++]=n[o++];
			return e.length=i, e
		}
		, grep:function(e, t, n) {
			var r, i=[], o=0, a=e.length;
			for(n=!!n;
			a>o;
			o++)r=!!t(e[o], o), n!==r&&i.push(e[o]);
			return i
		}
		, map:function(e, t, n) {
			var r, i=0, o=e.length, a=M(e), s=[];
			if(a)for(;
			o>i;
			i++)r=t(e[i], i, n), null!=r&&(s[s.length]=r);
			else for(i in e)r=t(e[i], i, n), null!=r&&(s[s.length]=r);
			return d.apply([], s)
		}
		, guid:1, proxy:function(e, n) {
			var r, i, o;
			return"string"==typeof n&&(o=e[n], n=e, e=o), x.isFunction(e)?(r=g.call(arguments, 2), i=function() {
				return e.apply(n||this, r.concat(g.call(arguments)))
			}
			, i.guid=e.guid=e.guid||x.guid++, i):t
		}
		, access:function(e, n, r, i, o, a, s) {
			var l=0, u=e.length, c=null==r;
			if("object"===x.type(r)) {
				o=!0;
				for(l in r)x.access(e, n, l, r[l], !0, a, s)
			}
			else if(i!==t&&(o=!0, x.isFunction(i)||(s=!0), c&&(s?(n.call(e, i), n=null):(c=n, n=function(e, t, n) {
				return c.call(x(e), n)
			}
			)), n))for(;
			u>l;
			l++)n(e[l], r, s?i:i.call(e[l], l, n(e[l], r)));
			return o?e:c?n.call(e):u?n(e[0], r):a
		}
		, now:function() {
			return(new Date).getTime()
		}
		, swap:function(e, t, n, r) {
			var i, o, a= {}
			;
			for(o in t)a[o]=e.style[o], e.style[o]=t[o];
			i=n.apply(e, r||[]);
			for(o in t)e.style[o]=a[o];
			return i
		}
	}
	), x.ready.promise=function(t) {
		if(!n)if(n=x.Deferred(), "complete"===a.readyState)setTimeout(x.ready);
		else if(a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
		else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			var r=!1;
			try {
				r=null==e.frameElement&&a.documentElement
			}
			catch(i) {}
			r&&r.doScroll&&function o() {
				if(!x.isReady) {
					try {
						r.doScroll("left")
					}
					catch(e) {
						return setTimeout(o, 50)
					}
					_(), x.ready()
				}
			}
			()
		}
		return n.promise(t)
	}
	, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		c["[object "+t+"]"]=t.toLowerCase()
	}
	);
	function M(e) {
		var t=e.length, n=x.type(e);
		return x.isWindow(e)?!1: 1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
	}
	r=x(a), function(e, t) {
		var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b="sizzle"+-new Date, w=e.document, T=0, C=0, N=st(), k=st(), E=st(), S=!1, A=function(e, t) {
			return e===t?(S=!0, 0): 0
		}
		, j=typeof t, D=1<<31, L= {}
		.hasOwnProperty, H=[], q=H.pop, _=H.push, M=H.push, O=H.slice, F=H.indexOf||function(e) {
			var t=0, n=this.length;
			for(;
			n>t;
			t++)if(this[t]===e)return t;
			return-1
		}
		, B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P="[\\x20\\t\\r\\n\\f]", R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W=R.replace("w", "w#"), $="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]", I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3, 8)+")*)|.*)\\)|)", z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$", "g"), X=RegExp("^"+P+"*,"+P+"*"), U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"), V=RegExp(P+"*[+~]"), Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]", "g"), J=RegExp(I), G=RegExp("^"+W+"$"), Q= {
			ID: RegExp("^#("+R+")"), CLASS:RegExp("^\\.("+R+")"), TAG:RegExp("^("+R.replace("w", "w*")+")"), ATTR:RegExp("^"+$), PSEUDO:RegExp("^"+I), CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)", "i"), bool:RegExp("^(?:"+B+")$", "i"), needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)", "i")
		}
		, K=/^[^ {			]+\ {
				\s*\[native \w/, Z=/^(?: #([\w-]+)|(\w+)|\.([\w-]+))$/, et=/^(?:input|select|textarea|button)$/i, tt=/^h\d$/i, nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t}({});
 var B=/(?:\ {
					[\s\S]*\
				}
				|\[[\s\S]*\])$/, P=/([A-Z])/g;
				function R(e, n, r, i) {
					if(x.acceptData(e)) {
						var o, a, s=x.expando, l=e.nodeType, u=l?x.cache: e, c=l?e[s]:e[s]&&s;
						if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++: s), u[c]||(u[c]=l? {}
						: {
							toJSON:x.noop
						}
						), ("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c], n):u[c].data=x.extend(u[c].data, n)), a=u[c], i||(a.data||(a.data= {}
						), a=a.data), r!==t&&(a[x.camelCase(n)]=r), "string"==typeof n?(o=a[n], null==o&&(o=a[x.camelCase(n)])):o=a, o
					}
				}
				function W(e, t, n) {
					if(x.acceptData(e)) {
						var r, i, o=e.nodeType, a=o?x.cache: e, s=o?e[x.expando]:x.expando;
						if(a[s]) {
							if(t&&(r=n?a[s]: a[s].data)) {
								x.isArray(t)?t=t.concat(x.map(t, x.camelCase)):t in r?t=[t]:(t=x.camelCase(t), t=t in r?[t]:t.split(" ")), i=t.length;
								while(i--)delete r[t[i]];
								if(n?!I(r): !x.isEmptyObject(r))return
							}
							(n||(delete a[s].data, I(a[s])))&&(o?x.cleanData([e], !0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
						}
					}
				}
				x.extend( {
					cache: {}
					, noData: {
						applet: !0, embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
					}
					, hasData:function(e) {
						return e=e.nodeType?x.cache[e[x.expando]]: e[x.expando], !!e&&!I(e)
					}
					, data:function(e, t, n) {
						return R(e, t, n)
					}
					, removeData:function(e, t) {
						return W(e, t)
					}
					, _data:function(e, t, n) {
						return R(e, t, n, !0)
					}
					, _removeData:function(e, t) {
						return W(e, t, !0)
					}
					, acceptData:function(e) {
						if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;
						var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
						return!t||t!==!0&&e.getAttribute("classid")===t
					}
				}
				), x.fn.extend( {
					data:function(e, n) {
						var r, i, o=null, a=0, s=this[0];
						if(e===t) {
							if(this.length&&(o=x.data(s), 1===s.nodeType&&!x._data(s, "parsedAttrs"))) {
								for(r=s.attributes;
								r.length>a;
								a++)i=r[a].name, 0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)), $(s, i, o[i]));
								x._data(s, "parsedAttrs", !0)
							}
							return o
						}
						return"object"==typeof e?this.each(function() {
							x.data(this, e)
						}
						):arguments.length>1?this.each(function() {
							x.data(this, e, n)
						}
						):s?$(s, e, x.data(s, e)):null
					}
					, removeData:function(e) {
						return this.each(function() {
							x.removeData(this, e)
						}
						)
					}
				}
				);
				function $(e, n, r) {
					if(r===t&&1===e.nodeType) {
						var i="data-"+n.replace(P, "-$1").toLowerCase();
						if(r=e.getAttribute(i), "string"==typeof r) {
							try {
								r="true"===r?!0: "false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
							}
							catch(o) {}
							x.data(e, n, r)
						}
						else r=t
					}
					return r
				}
				function I(e) {
					var t;
					for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;
					return!0
				}
				x.extend( {
					queue:function(e, n, r) {
						var i;
						return e?(n=(n||"fx")+"queue", i=x._data(e, n), r&&(!i||x.isArray(r)?i=x._data(e, n, x.makeArray(r)): i.push(r)), i||[]):t
					}
					, dequeue:function(e, t) {
						t=t||"fx";
						var n=x.queue(e, t), r=n.length, i=n.shift(), o=x._queueHooks(e, t), a=function() {
							x.dequeue(e, t)
						}
						;
						"inprogress"===i&&(i=n.shift(), r--), i&&("fx"===t&&n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r&&o&&o.empty.fire()
					}
					, _queueHooks:function(e, t) {
						var n=t+"queueHooks";
						return x._data(e, n)||x._data(e, n, {
							empty:x.Callbacks("once memory").add(function() {
								x._removeData(e, t+"queue"), x._removeData(e, n)
							}
							)
						}
						)
					}
				}
				), x.fn.extend( {
					queue:function(e, n) {
						var r=2;
						return"string"!=typeof e&&(n=e, e="fx", r--), r>arguments.length?x.queue(this[0], e):n===t?this:this.each(function() {
							var t=x.queue(this, e, n);
							x._queueHooks(this, e), "fx"===e&&"inprogress"!==t[0]&&x.dequeue(this, e)
						}
						)
					}
					, dequeue:function(e) {
						return this.each(function() {
							x.dequeue(this, e)
						}
						)
					}
					, delay:function(e, t) {
						return e=x.fx?x.fx.speeds[e]||e:e, t=t||"fx", this.queue(t, function(t, n) {
							var r=setTimeout(t, e);
							n.stop=function() {
								clearTimeout(r)
							}
						}
						)
					}
					, clearQueue:function(e) {
						return this.queue(e||"fx", [])
					}
					, promise:function(e, n) {
						var r, i=1, o=x.Deferred(), a=this, s=this.length, l=function() {
							--i||o.resolveWith(a, [a])
						}
						;
						"string"!=typeof e&&(n=e, e=t), e=e||"fx";
						while(s--)r=x._data(a[s], e+"queueHooks"), r&&r.empty&&(i++, r.empty.add(l));
						return l(), o.promise(n)
					}
				}
				);
				var z, X, U=/[\t\r\n\f]/g, V=/\r/g, Y=/^(?:input|select|textarea|button|object)$/i, J=/^(?:a|area)$/i, G=/^(?:checked|selected)$/i, Q=x.support.getSetAttribute, K=x.support.input;
				x.fn.extend( {
					attr:function(e, t) {
						return x.access(this, x.attr, e, t, arguments.length>1)
					}
					, removeAttr:function(e) {
						return this.each(function() {
							x.removeAttr(this, e)
						}
						)
					}
					, prop:function(e, t) {
						return x.access(this, x.prop, e, t, arguments.length>1)
					}
					, removeProp:function(e) {
						return e=x.propFix[e]||e, this.each(function() {
							try {
								this[e]=t, delete this[e]
							}
							catch(n) {}
						}
						)
					}
					, addClass:function(e) {
						var t, n, r, i, o, a=0, s=this.length, l="string"==typeof e&&e;
						if(x.isFunction(e))return this.each(function(t) {
							x(this).addClass(e.call(this, t, this.className))
						}
						);
						if(l)for(t=(e||"").match(T)||[];
						s>a;
						a++)if(n=this[a], r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U, " "):" ")) {
							o=0;
							while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");
							n.className=x.trim(r)
						}
						return this
					}
					, removeClass:function(e) {
						var t, n, r, i, o, a=0, s=this.length, l=0===arguments.length||"string"==typeof e&&e;
						if(x.isFunction(e))return this.each(function(t) {
							x(this).removeClass(e.call(this, t, this.className))
						}
						);
						if(l)for(t=(e||"").match(T)||[];
						s>a;
						a++)if(n=this[a], r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U, " "):"")) {
							o=0;
							while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" ", " ");
							n.className=e?x.trim(r): ""
						}
						return this
					}
					, toggleClass:function(e, t) {
						var n=typeof e;
						return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n) {
							x(this).toggleClass(e.call(this, n, this.className, t), t)
						}
						):this.each(function() {
							if("string"===n) {
								var t, r=0, o=x(this), a=e.match(T)||[];
								while(t=a[r++])o.hasClass(t)?o.removeClass(t): o.addClass(t)
							}
							else(n===i||"boolean"===n)&&(this.className&&x._data(this, "__className__", this.className), this.className=this.className||e===!1?"":x._data(this, "__className__")||"")
						}
						)
					}
					, hasClass:function(e) {
						var t=" "+e+" ", n=0, r=this.length;
						for(;
						r>n;
						n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U, " ").indexOf(t)>=0)return!0;
						return!1
					}
					, val:function(e) {
						var n, r, i, o=this[0];
						{
							if(arguments.length)return i=x.isFunction(e), this.each(function(n) {
								var o;
								1===this.nodeType&&(o=i?e.call(this, n, x(this).val()):e, null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o, function(e) {
									return null==e?"": e+""
								}
								)), r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()], r&&"set"in r&&r.set(this, o, "value")!==t||(this.value=o))
							}
							);
							if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()], r&&"get"in r&&(n=r.get(o, "value"))!==t?n:(n=o.value, "string"==typeof n?n.replace(V, ""):null==n?"":n)
						}
					}
				}
				), x.extend( {
					valHooks: {
						option: {
							get:function(e) {
								var t=x.find.attr(e, "value");
								return null!=t?t: e.text
							}
						}
						, select: {
							get:function(e) {
								var t, n, r=e.options, i=e.selectedIndex, o="select-one"===e.type||0>i, a=o?null: [], s=o?i+1:r.length, l=0>i?s:o?i:0;
								for(;
								s>l;
								l++)if(n=r[l], !(!n.selected&&l!==i||(x.support.optDisabled?n.disabled: null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode, "optgroup"))) {
									if(t=x(n).val(), o)return t;
									a.push(t)
								}
								return a
							}
							, set:function(e, t) {
								var n, r, i=e.options, o=x.makeArray(t), a=i.length;
								while(a--)r=i[a], (r.selected=x.inArray(x(r).val(), o)>=0)&&(n=!0);
								return n||(e.selectedIndex=-1), o
							}
						}
					}
					, attr:function(e, n, r) {
						var o, a, s=e.nodeType;
						if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e, n, r): (1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(), o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)), r===t?o&&"get"in o&&null!==(a=o.get(e, n))?a:(a=x.find.attr(e, n), null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e, r, n))!==t?a:(e.setAttribute(n, r+""), r):(x.removeAttr(e, n), t))
					}
					, removeAttr:function(e, t) {
						var n, r, i=0, o=t&&t.match(T);
						if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n, x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1: e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e, n, ""), e.removeAttribute(Q?n:r)
					}
					, attrHooks: {
						type: {
							set:function(e, t) {
								if(!x.support.radioValue&&"radio"===t&&x.nodeName(e, "input")) {
									var n=e.value;
									return e.setAttribute("type", t), n&&(e.value=n), t
								}
							}
						}
					}
					, propFix: {
						"for": "htmlFor", "class":"className"
					}
					, prop:function(e, n, r) {
						var i, o, a, s=e.nodeType;
						if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e), a&&(n=x.propFix[n]||n, o=x.propHooks[n]), r!==t?o&&"set"in o&&(i=o.set(e, r, n))!==t?i: e[n]=r:o&&"get"in o&&null!==(i=o.get(e, n))?i:e[n]
					}
					, propHooks: {
						tabIndex: {
							get:function(e) {
								var t=x.find.attr(e, "tabindex");
								return t?parseInt(t, 10): Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
							}
						}
					}
				}
				), X= {
					set:function(e, t, n) {
						return t===!1?x.removeAttr(e, n): K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n, n):e[x.camelCase("default-"+n)]=e[n]=!0, n
					}
				}
				, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
					var r=x.expr.attrHandle[n]||x.find.attr;
					x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e, n, i) {
						var o=x.expr.attrHandle[n], a=i?t: (x.expr.attrHandle[n]=t)!=r(e, n, i)?n.toLowerCase():null;
						return x.expr.attrHandle[n]=o, a
					}
					:function(e, n, r) {
						return r?t: e[x.camelCase("default-"+n)]?n.toLowerCase():null
					}
				}
				), K&&Q||(x.attrHooks.value= {
					set:function(e, n, r) {
						return x.nodeName(e, "input")?(e.defaultValue=n, t): z&&z.set(e, n, r)
					}
				}
				), Q||(z= {
					set:function(e, n, r) {
						var i=e.getAttributeNode(r);
						return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)), i.value=n+="", "value"===r||n===e.getAttribute(r)?n: t
					}
				}
				, x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e, n, r) {
					var i;
					return r?t: (i=e.getAttributeNode(n))&&""!==i.value?i.value:null
				}
				, x.valHooks.button= {
					get:function(e, n) {
						var r=e.getAttributeNode(n);
						return r&&r.specified?r.value: t
					}
					, set:z.set
				}
				, x.attrHooks.contenteditable= {
					set:function(e, t, n) {
						z.set(e, ""===t?!1: t, n)
					}
				}
				, x.each(["width", "height"], function(e, n) {
					x.attrHooks[n]= {
						set:function(e, r) {
							return""===r?(e.setAttribute(n, "auto"), r): t
						}
					}
				}
				)), x.support.hrefNormalized||x.each(["href", "src"], function(e, t) {
					x.propHooks[t]= {
						get:function(e) {
							return e.getAttribute(t, 4)
						}
					}
				}
				), x.support.style||(x.attrHooks.style= {
					get:function(e) {
						return e.style.cssText||t
					}
					, set:function(e, t) {
						return e.style.cssText=t+""
					}
				}
				), x.support.optSelected||(x.propHooks.selected= {
					get:function(e) {
						var t=e.parentNode;
						return t&&(t.selectedIndex, t.parentNode&&t.parentNode.selectedIndex), null
					}
				}
				), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
					x.propFix[this.toLowerCase()]=this
				}
				), x.support.enctype||(x.propFix.enctype="encoding"), x.each(["radio", "checkbox"], function() {
					x.valHooks[this]= {
						set:function(e, n) {
							return x.isArray(n)?e.checked=x.inArray(x(e).val(), n)>=0: t
						}
					}
					, x.support.checkOn||(x.valHooks[this].get=function(e) {
						return null===e.getAttribute("value")?"on": e.value
					}
					)
				}
				);
				var Z=/^(?:input|select|textarea)$/i, et=/^key/, tt=/^(?:mouse|contextmenu)|click/, nt=/^(?:focusinfocus|focusoutblur)$/, rt=/^([^.]*)(?:\.(.+)|)$/;
				function it() {
					return!0
				}
				function ot() {
					return!1
				}
				function at() {
					try {
						return a.activeElement
					}
					catch(e) {}
				}
				x.event= {
					global: {}
					, add:function(e, n, r, o, a) {
						var s, l, u, c, p, f, d, h, g, m, y, v=x._data(e);
						if(v) {
							r.handler&&(c=r, r=c.handler, a=c.selector), r.guid||(r.guid=x.guid++), (l=v.events)||(l=v.events= {}
							), (f=v.handle)||(f=v.handle=function(e) {
								return typeof x===i||e&&x.event.triggered===e.type?t: x.event.dispatch.apply(f.elem, arguments)
							}
							, f.elem=e), n=(n||"").match(T)||[""], u=n.length;
							while(u--)s=rt.exec(n[u])||[], g=y=s[1], m=(s[2]||"").split(".").sort(), g&&(p=x.event.special[g]|| {}
							, g=(a?p.delegateType:p.bindType)||g, p=x.event.special[g]|| {}
							, d=x.extend( {
								type: g, origType:y, data:o, handler:r, guid:r.guid, selector:a, needsContext:a&&x.expr.match.needsContext.test(a), namespace:m.join(".")
							}
							, c), (h=l[g])||(h=l[g]=[], h.delegateCount=0, p.setup&&p.setup.call(e, o, m, f)!==!1||(e.addEventListener?e.addEventListener(g, f, !1):e.attachEvent&&e.attachEvent("on"+g, f))), p.add&&(p.add.call(e, d), d.handler.guid||(d.handler.guid=r.guid)), a?h.splice(h.delegateCount++, 0, d):h.push(d), x.event.global[g]=!0);
							e=null
						}
					}
					, remove:function(e, t, n, r, i) {
						var o, a, s, l, u, c, p, f, d, h, g, m=x.hasData(e)&&x._data(e);
						if(m&&(c=m.events)) {
							t=(t||"").match(T)||[""], u=t.length;
							while(u--)if(s=rt.exec(t[u])||[], d=g=s[1], h=(s[2]||"").split(".").sort(), d) {
								p=x.event.special[d]|| {}
								, d=(r?p.delegateType: p.bindType)||d, f=c[d]||[], s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"), l=o=f.length;
								while(o--)a=f[o], !i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o, 1), a.selector&&f.delegateCount--, p.remove&&p.remove.call(e, a));
								l&&!f.length&&(p.teardown&&p.teardown.call(e, h, m.handle)!==!1||x.removeEvent(e, d, m.handle), delete c[d])
							}
							else for(d in c)x.event.remove(e, d+t[u], n, r, !0);
							x.isEmptyObject(c)&&(delete m.handle, x._removeData(e, "events"))
						}
					}
					, trigger:function(n, r, i, o) {
						var s, l, u, c, p, f, d, h=[i||a], g=v.call(n, "type")?n.type: n, m=v.call(n, "namespace")?n.namespace.split("."):[];
						if(u=f=i=i||a, 3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."), g=m.shift(), m.sort()), l=0>g.indexOf(":")&&"on"+g, n=n[x.expando]?n:new x.Event(g, "object"==typeof n&&n), n.isTrigger=o?2:3, n.namespace=m.join("."), n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null, n.result=t, n.target||(n.target=i), r=null==r?[n]:x.makeArray(r, [n]), p=x.event.special[g]|| {}
						, o||!p.trigger||p.trigger.apply(i, r)!==!1)) {
							if(!o&&!p.noBubble&&!x.isWindow(i)) {
								for(c=p.delegateType||g, nt.test(c+g)||(u=u.parentNode);
								u;
								u=u.parentNode)h.push(u), f=u;
								f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
							}
							d=0;
							while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g, s=(x._data(u, "events")|| {}
							)[n.type]&&x._data(u, "handle"), s&&s.apply(u, r), s=l&&u[l], s&&x.acceptData(u)&&s.apply&&s.apply(u, r)===!1&&n.preventDefault();
							if(n.type=g, !o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(), r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)) {
								f=i[l], f&&(i[l]=null), x.event.triggered=g;
								try {
									i[g]()
								}
								catch(y) {}
								x.event.triggered=t, f&&(i[l]=f)
							}
							return n.result
						}
					}
					, dispatch:function(e) {
						e=x.event.fix(e);
						var n, r, i, o, a, s=[], l=g.call(arguments), u=(x._data(this, "events")|| {}
						)[e.type]||[], c=x.event.special[e.type]|| {}
						;
						if(l[0]=e, e.delegateTarget=this, !c.preDispatch||c.preDispatch.call(this, e)!==!1) {
							s=x.event.handlers.call(this, e, u), n=0;
							while((o=s[n++])&&!e.isPropagationStopped()) {
								e.currentTarget=o.elem, a=0;
								while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i, e.data=i.data, r=((x.event.special[i.origType]|| {}
								).handle||i.handler).apply(o.elem, l), r!==t&&(e.result=r)===!1&&(e.preventDefault(), e.stopPropagation()))
							}
							return c.postDispatch&&c.postDispatch.call(this, e), e.result
						}
					}
					, handlers:function(e, n) {
						var r, i, o, a, s=[], l=n.delegateCount, u=e.target;
						if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;
						u!=this;
						u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)) {
							for(o=[], a=0;
							l>a;
							a++)i=n[a], r=i.selector+" ", o[r]===t&&(o[r]=i.needsContext?x(r, this).index(u)>=0: x.find(r, this, null, [u]).length), o[r]&&o.push(i);
							o.length&&s.push( {
								elem: u, handlers:o
							}
							)
						}
						return n.length>l&&s.push( {
							elem: this, handlers:n.slice(l)
						}
						), s
					}
					, fix:function(e) {
						if(e[x.expando])return e;
						var t, n, r, i=e.type, o=e, s=this.fixHooks[i];
						s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks: {}
						), r=s.props?this.props.concat(s.props): this.props, e=new x.Event(o), t=r.length;
						while(t--)n=r[t], e[n]=o[n];
						return e.target||(e.target=o.srcElement||a), 3===e.target.nodeType&&(e.target=e.target.parentNode), e.metaKey=!!e.metaKey, s.filter?s.filter(e, o): e
					}
					, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}
					, keyHooks: {
						props:"char charCode key keyCode".split(" "), filter:function(e, t) {
							return null==e.which&&(e.which=null!=t.charCode?t.charCode: t.keyCode), e
						}
					}
					, mouseHooks: {
						props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function(e, n) {
							var r, i, o, s=n.button, l=n.fromElement;
							return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a, o=i.documentElement, r=i.body, e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0), e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)), !e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement: l), e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0), e
						}
					}
					, special: {
						load: {
							noBubble: !0
						}
						, focus: {
							trigger:function() {
								if(this!==at()&&this.focus)try {
									return this.focus(), !1
								}
								catch(e) {}
							}
							, delegateType:"focusin"
						}
						, blur: {
							trigger:function() {
								return this===at()&&this.blur?(this.blur(), !1): t
							}
							, delegateType:"focusout"
						}
						, click: {
							trigger:function() {
								return x.nodeName(this, "input")&&"checkbox"===this.type&&this.click?(this.click(), !1): t
							}
							, _default:function(e) {
								return x.nodeName(e.target, "a")
							}
						}
						, beforeunload: {
							postDispatch:function(e) {
								e.result!==t&&(e.originalEvent.returnValue=e.result)
							}
						}
					}
					, simulate:function(e, t, n, r) {
						var i=x.extend(new x.Event, n, {
							type:e, isSimulated:!0, originalEvent: {}
						}
						);
						r?x.event.trigger(i, null, t):x.event.dispatch.call(t, i), i.isDefaultPrevented()&&n.preventDefault()
					}
				}
				, x.removeEvent=a.removeEventListener?function(e, t, n) {
					e.removeEventListener&&e.removeEventListener(t, n, !1)
				}
				:function(e, t, n) {
					var r="on"+t;
					e.detachEvent&&(typeof e[r]===i&&(e[r]=null), e.detachEvent(r, n))
				}
				, x.Event=function(e, n) {
					return this instanceof x.Event?(e&&e.type?(this.originalEvent=e, this.type=e.type, this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it: ot):this.type=e, n&&x.extend(this, n), this.timeStamp=e&&e.timeStamp||x.now(), this[x.expando]=!0, t):new x.Event(e, n)
				}
				, x.Event.prototype= {
					isDefaultPrevented:ot, isPropagationStopped:ot, isImmediatePropagationStopped:ot, preventDefault:function() {
						var e=this.originalEvent;
						this.isDefaultPrevented=it, e&&(e.preventDefault?e.preventDefault(): e.returnValue=!1)
					}
					, stopPropagation:function() {
						var e=this.originalEvent;
						this.isPropagationStopped=it, e&&(e.stopPropagation&&e.stopPropagation(), e.cancelBubble=!0)
					}
					, stopImmediatePropagation:function() {
						this.isImmediatePropagationStopped=it, this.stopPropagation()
					}
				}
				, x.each( {
					mouseenter: "mouseover", mouseleave:"mouseout"
				}
				, function(e, t) {
					x.event.special[e]= {
						delegateType:t, bindType:t, handle:function(e) {
							var n, r=this, i=e.relatedTarget, o=e.handleObj;
							return(!i||i!==r&&!x.contains(r, i))&&(e.type=o.origType, n=o.handler.apply(this, arguments), e.type=t), n
						}
					}
				}
				), x.support.submitBubbles||(x.event.special.submit= {
					setup:function() {
						return x.nodeName(this, "form")?!1:(x.event.add(this, "click._submit keypress._submit", function(e) {
							var n=e.target, r=x.nodeName(n, "input")||x.nodeName(n, "button")?n.form: t;
							r&&!x._data(r, "submitBubbles")&&(x.event.add(r, "submit._submit", function(e) {
								e._submit_bubble=!0
							}
							), x._data(r, "submitBubbles", !0))
						}
						), t)
					}
					, postDispatch:function(e) {
						e._submit_bubble&&(delete e._submit_bubble, this.parentNode&&!e.isTrigger&&x.event.simulate("submit", this.parentNode, e, !0))
					}
					, teardown:function() {
						return x.nodeName(this, "form")?!1: (x.event.remove(this, "._submit"), t)
					}
				}
				), x.support.changeBubbles||(x.event.special.change= {
					setup:function() {
						return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this, "propertychange._change", function(e) {
							"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
						}
						), x.event.add(this, "click._change", function(e) {
							this._just_changed&&!e.isTrigger&&(this._just_changed=!1), x.event.simulate("change", this, e, !0)
						}
						)), !1):(x.event.add(this, "beforeactivate._change", function(e) {
							var t=e.target;
							Z.test(t.nodeName)&&!x._data(t, "changeBubbles")&&(x.event.add(t, "change._change", function(e) {
								!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change", this.parentNode, e, !0)
							}
							), x._data(t, "changeBubbles", !0))
						}
						), t)
					}
					, handle:function(e) {
						var n=e.target;
						return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this, arguments): t
					}
					, teardown:function() {
						return x.event.remove(this, "._change"), !Z.test(this.nodeName)
					}
				}
				), x.support.focusinBubbles||x.each( {
					focus: "focusin", blur:"focusout"
				}
				, function(e, t) {
					var n=0, r=function(e) {
						x.event.simulate(t, e.target, x.event.fix(e), !0)
					}
					;
					x.event.special[t]= {
						setup:function() {
							0===n++&&a.addEventListener(e, r, !0)
						}
						, teardown:function() {
							0===--n&&a.removeEventListener(e, r, !0)
						}
					}
				}
				), x.fn.extend( {
					on:function(e, n, r, i, o) {
						var a, s;
						if("object"==typeof e) {
							"string"!=typeof n&&(r=r||n, n=t);
							for(a in e)this.on(a, n, r, e[a], o);
							return this
						}
						if(null==r&&null==i?(i=n, r=n=t):null==i&&("string"==typeof n?(i=r, r=t):(i=r, r=n, n=t)), i===!1)i=ot;
						else if(!i)return this;
						return 1===o&&(s=i, i=function(e) {
							return x().off(e), s.apply(this, arguments)
						}
						, i.guid=s.guid||(s.guid=x.guid++)), this.each(function() {
							x.event.add(this, e, i, r, n)
						}
						)
					}
					, one:function(e, t, n, r) {
						return this.on(e, t, n, r, 1)
					}
					, off:function(e, n, r) {
						var i, o;
						if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj, x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace: i.origType, i.selector, i.handler), this;
						if("object"==typeof e) {
							for(o in e)this.off(o, n, e[o]);
							return this
						}
						return(n===!1||"function"==typeof n)&&(r=n, n=t), r===!1&&(r=ot), this.each(function() {
							x.event.remove(this, e, r, n)
						}
						)
					}
					, trigger:function(e, t) {
						return this.each(function() {
							x.event.trigger(e, t, this)
						}
						)
					}
					, triggerHandler:function(e, n) {
						var r=this[0];
						return r?x.event.trigger(e, n, r, !0): t
					}
				}
				);
				var st=/^.[^:#\[\., ]*$/, lt=/^(?:parents|prev(?:Until|All))/, ut=x.expr.match.needsContext, ct= {
					children: !0, contents:!0, next:!0, prev:!0
				}
				;
				x.fn.extend( {
					find:function(e) {
						var t, n=[], r=this, i=r.length;
						if("string"!=typeof e)return this.pushStack(x(e).filter(function() {
							for(t=0;
							i>t;
							t++)if(x.contains(r[t], this))return!0
						}
						));
						for(t=0;
						i>t;
						t++)x.find(e, r[t], n);
						return n=this.pushStack(i>1?x.unique(n):n), n.selector=this.selector?this.selector+" "+e:e, n
					}
					, has:function(e) {
						var t, n=x(e, this), r=n.length;
						return this.filter(function() {
							for(t=0;
							r>t;
							t++)if(x.contains(this, n[t]))return!0
						}
						)
					}
					, not:function(e) {
						return this.pushStack(ft(this, e||[], !0))
					}
					, filter:function(e) {
						return this.pushStack(ft(this, e||[], !1))
					}
					, is:function(e) {
						return!!ft(this, "string"==typeof e&&ut.test(e)?x(e): e||[], !1).length
					}
					, closest:function(e, t) {
						var n, r=0, i=this.length, o=[], a=ut.test(e)||"string"!=typeof e?x(e, t||this.context): 0;
						for(;
						i>r;
						r++)for(n=this[r];
						n&&n!==t;
						n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1: 1===n.nodeType&&x.find.matchesSelector(n, e))) {
							n=o.push(n);
							break
						}
						return this.pushStack(o.length>1?x.unique(o):o)
					}
					, index:function(e) {
						return e?"string"==typeof e?x.inArray(this[0], x(e)): x.inArray(e.jquery?e[0]:e, this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
					}
					, add:function(e, t) {
						var n="string"==typeof e?x(e, t): x.makeArray(e&&e.nodeType?[e]:e), r=x.merge(this.get(), n);
						return this.pushStack(x.unique(r))
					}
					, addBack:function(e) {
						return this.add(null==e?this.prevObject: this.prevObject.filter(e))
					}
				}
				);
				function pt(e, t) {
					do e=e[t];
					while(e&&1!==e.nodeType);
					return e
				}
				x.each( {
					parent:function(e) {
						var t=e.parentNode;
						return t&&11!==t.nodeType?t: null
					}
					, parents:function(e) {
						return x.dir(e, "parentNode")
					}
					, parentsUntil:function(e, t, n) {
						return x.dir(e, "parentNode", n)
					}
					, next:function(e) {
						return pt(e, "nextSibling")
					}
					, prev:function(e) {
						return pt(e, "previousSibling")
					}
					, nextAll:function(e) {
						return x.dir(e, "nextSibling")
					}
					, prevAll:function(e) {
						return x.dir(e, "previousSibling")
					}
					, nextUntil:function(e, t, n) {
						return x.dir(e, "nextSibling", n)
					}
					, prevUntil:function(e, t, n) {
						return x.dir(e, "previousSibling", n)
					}
					, siblings:function(e) {
						return x.sibling((e.parentNode|| {}
						).firstChild, e)
					}
					, children:function(e) {
						return x.sibling(e.firstChild)
					}
					, contents:function(e) {
						return x.nodeName(e, "iframe")?e.contentDocument||e.contentWindow.document: x.merge([], e.childNodes)
					}
				}
				, function(e, t) {
					x.fn[e]=function(n, r) {
						var i=x.map(this, t, n);
						return"Until"!==e.slice(-5)&&(r=n), r&&"string"==typeof r&&(i=x.filter(r, i)), this.length>1&&(ct[e]||(i=x.unique(i)), lt.test(e)&&(i=i.reverse())), this.pushStack(i)
					}
				}
				), x.extend( {
					filter:function(e, t, n) {
						var r=t[0];
						return n&&(e=":not("+e+")"), 1===t.length&&1===r.nodeType?x.find.matchesSelector(r, e)?[r]:[]:x.find.matches(e, x.grep(t, function(e) {
							return 1===e.nodeType
						}
						))
					}
					, dir:function(e, n, r) {
						var i=[], o=e[n];
						while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o), o=o[n];
						return i
					}
					, sibling:function(e, t) {
						var n=[];
						for(;
						e;
						e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);
						return n
					}
				}
				);
				function ft(e, t, n) {
					if(x.isFunction(t))return x.grep(e, function(e, r) {
						return!!t.call(e, r, e)!==n
					}
					);
					if(t.nodeType)return x.grep(e, function(e) {
						return e===t!==n
					}
					);
					if("string"==typeof t) {
						if(st.test(t))return x.filter(t, e, n);
						t=x.filter(t, e)
					}
					return x.grep(e, function(e) {
						return x.inArray(e, t)>=0!==n
					}
					)
				}
				function dt(e) {
					var t=ht.split("|"), n=e.createDocumentFragment();
					if(n.createElement)while(t.length)n.createElement(t.pop());
					return n
				}
				var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt=/ jQuery\d+="(?:null|\d+)"/g, mt=RegExp("<(?:"+ht+")[\\s/>]", "i"), yt=/^\s+/, vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt=/<([\w:]+)/, xt=/<tbody/i, wt=/<|&#?\w+;
				/, Tt=/<(?:script|style|link)/i, Ct=/^(?:checkbox|radio)$/i, Nt=/checked\s*(?:[^=]|=\s*.checked.)/i, kt=/^$|\/(?:java|ecma)script/i, Et=/^true\/(.*)/, St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At= {
					option: [1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], area:[1, "<map>", "</map>"], param:[1, "<object>", "</object>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:x.support.htmlSerialize?[0, "", ""]:[1, "X<div>", "</div>"]
				}
				, jt=dt(a), Dt=jt.appendChild(a.createElement("div"));
				At.optgroup=At.option, At.tbody=At.tfoot=At.colgroup=At.caption=At.thead, At.th=At.td, x.fn.extend( {
					text:function(e) {
						return x.access(this, function(e) {
							return e===t?x.text(this): this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
						}
						, null, e, arguments.length)
					}
					, append:function() {
						return this.domManip(arguments, function(e) {
							if(1===this.nodeType||11===this.nodeType||9===this.nodeType) {
								var t=Lt(this, e);
								t.appendChild(e)
							}
						}
						)
					}
					, prepend:function() {
						return this.domManip(arguments, function(e) {
							if(1===this.nodeType||11===this.nodeType||9===this.nodeType) {
								var t=Lt(this, e);
								t.insertBefore(e, t.firstChild)
							}
						}
						)
					}
					, before:function() {
						return this.domManip(arguments, function(e) {
							this.parentNode&&this.parentNode.insertBefore(e, this)
						}
						)
					}
					, after:function() {
						return this.domManip(arguments, function(e) {
							this.parentNode&&this.parentNode.insertBefore(e, this.nextSibling)
						}
						)
					}
					, remove:function(e, t) {
						var n, r=e?x.filter(e, this): this, i=0;
						for(;
						null!=(n=r[i]);
						i++)t||1!==n.nodeType||x.cleanData(Ft(n)), n.parentNode&&(t&&x.contains(n.ownerDocument, n)&&_t(Ft(n, "script")), n.parentNode.removeChild(n));
						return this
					}
					, empty:function() {
						var e, t=0;
						for(;
						null!=(e=this[t]);
						t++) {
							1===e.nodeType&&x.cleanData(Ft(e, !1));
							while(e.firstChild)e.removeChild(e.firstChild);
							e.options&&x.nodeName(e, "select")&&(e.options.length=0)
						}
						return this
					}
					, clone:function(e, t) {
						return e=null==e?!1:e, t=null==t?e:t, this.map(function() {
							return x.clone(this, e, t)
						}
						)
					}
					, html:function(e) {
						return x.access(this, function(e) {
							var n=this[0]|| {}
							, r=0, i=this.length;
							if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt, ""): t;
							if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["", ""])[1].toLowerCase()])) {
								e=e.replace(vt, "<$1></$2>");
								try {
									for(;
									i>r;
									r++)n=this[r]|| {}
									, 1===n.nodeType&&(x.cleanData(Ft(n, !1)), n.innerHTML=e);
									n=0
								}
								catch(o) {}
							}
							n&&this.empty().append(e)
						}
						, null, e, arguments.length)
					}
					, replaceWith:function() {
						var e=x.map(this, function(e) {
							return[e.nextSibling, e.parentNode]
						}
						), t=0;
						return this.domManip(arguments, function(n) {
							var r=e[t++], i=e[t++];
							i&&(r&&r.parentNode!==i&&(r=this.nextSibling), x(this).remove(), i.insertBefore(n, r))
						}
						, !0), t?this:this.remove()
					}
					, detach:function(e) {
						return this.remove(e, !0)
					}
					, domManip:function(e, t, n) {
						e=d.apply([], e);
						var r, i, o, a, s, l, u=0, c=this.length, p=this, f=c-1, h=e[0], g=x.isFunction(h);
						if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r) {
							var i=p.eq(r);
							g&&(e[0]=h.call(this, r, i.html())), i.domManip(e, t, n)
						}
						);
						if(c&&(l=x.buildFragment(e, this[0].ownerDocument, !1, !n&&this), r=l.firstChild, 1===l.childNodes.length&&(l=r), r)) {
							for(a=x.map(Ft(l, "script"), Ht), o=a.length;
							c>u;
							u++)i=l, u!==f&&(i=x.clone(i, !0, !0), o&&x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
							if(o)for(s=a[a.length-1].ownerDocument, x.map(a, qt), u=0;
							o>u;
							u++)i=a[u], kt.test(i.type||"")&&!x._data(i, "globalEval")&&x.contains(s, i)&&(i.src?x._evalUrl(i.src): x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St, "")));
							l=r=null
						}
						return this
					}
				}
				);
				function Lt(e, t) {
					return x.nodeName(e, "table")&&x.nodeName(1===t.nodeType?t: t.firstChild, "tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
				}
				function Ht(e) {
					return e.type=(null!==x.find.attr(e, "type"))+"/"+e.type, e
				}
				function qt(e) {
					var t=Et.exec(e.type);
					return t?e.type=t[1]: e.removeAttribute("type"), e
				}
				function _t(e, t) {
					var n, r=0;
					for(;
					null!=(n=e[r]);
					r++)x._data(n, "globalEval", !t||x._data(t[r], "globalEval"))
				}
				function Mt(e, t) {
					if(1===t.nodeType&&x.hasData(e)) {
						var n, r, i, o=x._data(e), a=x._data(t, o), s=o.events;
						if(s) {
							delete a.handle, a.events= {}
							;
							for(n in s)for(r=0, i=s[n].length;
							i>r;
							r++)x.event.add(t, n, s[n][r])
						}
						a.data&&(a.data=x.extend( {}
						, a.data))
					}
				}
				function Ot(e, t) {
					var n, r, i;
					if(1===t.nodeType) {
						if(n=t.nodeName.toLowerCase(), !x.support.noCloneEvent&&t[x.expando]) {
							i=x._data(t);
							for(r in i.events)x.removeEvent(t, r, i.handle);
							t.removeAttribute(x.expando)
						}
						"script"===n&&t.text!==e.text?(Ht(t).text=e.text, qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML), x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked, t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
					}
				}
				x.each( {
					appendTo: "append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"
				}
				, function(e, t) {
					x.fn[e]=function(e) {
						var n, r=0, i=[], o=x(e), a=o.length-1;
						for(;
						a>=r;
						r++)n=r===a?this: this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
						return this.pushStack(i)
					}
				}
				);
				function Ft(e, n) {
					var r, o, a=0, s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"): typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
					if(!s)for(s=[], r=e.childNodes||e;
					null!=(o=r[a]);
					a++)!n||x.nodeName(o, n)?s.push(o): x.merge(s, Ft(o, n));
					return n===t||n&&x.nodeName(e, n)?x.merge([e], s): s
				}
				function Bt(e) {
					Ct.test(e.type)&&(e.defaultChecked=e.checked)
				}
				x.extend( {
					clone:function(e, t, n) {
						var r, i, o, a, s, l=x.contains(e.ownerDocument, e);
						if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0): (Dt.innerHTML=e.outerHTML, Dt.removeChild(o=Dt.firstChild)), !(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o), s=Ft(e), a=0;
						null!=(i=s[a]);
						++a)r[a]&&Ot(i, r[a]);
						if(t)if(n)for(s=s||Ft(e), r=r||Ft(o), a=0;
						null!=(i=s[a]);
						a++)Mt(i, r[a]);
						else Mt(e, o);
						return r=Ft(o, "script"), r.length>0&&_t(r, !l&&Ft(e, "script")), r=s=i=null, o
					}
					, buildFragment:function(e, t, n, r) {
						var i, o, a, s, l, u, c, p=e.length, f=dt(t), d=[], h=0;
						for(;
						p>h;
						h++)if(o=e[h], o||0===o)if("object"===x.type(o))x.merge(d, o.nodeType?[o]: o);
						else if(wt.test(o)) {
							s=s||f.appendChild(t.createElement("div")), l=(bt.exec(o)||["", ""])[1].toLowerCase(), c=At[l]||At._default, s.innerHTML=c[1]+o.replace(vt, "<$1></$2>")+c[2], i=c[0];
							while(i--)s=s.lastChild;
							if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
								o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0: s:s.firstChild, i=o&&o.childNodes.length;
								while(i--)x.nodeName(u=o.childNodes[i], "tbody")&&!u.childNodes.length&&o.removeChild(u)
							}
							x.merge(d, s.childNodes), s.textContent="";
							while(s.firstChild)s.removeChild(s.firstChild);
							s=f.lastChild
						}
						else d.push(t.createTextNode(o));
						s&&f.removeChild(s), x.support.appendChecked||x.grep(Ft(d, "input"), Bt), h=0;
						while(o=d[h++])if((!r||-1===x.inArray(o, r))&&(a=x.contains(o.ownerDocument, o), s=Ft(f.appendChild(o), "script"), a&&_t(s), n)) {
							i=0;
							while(o=s[i++])kt.test(o.type||"")&&n.push(o)
						}
						return s=null, f
					}
					, cleanData:function(e, t) {
						var n, r, o, a, s=0, l=x.expando, u=x.cache, c=x.support.deleteExpando, f=x.event.special;
						for(;
						null!=(n=e[s]);
						s++)if((t||x.acceptData(n))&&(o=n[l], a=o&&u[o])) {
							if(a.events)for(r in a.events)f[r]?x.event.remove(n, r): x.removeEvent(n, r, a.handle);
							u[o]&&(delete u[o], c?delete n[l]: typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null, p.push(o))
						}
					}
					, _evalUrl:function(e) {
						return x.ajax( {
							url: e, type:"GET", dataType:"script", async:!1, global:!1, "throws":!0
						}
						)
					}
				}
				), x.fn.extend( {
					wrapAll:function(e) {
						if(x.isFunction(e))return this.each(function(t) {
							x(this).wrapAll(e.call(this, t))
						}
						);
						if(this[0]) {
							var t=x(e, this[0].ownerDocument).eq(0).clone(!0);
							this[0].parentNode&&t.insertBefore(this[0]), t.map(function() {
								var e=this;
								while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;
								return e
							}
							).append(this)
						}
						return this
					}
					, wrapInner:function(e) {
						return x.isFunction(e)?this.each(function(t) {
							x(this).wrapInner(e.call(this, t))
						}
						):this.each(function() {
							var t=x(this), n=t.contents();
							n.length?n.wrapAll(e): t.append(e)
						}
						)
					}
					, wrap:function(e) {
						var t=x.isFunction(e);
						return this.each(function(n) {
							x(this).wrapAll(t?e.call(this, n): e)
						}
						)
					}
					, unwrap:function() {
						return this.parent().each(function() {
							x.nodeName(this, "body")||x(this).replaceWith(this.childNodes)
						}
						).end()
					}
				}
				);
				var Pt, Rt, Wt, $t=/alpha\([^)]*\)/i, It=/opacity\s*=\s*([^)]*)/,
				zt=/^(top|right|bottom|left)$/,
				Xt=/^(none|table(?!-c[ea]).+)/,
				Ut=/^margin/,
				Vt=RegExp("^("+w+")(.*)$", "i"),
				Yt=RegExp("^("+w+")(?!px)[a-z%]+$", "i"),
				Jt=RegExp("^([+-])=("+w+")", "i"),
				Gt= {
					BODY: "block"
				}
				,
				Qt= {
					position: "absolute", visibility:"hidden", display:"block"
				}
				,
				Kt= {
					letterSpacing: 0, fontWeight:400
				}
				,
				Zt=["Top",				"Right",				"Bottom",				"Left"],
				en=["Webkit",				"O",				"Moz",				"ms"];
				function tn(e, t) {
					if(t in e)return t;
					var n=t.charAt(0).toUpperCase()+t.slice(1),
					r=t,
					i=en.length;
					while(i--)if(t=en[i]+n, t in e)return t;
					return r
				}
				function nn(e, t) {
					return e=t||e,
					"none"===x.css(e, "display")||!x.contains(e.ownerDocument, e)
				}
				function rn(e, t) {
					var n,
					r,
					i,
					o=[],
					a=0,
					s=e.length;
					for(;
					s>a;
					a++)r=e[a],
					r.style&&(o[a]=x._data(r, "olddisplay"), n=r.style.display, t?(o[a]||"none"!==n||(r.style.display=""), ""===r.style.display&&nn(r)&&(o[a]=x._data(r, "olddisplay", ln(r.nodeName)))): o[a]||(i=nn(r), (n&&"none"!==n||!i)&&x._data(r, "olddisplay", i?n:x.css(r, "display"))));
					for(a=0;
					s>a;
					a++)r=e[a],
					r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"": "none"));
					return e
				}
				x.fn.extend( {
					css:function(e, n) {
						return x.access(this, function(e, n, r) {
							var i, o, a= {}
							, s=0;
							if(x.isArray(n)) {
								for(o=Rt(e), i=n.length;
								i>s;
								s++)a[n[s]]=x.css(e, n[s], !1, o);
								return a
							}
							return r!==t?x.style(e, n, r):x.css(e, n)
						}
						, e, n, arguments.length>1)
					}
					, show:function() {
						return rn(this, !0)
					}
					, hide:function() {
						return rn(this)
					}
					, toggle:function(e) {
						return"boolean"==typeof e?e?this.show():this.hide():this.each(function() {
							nn(this)?x(this).show(): x(this).hide()
						}
						)
					}
				}
				),
				x.extend( {
					cssHooks: {
						opacity: {
							get:function(e, t) {
								if(t) {
									var n=Wt(e, "opacity");
									return""===n?"1": n
								}
							}
						}
					}
					, cssNumber: {
						columnCount: !0, fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0
					}
					, cssProps: {
						"float": x.support.cssFloat?"cssFloat":"styleFloat"
					}
					, style:function(e, n, r, i) {
						if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style) {
							var o, a, s, l=x.camelCase(n), u=e.style;
							if(n=x.cssProps[l]||(x.cssProps[l]=tn(u, l)), s=x.cssHooks[n]||x.cssHooks[l], r===t)return s&&"get"in s&&(o=s.get(e, !1, i))!==t?o: u[n];
							if(a=typeof r, "string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e, n)), a="number"), !(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"), x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"), s&&"set"in s&&(r=s.set(e, r, i))===t)))try {
								u[n]=r
							}
							catch(c) {}
						}
					}
					, css:function(e, n, r, i) {
						var o, a, s, l=x.camelCase(n);
						return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style, l)), s=x.cssHooks[n]||x.cssHooks[l], s&&"get"in s&&(a=s.get(e, !0, r)), a===t&&(a=Wt(e, n, i)), "normal"===a&&n in Kt&&(a=Kt[n]), ""===r||r?(o=parseFloat(a), r===!0||x.isNumeric(o)?o||0: a):a
					}
				}
				),
				e.getComputedStyle?(Rt=function(t) {
					return e.getComputedStyle(t, null)
				}
				, Wt=function(e, n, r) {
					var i, o, a, s=r||Rt(e), l=s?s.getPropertyValue(n)||s[n]: t, u=e.style;
					return s&&(""!==l||x.contains(e.ownerDocument, e)||(l=x.style(e, n)), Yt.test(l)&&Ut.test(n)&&(i=u.width, o=u.minWidth, a=u.maxWidth, u.minWidth=u.maxWidth=u.width=l, l=s.width, u.width=i, u.minWidth=o, u.maxWidth=a)), l
				}
				):a.documentElement.currentStyle&&(Rt=function(e) {
					return e.currentStyle
				}
				, Wt=function(e, n, r) {
					var i, o, a, s=r||Rt(e), l=s?s[n]: t, u=e.style;
					return null==l&&u&&u[n]&&(l=u[n]), Yt.test(l)&&!zt.test(n)&&(i=u.left, o=e.runtimeStyle, a=o&&o.left, a&&(o.left=e.currentStyle.left), u.left="fontSize"===n?"1em": l, l=u.pixelLeft+"px", u.left=i, a&&(o.left=a)), ""===l?"auto":l
				}
				);
				function on(e, t, n) {
					var r=Vt.exec(t);
					return r?Math.max(0, r[1]-(n||0))+(r[2]||"px"): t
				}
				function an(e, t, n, r, i) {
					var o=n===(r?"border": "content")?4:"width"===t?1:0, a=0;
					for(;
					4>o;
					o+=2)"margin"===n&&(a+=x.css(e, n+Zt[o], !0, i)),
					r?("content"===n&&(a-=x.css(e, "padding"+Zt[o], !0, i)), "margin"!==n&&(a-=x.css(e, "border"+Zt[o]+"Width", !0, i))): (a+=x.css(e, "padding"+Zt[o], !0, i), "padding"!==n&&(a+=x.css(e, "border"+Zt[o]+"Width", !0, i)));
					return a
				}
				function sn(e, t, n) {
					var r=!0,
					i="width"===t?e.offsetWidth: e.offsetHeight, o=Rt(e), a=x.support.boxSizing&&"border-box"===x.css(e, "boxSizing", !1, o);
					if(0>=i||null==i) {
						if(i=Wt(e, t, o), (0>i||null==i)&&(i=e.style[t]), Yt.test(i))return i;
						r=a&&(x.support.boxSizingReliable||i===e.style[t]),
						i=parseFloat(i)||0
					}
					return i+an(e, t, n||(a?"border":"content"), r, o)+"px"
				}
				function ln(e) {
					var t=a,
					n=Gt[e];
					return n||(n=un(e, t), "none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t=(Pt[0].contentWindow||Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n=un(e, t), Pt.detach()), Gt[e]=n),
					n
				}
				function un(e, t) {
					var n=x(t.createElement(e)).appendTo(t.body),
					r=x.css(n[0], "display");
					return n.remove(),
					r
				}
				x.each(["height", "width"], function(e, n) {
					x.cssHooks[n]= {
						get:function(e, r, i) {
							return r?0===e.offsetWidth&&Xt.test(x.css(e, "display"))?x.swap(e, Qt, function() {
								return sn(e, n, i)
							}
							):sn(e, n, i):t
						}
						, set:function(e, t, r) {
							var i=r&&Rt(e);
							return on(e, t, r?an(e, n, r, x.support.boxSizing&&"border-box"===x.css(e, "boxSizing", !1, i), i): 0)
						}
					}
				}
				),
				x.support.opacity||(x.cssHooks.opacity= {
					get:function(e, t) {
						return It.test((t&&e.currentStyle?e.currentStyle.filter: e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
					}
					, set:function(e, t) {
						var n=e.style, r=e.currentStyle, i=x.isNumeric(t)?"alpha(opacity="+100*t+")": "", o=r&&r.filter||n.filter||"";
						n.zoom=1, (t>=1||""===t)&&""===x.trim(o.replace($t, ""))&&n.removeAttribute&&(n.removeAttribute("filter"), ""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t, i): o+" "+i)
					}
				}
				),
				x(function() {
					x.support.reliableMarginRight||(x.cssHooks.marginRight= {
						get:function(e, n) {
							return n?x.swap(e, {
								display: "inline-block"
							}
							, Wt, [e, "marginRight"]):t
						}
					}
					), !x.support.pixelPosition&&x.fn.position&&x.each(["top", "left"], function(e, n) {
						x.cssHooks[n]= {
							get:function(e, r) {
								return r?(r=Wt(e, n), Yt.test(r)?x(e).position()[n]+"px": r):t
							}
						}
					}
					)
				}
				),
				x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e) {
					return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e, "display"))
				}
				, x.expr.filters.visible=function(e) {
					return!x.expr.filters.hidden(e)
				}
				),
				x.each( {
					margin: "", padding:"", border:"Width"
				}
				, function(e, t) {
					x.cssHooks[e+t]= {
						expand:function(n) {
							var r=0, i= {}
							, o="string"==typeof n?n.split(" "): [n];
							for(;
							4>r;
							r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];
							return i
						}
					}
					, Ut.test(e)||(x.cssHooks[e+t].set=on)
				}
				);
				var cn=/%20/g,
				pn=/\[\]$/,
				fn=/\r?\n/g,
				dn=/^(?:submit|button|image|reset|file)$/i,
				hn=/^(?:input|select|textarea|keygen)/i;
				x.fn.extend( {
					serialize:function() {
						return x.param(this.serializeArray())
					}
					, serializeArray:function() {
						return this.map(function() {
							var e=x.prop(this, "elements");
							return e?x.makeArray(e): this
						}
						).filter(function() {
							var e=this.type;
							return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
						}
						).map(function(e, t) {
							var n=x(this).val();
							return null==n?null:x.isArray(n)?x.map(n, function(e) {
								return {
									name: t.name, value:e.replace(fn, "\r\n")
								}
							}
							): {
								name: t.name, value:n.replace(fn, "\r\n")
							}
						}
						).get()
					}
				}
				),
				x.param=function(e, n) {
					var r,
					i=[],
					o=function(e, t) {
						t=x.isFunction(t)?t(): null==t?"":t, i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
					}
					;
					if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional), x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e, function() {
						o(this.name, this.value)
					}
					);
					else for(r in e)gn(r, e[r], n, o);
					return i.join("&").replace(cn, "+")
				}
				;
				function gn(e, t, n, r) {
					var i;
					if(x.isArray(t))x.each(t, function(t, i) {
						n||pn.test(e)?r(e, i): gn(e+"["+("object"==typeof i?t:"")+"]", i, n, r)
					}
					);
					else if(n||"object"!==x.type(t))r(e, t);
					else for(i in t)gn(e+"["+i+"]", t[i], n, r)
				}
				x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
					x.fn[t]=function(e, n) {
						return arguments.length>0?this.on(t, null, e, n): this.trigger(t)
					}
				}
				),
				x.fn.extend( {
					hover:function(e, t) {
						return this.mouseenter(e).mouseleave(t||e)
					}
					, bind:function(e, t, n) {
						return this.on(e, null, t, n)
					}
					, unbind:function(e, t) {
						return this.off(e, null, t)
					}
					, delegate:function(e, t, n, r) {
						return this.on(t, e, n, r)
					}
					, undelegate:function(e, t, n) {
						return 1===arguments.length?this.off(e, "**"): this.off(t, e||"**", n)
					}
				}
				);
				var mn,
				yn,
				vn=x.now(),
				bn=/\?/,
				xn=/#.*$/,
				wn=/([?&])_=[^&]*/,
				Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
				Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
				Nn=/^(?:GET|HEAD)$/,
				kn=/^\/\ //,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")
			}
			else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
			this.$element.toggleClass("active")
		}
		;
		var d=a.fn.button;
		a.fn.button=b,
		a.fn.button.Constructor=c,
		a.fn.button.noConflict=function() {
			return a.fn.button=d,
			this
		}
		,
		a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
			var d=a(c.target);
			d.hasClass("btn")||(d=d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()
		}
		).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
			a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
		}
		)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			return this.each(function() {
				var d=a(this), e=d.data("bs.carousel"), f=a.extend( {}
				, c.DEFAULTS, d.data(), "object"==typeof b&&b), g="string"==typeof b?b: f.slide;
				e||d.data("bs.carousel", e=new c(this, f)), "number"==typeof b?e.to(b): g?e[g]():f.interval&&e.pause().cycle()
			}
			)
		}
		var c=function(b, c) {
			this.$element=a(b),
			this.$indicators=this.$element.find(".carousel-indicators"),
			this.options=c,
			this.paused=null,
			this.sliding=null,
			this.interval=null,
			this.$active=null,
			this.$items=null,
			this.options.keyboard&&this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
			"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
		}
		;
		c.VERSION="3.3.5",
		c.TRANSITION_DURATION=600,
		c.DEFAULTS= {
			interval: 5e3, pause:"hover", wrap:!0, keyboard:!0
		}
		,
		c.prototype.keydown=function(a) {
			if(!/input|textarea/i.test(a.target.tagName)) {
				switch(a.which) {
					case 37: this.prev();
					break;
					case 39: this.next();
					break;
					default: return
				}
				a.preventDefault()
			}
		}
		,
		c.prototype.cycle=function(b) {
			return b||(this.paused=!1),
			this.interval&&clearInterval(this.interval),
			this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next, this), this.options.interval)),
			this
		}
		,
		c.prototype.getItemIndex=function(a) {
			return this.$items=a.parent().children(".item"),
			this.$items.index(a||this.$active)
		}
		,
		c.prototype.getItemForDirection=function(a, b) {
			var c=this.getItemIndex(b),
			d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;
			if(d&&!this.options.wrap)return b;
			var e="prev"==a?-1: 1, f=(c+e)%this.$items.length;
			return this.$items.eq(f)
		}
		,
		c.prototype.to=function(a) {
			var b=this,
			c=this.getItemIndex(this.$active=this.$element.find(".item.active"));
			return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel", function() {
				b.to(a)
			}
			):c==a?this.pause().cycle():this.slide(a>c?"next":"prev", this.$items.eq(a))
		}
		,
		c.prototype.pause=function(b) {
			return b||(this.paused=!0),
			this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end), this.cycle(!0)),
			this.interval=clearInterval(this.interval),
			this
		}
		,
		c.prototype.next=function() {
			return this.sliding?void 0: this.slide("next")
		}
		,
		c.prototype.prev=function() {
			return this.sliding?void 0: this.slide("prev")
		}
		,
		c.prototype.slide=function(b, d) {
			var e=this.$element.find(".item.active"),
			f=d||this.getItemForDirection(b, e),
			g=this.interval,
			h="next"==b?"left": "right", i=this;
			if(f.hasClass("active"))return this.sliding=!1;
			var j=f[0],
			k=a.Event("slide.bs.carousel", {
				relatedTarget: j, direction:h
			}
			);
			if(this.$element.trigger(k), !k.isDefaultPrevented()) {
				if(this.sliding=!0, g&&this.pause(), this.$indicators.length) {
					this.$indicators.find(".active").removeClass("active");
					var l=a(this.$indicators.children()[this.getItemIndex(f)]);
					l&&l.addClass("active")
				}
				var m=a.Event("slid.bs.carousel", {
					relatedTarget: j, direction:h
				}
				);
				return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
					f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding=!1, setTimeout(function() {
						i.$element.trigger(m)
					}
					, 0)
				}
				).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"), f.addClass("active"), this.sliding=!1, this.$element.trigger(m)),
				g&&this.cycle(),
				this
			}
		}
		;
		var d=a.fn.carousel;
		a.fn.carousel=b,
		a.fn.carousel.Constructor=c,
		a.fn.carousel.noConflict=function() {
			return a.fn.carousel=d,
			this
		}
		;
		var e=function(c) {
			var d,
			e=a(this),
			f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/, ""));
			if(f.hasClass("carousel")) {
				var g=a.extend( {}
				, f.data(), e.data()),
				h=e.attr("data-slide-to");
				h&&(g.interval=!1),
				b.call(f, g),
				h&&f.data("bs.carousel").to(h),
				c.preventDefault()
			}
		}
		;
		a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
		a(window).on("load", function() {
			a('[data-ride="carousel"]').each(function() {
				var c=a(this);
				b.call(c, c.data())
			}
			)
		}
		)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			var c,
			d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/, "");
			return a(d)
		}
		function c(b) {
			return this.each(function() {
				var c=a(this), e=c.data("bs.collapse"), f=a.extend( {}
				, d.DEFAULTS, c.data(), "object"==typeof b&&b);
				!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1), e||c.data("bs.collapse", e=new d(this, f)), "string"==typeof b&&e[b]()
			}
			)
		}
		var d=function(b, c) {
			this.$element=a(b),
			this.options=a.extend( {}
			, d.DEFAULTS, c),
			this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),
			this.transitioning=null,
			this.options.parent?this.$parent=this.getParent(): this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle&&this.toggle()
		}
		;
		d.VERSION="3.3.5",
		d.TRANSITION_DURATION=350,
		d.DEFAULTS= {
			toggle: !0
		}
		,
		d.prototype.dimension=function() {
			var a=this.$element.hasClass("width");
			return a?"width": "height"
		}
		,
		d.prototype.show=function() {
			if(!this.transitioning&&!this.$element.hasClass("in")) {
				var b,
				e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
				if(!(e&&e.length&&(b=e.data("bs.collapse"), b&&b.transitioning))) {
					var f=a.Event("show.bs.collapse");
					if(this.$element.trigger(f), !f.isDefaultPrevented()) {
						e&&e.length&&(c.call(e, "hide"), b||e.data("bs.collapse", null));
						var g=this.dimension();
						this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
						this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
						this.transitioning=1;
						var h=function() {
							this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
							this.transitioning=0,
							this.$element.trigger("shown.bs.collapse")
						}
						;
						if(!a.support.transition)return h.call(this);
						var i=a.camelCase(["scroll", g].join("-"));
						this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
					}
				}
			}
		}
		,
		d.prototype.hide=function() {
			if(!this.transitioning&&this.$element.hasClass("in")) {
				var b=a.Event("hide.bs.collapse");
				if(this.$element.trigger(b), !b.isDefaultPrevented()) {
					var c=this.dimension();
					this.$element[c](this.$element[c]())[0].offsetHeight,
					this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
					this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
					this.transitioning=1;
					var e=function() {
						this.transitioning=0,
						this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					}
					;
					return a.support.transition?void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)
				}
			}
		}
		,
		d.prototype.toggle=function() {
			this[this.$element.hasClass("in")?"hide": "show"]()
		}
		,
		d.prototype.getParent=function() {
			return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c, d) {
				var e=a(d);
				this.addAriaAndCollapsedClass(b(e), e)
			}
			, this)).end()
		}
		,
		d.prototype.addAriaAndCollapsedClass=function(a, b) {
			var c=a.hasClass("in");
			a.attr("aria-expanded", c),
			b.toggleClass("collapsed", !c).attr("aria-expanded", c)
		}
		;
		var e=a.fn.collapse;
		a.fn.collapse=c,
		a.fn.collapse.Constructor=d,
		a.fn.collapse.noConflict=function() {
			return a.fn.collapse=e,
			this
		}
		,
		a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
			var e=a(this);
			e.attr("data-target")||d.preventDefault();
			var f=b(e), g=f.data("bs.collapse"), h=g?"toggle": e.data();
			c.call(f, h)
		}
		)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			var c=b.attr("data-target");
			c||(c=b.attr("href"), c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/, ""));
			var d=c&&a(c);
			return d&&d.length?d: b.parent()
		}
		function c(c) {
			c&&3===c.which||(a(e).remove(), a(f).each(function() {
				var d=a(this), e=b(d), f= {
					relatedTarget: this
				}
				;
				e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0], c.target)||(e.trigger(c=a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented()||(d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
			}
			))
		}
		function d(b) {
			return this.each(function() {
				var c=a(this), d=c.data("bs.dropdown");
				d||c.data("bs.dropdown", d=new g(this)), "string"==typeof b&&d[b].call(c)
			}
			)
		}
		var e=".dropdown-backdrop",
		f='[data-toggle="dropdown"]',
		g=function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		}
		;
		g.VERSION="3.3.5",
		g.prototype.toggle=function(d) {
			var e=a(this);
			if(!e.is(".disabled, :disabled")) {
				var f=b(e),
				g=f.hasClass("open");
				if(c(), !g) {
					"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
					var h= {
						relatedTarget: this
					}
					;
					if(f.trigger(d=a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
					e.trigger("focus").attr("aria-expanded", "true"),
					f.toggleClass("open").trigger("shown.bs.dropdown", h)
				}
				return!1
			}
		}
		,
		g.prototype.keydown=function(c) {
			if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)) {
				var d=a(this);
				if(c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
					var e=b(d),
					g=e.hasClass("open");
					if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),
					d.trigger("click");
					var h=" li:not(.disabled):visible a",
					i=e.find(".dropdown-menu"+h);
					if(i.length) {
						var j=i.index(c.target);
						38==c.which&&j>0&&j--,
						40==c.which&&j<i.length-1&&j++,
						~j||(j=0),
						i.eq(j).trigger("focus")
					}
				}
			}
		}
		;
		var h=a.fn.dropdown;
		a.fn.dropdown=d,
		a.fn.dropdown.Constructor=g,
		a.fn.dropdown.noConflict=function() {
			return a.fn.dropdown=h,
			this
		}
		,
		a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
			a.stopPropagation()
		}
		).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b, d) {
			return this.each(function() {
				var e=a(this), f=e.data("bs.modal"), g=a.extend( {}
				, c.DEFAULTS, e.data(), "object"==typeof b&&b);
				f||e.data("bs.modal", f=new c(this, g)), "string"==typeof b?f[b](d): g.show&&f.show(d)
			}
			)
		}
		var c=function(b, c) {
			this.options=c,
			this.$body=a(document.body),
			this.$element=a(b),
			this.$dialog=this.$element.find(".modal-dialog"),
			this.$backdrop=null,
			this.isShown=null,
			this.originalBodyPad=null,
			this.scrollbarWidth=0,
			this.ignoreBackdropClick=!1,
			this.options.remote&&this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}
			, this))
		}
		;
		c.VERSION="3.3.5",
		c.TRANSITION_DURATION=300,
		c.BACKDROP_TRANSITION_DURATION=150,
		c.DEFAULTS= {
			backdrop: !0, keyboard:!0, show:!0
		}
		,
		c.prototype.toggle=function(a) {
			return this.isShown?this.hide(): this.show(a)
		}
		,
		c.prototype.show=function(b) {
			var d=this,
			e=a.Event("show.bs.modal", {
				relatedTarget: b
			}
			);
			this.$element.trigger(e),
			this.isShown||e.isDefaultPrevented()||(this.isShown=!0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
				d.$element.one("mouseup.dismiss.bs.modal", function(b) {
					a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)
				}
				)
			}
			), this.backdrop(function() {
				var e=a.support.transition&&d.$element.hasClass("fade");
				d.$element.parent().length||d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e&&d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
				var f=a.Event("shown.bs.modal", {
					relatedTarget: b
				}
				);
				e?d.$dialog.one("bsTransitionEnd", function() {
					d.$element.trigger("focus").trigger(f)
				}
				).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)
			}
			))
		}
		,
		c.prototype.hide=function(b) {
			b&&b.preventDefault(),
			b=a.Event("hide.bs.modal"),
			this.$element.trigger(b),
			this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION): this.hideModal())
		}
		,
		c.prototype.enforceFocus=function() {
			a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
				this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")
			}
			, this))
		}
		,
		c.prototype.escape=function() {
			this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
				27==a.which&&this.hide()
			}
			, this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
		}
		,
		c.prototype.resize=function() {
			this.isShown?a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)): a(window).off("resize.bs.modal")
		}
		,
		c.prototype.hideModal=function() {
			var a=this;
			this.$element.hide(),
			this.backdrop(function() {
				a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
			}
			)
		}
		,
		c.prototype.removeBackdrop=function() {
			this.$backdrop&&this.$backdrop.remove(),
			this.$backdrop=null
		}
		,
		c.prototype.backdrop=function(b) {
			var d=this,
			e=this.$element.hasClass("fade")?"fade": "";
			if(this.isShown&&this.options.backdrop) {
				var f=a.support.transition&&e;
				if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
					return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1): void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
				}
				, this)), f&&this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
				f?this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()
			}
			else if(!this.isShown&&this.$backdrop) {
				this.$backdrop.removeClass("in");
				var g=function() {
					d.removeBackdrop(),
					b&&b()
				}
				;
				a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()
			}
			else b&&b()
		}
		,
		c.prototype.handleUpdate=function() {
			this.adjustDialog()
		}
		,
		c.prototype.adjustDialog=function() {
			var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;
			this.$element.css( {
				paddingLeft: !this.bodyIsOverflowing&&a?this.scrollbarWidth:"", paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""
			}
			)
		}
		,
		c.prototype.resetAdjustments=function() {
			this.$element.css( {
				paddingLeft: "", paddingRight:""
			}
			)
		}
		,
		c.prototype.checkScrollbar=function() {
			var a=window.innerWidth;
			if(!a) {
				var b=document.documentElement.getBoundingClientRect();
				a=b.right-Math.abs(b.left)
			}
			this.bodyIsOverflowing=document.body.clientWidth<a,
			this.scrollbarWidth=this.measureScrollbar()
		}
		,
		c.prototype.setScrollbar=function() {
			var a=parseInt(this.$body.css("padding-right")||0, 10);
			this.originalBodyPad=document.body.style.paddingRight||"",
			this.bodyIsOverflowing&&this.$body.css("padding-right", a+this.scrollbarWidth)
		}
		,
		c.prototype.resetScrollbar=function() {
			this.$body.css("padding-right", this.originalBodyPad)
		}
		,
		c.prototype.measureScrollbar=function() {
			var a=document.createElement("div");
			a.className="modal-scrollbar-measure",
			this.$body.append(a);
			var b=a.offsetWidth-a.clientWidth;
			return this.$body[0].removeChild(a),
			b
		}
		;
		var d=a.fn.modal;
		a.fn.modal=b,
		a.fn.modal.Constructor=c,
		a.fn.modal.noConflict=function() {
			return a.fn.modal=d,
			this
		}
		,
		a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
			var d=a(this), e=d.attr("href"), f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/, "")), g=f.data("bs.modal")?"toggle":a.extend( {
				remote: !/#/.test(e)&&e
			}
			, f.data(), d.data());
			d.is("a")&&c.preventDefault(), f.one("show.bs.modal", function(a) {
				a.isDefaultPrevented()||f.one("hidden.bs.modal", function() {
					d.is(":visible")&&d.trigger("focus")
				}
				)
			}
			), b.call(f, g, this)
		}
		)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			return this.each(function() {
				var d=a(this), e=d.data("bs.tooltip"), f="object"==typeof b&&b;
				(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip", e=new c(this, f)), "string"==typeof b&&e[b]())
			}
			)
		}
		var c=function(a, b) {
			this.type=null,
			this.options=null,
			this.enabled=null,
			this.timeout=null,
			this.hoverState=null,
			this.$element=null,
			this.inState=null,
			this.init("tooltip", a, b)
		}
		;
		c.VERSION="3.3.5",
		c.TRANSITION_DURATION=150,
		c.DEFAULTS= {
			animation:!0,
			placement:"top",
			selector:!1,
			template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger:"hover focus",
			title:"",
			delay:0,
			html:!1,
			container:!1,
			viewport: {
				selector: "body", padding:0
			}
		}
		,
		c.prototype.init=function(b, c, d) {
			if(this.enabled=!0, this.type=b, this.$element=a(c), this.options=this.getOptions(d), this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this, this.$element): this.options.viewport.selector||this.options.viewport), this.inState= {
				click:!1, hover:!1, focus:!1
			}
			, this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");
			for(var e=this.options.trigger.split(" "), f=e.length;
			f--;
			) {
				var g=e[f];
				if("click"==g)this.$element.on("click."+this.type, this.options.selector, a.proxy(this.toggle, this));
				else if("manual"!=g) {
					var h="hover"==g?"mouseenter": "focusin", i="hover"==g?"mouseleave":"focusout";
					this.$element.on(h+"."+this.type, this.options.selector, a.proxy(this.enter, this)),
					this.$element.on(i+"."+this.type, this.options.selector, a.proxy(this.leave, this))
				}
			}
			this.options.selector?this._options=a.extend( {}
			, this.options, {
				trigger: "manual", selector:""
			}
			):this.fixTitle()
		}
		,
		c.prototype.getDefaults=function() {
			return c.DEFAULTS
		}
		,
		c.prototype.getOptions=function(b) {
			return b=a.extend( {}
			, this.getDefaults(), this.$element.data(), b),
			b.delay&&"number"==typeof b.delay&&(b.delay= {
				show: b.delay, hide:b.delay
			}
			),
			b
		}
		,
		c.prototype.getDelegateOptions=function() {
			var b= {}
			,
			c=this.getDefaults();
			return this._options&&a.each(this._options, function(a, d) {
				c[a]!=d&&(b[a]=d)
			}
			),
			b
		}
		,
		c.prototype.enter=function(b) {
			var c=b instanceof this.constructor?b: a(b.currentTarget).data("bs."+this.type);
			return c||(c=new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs."+this.type, c)),
			b instanceof a.Event&&(c.inState["focusin"==b.type?"focus": "hover"]=!0), c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout), c.hoverState="in", c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function() {
				"in"==c.hoverState&&c.show()
			}
			, c.options.delay.show)):c.show())
		}
		,
		c.prototype.isInStateTrue=function() {
			for(var a in this.inState)if(this.inState[a])return!0;
			return!1
		}
		,
		c.prototype.leave=function(b) {
			var c=b instanceof this.constructor?b: a(b.currentTarget).data("bs."+this.type);
			return c||(c=new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs."+this.type, c)),
			b instanceof a.Event&&(c.inState["focusout"==b.type?"focus": "hover"]=!1), c.isInStateTrue()?void 0:(clearTimeout(c.timeout), c.hoverState="out", c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function() {
				"out"==c.hoverState&&c.hide()
			}
			, c.options.delay.hide)):c.hide())
		}
		,
		c.prototype.show=function() {
			var b=a.Event("show.bs."+this.type);
			if(this.hasContent()&&this.enabled) {
				this.$element.trigger(b);
				var d=a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
				if(b.isDefaultPrevented()||!d)return;
				var e=this,
				f=this.tip(),
				g=this.getUID(this.type);
				this.setContent(),
				f.attr("id", g),
				this.$element.attr("aria-describedby", g),
				this.options.animation&&f.addClass("fade");
				var h="function"==typeof this.options.placement?this.options.placement.call(this, f[0], this.$element[0]): this.options.placement, i=/\s?auto?\s?/i, j=i.test(h);
				j&&(h=h.replace(i, "")||"top"),
				f.detach().css( {
					top: 0, left:0, display:"block"
				}
				).addClass(h).data("bs."+this.type, this),
				this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),
				this.$element.trigger("inserted.bs."+this.type);
				var k=this.getPosition(),
				l=f[0].offsetWidth,
				m=f[0].offsetHeight;
				if(j) {
					var n=h,
					o=this.getPosition(this.$viewport);
					h="bottom"==h&&k.bottom+m>o.bottom?"top": "top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h, f.removeClass(n).addClass(h)
				}
				var p=this.getCalculatedOffset(h, k, l, m);
				this.applyPlacement(p, h);
				var q=function() {
					var a=e.hoverState;
					e.$element.trigger("shown.bs."+e.type),
					e.hoverState=null,
					"out"==a&&e.leave(e)
				}
				;
				a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION):q()
			}
		}
		,
		c.prototype.applyPlacement=function(b, c) {
			var d=this.tip(),
			e=d[0].offsetWidth,
			f=d[0].offsetHeight,
			g=parseInt(d.css("margin-top"), 10),
			h=parseInt(d.css("margin-left"), 10);
			isNaN(g)&&(g=0),
			isNaN(h)&&(h=0),
			b.top+=g,
			b.left+=h,
			a.offset.setOffset(d[0], a.extend( {
				using:function(a) {
					d.css( {
						top: Math.round(a.top), left:Math.round(a.left)
					}
					)
				}
			}
			, b), 0),
			d.addClass("in");
			var i=d[0].offsetWidth,
			j=d[0].offsetHeight;
			"top"==c&&j!=f&&(b.top=b.top+f-j);
			var k=this.getViewportAdjustedDelta(c, b, i, j);
			k.left?b.left+=k.left:b.top+=k.top;
			var l=/top|bottom/.test(c),
			m=l?2*k.left-e+i:2*k.top-f+j,
			n=l?"offsetWidth":"offsetHeight";
			d.offset(b),
			this.replaceArrow(m, d[0][n], l)
		}
		,
		c.prototype.replaceArrow=function(a, b, c) {
			this.arrow().css(c?"left": "top", 50*(1-a/b)+"%").css(c?"top":"left", "")
		}
		,
		c.prototype.setContent=function() {
			var a=this.tip(),
			b=this.getTitle();
			a.find(".tooltip-inner")[this.options.html?"html": "text"](b), a.removeClass("fade in top bottom left right")
		}
		,
		c.prototype.hide=function(b) {
			function d() {
				"in"!=e.hoverState&&f.detach(),
				e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),
				b&&b()
			}
			var e=this,
			f=a(this.$tip),
			g=a.Event("hide.bs."+this.type);
			return this.$element.trigger(g),
			g.isDefaultPrevented()?void 0:(f.removeClass("in"), a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION):d(), this.hoverState=null, this)
		}
		,
		c.prototype.fixTitle=function() {
			var a=this.$element;
			(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title", a.attr("title")||"").attr("title", "")
		}
		,
		c.prototype.hasContent=function() {
			return this.getTitle()
		}
		,
		c.prototype.getPosition=function(b) {
			b=b||this.$element;
			var c=b[0],
			d="BODY"==c.tagName,
			e=c.getBoundingClientRect();
			null==e.width&&(e=a.extend( {}
			, e, {
				width: e.right-e.left, height:e.bottom-e.top
			}
			));
			var f=d? {
				top: 0, left:0
			}
			:b.offset(),
			g= {
				scroll: d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()
			}
			,
			h=d? {
				width: a(window).width(), height:a(window).height()
			}
			:null;
			return a.extend( {}
			, e, g, h, f)
		}
		,
		c.prototype.getCalculatedOffset=function(a, b, c, d) {
			return"bottom"==a? {
				top: b.top+b.height, left:b.left+b.width/2-c/2
			}
			:"top"==a? {
				top: b.top-d, left:b.left+b.width/2-c/2
			}
			:"left"==a? {
				top: b.top+b.height/2-d/2, left:b.left-c
			}
			: {
				top: b.top+b.height/2-d/2, left:b.left+b.width
			}
		}
		,
		c.prototype.getViewportAdjustedDelta=function(a, b, c, d) {
			var e= {
				top: 0, left:0
			}
			;
			if(!this.$viewport)return e;
			var f=this.options.viewport&&this.options.viewport.padding||0,
			g=this.getPosition(this.$viewport);
			if(/right|left/.test(a)) {
				var h=b.top-f-g.scroll,
				i=b.top+f-g.scroll+d;
				h<g.top?e.top=g.top-h: i>g.top+g.height&&(e.top=g.top+g.height-i)
			}
			else {
				var j=b.left-f,
				k=b.left+f+c;
				j<g.left?e.left=g.left-j: k>g.right&&(e.left=g.left+g.width-k)
			}
			return e
		}
		,
		c.prototype.getTitle=function() {
			var a,
			b=this.$element,
			c=this.options;
			return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]): c.title)
		}
		,
		c.prototype.getUID=function(a) {
			do a+=~~(1e6*Math.random());
			while(document.getElementById(a));
			return a
		}
		,
		c.prototype.tip=function() {
			if(!this.$tip&&(this.$tip=a(this.options.template), 1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");
			return this.$tip
		}
		,
		c.prototype.arrow=function() {
			return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
		}
		,
		c.prototype.enable=function() {
			this.enabled=!0
		}
		,
		c.prototype.disable=function() {
			this.enabled=!1
		}
		,
		c.prototype.toggleEnabled=function() {
			this.enabled=!this.enabled
		}
		,
		c.prototype.toggle=function(b) {
			var c=this;
			b&&(c=a(b.currentTarget).data("bs."+this.type), c||(c=new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs."+this.type, c))),
			b?(c.inState.click=!c.inState.click, c.isInStateTrue()?c.enter(c): c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)
		}
		,
		c.prototype.destroy=function() {
			var a=this;
			clearTimeout(this.timeout),
			this.hide(function() {
				a.$element.off("."+a.type).removeData("bs."+a.type), a.$tip&&a.$tip.detach(), a.$tip=null, a.$arrow=null, a.$viewport=null
			}
			)
		}
		;
		var d=a.fn.tooltip;
		a.fn.tooltip=b,
		a.fn.tooltip.Constructor=c,
		a.fn.tooltip.noConflict=function() {
			return a.fn.tooltip=d,
			this
		}
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			return this.each(function() {
				var d=a(this), e=d.data("bs.popover"), f="object"==typeof b&&b;
				(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover", e=new c(this, f)), "string"==typeof b&&e[b]())
			}
			)
		}
		var c=function(a, b) {
			this.init("popover", a, b)
		}
		;
		if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
		c.VERSION="3.3.5",
		c.DEFAULTS=a.extend( {}
		, a.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right", trigger:"click", content:"", template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
		}
		),
		c.prototype=a.extend( {}
		, a.fn.tooltip.Constructor.prototype),
		c.prototype.constructor=c,
		c.prototype.getDefaults=function() {
			return c.DEFAULTS
		}
		,
		c.prototype.setContent=function() {
			var a=this.tip(),
			b=this.getTitle(),
			c=this.getContent();
			a.find(".popover-title")[this.options.html?"html": "text"](b), a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html()||a.find(".popover-title").hide()
		}
		,
		c.prototype.hasContent=function() {
			return this.getTitle()||this.getContent()
		}
		,
		c.prototype.getContent=function() {
			var a=this.$element,
			b=this.options;
			return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]): b.content)
		}
		,
		c.prototype.arrow=function() {
			return this.$arrow=this.$arrow||this.tip().find(".arrow")
		}
		;
		var d=a.fn.popover;
		a.fn.popover=b,
		a.fn.popover.Constructor=c,
		a.fn.popover.noConflict=function() {
			return a.fn.popover=d,
			this
		}
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(c, d) {
			this.$body=a(document.body),
			this.$scrollElement=a(a(c).is(document.body)?window: c), this.options=a.extend( {}
			, b.DEFAULTS, d), this.selector=(this.options.target||"")+" .nav li > a", this.offsets=[], this.targets=[], this.activeTarget=null, this.scrollHeight=0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
		}
		function c(c) {
			return this.each(function() {
				var d=a(this), e=d.data("bs.scrollspy"), f="object"==typeof c&&c;
				e||d.data("bs.scrollspy", e=new b(this, f)), "string"==typeof c&&e[c]()
			}
			)
		}
		b.VERSION="3.3.5",
		b.DEFAULTS= {
			offset: 10
		}
		,
		b.prototype.getScrollHeight=function() {
			return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
		}
		,
		b.prototype.refresh=function() {
			var b=this,
			c="offset",
			d=0;
			this.offsets=[],
			this.targets=[],
			this.scrollHeight=this.getScrollHeight(),
			a.isWindow(this.$scrollElement[0])||(c="position", d=this.$scrollElement.scrollTop()),
			this.$body.find(this.selector).map(function() {
				var b=a(this), e=b.data("target")||b.attr("href"), f=/^#./.test(e)&&a(e);
				return f&&f.length&&f.is(":visible")&&[[f[c]().top+d, e]]||null
			}
			).sort(function(a, b) {
				return a[0]-b[0]
			}
			).each(function() {
				b.offsets.push(this[0]), b.targets.push(this[1])
			}
			)
		}
		,
		b.prototype.process=function() {
			var a,
			b=this.$scrollElement.scrollTop()+this.options.offset,
			c=this.getScrollHeight(),
			d=this.options.offset+c-this.$scrollElement.height(),
			e=this.offsets,
			f=this.targets,
			g=this.activeTarget;
			if(this.scrollHeight!=c&&this.refresh(), b>=d)return g!=(a=f[f.length-1])&&this.activate(a);
			if(g&&b<e[0])return this.activeTarget=null,
			this.clear();
			for(a=e.length;
			a--;
			)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])
		}
		,
		b.prototype.activate=function(b) {
			this.activeTarget=b,
			this.clear();
			var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',
			d=a(c).parents("li").addClass("active");
			d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
			d.trigger("activate.bs.scrollspy")
		}
		,
		b.prototype.clear=function() {
			a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
		}
		;
		var d=a.fn.scrollspy;
		a.fn.scrollspy=c,
		a.fn.scrollspy.Constructor=b,
		a.fn.scrollspy.noConflict=function() {
			return a.fn.scrollspy=d,
			this
		}
		,
		a(window).on("load.bs.scrollspy.data-api", function() {
			a('[data-spy="scroll"]').each(function() {
				var b=a(this);
				c.call(b, b.data())
			}
			)
		}
		)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			return this.each(function() {
				var d=a(this), e=d.data("bs.tab");
				e||d.data("bs.tab", e=new c(this)), "string"==typeof b&&e[b]()
			}
			)
		}
		var c=function(b) {
			this.element=a(b)
		}
		;
		c.VERSION="3.3.5",
		c.TRANSITION_DURATION=150,
		c.prototype.show=function() {
			var b=this.element,
			c=b.closest("ul:not(.dropdown-menu)"),
			d=b.data("target");
			if(d||(d=b.attr("href"), d=d&&d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
				var e=c.find(".active:last a"),
				f=a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}
				),
				g=a.Event("show.bs.tab", {
					relatedTarget: e[0]
				}
				);
				if(e.trigger(f), b.trigger(g), !g.isDefaultPrevented()&&!f.isDefaultPrevented()) {
					var h=a(d);
					this.activate(b.closest("li"), c),
					this.activate(h, h.parent(), function() {
						e.trigger( {
							type: "hidden.bs.tab", relatedTarget:b[0]
						}
						), b.trigger( {
							type: "shown.bs.tab", relatedTarget:e[0]
						}
						)
					}
					)
				}
			}
		}
		,
		c.prototype.activate=function(b, d, e) {
			function f() {
				g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
				b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
				h?(b[0].offsetWidth, b.addClass("in")): b.removeClass("fade"), b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e&&e()
			}
			var g=d.find("> .active"),
			h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);
			g.length&&h?g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),
			g.removeClass("in")
		}
		;
		var d=a.fn.tab;
		a.fn.tab=b,
		a.fn.tab.Constructor=c,
		a.fn.tab.noConflict=function() {
			return a.fn.tab=d,
			this
		}
		;
		var e=function(c) {
			c.preventDefault(),
			b.call(a(this), "show")
		}
		;
		a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
	}
	(jQuery),
	+function(a) {
		"use strict";
		function b(b) {
			return this.each(function() {
				var d=a(this), e=d.data("bs.affix"), f="object"==typeof b&&b;
				e||d.data("bs.affix", e=new c(this, f)), "string"==typeof b&&e[b]()
			}
			)
		}
		var c=function(b, d) {
			this.options=a.extend( {}
			, c.DEFAULTS, d),
			this.$target=a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
			this.$element=a(b),
			this.affixed=null,
			this.unpin=null,
			this.pinnedOffset=null,
			this.checkPosition()
		}
		;
		c.VERSION="3.3.5",
		c.RESET="affix affix-top affix-bottom",
		c.DEFAULTS= {
			offset: 0, target:window
		}
		,
		c.prototype.getState=function(a, b, c, d) {
			var e=this.$target.scrollTop(),
			f=this.$element.offset(),
			g=this.$target.height();
			if(null!=c&&"top"==this.affixed)return c>e?"top": !1;
			if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1: "bottom":a-d>=e+g?!1:"bottom";
			var h=null==this.affixed,
			i=h?e: f.top, j=h?g:b;
			return null!=c&&c>=e?"top": null!=d&&i+j>=a-d?"bottom":!1
		}
		,
		c.prototype.getPinnedOffset=function() {
			if(this.pinnedOffset)return this.pinnedOffset;
			this.$element.removeClass(c.RESET).addClass("affix");
			var a=this.$target.scrollTop(),
			b=this.$element.offset();
			return this.pinnedOffset=b.top-a
		}
		,
		c.prototype.checkPositionWithEventLoop=function() {
			setTimeout(a.proxy(this.checkPosition, this), 1)
		}
		,
		c.prototype.checkPosition=function() {
			if(this.$element.is(":visible")) {
				var b=this.$element.height(),
				d=this.options.offset,
				e=d.top,
				f=d.bottom,
				g=Math.max(a(document).height(), a(document.body).height());
				"object"!=typeof d&&(f=e=d),
				"function"==typeof e&&(e=d.top(this.$element)),
				"function"==typeof f&&(f=d.bottom(this.$element));
				var h=this.getState(g, b, e, f);
				if(this.affixed!=h) {
					null!=this.unpin&&this.$element.css("top", "");
					var i="affix"+(h?"-"+h: ""), j=a.Event(i+".bs.affix");
					if(this.$element.trigger(j), j.isDefaultPrevented())return;
					this.affixed=h,
					this.unpin="bottom"==h?this.getPinnedOffset(): null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed")+".bs.affix")
				}
				"bottom"==h&&this.$element.offset( {
					top: g-b-f
				}
				)
			}
		}
		;
		var d=a.fn.affix;
		a.fn.affix=b,
		a.fn.affix.Constructor=c,
		a.fn.affix.noConflict=function() {
			return a.fn.affix=d,
			this
		}
		,
		a(window).on("load", function() {
			a('[data-spy="affix"]').each(function() {
				var c=a(this), d=c.data();
				d.offset=d.offset|| {}
				, null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom), null!=d.offsetTop&&(d.offset.top=d.offsetTop), b.call(c, d)
			}
			)
		}
		)
	}
	(jQuery);
	!function(a, b) {
		"function"==typeof define&&define.amd?define(["jquery"], function(c) {
			return a.Bloodhound=b(c)
		}
		):"object"==typeof exports?module.exports=b(require("jquery")):a.Bloodhound=b(jQuery)
	}
	(this, function(a) {
		var b=function() {
			"use strict";
			return {
				isMsie:function() {
					return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv: )(\d+(.\d+)?)/i)[2]:!1
				}
				, isBlankString:function(a) {
					return!a||/^\s*$/.test(a)
				}
				, escapeRegExChars:function(a) {
					return a.replace(/[\-\[\]\/\ {
						\
					}
					\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				}
				, isString:function(a) {
					return"string"==typeof a
				}
				, isNumber:function(a) {
					return"number"==typeof a
				}
				, isArray:a.isArray, isFunction:a.isFunction, isObject:a.isPlainObject, isUndefined:function(a) {
					return"undefined"==typeof a
				}
				, isElement:function(a) {
					return!(!a||1!==a.nodeType)
				}
				, isJQuery:function(b) {
					return b instanceof a
				}
				, toStr:function(a) {
					return b.isUndefined(a)||null===a?"": a+""
				}
				, bind:a.proxy, each:function(b, c) {
					function d(a, b) {
						return c(b, a)
					}
					a.each(b, d)
				}
				, map:a.map, filter:a.grep, every:function(b, c) {
					var d=!0;
					return b?(a.each(b, function(a, e) {
						return(d=c.call(null, e, a, b))?void 0: !1
					}
					), !!d):d
				}
				, some:function(b, c) {
					var d=!1;
					return b?(a.each(b, function(a, e) {
						return(d=c.call(null, e, a, b))?!1: void 0
					}
					), !!d):d
				}
				, mixin:a.extend, identity:function(a) {
					return a
				}
				, clone:function(b) {
					return a.extend(!0, {}
					, b)
				}
				, getIdGenerator:function() {
					var a=0;
					return function() {
						return a++
					}
				}
				, templatify:function(b) {
					function c() {
						return String(b)
					}
					return a.isFunction(b)?b:c
				}
				, defer:function(a) {
					setTimeout(a, 0)
				}
				, debounce:function(a, b, c) {
					var d, e;
					return function() {
						var f, g, h=this, i=arguments;
						return f=function() {
							d=null, c||(e=a.apply(h, i))
						}
						, g=c&&!d, clearTimeout(d), d=setTimeout(f, b), g&&(e=a.apply(h, i)), e
					}
				}
				, throttle:function(a, b) {
					var c, d, e, f, g, h;
					return g=0, h=function() {
						g=new Date, e=null, f=a.apply(c, d)
					}
					, function() {
						var i=new Date, j=b-(i-g);
						return c=this, d=arguments, 0>=j?(clearTimeout(e), e=null, g=i, f=a.apply(c, d)): e||(e=setTimeout(h, j)), f
					}
				}
				, stringify:function(a) {
					return b.isString(a)?a: JSON.stringify(a)
				}
				, noop:function() {}
			}
		}
		(), c="0.11.1", d=function() {
			"use strict";
			function a(a) {
				return a=b.toStr(a), a?a.split(/\s+/): []
			}
			function c(a) {
				return a=b.toStr(a), a?a.split(/\W+/): []
			}
			function d(a) {
				return function(c) {
					return c=b.isArray(c)?c:[].slice.call(arguments, 0), function(d) {
						var e=[];
						return b.each(c, function(c) {
							e=e.concat(a(b.toStr(d[c])))
						}
						), e
					}
				}
			}
			return {
				nonword:c, whitespace:a, obj: {
					nonword: d(c), whitespace:d(a)
				}
			}
		}
		(), e=function() {
			"use strict";
			function c(c) {
				this.maxSize=b.isNumber(c)?c: 100, this.reset(), this.maxSize<=0&&(this.set=this.get=a.noop)
			}
			function d() {
				this.head=this.tail=null
			}
			function e(a, b) {
				this.key=a, this.val=b, this.prev=this.next=null
			}
			return b.mixin(c.prototype, {
				set:function(a, b) {
					var c, d=this.list.tail;
					this.size>=this.maxSize&&(this.list.remove(d), delete this.hash[d.key], this.size--), (c=this.hash[a])?(c.val=b, this.list.moveToFront(c)): (c=new e(a, b), this.list.add(c), this.hash[a]=c, this.size++)
				}
				, get:function(a) {
					var b=this.hash[a];
					return b?(this.list.moveToFront(b), b.val): void 0
				}
				, reset:function() {
					this.size=0, this.hash= {}
					, this.list=new d
				}
			}
			), b.mixin(d.prototype, {
				add:function(a) {
					this.head&&(a.next=this.head, this.head.prev=a), this.head=a, this.tail=this.tail||a
				}
				, remove:function(a) {
					a.prev?a.prev.next=a.next: this.head=a.next, a.next?a.next.prev=a.prev:this.tail=a.prev
				}
				, moveToFront:function(a) {
					this.remove(a), this.add(a)
				}
			}
			), c
		}
		(), f=function() {
			"use strict";
			function c(a, c) {
				this.prefix=["__", a, "__"].join(""), this.ttlKey="__ttl__", this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix)), this.ls=c||h, !this.ls&&this._noop()
			}
			function d() {
				return(new Date).getTime()
			}
			function e(a) {
				return JSON.stringify(b.isUndefined(a)?null: a)
			}
			function f(b) {
				return a.parseJSON(b)
			}
			function g(a) {
				var b, c, d=[], e=h.length;
				for(b=0;
				e>b;
				b++)(c=h.key(b)).match(a)&&d.push(c.replace(a, ""));
				return d
			}
			var h;
			try {
				h=window.localStorage, h.setItem("~~~", "!"), h.removeItem("~~~")
			}
			catch(i) {
				h=null
			}
			return b.mixin(c.prototype, {
				_prefix:function(a) {
					return this.prefix+a
				}
				, _ttlKey:function(a) {
					return this._prefix(a)+this.ttlKey
				}
				, _noop:function() {
					this.get=this.set=this.remove=this.clear=this.isExpired=b.noop
				}
				, _safeSet:function(a, b) {
					try {
						this.ls.setItem(a, b)
					}
					catch(c) {
						"QuotaExceededError"===c.name&&(this.clear(), this._noop())
					}
				}
				, get:function(a) {
					return this.isExpired(a)&&this.remove(a), f(this.ls.getItem(this._prefix(a)))
				}
				, set:function(a, c, f) {
					return b.isNumber(f)?this._safeSet(this._ttlKey(a), e(d()+f)): this.ls.removeItem(this._ttlKey(a)), this._safeSet(this._prefix(a), e(c))
				}
				, remove:function(a) {
					return this.ls.removeItem(this._ttlKey(a)), this.ls.removeItem(this._prefix(a)), this
				}
				, clear:function() {
					var a, b=g(this.keyMatcher);
					for(a=b.length;
					a--;
					)this.remove(b[a]);
					return this
				}
				, isExpired:function(a) {
					var c=f(this.ls.getItem(this._ttlKey(a)));
					return b.isNumber(c)&&d()>c?!0: !1
				}
			}
			), c
		}
		(), g=function() {
			"use strict";
			function c(a) {
				a=a|| {}
				, this.cancelled=!1, this.lastReq=null, this._send=a.transport, this._get=a.limiter?a.limiter(this._get): this._get, this._cache=a.cache===!1?new e(0):h
			}
			var d=0, f= {}
			, g=6, h=new e(10);
			return c.setMaxPendingRequests=function(a) {
				g=a
			}
			, c.resetCache=function() {
				h.reset()
			}
			, b.mixin(c.prototype, {
				_fingerprint:function(b) {
					return b=b|| {}
					, b.url+b.type+a.param(b.data|| {}
					)
				}
				, _get:function(a, b) {
					function c(a) {
						b(null, a), k._cache.set(i, a)
					}
					function e() {
						b(!0)
					}
					function h() {
						d--, delete f[i], k.onDeckRequestArgs&&(k._get.apply(k, k.onDeckRequestArgs), k.onDeckRequestArgs=null)
					}
					var i, j, k=this;
					i=this._fingerprint(a), this.cancelled||i!==this.lastReq||((j=f[i])?j.done(c).fail(e):g>d?(d++, f[i]=this._send(a).done(c).fail(e).always(h)):this.onDeckRequestArgs=[].slice.call(arguments, 0))
				}
				, get:function(c, d) {
					var e, f;
					d=d||a.noop, c=b.isString(c)? {
						url: c
					}
					:c|| {}
					, f=this._fingerprint(c), this.cancelled=!1, this.lastReq=f, (e=this._cache.get(f))?d(null, e):this._get(c, d)
				}
				, cancel:function() {
					this.cancelled=!0
				}
			}
			), c
		}
		(), h=window.SearchIndex=function() {
			"use strict";
			function c(c) {
				c=c|| {}
				, c.datumTokenizer&&c.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"), this.identify=c.identify||b.stringify, this.datumTokenizer=c.datumTokenizer, this.queryTokenizer=c.queryTokenizer, this.matchAnyQueryToken=c.matchAnyQueryToken, this.reset()
			}
			function d(a) {
				return a=b.filter(a, function(a) {
					return!!a
				}
				), a=b.map(a, function(a) {
					return a.toLowerCase()
				}
				)
			}
			function e() {
				var a= {}
				;
				return a[i]=[], a[h]= {}
				, a
			}
			function f(a) {
				for(var b= {}
				, c=[], d=0, e=a.length;
				e>d;
				d++)b[a[d]]||(b[a[d]]=!0, c.push(a[d]));
				return c
			}
			function g(a, b) {
				var c=0, d=0, e=[];
				a=a.sort(), b=b.sort();
				for(var f=a.length, g=b.length;
				f>c&&g>d;
				)a[c]<b[d]?c++: a[c]>b[d]?d++:(e.push(a[c]), c++, d++);
				return e
			}
			var h="c", i="i";
			return b.mixin(c.prototype, {
				bootstrap:function(a) {
					this.datums=a.datums, this.trie=a.trie
				}
				, add:function(a) {
					var c=this;
					a=b.isArray(a)?a:[a], b.each(a, function(a) {
						var f, g;
						c.datums[f=c.identify(a)]=a, g=d(c.datumTokenizer(a)), b.each(g, function(a) {
							var b, d, g;
							for(b=c.trie, d=a.split("");
							g=d.shift();
							)b=b[h][g]||(b[h][g]=e()), b[i].push(f)
						}
						)
					}
					)
				}
				, get:function(a) {
					var c=this;
					return b.map(a, function(a) {
						return c.datums[a]
					}
					)
				}
				, search:function(a) {
					var c, e, j=this;
					return c=d(this.queryTokenizer(a)), b.each(c, function(a) {
						var b, c, d, f;
						if(e&&0===e.length&&!j.matchAnyQueryToken)return!1;
						for(b=j.trie, c=a.split("");
						b&&(d=c.shift());
						)b=b[h][d];
						if(b&&0===c.length)f=b[i].slice(0), e=e?g(e, f): f;
						else if(!j.matchAnyQueryToken)return e=[], !1
					}
					), e?b.map(f(e), function(a) {
						return j.datums[a]
					}
					):[]
				}
				, all:function() {
					var a=[];
					for(var b in this.datums)a.push(this.datums[b]);
					return a
				}
				, reset:function() {
					this.datums= {}
					, this.trie=e()
				}
				, serialize:function() {
					return {
						datums: this.datums, trie:this.trie
					}
				}
			}
			), c
		}
		(), i=function() {
			"use strict";
			function a(a) {
				this.url=a.url, this.ttl=a.ttl, this.cache=a.cache, this.prepare=a.prepare, this.transform=a.transform, this.transport=a.transport, this.thumbprint=a.thumbprint, this.storage=new f(a.cacheKey)
			}
			var c;
			return c= {
				data: "data", protocol:"protocol", thumbprint:"thumbprint"
			}
			, b.mixin(a.prototype, {
				_settings:function() {
					return {
						url: this.url, type:"GET", dataType:"json"
					}
				}
				, store:function(a) {
					this.cache&&(this.storage.set(c.data, a, this.ttl), this.storage.set(c.protocol, location.protocol, this.ttl), this.storage.set(c.thumbprint, this.thumbprint, this.ttl))
				}
				, fromCache:function() {
					var a, b= {}
					;
					return this.cache?(b.data=this.storage.get(c.data), b.protocol=this.storage.get(c.protocol), b.thumbprint=this.storage.get(c.thumbprint), a=b.thumbprint!==this.thumbprint||b.protocol!==location.protocol, b.data&&!a?b.data: null):null
				}
				, fromNetwork:function(a) {
					function b() {
						a(!0)
					}
					function c(b) {
						a(null, e.transform(b))
					}
					var d, e=this;
					a&&(d=this.prepare(this._settings()), this.transport(d).fail(b).done(c))
				}
				, clear:function() {
					return this.storage.clear(), this
				}
			}
			), a
		}
		(), j=function() {
			"use strict";
			function a(a) {
				this.url=a.url, this.prepare=a.prepare, this.transform=a.transform, this.indexResponse=a.indexResponse, this.transport=new g( {
					cache: a.cache, limiter:a.limiter, transport:a.transport
				}
				)
			}
			return b.mixin(a.prototype, {
				_settings:function() {
					return {
						url: this.url, type:"GET", dataType:"json"
					}
				}
				, get:function(a, b) {
					function c(a, c) {
						b(a?[]: e.transform(c))
					}
					var d, e=this;
					if(b)return a=a||"", d=this.prepare(a, this._settings()), this.transport.get(d, c)
				}
				, cancelLastRequest:function() {
					this.transport.cancel()
				}
			}
			), a
		}
		(), k=function() {
			"use strict";
			function d(d) {
				var e;
				return d?(e= {
					url: null, ttl:864e5, cache:!0, cacheKey:null, thumbprint:"", prepare:b.identity, transform:b.identity, transport:null
				}
				, d=b.isString(d)? {
					url: d
				}
				:d, d=b.mixin(e, d), !d.url&&a.error("prefetch requires url to be set"), d.transform=d.filter||d.transform, d.cacheKey=d.cacheKey||d.url, d.thumbprint=c+d.thumbprint, d.transport=d.transport?h(d.transport):a.ajax, d):null
			}
			function e(c) {
				var d;
				if(c)return d= {
					url: null, cache:!0, prepare:null, replace:null, wildcard:null, limiter:null, rateLimitBy:"debounce", rateLimitWait:300, transform:b.identity, transport:null
				}
				, c=b.isString(c)? {
					url: c
				}
				:c, c=b.mixin(d, c), !c.url&&a.error("remote requires url to be set"), c.transform=c.filter||c.transform, c.prepare=f(c), c.limiter=g(c), c.transport=c.transport?h(c.transport):a.ajax, delete c.replace, delete c.wildcard, delete c.rateLimitBy, delete c.rateLimitWait, c
			}
			function f(a) {
				function b(a, b) {
					return b.url=f(b.url, a), b
				}
				function c(a, b) {
					return b.url=b.url.replace(g, encodeURIComponent(a)), b
				}
				function d(a, b) {
					return b
				}
				var e, f, g;
				return e=a.prepare, f=a.replace, g=a.wildcard, e?e:e=f?b:a.wildcard?c:d
			}
			function g(a) {
				function c(a) {
					return function(c) {
						return b.debounce(c, a)
					}
				}
				function d(a) {
					return function(c) {
						return b.throttle(c, a)
					}
				}
				var e, f, g;
				return e=a.limiter, f=a.rateLimitBy, g=a.rateLimitWait, e||(e=/^throttle$/i.test(f)?d(g):c(g)), e
			}
			function h(c) {
				return function(d) {
					function e(a) {
						b.defer(function() {
							g.resolve(a)
						}
						)
					}
					function f(a) {
						b.defer(function() {
							g.reject(a)
						}
						)
					}
					var g=a.Deferred();
					return c(d, e, f), g
				}
			}
			return function(c) {
				var f, g;
				return f= {
					initialize: !0, identify:b.stringify, datumTokenizer:null, queryTokenizer:null, matchAnyQueryToken:!1, sufficient:5, indexRemote:!1, sorter:null, local:[], prefetch:null, remote:null
				}
				, c=b.mixin(f, c|| {}
				), !c.datumTokenizer&&a.error("datumTokenizer is required"), !c.queryTokenizer&&a.error("queryTokenizer is required"), g=c.sorter, c.sorter=g?function(a) {
					return a.sort(g)
				}
				:b.identity, c.local=b.isFunction(c.local)?c.local():c.local, c.prefetch=d(c.prefetch), c.remote=e(c.remote), c
			}
		}
		(), l=function() {
			"use strict";
			function c(a) {
				a=k(a), this.sorter=a.sorter, this.identify=a.identify, this.sufficient=a.sufficient, this.indexRemote=a.indexRemote, this.local=a.local, this.remote=a.remote?new j(a.remote):null, this.prefetch=a.prefetch?new i(a.prefetch):null, this.index=new h( {
					identify: this.identify, datumTokenizer:a.datumTokenizer, queryTokenizer:a.queryTokenizer
				}
				), a.initialize!==!1&&this.initialize()
			}
			var e;
			return e=window&&window.Bloodhound, c.noConflict=function() {
				return window&&(window.Bloodhound=e), c
			}
			, c.tokenizers=d, b.mixin(c.prototype, {
				__ttAdapter:function() {
					function a(a, b, d) {
						return c.search(a, b, d)
					}
					function b(a, b) {
						return c.search(a, b)
					}
					var c=this;
					return this.remote?a:b
				}
				, _loadPrefetch:function() {
					function b(a, b) {
						return a?c.reject(): (e.add(b), e.prefetch.store(e.index.serialize()), void c.resolve())
					}
					var c, d, e=this;
					return c=a.Deferred(), this.prefetch?(d=this.prefetch.fromCache())?(this.index.bootstrap(d), c.resolve()):this.prefetch.fromNetwork(b):c.resolve(), c.promise()
				}
				, _initialize:function() {
					function a() {
						b.add(b.local)
					}
					var b=this;
					return this.clear(), (this.initPromise=this._loadPrefetch()).done(a), this.initPromise
				}
				, initialize:function(a) {
					return!this.initPromise||a?this._initialize(): this.initPromise
				}
				, add:function(a) {
					return this.index.add(a), this
				}
				, get:function(a) {
					return a=b.isArray(a)?a: [].slice.call(arguments), this.index.get(a)
				}
				, search:function(a, c, d) {
					function e(a) {
						var c=[];
						b.each(a, function(a) {
							!b.some(f, function(b) {
								return g.identify(a)===g.identify(b)
							}
							)&&c.push(a)
						}
						), g.indexRemote&&g.add(c), d(c)
					}
					var f, g=this;
					return c=c||b.noop, d=d||b.noop, f=this.sorter(this.index.search(a)), c(this.remote?f.slice():f), this.remote&&f.length<this.sufficient?this.remote.get(a, e):this.remote&&this.remote.cancelLastRequest(), this
				}
				, all:function() {
					return this.index.all()
				}
				, clear:function() {
					return this.index.reset(), this
				}
				, clearPrefetchCache:function() {
					return this.prefetch&&this.prefetch.clear(), this
				}
				, clearRemoteCache:function() {
					return g.resetCache(), this
				}
				, ttAdapter:function() {
					return this.__ttAdapter()
				}
			}
			), c
		}
		();
		return l
	}
	),
	function(a, b) {
		"function"==typeof define&&define.amd?define(["jquery"], function(a) {
			return b(a)
		}
		):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)
	}
	(this, function(a) {
		var b=function() {
			"use strict";
			return {
				isMsie:function() {
					return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv: )(\d+(.\d+)?)/i)[2]:!1
				}
				, isBlankString:function(a) {
					return!a||/^\s*$/.test(a)
				}
				, escapeRegExChars:function(a) {
					return a.replace(/[\-\[\]\/\ {
						\
					}
					\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				}
				, isString:function(a) {
					return"string"==typeof a
				}
				, isNumber:function(a) {
					return"number"==typeof a
				}
				, isArray:a.isArray, isFunction:a.isFunction, isObject:a.isPlainObject, isUndefined:function(a) {
					return"undefined"==typeof a
				}
				, isElement:function(a) {
					return!(!a||1!==a.nodeType)
				}
				, isJQuery:function(b) {
					return b instanceof a
				}
				, toStr:function(a) {
					return b.isUndefined(a)||null===a?"": a+""
				}
				, bind:a.proxy, each:function(b, c) {
					function d(a, b) {
						return c(b, a)
					}
					a.each(b, d)
				}
				, map:a.map, filter:a.grep, every:function(b, c) {
					var d=!0;
					return b?(a.each(b, function(a, e) {
						return(d=c.call(null, e, a, b))?void 0: !1
					}
					), !!d):d
				}
				, some:function(b, c) {
					var d=!1;
					return b?(a.each(b, function(a, e) {
						return(d=c.call(null, e, a, b))?!1: void 0
					}
					), !!d):d
				}
				, mixin:a.extend, identity:function(a) {
					return a
				}
				, clone:function(b) {
					return a.extend(!0, {}
					, b)
				}
				, getIdGenerator:function() {
					var a=0;
					return function() {
						return a++
					}
				}
				, templatify:function(b) {
					function c() {
						return String(b)
					}
					return a.isFunction(b)?b:c
				}
				, defer:function(a) {
					setTimeout(a, 0)
				}
				, debounce:function(a, b, c) {
					var d, e;
					return function() {
						var f, g, h=this, i=arguments;
						return f=function() {
							d=null, c||(e=a.apply(h, i))
						}
						, g=c&&!d, clearTimeout(d), d=setTimeout(f, b), g&&(e=a.apply(h, i)), e
					}
				}
				, throttle:function(a, b) {
					var c, d, e, f, g, h;
					return g=0, h=function() {
						g=new Date, e=null, f=a.apply(c, d)
					}
					, function() {
						var i=new Date, j=b-(i-g);
						return c=this, d=arguments, 0>=j?(clearTimeout(e), e=null, g=i, f=a.apply(c, d)): e||(e=setTimeout(h, j)), f
					}
				}
				, stringify:function(a) {
					return b.isString(a)?a: JSON.stringify(a)
				}
				, noop:function() {}
			}
		}
		(), c=function() {
			"use strict";
			function a(a) {
				var g, h;
				return h=b.mixin( {}
				, f, a), g= {
					css: e(), classes:h, html:c(h), selectors:d(h)
				}
				, {
					css:g.css, html:g.html, classes:g.classes, selectors:g.selectors, mixin:function(a) {
						b.mixin(a, g)
					}
				}
			}
			function c(a) {
				return {
					wrapper: '<span class="'+a.wrapper+'"></span>', menu:'<div class="'+a.menu+'"></div>'
				}
			}
			function d(a) {
				var c= {}
				;
				return b.each(a, function(a, b) {
					c[b]="."+a
				}
				), c
			}
			function e() {
				var a= {
					wrapper: {
						position: "relative", display:"inline-block"
					}
					, hint: {
						position: "absolute", top:"0", left:"0", borderColor:"transparent", boxShadow:"none", opacity:"1"
					}
					, input: {
						position: "relative", verticalAlign:"top", backgroundColor:"transparent"
					}
					, inputWithNoHint: {
						position: "relative", verticalAlign:"top"
					}
					, menu: {
						position: "absolute", top:"100%", left:"0", zIndex:"1001", display:"none"
					}
					, ltr: {
						left: "0", right:"auto"
					}
					, rtl: {
						left: "auto", right:" 0"
					}
				}
				;
				return b.isMsie()&&b.mixin(a.input, {
					backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
				}
				), a
			}
			var f= {
				wrapper: "twitter-typeahead", input:"tt-input", hint:"tt-hint", menu:"tt-menu", dataset:"tt-dataset", suggestion:"tt-suggestion", selectable:"tt-selectable", empty:"tt-empty", open:"tt-open", cursor:"tt-cursor", highlight:"tt-highlight"
			}
			;
			return a
		}
		(), d=function() {
			"use strict";
			function c(b) {
				b&&b.el||a.error("EventBus initialized without el"), this.$el=a(b.el)
			}
			var d, e;
			return d="typeahead:", e= {
				render: "rendered", cursorchange:"cursorchanged", select:"selected", autocomplete:"autocompleted"
			}
			, b.mixin(c.prototype, {
				_trigger:function(b, c) {
					var e;
					return e=a.Event(d+b), (c=c||[]).unshift(e), this.$el.trigger.apply(this.$el, c), e
				}
				, before:function(a) {
					var b, c;
					return b=[].slice.call(arguments, 1), c=this._trigger("before"+a, b), c.isDefaultPrevented()
				}
				, trigger:function(a) {
					var b;
					this._trigger(a, [].slice.call(arguments, 1)), (b=e[a])&&this._trigger(b, [].slice.call(arguments, 1))
				}
			}
			), c
		}
		(), e=function() {
			"use strict";
			function a(a, b, c, d) {
				var e;
				if(!c)return this;
				for(b=b.split(i), c=d?h(c, d):c, this._callbacks=this._callbacks|| {}
				;
				e=b.shift();
				)this._callbacks[e]=this._callbacks[e]|| {
					sync: [], async:[]
				}
				, this._callbacks[e][a].push(c);
				return this
			}
			function b(b, c, d) {
				return a.call(this, "async", b, c, d)
			}
			function c(b, c, d) {
				return a.call(this, "sync", b, c, d)
			}
			function d(a) {
				var b;
				if(!this._callbacks)return this;
				for(a=a.split(i);
				b=a.shift();
				)delete this._callbacks[b];
				return this
			}
			function e(a) {
				var b, c, d, e, g;
				if(!this._callbacks)return this;
				for(a=a.split(i), d=[].slice.call(arguments, 1);
				(b=a.shift())&&(c=this._callbacks[b]);
				)e=f(c.sync, this, [b].concat(d)), g=f(c.async, this, [b].concat(d)), e()&&j(g);
				return this
			}
			function f(a, b, c) {
				function d() {
					for(var d, e=0, f=a.length;
					!d&&f>e;
					e+=1)d=a[e].apply(b, c)===!1;
					return!d
				}
				return d
			}
			function g() {
				var a;
				return a=window.setImmediate?function(a) {
					setImmediate(function() {
						a()
					}
					)
				}
				:function(a) {
					setTimeout(function() {
						a()
					}
					, 0)
				}
			}
			function h(a, b) {
				return a.bind?a.bind(b):function() {
					a.apply(b, [].slice.call(arguments, 0))
				}
			}
			var i=/\s+/, j=g();
			return {
				onSync: c, onAsync:b, off:d, trigger:e
			}
		}
		(), f=function(a) {
			"use strict";
			function c(a, c, d) {
				for(var e, f=[], g=0, h=a.length;
				h>g;
				g++)f.push(b.escapeRegExChars(a[g]));
				return e=d?"\\b("+f.join("|")+")\\b": "("+f.join("|")+")", c?new RegExp(e):new RegExp(e, "i")
			}
			var d= {
				node: null, pattern:null, tagName:"strong", className:null, wordsOnly:!1, caseSensitive:!1
			}
			;
			return function(e) {
				function f(b) {
					var c, d, f;
					return(c=h.exec(b.data))&&(f=a.createElement(e.tagName), e.className&&(f.className=e.className), d=b.splitText(c.index), d.splitText(c[0].length), f.appendChild(d.cloneNode(!0)), b.parentNode.replaceChild(f, d)), !!c
				}
				function g(a, b) {
					for(var c, d=3, e=0;
					e<a.childNodes.length;
					e++)c=a.childNodes[e], c.nodeType===d?e+=b(c)?1: 0:g(c, b)
				}
				var h;
				e=b.mixin( {}
				, d, e), e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern], h=c(e.pattern, e.caseSensitive, e.wordsOnly), g(e.node, f))
			}
		}
		(window.document), g=function() {
			"use strict";
			function c(c, e) {
				c=c|| {}
				, c.input||a.error("input is missing"), e.mixin(this), this.$hint=a(c.hint), this.$input=a(c.input), this.query=this.$input.val(), this.queryWhenFocused=this.hasFocus()?this.query: null, this.$overflowHelper=d(this.$input), this._checkLanguageDirection(), 0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop)
			}
			function d(b) {
				return a('<pre aria-hidden="true"></pre>').css( {
					position: "absolute", visibility:"hidden", whiteSpace:"pre", fontFamily:b.css("font-family"), fontSize:b.css("font-size"), fontStyle:b.css("font-style"), fontVariant:b.css("font-variant"), fontWeight:b.css("font-weight"), wordSpacing:b.css("word-spacing"), letterSpacing:b.css("letter-spacing"), textIndent:b.css("text-indent"), textRendering:b.css("text-rendering"), textTransform:b.css("text-transform")
				}
				).insertAfter(b)
			}
			function f(a, b) {
				return c.normalizeQuery(a)===c.normalizeQuery(b)
			}
			function g(a) {
				return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey
			}
			var h;
			return h= {
				9: "tab", 27:"esc", 37:"left", 39:"right", 13:"enter", 38:"up", 40:"down"
			}
			, c.normalizeQuery=function(a) {
				return b.toStr(a).replace(/^\s*/g, "").replace(/\s {
					2,
				}
				/g, " ")
			}
			, b.mixin(c.prototype, e, {
				_onBlur:function() {
					this.resetInputValue(), this.trigger("blurred")
				}
				, _onFocus:function() {
					this.queryWhenFocused=this.query, this.trigger("focused")
				}
				, _onKeydown:function(a) {
					var b=h[a.which||a.keyCode];
					this._managePreventDefault(b, a), b&&this._shouldTrigger(b, a)&&this.trigger(b+"Keyed", a)
				}
				, _onInput:function() {
					this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
				}
				, _managePreventDefault:function(a, b) {
					var c;
					switch(a) {
						case"up": case"down":c=!g(b);
						break;
						default: c=!1
					}
					c&&b.preventDefault()
				}
				, _shouldTrigger:function(a, b) {
					var c;
					switch(a) {
						case"tab": c=!g(b);
						break;
						default: c=!0
					}
					return c
				}
				, _checkLanguageDirection:function() {
					var a=(this.$input.css("direction")||"ltr").toLowerCase();
					this.dir!==a&&(this.dir=a, this.$hint.attr("dir", a), this.trigger("langDirChanged", a))
				}
				, _setQuery:function(a, b) {
					var c, d;
					c=f(a, this.query), d=c?this.query.length!==a.length: !1, this.query=a, b||c?!b&&d&&this.trigger("whitespaceChanged", this.query):this.trigger("queryChanged", this.query)
				}
				, bind:function() {
					var a, c, d, e, f=this;
					return a=b.bind(this._onBlur, this), c=b.bind(this._onFocus, this), d=b.bind(this._onKeydown, this), e=b.bind(this._onInput, this), this.$input.on("blur.tt", a).on("focus.tt", c).on("keydown.tt", d), !b.isMsie()||b.isMsie()>9?this.$input.on("input.tt", e):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(a) {
						h[a.which||a.keyCode]||b.defer(b.bind(f._onInput, f, a))
					}
					), this
				}
				, focus:function() {
					this.$input.focus()
				}
				, blur:function() {
					this.$input.blur()
				}
				, getLangDir:function() {
					return this.dir
				}
				, getQuery:function() {
					return this.query||""
				}
				, setQuery:function(a, b) {
					this.setInputValue(a), this._setQuery(a, b)
				}
				, hasQueryChangedSinceLastFocus:function() {
					return this.query!==this.queryWhenFocused
				}
				, getInputValue:function() {
					return this.$input.val()
				}
				, setInputValue:function(a) {
					this.$input.val(a), this.clearHintIfInvalid(), this._checkLanguageDirection()
				}
				, resetInputValue:function() {
					this.setInputValue(this.query)
				}
				, getHint:function() {
					return this.$hint.val()
				}
				, setHint:function(a) {
					this.$hint.val(a)
				}
				, clearHint:function() {
					this.setHint("")
				}
				, clearHintIfInvalid:function() {
					var a, b, c, d;
					a=this.getInputValue(), b=this.getHint(), c=a!==b&&0===b.indexOf(a), d=""!==a&&c&&!this.hasOverflow(), !d&&this.clearHint()
				}
				, hasFocus:function() {
					return this.$input.is(":focus")
				}
				, hasOverflow:function() {
					var a=this.$input.width()-2;
					return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width()>=a
				}
				, isCursorAtEnd:function() {
					var a, c, d;
					return a=this.$input.val().length, c=this.$input[0].selectionStart, b.isNumber(c)?c===a: document.selection?(d=document.selection.createRange(), d.moveStart("character", -a), a===d.text.length):!0
				}
				, destroy:function() {
					this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint=this.$input=this.$overflowHelper=a("<div>")
				}
			}
			), c
		}
		(), h=function() {
			"use strict";
			function c(c, e) {
				c=c|| {}
				, c.templates=c.templates|| {}
				, c.templates.notFound=c.templates.notFound||c.templates.empty, c.source||a.error("missing source"), c.node||a.error("missing node"), c.name&&!h(c.name)&&a.error("invalid dataset name: "+c.name), e.mixin(this), this.highlight=!!c.highlight, this.name=c.name||j(), this.limit=c.limit||5, this.displayFn=d(c.display||c.displayKey), this.templates=g(c.templates, this.displayFn), this.source=c.source.__ttAdapter?c.source.__ttAdapter(): c.source, this.async=b.isUndefined(c.async)?this.source.length>2:!!c.async, this._resetLastSuggestion(), this.$el=a(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)
			}
			function d(a) {
				function c(b) {
					return b[a]
				}
				return a=a||b.stringify, b.isFunction(a)?a:c
			}
			function g(c, d) {
				function e(b) {
					return a("<div>").text(d(b))
				}
				return {
					notFound: c.notFound&&b.templatify(c.notFound), pending:c.pending&&b.templatify(c.pending), header:c.header&&b.templatify(c.header), footer:c.footer&&b.templatify(c.footer), suggestion:c.suggestion||e
				}
			}
			function h(a) {
				return/^[_a-zA-Z0-9-]+$/.test(a)
			}
			var i, j;
			return i= {
				val: "tt-selectable-display", obj:"tt-selectable-object"
			}
			, j=b.getIdGenerator(), c.extractData=function(b) {
				var c=a(b);
				return c.data(i.obj)? {
					val: c.data(i.val)||"", obj:c.data(i.obj)||null
				}
				:null
			}
			, b.mixin(c.prototype, e, {
				_overwrite:function(a, b) {
					b=b||[], b.length?this._renderSuggestions(a, b): this.async&&this.templates.pending?this._renderPending(a):!this.async&&this.templates.notFound?this._renderNotFound(a):this._empty(), this.trigger("rendered", this.name, b, !1)
				}
				, _append:function(a, b) {
					b=b||[], b.length&&this.$lastSuggestion.length?this._appendSuggestions(a, b): b.length?this._renderSuggestions(a, b):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(a), this.trigger("rendered", this.name, b, !0)
				}
				, _renderSuggestions:function(a, b) {
					var c;
					c=this._getSuggestionsFragment(a, b), this.$lastSuggestion=c.children().last(), this.$el.html(c).prepend(this._getHeader(a, b)).append(this._getFooter(a, b))
				}
				, _appendSuggestions:function(a, b) {
					var c, d;
					c=this._getSuggestionsFragment(a, b), d=c.children().last(), this.$lastSuggestion.after(c), this.$lastSuggestion=d
				}
				, _renderPending:function(a) {
					var b=this.templates.pending;
					this._resetLastSuggestion(), b&&this.$el.html(b( {
						query: a, dataset:this.name
					}
					))
				}
				, _renderNotFound:function(a) {
					var b=this.templates.notFound;
					this._resetLastSuggestion(), b&&this.$el.html(b( {
						query: a, dataset:this.name
					}
					))
				}
				, _empty:function() {
					this.$el.empty(), this._resetLastSuggestion()
				}
				, _getSuggestionsFragment:function(c, d) {
					var e, g=this;
					return e=document.createDocumentFragment(), b.each(d, function(b) {
						var d, f;
						f=g._injectQuery(c, b), d=a(g.templates.suggestion(f)).data(i.obj, b).data(i.val, g.displayFn(b)).addClass(g.classes.suggestion+" "+g.classes.selectable), e.appendChild(d[0])
					}
					), this.highlight&&f( {
						className: this.classes.highlight, node:e, pattern:c
					}
					), a(e)
				}
				, _getFooter:function(a, b) {
					return this.templates.footer?this.templates.footer( {
						query: a, suggestions:b, dataset:this.name
					}
					):null
				}
				, _getHeader:function(a, b) {
					return this.templates.header?this.templates.header( {
						query: a, suggestions:b, dataset:this.name
					}
					):null
				}
				, _resetLastSuggestion:function() {
					this.$lastSuggestion=a()
				}
				, _injectQuery:function(a, c) {
					return b.isObject(c)?b.mixin( {
						_query: a
					}
					, c):c
				}
				, update:function(b) {
					function c(a) {
						g||(g=!0, a=(a||[]).slice(0, e.limit), h=a.length, e._overwrite(b, a), h<e.limit&&e.async&&e.trigger("asyncRequested", b))
					}
					function d(c) {
						c=c||[], !f&&h<e.limit&&(e.cancel=a.noop, e._append(b, c.slice(0, e.limit-h)), h+=c.length, e.async&&e.trigger("asyncReceived", b))
					}
					var e=this, f=!1, g=!1, h=0;
					this.cancel(), this.cancel=function() {
						f=!0, e.cancel=a.noop, e.async&&e.trigger("asyncCanceled", b)
					}
					, this.source(b, c, d), !g&&c([])
				}
				, cancel:a.noop, clear:function() {
					this._empty(), this.cancel(), this.trigger("cleared")
				}
				, isEmpty:function() {
					return this.$el.is(":empty")
				}
				, destroy:function() {
					this.$el=a("<div>")
				}
			}
			), c
		}
		(), i=function() {
			"use strict";
			function c(c, d) {
				function e(b) {
					var c=f.$node.find(b.node).first();
					return b.node=c.length?c: a("<div>").appendTo(f.$node), new h(b, d)
				}
				var f=this;
				c=c|| {}
				, c.node||a.error("node is required"), d.mixin(this), this.$node=a(c.node), this.query=null, this.datasets=b.map(c.datasets, e)
			}
			return b.mixin(c.prototype, e, {
				_onSelectableClick:function(b) {
					this.trigger("selectableClicked", a(b.currentTarget))
				}
				, _onRendered:function(a, b, c, d) {
					this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", b, c, d)
				}
				, _onCleared:function() {
					this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
				}
				, _propagate:function() {
					this.trigger.apply(this, arguments)
				}
				, _allDatasetsEmpty:function() {
					function a(a) {
						return a.isEmpty()
					}
					return b.every(this.datasets, a)
				}
				, _getSelectables:function() {
					return this.$node.find(this.selectors.selectable)
				}
				, _removeCursor:function() {
					var a=this.getActiveSelectable();
					a&&a.removeClass(this.classes.cursor)
				}
				, _ensureVisible:function(a) {
					var b, c, d, e;
					b=a.position().top, c=b+a.outerHeight(!0), d=this.$node.scrollTop(), e=this.$node.height()+parseInt(this.$node.css("paddingTop"), 10)+parseInt(this.$node.css("paddingBottom"), 10), 0>b?this.$node.scrollTop(d+b): c>e&&this.$node.scrollTop(d+(c-e))
				}
				, bind:function() {
					var c, d=this;
					return c=b.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, c), this.$node.on("mouseover", this.selectors.selectable, function() {
						d.setCursor(a(this))
					}
					), b.each(this.datasets, function(a) {
						a.onSync("asyncRequested", d._propagate, d).onSync("asyncCanceled", d._propagate, d).onSync("asyncReceived", d._propagate, d).onSync("rendered", d._onRendered, d).onSync("cleared", d._onCleared, d)
					}
					), this
				}
				, isOpen:function() {
					return this.$node.hasClass(this.classes.open)
				}
				, open:function() {
					this.$node.scrollTop(0), this.$node.addClass(this.classes.open)
				}
				, close:function() {
					this.$node.removeClass(this.classes.open), this._removeCursor()
				}
				, setLanguageDirection:function(a) {
					this.$node.attr("dir", a)
				}
				, selectableRelativeToCursor:function(a) {
					var b, c, d, e;
					return c=this.getActiveSelectable(), b=this._getSelectables(), d=c?b.index(c): -1, e=d+a, e=(e+1)%(b.length+1)-1, e=-1>e?b.length-1:e, -1===e?null:b.eq(e)
				}
				, setCursor:function(a) {
					this._removeCursor(), (a=a&&a.first())&&(a.addClass(this.classes.cursor), this._ensureVisible(a))
				}
				, getSelectableData:function(a) {
					return a&&a.length?h.extractData(a): null
				}
				, getActiveSelectable:function() {
					var a=this._getSelectables().filter(this.selectors.cursor).first();
					return a.length?a: null
				}
				, getTopSelectable:function() {
					var a=this._getSelectables().first();
					return a.length?a: null
				}
				, update:function(a) {
					function c(b) {
						b.update(a)
					}
					var d=a!==this.query;
					return d&&(this.query=a, b.each(this.datasets, c)), d
				}
				, empty:function() {
					function a(a) {
						a.clear()
					}
					b.each(this.datasets, a), this.query=null, this.$node.addClass(this.classes.empty)
				}
				, destroy:function() {
					function c(a) {
						a.destroy()
					}
					this.$node.off(".tt"), this.$node=a("<div>"), b.each(this.datasets, c)
				}
			}
			), c
		}
		(), j=function() {
			"use strict";
			function a() {
				i.apply(this, [].slice.call(arguments, 0))
			}
			var c=i.prototype;
			return b.mixin(a.prototype, i.prototype, {
				open:function() {
					return!this._allDatasetsEmpty()&&this._show(), c.open.apply(this, [].slice.call(arguments, 0))
				}
				, close:function() {
					return this._hide(), c.close.apply(this, [].slice.call(arguments, 0))
				}
				, _onRendered:function() {
					return this._allDatasetsEmpty()?this._hide(): this.isOpen()&&this._show(), c._onRendered.apply(this, [].slice.call(arguments, 0))
				}
				, _onCleared:function() {
					return this._allDatasetsEmpty()?this._hide(): this.isOpen()&&this._show(), c._onCleared.apply(this, [].slice.call(arguments, 0))
				}
				, setLanguageDirection:function(a) {
					return this.$node.css("ltr"===a?this.css.ltr: this.css.rtl), c.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
				}
				, _hide:function() {
					this.$node.hide()
				}
				, _show:function() {
					this.$node.css("display", "block")
				}
			}
			), a
		}
		(), k=function() {
			"use strict";
			function c(c, e) {
				var f, g, h, i, j, k, l, m, n, o, p;
				c=c|| {}
				, c.input||a.error("missing input"), c.menu||a.error("missing menu"), c.eventBus||a.error("missing event bus"), e.mixin(this), this.eventBus=c.eventBus, this.minLength=b.isNumber(c.minLength)?c.minLength: 1, this.input=c.input, this.menu=c.menu, this.enabled=!0, this.active=!1, this.input.hasFocus()&&this.activate(), this.dir=this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), f=d(this, "activate", "open", "_onFocused"), g=d(this, "deactivate", "_onBlurred"), h=d(this, "isActive", "isOpen", "_onEnterKeyed"), i=d(this, "isActive", "isOpen", "_onTabKeyed"), j=d(this, "isActive", "_onEscKeyed"), k=d(this, "isActive", "open", "_onUpKeyed"), l=d(this, "isActive", "open", "_onDownKeyed"), m=d(this, "isActive", "isOpen", "_onLeftKeyed"), n=d(this, "isActive", "isOpen", "_onRightKeyed"), o=d(this, "_openIfActive", "_onQueryChanged"), p=d(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", f, this).onSync("blurred", g, this).onSync("enterKeyed", h, this).onSync("tabKeyed", i, this).onSync("escKeyed", j, this).onSync("upKeyed", k, this).onSync("downKeyed", l, this).onSync("leftKeyed", m, this).onSync("rightKeyed", n, this).onSync("queryChanged", o, this).onSync("whitespaceChanged", p, this).onSync("langDirChanged", this._onLangDirChanged, this)
			}
			function d(a) {
				var c=[].slice.call(arguments, 1);
				return function() {
					var d=[].slice.call(arguments);
					b.each(c, function(b) {
						return a[b].apply(a, d)
					}
					)
				}
			}
			return b.mixin(c.prototype, {
				_hacks:function() {
					var c, d;
					c=this.input.$input||a("<div>"), d=this.menu.$node||a("<div>"), c.on("blur.tt", function(a) {
						var e, f, g;
						e=document.activeElement, f=d.is(e), g=d.has(e).length>0, b.isMsie()&&(f||g)&&(a.preventDefault(), a.stopImmediatePropagation(), b.defer(function() {
							c.focus()
						}
						))
					}
					), d.on("mousedown.tt", function(a) {
						a.preventDefault()
					}
					)
				}
				, _onSelectableClicked:function(a, b) {
					this.select(b)
				}
				, _onDatasetCleared:function() {
					this._updateHint()
				}
				, _onDatasetRendered:function(a, b, c, d) {
					this._updateHint(), this.eventBus.trigger("render", c, d, b)
				}
				, _onAsyncRequested:function(a, b, c) {
					this.eventBus.trigger("asyncrequest", c, b)
				}
				, _onAsyncCanceled:function(a, b, c) {
					this.eventBus.trigger("asynccancel", c, b)
				}
				, _onAsyncReceived:function(a, b, c) {
					this.eventBus.trigger("asyncreceive", c, b)
				}
				, _onFocused:function() {
					this._minLengthMet()&&this.menu.update(this.input.getQuery())
				}
				, _onBlurred:function() {
					this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change", this.input.getQuery())
				}
				, _onEnterKeyed:function(a, b) {
					var c;
					(c=this.menu.getActiveSelectable())&&this.select(c)&&b.preventDefault()
				}
				, _onTabKeyed:function(a, b) {
					var c;
					(c=this.menu.getActiveSelectable())?this.select(c)&&b.preventDefault(): (c=this.menu.getTopSelectable())&&this.autocomplete(c)&&b.preventDefault()
				}
				, _onEscKeyed:function() {
					this.close()
				}
				, _onUpKeyed:function() {
					this.moveCursor(-1)
				}
				, _onDownKeyed:function() {
					this.moveCursor(1)
				}
				, _onLeftKeyed:function() {
					"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getActiveSelectable()||this.menu.getTopSelectable())
				}
				, _onRightKeyed:function() {
					"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getActiveSelectable()||this.menu.getTopSelectable())
				}
				, _onQueryChanged:function(a, b) {
					this._minLengthMet(b)?this.menu.update(b): this.menu.empty()
				}
				, _onWhitespaceChanged:function() {
					this._updateHint()
				}
				, _onLangDirChanged:function(a, b) {
					this.dir!==b&&(this.dir=b, this.menu.setLanguageDirection(b))
				}
				, _openIfActive:function() {
					this.isActive()&&this.open()
				}
				, _minLengthMet:function(a) {
					return a=b.isString(a)?a: this.input.getQuery()||"", a.length>=this.minLength
				}
				, _updateHint:function() {
					var a, c, d, e, f, h, i;
					a=this.menu.getTopSelectable(), c=this.menu.getSelectableData(a), d=this.input.getInputValue(), !c||b.isBlankString(d)||this.input.hasOverflow()?this.input.clearHint(): (e=g.normalizeQuery(d), f=b.escapeRegExChars(e), h=new RegExp("^(?:"+f+")(.+$)", "i"), i=h.exec(c.val), i&&this.input.setHint(d+i[1]))
				}
				, isEnabled:function() {
					return this.enabled
				}
				, enable:function() {
					this.enabled=!0
				}
				, disable:function() {
					this.enabled=!1
				}
				, isActive:function() {
					return this.active
				}
				, activate:function() {
					return this.isActive()?!0: !this.isEnabled()||this.eventBus.before("active")?!1:(this.active=!0, this.eventBus.trigger("active"), !0)
				}
				, deactivate:function() {
					return this.isActive()?this.eventBus.before("idle")?!1: (this.active=!1, this.close(), this.eventBus.trigger("idle"), !0):!0
				}
				, isOpen:function() {
					return this.menu.isOpen()
				}
				, open:function() {
					return this.isOpen()||this.eventBus.before("open")||(this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
				}
				, close:function() {
					return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
				}
				, setVal:function(a) {
					this.input.setQuery(b.toStr(a))
				}
				, getVal:function() {
					return this.input.getQuery()
				}
				, select:function(a) {
					var b=this.menu.getSelectableData(a);
					return b&&!this.eventBus.before("select", b.obj)?(this.input.setQuery(b.val, !0), this.eventBus.trigger("select", b.obj), this.close(), !0): !1
				}
				, autocomplete:function(a) {
					var b, c, d;
					return b=this.input.getQuery(), c=this.menu.getSelectableData(a), d=c&&b!==c.val, d&&!this.eventBus.before("autocomplete", c.obj)?(this.input.setQuery(c.val), this.eventBus.trigger("autocomplete", c.obj), !0): !1
				}
				, moveCursor:function(a) {
					var b, c, d, e, f;
					return b=this.input.getQuery(), c=this.menu.selectableRelativeToCursor(a), d=this.menu.getSelectableData(c), e=d?d.obj: null, f=this._minLengthMet()&&this.menu.update(b), f||this.eventBus.before("cursorchange", e)?!1:(this.menu.setCursor(c), d?this.input.setInputValue(d.val):(this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", e), !0)
				}
				, destroy:function() {
					this.input.destroy(), this.menu.destroy()
				}
			}
			), c
		}
		();
		!function() {
			"use strict";
			function e(b, c) {
				b.each(function() {
					var b, d=a(this);
					(b=d.data(p.typeahead))&&c(b, d)
				}
				)
			}
			function f(a, b) {
				return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(l(a)).prop("readonly", !0).removeAttr("id name placeholder required").attr( {
					autocomplete: "off", spellcheck:"false", tabindex:-1
				}
				)
			}
			function h(a, b) {
				a.data(p.attrs, {
					dir: a.attr("dir"), autocomplete:a.attr("autocomplete"), spellcheck:a.attr("spellcheck"), style:a.attr("style")
				}
				), a.addClass(b.classes.input).attr( {
					autocomplete: "off", spellcheck:!1
				}
				);
				try {
					!a.attr("dir")&&a.attr("dir", "auto")
				}
				catch(c) {}
				return a
			}
			function l(a) {
				return {
					backgroundAttachment: a.css("background-attachment"), backgroundClip:a.css("background-clip"), backgroundColor:a.css("background-color"), backgroundImage:a.css("background-image"), backgroundOrigin:a.css("background-origin"), backgroundPosition:a.css("background-position"), backgroundRepeat:a.css("background-repeat"), backgroundSize:a.css("background-size")
				}
			}
			function m(a) {
				var c, d;
				c=a.data(p.www), d=a.parent().filter(c.selectors.wrapper), b.each(a.data(p.attrs), function(c, d) {
					b.isUndefined(c)?a.removeAttr(d): a.attr(d, c)
				}
				), a.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(c.classes.input), d.length&&(a.detach().insertAfter(d), d.remove())
			}
			function n(c) {
				var d, e;
				return d=b.isJQuery(c)||b.isElement(c), e=d?a(c).first(): [], e.length?e:null
			}
			var o, p, q;
			o=a.fn.typeahead, p= {
				www: "tt-www", attrs:"tt-attrs", typeahead:"tt-typeahead"
			}
			, q= {
				initialize:function(e, l) {
					function m() {
						var c, m, q, r, s, t, u, v, w, x, y;
						b.each(l, function(a) {
							a.highlight=!!e.highlight
						}
						), c=a(this), m=a(o.html.wrapper), q=n(e.hint), r=n(e.menu), s=e.hint!==!1&&!q, t=e.menu!==!1&&!r, s&&(q=f(c, o)), t&&(r=a(o.html.menu).css(o.css.menu)), q&&q.val(""), c=h(c, o), (s||t)&&(m.css(o.css.wrapper), c.css(s?o.css.input:o.css.inputWithNoHint), c.wrap(m).parent().prepend(s?q:null).append(t?r:null)), y=t?j:i, u=new d( {
							el: c
						}
						), v=new g( {
							hint: q, input:c
						}
						, o), w=new y( {
							node: r, datasets:l
						}
						, o), x=new k( {
							input: v, menu:w, eventBus:u, minLength:e.minLength
						}
						, o), c.data(p.www, o), c.data(p.typeahead, x)
					}
					var o;
					return l=b.isArray(l)?l:[].slice.call(arguments, 1), e=e|| {}
					, o=c(e.classNames), this.each(m)
				}
				, isEnabled:function() {
					var a;
					return e(this.first(), function(b) {
						a=b.isEnabled()
					}
					), a
				}
				, enable:function() {
					return e(this, function(a) {
						a.enable()
					}
					), this
				}
				, disable:function() {
					return e(this, function(a) {
						a.disable()
					}
					), this
				}
				, isActive:function() {
					var a;
					return e(this.first(), function(b) {
						a=b.isActive()
					}
					), a
				}
				, activate:function() {
					return e(this, function(a) {
						a.activate()
					}
					), this
				}
				, deactivate:function() {
					return e(this, function(a) {
						a.deactivate()
					}
					), this
				}
				, isOpen:function() {
					var a;
					return e(this.first(), function(b) {
						a=b.isOpen()
					}
					), a
				}
				, open:function() {
					return e(this, function(a) {
						a.open()
					}
					), this
				}
				, close:function() {
					return e(this, function(a) {
						a.close()
					}
					), this
				}
				, select:function(b) {
					var c=!1, d=a(b);
					return e(this.first(), function(a) {
						c=a.select(d)
					}
					), c
				}
				, autocomplete:function(b) {
					var c=!1, d=a(b);
					return e(this.first(), function(a) {
						c=a.autocomplete(d)
					}
					), c
				}
				, moveCursor:function(a) {
					var b=!1;
					return e(this.first(), function(c) {
						b=c.moveCursor(a)
					}
					), b
				}
				, val:function(a) {
					var c;
					return arguments.length?(e(this, function(c) {
						c.setVal(b.toStr(a))
					}
					), this):(e(this.first(), function(a) {
						c=a.getVal()
					}
					), c)
				}
				, destroy:function() {
					return e(this, function(a, b) {
						m(b), a.destroy()
					}
					), this
				}
			}
			, a.fn.typeahead=function(a) {
				return q[a]?q[a].apply(this, [].slice.call(arguments, 1)): q.initialize.apply(this, arguments)
			}
			, a.fn.typeahead.noConflict=function() {
				return a.fn.typeahead=o, this
			}
		}
		()
	}
	);
	nsc=$;
	nsc.browser= {}
	;
	(function() {
		nsc.browser.msie=false;
		nsc.browser.version=0;
		if(navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
			nsc.browser.msie=true;
			nsc.browser.version=RegExp.$1
		}
	}
	)();
	if(nsc.browser.msie)nsc.fx.speeds._default=100;
	nsc(function() {
		nsc.ajaxSetup( {
			xhr:function() {
				if(nsc.browser.msie) {
					try {
						return new ActiveXObject("Microsoft.XMLHTTP")
					}
					catch(e) {
						return new XMLHttpRequest
					}
				}
				else {
					return new XMLHttpRequest
				}
			}
		}
		)
	}
	);
	function submitNscFormTemplate(sNscFormTemplateName, sFormToSubmitOnSuccess) {
		if(sNscFormTemplateName&&sNscFormTemplateName.length) {
			sNscFormTemplateName=sNscFormTemplateName.trim();
			var sFormSerialization=nsc("#"+sNscFormTemplateName+" :input").serialize();
			sFormSerialization="formname="+sNscFormTemplateName+"&"+sFormSerialization;
			var ajaxRequest=nsc.post("/store/ajax/formvalidation.nsc", sFormSerialization);
			ajaxRequest.done(function(response) {
				if(response.outcome) {
					if(typeof sFormToSubmitOnSuccess==="undefined") {
						sFormToSubmitOnSuccess=sNscFormTemplateName
					}
					if(sFormToSubmitOnSuccess==="frmMain") {
						var product_id=nsc("#prodcode").val();
						var arrFields=nsc("#"+sNscFormTemplateName+" :input");
						nsc.each(arrFields, function(nIndex, ele) {
							ele.name="product["+product_id+"]["+ele.name+"]"
						}
						)
					}
					document.forms[sFormToSubmitOnSuccess].submit()
				}
				else {
					nsc("#"+sNscFormTemplateName).html(response.markup);
					if(response.recaptchaKey!=0) {
						nsc.noticeAdd( {
							text: response.message+"\nwrong reCaptcha!", type:"error"
						}
						);
						Recaptcha.create(response.recaptchaKey, "#recaptcha_container", {
							callback: Recaptcha.focus_response_field
						}
						)
					}
					else {
						nsc.noticeAdd( {
							text: response.message, type:"error"
						}
						)
					}
				}
			}
			)
		}
	}
	function deleteCustomizedSkuFromBasket(nProductId) {
		nsc("#removeItemButton_"+nProductId).append('<input type="hidden" name="amt['+nProductId+']" value="0">');
		document.frmMain.action.value="Update Basket";
		document.frmMain.submit();
		return false
	}
	function deleteSkuFromBasket(nProductId) {
		nsc("#amt\\["+nProductId+"\\]").val(0);
		nsc("#amt\\["+nProductId+"\\]\\_fraction").val(0);
		document.frmMain.action.value="Update Basket";
		document.frmMain.submit();
		return false
	}
	$(document).ready(function() {
		nsc(".page-basket .qty, .page-basket .fractionalinput").on("change", function() {
			document.frmMain.action.value="Update Basket";
			document.frmMain.submit();
			return false
		}
		)
	}
	);
	function createForm(itemId) {
		nsc("#removeItemButton").append('<input type="hidden" name="amt['+itemId+']" value="0">');
		return true
	}
	function printQTYDropdown(sID, nAmount, nStart, nEnd, nIncrement, bAllowZero, arrClass) {
		if(nIncrement<1) {
			nIncrement=1
		}
		if(nIncrement>1) {
			arrClass.push["restricted"]
		}
		var sHTML='<select name="'+sID+'" id="'+sID+'" class="';
		for(var i=0;
		i<arrClass.length;
		i++) {
			sHTML+=" "+arrClass[i]
		}
		sHTML+='">';
		if(bAllowZero) {
			sHTML+='<option value="0">0</option>'
		}
		var nQty=nStart;
		while(nQty<=nEnd) {
			if(nQty==parseInt(nAmount))sHTML+='<option selected="selected" value="'+nQty+'">'+nQty+"</option>";
			else sHTML+='<option value="'+nQty+'">'+nQty+"</option>";
			nQty+=nIncrement
		}
		var nExtraOptionsNeeded=(nEnd-nStart)%nIncrement;
		while(nExtraOptionsNeeded) {
			nExtraOptionsNeeded--;
			nQty=nEnd-nExtraOptionsNeeded;
			if(nQty==parseInt(nAmount))sHTML+='<option selected="selected" value="'+nQty+'">'+nQty+"</option>";
			else sHTML+='<option value="'+nQty+'">'+nQty+"</option>"
		}
		sHTML+="</select>";
		document.write(sHTML)
	}
	function printFractionalQTYDropdown(sName, sID, nQty, nFractionalQty, nDenominator) {
		var sHTML='<select name="'+sName+'" id="'+sID+'" class="fractionalinput form-control top-buffer">';
		var nCount=0;
		while(nCount<nDenominator) {
			if(floatsAreEqual(nCount/nDenominator, nFractionalQty)) {
				sHTML+='<option selected="selected" value="'+nCount/nDenominator+'">'+nCount+"/"+nDenominator+"</option>"
			}
			else {
				sHTML+='<option value="'+nCount/nDenominator+'">'+nCount+"/"+nDenominator+"</option>"
			}
			nCount++
		}
		sHTML+="</select>";
		document.write(sHTML)
	}
	function floatsAreEqual(float1, float2) {
		if(Math.abs(float1-float2)<.01)return true;
		else return false
	}
	function submitOnEnter(strFormName, objEvent) {
		var nKey;
		if(window.event)nKey=window.event.keyCode;
		else if(objEvent)nKey=objEvent.which;
		else return false;
		if(nKey==13) {
			document.getElementById(strFormName).submit()
		}
	}
	function gotoResultPage(pageNumber) {
		document.getElementById("frmSearchResults").start.value=pageNumber;
		nsc("#frmSearchResults").submit()
	}
	function sortDesc(sFieldName) {
		setSorting(sFieldName, "DESC")
	}
	function sortAsc(sFieldName) {
		setSorting(sFieldName, "ASC")
	}
	function setSorting(sFieldName, sSortDirection) {
		if(nsc("#sort").length)nsc("#sort").val(sFieldName);
		else nsc("#frmSearchResults").append(nsc('<input name="sort" type="hidden" id="sort" />').attr("value", sFieldName));
		if(nsc("#order").length)nsc("#order").val(sSortDirection);
		else nsc("#frmSearchResults").append(nsc('<input name="order" type="hidden" id="order" />').attr("value", sSortDirection));
		nsc("#frmSearchResults").submit()
	}
	function showModalWindow(sID, sSize, sHeader, sBody, sFooter) {
		createModalWindow(sID, sSize, sHeader, sBody, sFooter)
	}
	function hideModalWindow() {
		nsc(".nitro-modal").modal("hide")
	}
	function removeModalWindow() {
		hideModalWindow();
		if(typeof nsc(".nitro-modal")!=="undefined") {
			nsc(".nitro-modal").remove()
		}
	}
	function createModalWindow(sID, sSize, sHeader, sBody, sFooter) {
		var sSizeMarkUp="";
		if(sSize) {
			switch(sSize) {
				case"LARGE": sSizeMarkUp=" modal-lg";
				break;
				case"SMALL": sSizeMarkUp=" modal-sm";
				break
			}
		}
		var sMarkUp="<div ";
		if(sID!="") {
			sMarkUp+='id="'+sID+'"'
		}
		sMarkUp+='class="nitro-modal modal fade" tabindex="-1" role="dialog">'+'  <div class="modal-dialog'+(sSizeMarkUp||"")+'">'+"    <!-- Modal content-->"+'    <div class="modal-content">';
		if(sHeader) {
			sMarkUp+='      <div class="modal-header">'+'        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>'+'        <h4 class="modal-title">'+sHeader+"        </h4>"+"      </div>"
		}
		sMarkUp+='      <div class="modal-body">'+'        <div class="container-fluid">'+sBody+"        </div>";
		"      </div>";
		if(sFooter) {
			sMarkUp+='      <div class="modal-footer">'+'        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+"      </div>"
		}
		sMarkUp+="    </div>"+"  </div>"+"</div>";
		nsc(sMarkUp).appendTo("body").modal("show")
	}
	(function($) {
		$.fn.fixPNG=function() {
			return this.each(function() {
				var image=$(this).css("backgroundImage");
				if(image.match(/^url\(["']?(.*\.png)["']?\)$/i)){image=RegExp.$1;$(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod="+($(this).css("backgroundRepeat")=="no-repeat"?"crop":"scale")+", src='"+image+"')"}).each(function(){var position=$(this).css("position");if(position!="absolute"&&position!="relative")$(this).css("position","relative")})}})};var elem,opts,busy=false,imagePreloader=new Image,loadingTimer,loadingFrame=1,imageRegExp=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i;var ieQuirks=null,IE6=nsc.browser.msie&&nsc.browser.version.substr(0,1)==6&&!window.XMLHttpRequest,oldIE=IE6||nsc.browser.msie&&nsc.browser.version.substr(0,1)==7;$.fn.nitrobox=function(o){var settings=$.extend({},$.fn.nitrobox.defaults,o);var matchedGroup=this;function _initialize(){elem=this;opts=$.extend({},settings);_start();return false}function _start(){if(busy)return;if($.isFunction(opts.callbackOnStart)){opts.callbackOnStart()}if(opts.content){opts.itemArray=[];opts.itemCurrent=0}else{opts.itemArray=[];opts.itemCurrent=0;if(settings.itemArray.length>0){opts.itemArray=settings.itemArray}else{var item={};if(!elem.rel||elem.rel==""){var item={href:elem.href,title:elem.title};if($(elem).children("img:first").length){item.orig=$(elem).children("img:first")}else{item.orig=$(elem)}if(item.title==""||typeof item.title=="undefined"){item.title=item.orig.prop("alt")}opts.itemArray.push(item)}else{var subGroup=$(matchedGroup).filter("a[rel="+elem.rel+"]");var item={};for(var i=0;i<subGroup.length;i++){item={href:subGroup[i].href,title:subGroup[i].title};if($(subGroup[i]).children("img:first").length){item.orig=$(subGroup[i]).children("img:first")}else{item.orig=$(subGroup[i])}if(item.title==""||typeof item.title=="undefined"){item.title=item.orig.prop("alt")}opts.itemArray.push(item)}}}while(opts.itemArray[opts.itemCurrent].href.indexOf(elem.href)===-1&&elem.href.indexOf(opts.itemArray[opts.itemCurrent].href)===-1)opts.itemCurrent++}if(opts.overlayShow){if(nsc.browser.msie){$("embed, object, select").css("visibility","hidden");$("#nitro_overlay").css("height",$(document).height())}$("#nitro_overlay").css({"background-color":opts.overlayColor,opacity:opts.overlayOpacity}).show()}$(window).bind("resize.fb scroll.fb",$.fn.nitrobox.scrollBox);if(!opts.content){_change_item()}}function _change_item(){$("#nitro_right, #nitro_left, #nitro_close, #nitro_title").hide();var href=opts.itemArray[opts.itemCurrent].href;if(href.match("iframe")||elem.className.indexOf("iframe")>=0){$.fn.nitrobox.showLoading();_set_content('<iframe id="nitro_frame" onload="jQuery.fn.nitrobox.showIframe()" name="nitro_iframe'+Math.round(Math.random()*1e3)+'" frameborder="0" hspace="0" src="'+href+'"></iframe>',opts.frameWidth,opts.frameHeight)}else if(href.match(/#/)){var target=window.location.href.split("#")[0];target=href.replace(target,"");target=target.substr(target.indexOf("#"));_set_content('<div id="nitro_div">'+$(target).html()+"</div>",opts.frameWidth,opts.frameHeight)}else if(href.match(imageRegExp)){imagePreloader=new Image;imagePreloader.src=href;if(imagePreloader.complete){_proceed_image()}else{$.fn.nitrobox.showLoading();$(imagePreloader).unbind().bind("load",function(){$("#nitro_loading").hide();_proceed_image()})}}else{$.fn.nitrobox.showLoading();$.get(href,function(data){$("#nitro_loading").hide();_set_content('<div id="nitro_ajax">'+data+"</div>",opts.frameWidth,opts.frameHeight)})}}function _proceed_image(){var width=imagePreloader.width;var height=imagePreloader.height;var horizontal_space=opts.padding*2+40;var vertical_space=opts.padding*2+60;var w=$.fn.nitrobox.getViewport();if(opts.imageScale&&(width>w[0]-horizontal_space||height>w[1]-vertical_space)){var ratio=Math.min(Math.min(w[0]-horizontal_space,width)/width,Math.min(w[1]-vertical_space,height)/height);width=Math.round(ratio*width);height=Math.round(ratio*height)}_set_content('<img alt="" id="nitro_img" src="'+imagePreloader.src+'" />',width,height)}function _preload_neighbor_images(){if(opts.itemArray.length-1>opts.itemCurrent){var href=opts.itemArray[opts.itemCurrent+1].href||false;if(href&&href.match(imageRegExp)){objNext=new Image;objNext.src=href}}if(opts.itemCurrent>0){var href=opts.itemArray[opts.itemCurrent-1].href||false;if(href&&href.match(imageRegExp)){objNext=new Image;objNext.src=href}}}function _set_content(value,width,height){busy=true;var pad=opts.padding;if(oldIE||ieQuirks){$("#nitro_content")[0].style.removeExpression("height");$("#nitro_content")[0].style.removeExpression("width")}if(pad>0){width+=pad*2;height+=pad*2;$("#nitro_content").css({top:pad+"px",right:pad+"px",bottom:pad+"px",left:pad+"px",width:"auto",height:"auto"});if(oldIE||ieQuirks){$("#nitro_content")[0].style.setExpression("height","(this.parentNode.clientHeight - "+pad*2+")");$("#nitro_content")[0].style.setExpression("width","(this.parentNode.clientWidth - "+pad*2+")")}}else{$("#nitro_content").css({top:0,right:0,bottom:0,left:0,width:"100%",height:"100%"})}if($("#nitro_outer").is(":visible")&&width==$("#nitro_outer").width()&&height==$("#nitro_outer").height()){$("#nitro_content").fadeOut("fast",function(){$("#nitro_content").empty().append($(value)).fadeIn("normal",function(){_finish()})});return}var w=$.fn.nitrobox.getViewport();var itemTop=height+60>w[1]?w[3]:w[3]+Math.round((w[1]-height-60)*.5);var itemLeft=width+40>w[0]?w[2]:w[2]+Math.round((w[0]-width-40)*.5);var itemOpts={left:itemLeft,top:itemTop,width:width+"px",height:height+"px"};if($("#nitro_outer").is(":visible")){$("#nitro_content").fadeOut("normal",function(){$("#nitro_content").empty();$("#nitro_outer").animate(itemOpts,opts.zoomSpeedChange,opts.easingChange,function(){$("#nitro_content").append($(value)).fadeIn("normal",function(){_finish()})})})}else{if(opts.zoomSpeedIn>0&&opts.itemArray[opts.itemCurrent].orig!==undefined){$("#nitro_content").empty().append($(value));var orig_item=opts.itemArray[opts.itemCurrent].orig;var orig_pos=$.fn.nitrobox.getPosition(orig_item);$("#nitro_outer").css({left:orig_pos.left-20-opts.padding+"px",top:orig_pos.top-20-opts.padding+"px",width:$(orig_item).width()+opts.padding*2,height:$(orig_item).height()+opts.padding*2});if(opts.zoomOpacity){itemOpts.opacity="show"}$("#nitro_outer").animate(itemOpts,opts.zoomSpeedIn,opts.easingIn,function(){_finish()})}else{$("#nitro_content").hide().empty().append($(value)).show();$("#nitro_outer").css(itemOpts).fadeIn("normal",function(){_finish()})}}}function _set_navigation(){if(opts.itemCurrent!==0&&!o.content){$("#nitro_left, #nitro_left_ico").unbind().bind("click",function(e){e.stopPropagation();opts.itemCurrent--;_change_item();return false});$("#nitro_left").show()}if(opts.itemCurrent!=opts.itemArray.length-1&&!o.content){$("#nitro_right, #nitro_right_ico").unbind().bind("click",function(e){e.stopPropagation();opts.itemCurrent++;_change_item();return false});$("#nitro_right").show()}}function _finish(){if(nsc.browser.msie){$("#nitro_content")[0].style.removeAttribute("filter");$("#nitro_outer")[0].style.removeAttribute("filter")}_set_navigation();_preload_neighbor_images();$(document).bind("keydown.fb",function(e){if(e.keyCode==27&&opts.enableEscapeButton){$.fn.nitrobox.close()}else if(e.keyCode==37&&opts.itemCurrent!==0){$(document).unbind("keydown.fb");opts.itemCurrent--;_change_item()}else if(e.keyCode==39&&opts.itemCurrent!=opts.itemArray.length-1){$(document).unbind("keydown.fb");opts.itemCurrent++;_change_item()}});if(opts.hideOnContentClick){$("#nitro_content").click($.fn.nitrobox.close)}if(opts.overlayShow&&opts.hideOnOverlayClick){$("#nitro_overlay").bind("click",$.fn.nitrobox.close)}if(opts.showCloseButton){$("#nitro_close").bind("click",$.fn.nitrobox.close).show()}if(!opts.content){if(typeof opts.itemArray[opts.itemCurrent].title!=="undefined"&&opts.itemArray[opts.itemCurrent].title.length>0){var pos=$("#nitro_outer").position();$("#nitro_title div").text(opts.itemArray[opts.itemCurrent].title).html();$("#nitro_title").css({top:pos.top+$("#nitro_outer").outerHeight()-32,left:pos.left+($("#nitro_outer").outerWidth()*.5-$("#nitro_title").width()*.5)}).show()}}if(opts.overlayShow&&nsc.browser.msie){$("embed, object, select",$("#nitro_content")).css("visibility","visible")}if($.isFunction(opts.callbackOnShow)){opts.callbackOnShow(opts.itemArray[opts.itemCurrent])}if(nsc.browser.msie){$("#nitro_outer")[0].style.removeAttribute("filter");$("#nitro_content")[0].style.removeAttribute("filter")}busy=false}if(o.content){_initialize();_set_content('<div id="nitro_ajax">'+o.content+"</div>",opts.frameWidth,opts.frameHeight);return false}return this.unbind("click.fb").bind("click.fb",_initialize)};if($.fn.nitrobox){$.fn.nitrobox.scrollBox=function(){var w=$.fn.nitrobox.getViewport();if(opts.centerOnScroll&&$("#nitro_outer").is(":visible")){var ow=$("#nitro_outer").outerWidth();var oh=$("#nitro_outer").outerHeight();var pos={top:oh>w[1]?w[3]:w[3]+Math.round((w[1]-oh)*.5),left:ow>w[0]?w[2]:w[2]+Math.round((w[0]-ow)*.5)};$("#nitro_outer").css(pos);$("#nitro_title").css({top:pos.top+oh-32,left:pos.left+(ow*.5-$("#nitro_title").width()*.5)})}if(nsc.browser.msie&&$("#nitro_overlay").is(":visible")){$("#nitro_overlay").css({height:$(document).height()})}if($("#nitro_loading").is(":visible")){$("#nitro_loading").css({left:(w[0]-40)*.5+w[2],top:(w[1]-40)*.5+w[3]})}};$.fn.nitrobox.getNumeric=function(el,prop){return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0};$.fn.nitrobox.getPosition=function(el){var pos=el.offset();pos.top+=$.fn.nitrobox.getNumeric(el,"paddingTop");pos.top+=$.fn.nitrobox.getNumeric(el,"borderTopWidth");pos.left+=$.fn.nitrobox.getNumeric(el,"paddingLeft");pos.left+=$.fn.nitrobox.getNumeric(el,"borderLeftWidth");return pos};$.fn.nitrobox.showIframe=function(){$("#nitro_loading").hide();$("#nitro_frame").show()};$.fn.nitrobox.getViewport=function(){var ieWindowSize=function(){var iHeight=0,iWidth=0;if(nsc.browser.msie){if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){iWidth=document.documentElement.clientWidth;iHeight=document.documentElement.clientHeight}else{iWidth=document.getElementsByTagName("body")[0].clientWidth;iHeight=document.getElementsByTagName("body")[0].clientHeight}return{height:function(){return iHeight},width:function(){return iWidth}}}};return[$(window).width()||ieWindowSize().width(),$(window).height()||ieWindowSize().height(),$(document).scrollLeft(),$(document).scrollTop()]};$.fn.nitrobox.animateLoading=function(){if(!$("#nitro_loading").is(":visible")){clearInterval(loadingTimer);return}$("#nitro_loading > div").css("top",loadingFrame*-40+"px");loadingFrame=(loadingFrame+1)%12};$.fn.nitrobox.showLoading=function(){clearInterval(loadingTimer);var w=$.fn.nitrobox.getViewport();$("#nitro_loading").css({left:(w[0]-40)*.5+w[2],top:(w[1]-40)*.5+w[3]}).show();$("#nitro_loading").bind("click",$.fn.nitrobox.close);loadingTimer=setInterval($.fn.nitrobox.animateLoading,66)};$.fn.nitrobox.close=function(){busy=true;$(imagePreloader).unbind();$(document).unbind("keydown.fb");$(window).unbind("resize.fb scroll.fb");$("#nitro_overlay, #nitro_content, #nitro_close").unbind();$("#nitro_close, #nitro_loading, #nitro_left, #nitro_right, #nitro_title").hide();__cleanup=function(){if($("#nitro_overlay").is(":visible")){$("#nitro_overlay").fadeOut("fast")}$("#nitro_content").empty();var cond=opts||false;$(window).unbind("resize.fb scroll.fb");if(nsc.browser.msie){$("embed, object, select").css("visibility","visible")}if(cond&&$.isFunction(opts.callbackOnClose)){opts.callbackOnClose()}busy=false};if($("#nitro_outer").is(":visible")!==false){if(opts.zoomSpeedOut>0&&opts.itemArray[opts.itemCurrent].orig!==undefined){var orig_item=opts.itemArray[opts.itemCurrent].orig;var orig_pos=$.fn.nitrobox.getPosition(orig_item);var itemOpts={left:orig_pos.left-20-opts.padding+"px",top:orig_pos.top-20-opts.padding+"px",width:$(orig_item).width()+opts.padding*2,height:$(orig_item).height()+opts.padding*2};if(opts.zoomOpacity){itemOpts.opacity="hide"}$("#nitro_outer").stop(false,true).animate(itemOpts,opts.zoomSpeedOut,opts.easingOut,__cleanup)}else{$("#nitro_outer").stop(false,true).fadeOut("fast",__cleanup)}}else{__cleanup()}return false};$.fn.nitrobox.build=function(){var html="";html+='<div id="nitro_overlay"></div>';html+='<div id="nitro_loading"><div></div></div>';html+='<div id="nitro_outer">';html+='<div id="nitro_inner">';html+='<div id="nitro_close"></div>';html+='<div id="nitro_bg"><div class="nitro_bg" id="nitro_bg_n"></div><div class="nitro_bg" id="nitro_bg_ne"></div><div class="nitro_bg" id="nitro_bg_e"></div><div class="nitro_bg" id="nitro_bg_se"></div><div class="nitro_bg" id="nitro_bg_s"></div><div class="nitro_bg" id="nitro_bg_sw"></div><div class="nitro_bg" id="nitro_bg_w"></div><div class="nitro_bg" id="nitro_bg_nw"></div></div>';html+='<a href="javascript:;" id="nitro_left"><span class="nitro_ico" id="nitro_left_ico"></span></a><a href="javascript:;" id="nitro_right"><span class="nitro_ico" id="nitro_right_ico"></span></a>';html+='<div id="nitro_content"></div>';html+="</div>";html+="</div>";html+='<div id="nitro_title"></div>';$(html).appendTo("body");$('<table cellspacing="0" cellpadding="0" border="0"><tr><td class="nitro_title" id="nitro_title_left"></td><td class="nitro_title" id="nitro_title_main"><div></div></td><td class="nitro_title" id="nitro_title_right"></td></tr></table>').appendTo("#nitro_title");if(nsc.browser.msie){$(".nitro_bg").fixPNG()}if(nsc.browser.msie){$("div#nitro_overlay").css("position","absolute");$("#nitro_loading div, #nitro_close, .nitro_title, .nitro_ico").fixPNG();$("#nitro_inner").prepend('<iframe id="nitro_bigIframe" src="javascript:false;" scrolling="no" frameborder="0"></iframe>');var frameDoc=$("#nitro_bigIframe")[0].contentWindow.document;frameDoc.open();frameDoc.close()}};$.fn.nitrobox.defaults={padding:10,content:"",imageScale:true,zoomOpacity:true,zoomSpeedIn:0,zoomSpeedOut:0,zoomSpeedChange:300,easingIn:"swing",easingOut:"swing",easingChange:"swing",frameWidth:560,frameHeight:340,overlayShow:true,overlayOpacity:.3,overlayColor:"#666",enableEscapeButton:true,showCloseButton:true,hideOnOverlayClick:true,hideOnContentClick:true,centerOnScroll:true,itemArray:[],callbackOnStart:null,callbackOnShow:null,callbackOnClose:null};$(document).ready(function(){ieQuirks=nsc.browser.msie&&document.compatMode=="BackCompat";if($("#nitro_outer").length<1){$.fn.nitrobox.build()}if(nsc.cookie("_ga")&&typeof window.ga=="function"){ga(function(tracker){var linkerParam=tracker.get("linkerParam").split("=");var hiddennode=nsc("<input>",{type:"hidden",id:"_ga",name:"_ga",value:linkerParam[1]});nsc("#shippingform").append(hiddennode);nsc("#frmMain").append(hiddennode);if(typeof linkerParam[1]!="undefined"){nsc("#frmMain").attr("action",function(i,oldvalue){return oldvalue+"?_ga="+linkerParam[1]});nsc("#panel-shoppingcart a#update-button").prop("href","/store/go/checkout/?_ga="+linkerParam[1]);nsc("#frmLogin").attr("action",function(i,oldvalue){return oldvalue+"?_ga="+linkerParam[1]});nsc("#register-button").attr("href",function(i,oldval){return oldval+"&_ga="+linkerParam[1]});nsc("#panel-account a#update-button").attr("href",function(i,oldval){return oldval+"&_ga="+linkerParam[1]});nsc("#panel-account a#logout-button").attr("href",function(i,oldval){return oldval+"&_ga="+linkerParam[1]})}})}})}})(nsc);jQuery.cookie=function(name,value,options){if(typeof value!="undefined"){options=options||{};if(value===null){value="";options.expires=-1}var expires="";if(options.expires&&(typeof options.expires=="number"||options.expires.toUTCString)){var date;if(typeof options.expires=="number"){date=new Date;date.setTime(date.getTime()+options.expires*24*60*60*1e3)}else{date=options.expires}expires="; expires="+date.toUTCString()}var path=options.path?"; path="+options.path:"";var domain=options.domain?"; domain="+options.domain:"";var secure=options.secure?"; secure":"";document.cookie=[name,"=",encodeURIComponent(value),expires,path,domain,secure].join("")}else{var cookieValue=null;if(document.cookie&&document.cookie!=""){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==name+"="){cookieValue=decodeURIComponent(cookie.substring(name.length+1));
 break
			}
		}
	}
	return cookieValue
}


}
;
jQuery.fn.showError=function(sMessage) {
	return nsc(this).each(function() {
		if(nsc(this).next("span.error-text").length==0)nsc(this).after('<span class="error-text" />');
		nsc(this).addClass("field-error");
		nsc(this).next("span.error-text").hide().text(sMessage).slideDown()
	}

	)
}
;
jQuery.fn.hideErrors=function() {
	nsc("span.error-text").each(function() {
		nsc(this).prev(":input.field-error").removeClass("field-error");
		nsc(this).remove()
	}

	)
}
;
jQuery.extend( {
	noticeAdd:function(options) {
		var defaults= {
			inEffect: {
				opacity: "show"
			}
			, inEffectDuration:600, stayTime:3e3, text:"", stay:false, type:"notice", href:"", bReturn:false
		}
		;
		var options, noticeWrapAll, noticeItemOuter, noticeItemInner, noticeItemClose;
		options=jQuery.extend( {}
		, defaults, options);
		noticeWrapAll=!jQuery(".notice-wrap").length?jQuery("<div></div>").addClass("notice-wrap").appendTo("body"):jQuery(".notice-wrap");
		noticeItemOuter=jQuery("<div></div>").addClass("notice-item-wrapper");
		noticeItemInner=jQuery("<div></div>").hide();
		if(options.href.length>0)jQuery(noticeItemInner).click(function() {
			document.location.href=options.href
		}
		).css("cursor", "pointer");
		jQuery(noticeItemInner).addClass("notice-item-"+options.type).appendTo(noticeWrapAll).html("<p>"+options.text+"</p>").animate(options.inEffect, options.inEffectDuration).wrap(noticeItemOuter);
		noticeItemClose=jQuery("<div></div>").addClass("notice-item-close").prependTo(noticeItemInner).html("x").click(function(event) {
			event.stopPropagation();
			jQuery.noticeRemove(noticeItemInner)
		}
		);
		if(navigator.userAgent.match(/MSIE 6/i)) {
			noticeWrapAll.css( {
				top: document.documentElement.scrollTop
			}
			)
		}
		if(!options.stay) {
			setTimeout(function() {
				jQuery.noticeRemove(noticeItemInner)
			}
			, options.stayTime)
		}
		if(options.bReturn)return noticeItemInner
	}

	, noticeRemove:function(obj) {
		obj.animate( {
			opacity: "0"
		}
		, 600, function() {
			obj.parent().animate( {
				height: "0px"
			}
			, 300, function() {
				obj.parent().remove()
			}
			)
		}
		)
	}
}
);
jQuery.fn.ajaxBasketHandler=function(arrParams) {
	var $cart=nsc("div#nsc_cart_container");
	var bCartPanelExists=$cart.length>0;
	if(bCartPanelExists) {
		var sExistingCart=$cart.html();
		var sHeight=$cart.css("height");
		var nHeightVal=parseInt(sHeight.substring(0, sHeight.indexOf("px")));
		var sWidth=$cart.css("width");
		var nMarginTop=Math.round((nHeightVal-16)/2);
		if(nMarginTop<0)nMarginTop=0;
		sHeight=nHeightVal-nMarginTop+"px";
		$cart.html('<div id="cart-loader" style="margin:auto; margin-top: '+nMarginTop+"px; text-align:center; width:"+sWidth+"; height:"+sHeight+'"><img src="/store/images/ajax-loader.gif" /></div>')
	}

	nsc.post("/store/store.asp", arrParams, function(sHTML) {
		var arrResult=nsc.parseJSON(sHTML);
		if(bCartPanelExists) {
			if(arrResult["result"])$cart.html($(arrResult["baskethtml"]).html());
			else $cart.html(sExistingCart);
			if(nsc.cookie("_ga")&&typeof window.ga=="function") {
				ga(function(tracker) {
					var linkerParam=tracker.get("linkerParam").split("=");
					if(typeof linkerParam[1]!="undefined") {
						nsc("#panel-shoppingcart a#update-button").prop("href", "/store/go/checkout/?_ga="+linkerParam[1])
					}
				}
				)
			}
		}
		nsc.noticeAdd( {
			text: arrResult["message"], stay:false, type:arrResult["result"]==0?"error":"success", href:"/store/go/basket/"
		}
		)
	}

	)
}
;
jQuery.fn.addToBasket=function(nProductID, nQty) {
	if(!nQty)nQty=0;
	var nFraction=0;
	if(nsc("#quantity_fraction").length>0) {
		nFraction=nsc("#quantity_fraction").val()
	}

	arrParams= {
		action: "add_product", prodcode:nProductID, quantity:nQty, quantity_fraction:nFraction, ajax:1
	}

	;
	jQuery.fn.ajaxBasketHandler(arrParams)
}
;
jQuery.fn.multiAddToBasket=function(arrProductArray) {
	arrParams= {
		action: "add_product", prodcode:arrProductArray, ajax:1
	}

	;
	jQuery.fn.ajaxBasketHandler(arrParams)
}
;
nsc(function() {
	nsc("#panel-filteredsearch h6").click(function() {
		nsc(this).toggleClass("closed").next().toggle()
	}

	);
	nsc("#panel-filteredsearch li input[type=checkbox]").click(function() {
		window.location.href=nsc(this).next().attr("href")
	}

	)
}
);
var _gaq=_gaq||[];
function __utmLinker(sHREF) {
	_gaq.push(["_link", sHREF])
}
function __utmLinkPost(obj) {
	_gaq.push(["_linkByPost", obj])
}
var nProductID=0;
var aryCustomizable= {}
;
var aryTagAlongID= {}
;
var aryLineDetails= {}
;
var aryLineTitles= {}
;
var aryLineCosts= {}
;
var aryFreeCustomization= {}
;
var aryCustomizedFields=[];
var sProductCustomizationTitle="";
var sProductCustomizationTopDisclaimer="";
var sProductCustomizationBottomDisclaimer="";
var nMaxPurchasable="";
var bProductCustomizationDisplayLinePrice=false;
var BASE_PATH=window.location.href.substring(0, window.location.href.indexOf("/store/"));
var objMailingList= {
	addLoadEvent:function(strForm) {
		if(document.addEventListener)document.addEventListener("DOMContentLoaded", function() {
			objMailingList.displayMailingListWindow(strForm)
		}
		, false);
		else if(window.attachEvent)window.attachEvent("onload", function() {
			objMailingList.displayMailingListWindow(strForm)
		}
		)
	}

	, validateForm:function(evt) {
		var result;
		var errorValidation=new Array;
		var defaultError="This field is required.";
		var forms=document.getElementById("nitro_mailing_list").getElementsByTagName("form");
		result=false;
		email=document.getElementById("nt-EMAIL");
		errorValidation["email"]=defaultError;
		if(email.value!="") {
			result=objMailingList.validateEmail(email.value);
			errorValidation["email"]=!result?"Please enter a valid email address.": ""
		}
		result=false;
		fname=document.getElementById("nt-FNAME");
		errorValidation["fname"]=defaultError;
		if(fname.value!="") {
			result=objMailingList.validateName(fname.value);
			errorValidation["fname"]=!result?"Please enter a valid First Name.": ""
		}
		result=false;
		lname=document.getElementById("nt-LNAME");
		errorValidation["lname"]=defaultError;
		if(lname.value!="") {
			result=objMailingList.validateName(lname.value);
			errorValidation["lname"]=!result?"Please enter a valid Last Name.": ""
		}
		nsc(".nitro_inline_error").remove();
		result=true;
		nError=0;
		for(var key in errorValidation) {
			if(errorValidation[key]!="") {
				nError++;
				errorId=key+"_error";
				if(!document.getElementById(errorId)) {
					var objNode=document.createElement("div");
					objNode.id=errorId;
					objNode.className="nitro_inline_error";
					sibling=document.getElementById("nt-"+key.toUpperCase());
					sibling.parentNode.insertBefore(objNode, sibling.nextSibling)
				}
				document.getElementById(errorId).innerHTML=errorValidation[key];
				result=false&&result
			}
			if(!document.getElementById("privacy_privacymailingconsent").checked) {
				$("label#privacy_privacymailingconsent").addClass("field-error");
				$("#consentRequiredSpan").attr("style", "");
				result=false
			}
		}
		modalWindow=document.getElementById("nitro_outer").style;
		modalWindow.height=heightMailingSignup+40*nError+20+"px";
		if(result) {
			if(forms[0].getAttribute("action")==undefined) {
				evt.preventDefault();
				objMailingList.subscribeAPI()
			}
			objMailingList.successSubmit()
		}
		else {
			evt.preventDefault()
		}
	}

	, validateEmail:function(email) {
		var reg=/\S+@\S+\.\S+/;
		return reg.test(email)
	}

	, validateName:function(string) {
		var reg=/\S+/;
		return reg.test(string)
	}

	, displayMailingListWindow:function(strCleanForm) {
		showModalWindow("modal-mailing-list", "", "", strCleanForm);
		objMailingList.attachFormSubmit();
		objMailingList.attachFormExit()
	}

	, successSubmit:function() {
		hideModalWindow();
		objMailingList.createCookie(3600)
	}

	, exitSubscription:function() {
		hideModalWindow();
		objMailingList.createCookie(cookieLifeIfClose)
	}

	, createCookie:function(days) {
		nsc.cookie("cookiemailinglist", "1", {
			expires: days, path:"/"
		}
		)
	}

	, subscribeAPI:function() {
		$.ajax( {
			type:"POST", url:"/store/ajax/mailinglist.nsc", processData:true, data: {
				action: "subscribe", MLTOKEN:document.getElementById("nt-ml-TOKEN").value, EMAIL:document.getElementById("nt-EMAIL").value, FNAME:document.getElementById("nt-FNAME").value, LNAME:document.getElementById("nt-LNAME").value, MMERGE4:document.getElementById("nt-MMERGE4")||"", MMERGE5:document.getElementById("nt-MMERGE5")||"", MMERGE6:document.getElementById("nt-MMERGE6")||"", MMERGE7:document.getElementById("nt-MMERGE7")||""
			}
			, dataType:"text"
		}
		)
	}

	, attachFormSubmit:function() {
		nitroSubscribe=document.getElementById("nt-embedded-subscribe");
		if(nitroSubscribe) {
			if(nitroSubscribe.addEventListener) {
				nitroSubscribe.addEventListener("click", objMailingList.validateForm, false)
			}
			else if(nitroSubscribe.attachEvent) {
				nitroSubscribe.attachEvent("onclick", objMailingList.validateForm)
			}
		}
	}

	, attachFormExit:function() {
		nitroClose=document.getElementById("nitro_close");
		if(nitroClose) {
			if(nitroClose.addEventListener) {
				nitroClose.addEventListener("click", objMailingList.exitSubscription, false)
			}
			else if(nitroNoThanks.attachEvent) {
				nitroClose.attachEvent("onclick", objMailingList.exitSubscription)
			}
		}
		nitroNoThanks=document.getElementById("nt-embedded-nothanks");
		if(nitroNoThanks) {
			if(nitroNoThanks.addEventListener) {
				nitroNoThanks.addEventListener("click", objMailingList.exitSubscription, false)
			}
			else if(nitroNoThanks.attachEvent) {
				nitroNoThanks.attachEvent("onclick", objMailingList.exitSubscription)
			}
		}
		objModal=nsc("#modal-mailing-list").on("hide.bs.modal", function() {
			addEventListener("click", objMailingList.exitSubscription, false)
		}
		)
	}
}
;
nsc(function() {
	nsc(".buttoncontainer ul").hover(function() {
		nsc(this).parent().find("li.hiddenbutton").toggle()
	}

	);
	nsc(".productitemborder").mouseover(function() {
		nsc(this).find(".quickviewlink").css("display", "inline-block")
	}

	);
	nsc(".productitemborder").mouseout(function() {
		nsc(this).find(".quickviewlink").css("display", "none")
	}

	)
}
);
function PrintQuickView(nProductid) {
	var url="/store/store.asp?action=get_preview_data&prodcode="+nProductid;
	nsc.get(url, function(sData, sStatus) {
		if(sStatus=="success") {
			removeModalWindow();
			sData="<div id='productbody'>"+sData+"</div>";
			showModalWindow("modal-quickview", "", "", sData)
		}
	}

	)
}
nsc(document).ready(function() {
	nsc(".container-with-hideable-children").children("ul").hide();
	nsc(".container-with-hideable-children").children("ul").first().show();
	nsc(".container-with-hideable-children").children("ul").first().children().children("ul").show();
	nsc(".container-with-hideable-children").on("click", function() {
		event.stopPropagation();
		if(nsc(this).children("ul").is(":hidden")) {
			nsc(this).children("ul").show()
		}
		else {
			nsc(this).children("ul").hide()
		}
	}

	)
}
);
function submitForm(actionval) {
	document.frmMain.action.value=actionval;
	document.frmMain.submit()
}
nsc(function() {
	var cc=nsc.cookie("list_grid");
	if(cc=="l") {
		nsc(".product-list-item").addClass("list")
	}

	else {
		nsc(".product-list-item").removeClass("list")
	}
}
);
nsc(document).ready(function() {
	nsc(".gridview").click(function() {
		nsc(".product-list-item").fadeOut(300, function() {
			nsc(".product-list-item").removeClass("list").fadeIn(300);
			nsc.cookie("list_grid", "g", {
				expires: 7, path:"/"
			}
			)
		}
		);
		return false
	}

	);
	nsc(".listview").click(function() {
		nsc(".product-list-item").fadeOut(300, function() {
			nsc(".product-list-item").addClass("list").fadeIn(300);
			nsc.cookie("list_grid", "l", {
				expires: 7, path:"/"
			}
			)
		}
		);
		return false
	}

	)
}
);
if(typeof Object.create!=="function") {
	Object.create=function(obj) {
		function F() {}
		F.prototype=obj;
		return new F
	}
}
(function($, window, document) {
	var Carousel= {
		init:function(options, el) {
			var base=this;
			base.$elem=$(el);
			base.options=$.extend( {}
			, $.fn.owlCarousel.options, base.$elem.data(), options);
			base.userOptions=options;
			base.loadContent()
		}
		, loadContent:function() {
			var base=this, url;
			function getData(data) {
				var i, content="";
				if(typeof base.options.jsonSuccess==="function") {
					base.options.jsonSuccess.apply(this, [data])
				}
				else {
					for(i in data.owl) {
						if(data.owl.hasOwnProperty(i)) {
							content+=data.owl[i].item
						}
					}
					base.$elem.html(content)
				}
				base.logIn()
			}
			if(typeof base.options.beforeInit==="function") {
				base.options.beforeInit.apply(this, [base.$elem])
			}
			if(typeof base.options.jsonPath==="string") {
				url=base.options.jsonPath;
				$.getJSON(url, getData)
			}
			else {
				base.logIn()
			}
		}
		, logIn:function() {
			var base=this;
			base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
			base.$elem.data("owl-originalClasses", base.$elem.attr("class"));
			base.$elem.css( {
				opacity: 0
			}
			);
			base.orignalItems=base.options.items;
			base.checkBrowser();
			base.wrapperWidth=0;
			base.checkVisible=null;
			base.setVars()
		}
		, setVars:function() {
			var base=this;
			if(base.$elem.children().length===0) {
				return false
			}
			base.baseClass();
			base.eventTypes();
			base.$userItems=base.$elem.children();
			base.itemsAmount=base.$userItems.length;
			base.wrapItems();
			base.$owlItems=base.$elem.find(".owl-item");
			base.$owlWrapper=base.$elem.find(".owl-wrapper");
			base.playDirection="next";
			base.prevItem=0;
			base.prevArr=[0];
			base.currentItem=0;
			base.customEvents();
			base.onStartup()
		}
		, onStartup:function() {
			var base=this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();
			if(base.options.transitionStyle!==false) {
				base.transitionTypes(base.options.transitionStyle)
			}
			if(base.options.autoPlay===true) {
				base.options.autoPlay=5e3
			}
			base.play();
			base.$elem.find(".owl-wrapper").css("display", "block");
			if(!base.$elem.is(":visible")) {
				base.watchVisibility()
			}
			else {
				base.$elem.css("opacity", 1)
			}
			base.onstartup=false;
			base.eachMoveUpdate();
			if(typeof base.options.afterInit==="function") {
				base.options.afterInit.apply(this, [base.$elem])
			}
		}
		, eachMoveUpdate:function() {
			var base=this;
			if(base.options.lazyLoad===true) {
				base.lazyLoad()
			}
			if(base.options.autoHeight===true) {
				base.autoHeight()
			}
			base.onVisibleItems();
			if(typeof base.options.afterAction==="function") {
				base.options.afterAction.apply(this, [base.$elem])
			}
		}
		, updateVars:function() {
			var base=this;
			if(typeof base.options.beforeUpdate==="function") {
				base.options.beforeUpdate.apply(this, [base.$elem])
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if(typeof base.options.afterUpdate==="function") {
				base.options.afterUpdate.apply(this, [base.$elem])
			}
		}
		, reload:function() {
			var base=this;
			window.setTimeout(function() {
				base.updateVars()
			}
			, 0)
		}
		, watchVisibility:function() {
			var base=this;
			if(base.$elem.is(":visible")===false) {
				base.$elem.css( {
					opacity: 0
				}
				);
				window.clearInterval(base.autoPlayInterval);
				window.clearInterval(base.checkVisible)
			}
			else {
				return false
			}
			base.checkVisible=window.setInterval(function() {
				if(base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate( {
						opacity: 1
					}
					, 200);
					window.clearInterval(base.checkVisible)
				}
			}
			, 500)
		}
		, wrapItems:function() {
			var base=this;
			base.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
			base.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
			base.wrapperOuter=base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display", "block")
		}
		, baseClass:function() {
			var base=this, hasBaseClass=base.$elem.hasClass(base.options.baseClass), hasThemeClass=base.$elem.hasClass(base.options.theme);
			if(!hasBaseClass) {
				base.$elem.addClass(base.options.baseClass)
			}
			if(!hasThemeClass) {
				base.$elem.addClass(base.options.theme)
			}
		}
		, updateItems:function() {
			var base=this, width, i;
			if(base.options.responsive===false) {
				return false
			}
			if(base.options.singleItem===true) {
				base.options.items=base.orignalItems=1;
				base.options.itemsCustom=false;
				base.options.itemsDesktop=false;
				base.options.itemsDesktopSmall=false;
				base.options.itemsTablet=false;
				base.options.itemsTabletSmall=false;
				base.options.itemsMobile=false;
				return false
			}
			width=$(base.options.responsiveBaseWidth).width();
			if(width>(base.options.itemsDesktop[0]||base.orignalItems)) {
				base.options.items=base.orignalItems
			}
			if(base.options.itemsCustom!==false) {
				base.options.itemsCustom.sort(function(a, b) {
					return a[0]-b[0]
				}
				);
				for(i=0;
				i<base.options.itemsCustom.length;
				i+=1) {
					if(base.options.itemsCustom[i][0]<=width) {
						base.options.items=base.options.itemsCustom[i][1]
					}
				}
			}
			else {
				if(width<=base.options.itemsDesktop[0]&&base.options.itemsDesktop!==false) {
					base.options.items=base.options.itemsDesktop[1]
				}
				if(width<=base.options.itemsDesktopSmall[0]&&base.options.itemsDesktopSmall!==false) {
					base.options.items=base.options.itemsDesktopSmall[1]
				}
				if(width<=base.options.itemsTablet[0]&&base.options.itemsTablet!==false) {
					base.options.items=base.options.itemsTablet[1]
				}
				if(width<=base.options.itemsTabletSmall[0]&&base.options.itemsTabletSmall!==false) {
					base.options.items=base.options.itemsTabletSmall[1]
				}
				if(width<=base.options.itemsMobile[0]&&base.options.itemsMobile!==false) {
					base.options.items=base.options.itemsMobile[1]
				}
			}
			if(base.options.items>base.itemsAmount&&base.options.itemsScaleUp===true) {
				base.options.items=base.itemsAmount
			}
		}
		, response:function() {
			var base=this, smallDelay, lastWindowWidth;
			if(base.options.responsive!==true) {
				return false
			}
			lastWindowWidth=$(window).width();
			base.resizer=function() {
				if($(window).width()!==lastWindowWidth) {
					if(base.options.autoPlay!==false) {
						window.clearInterval(base.autoPlayInterval)
					}
					window.clearTimeout(smallDelay);
					smallDelay=window.setTimeout(function() {
						lastWindowWidth=$(window).width();
						base.updateVars()
					}
					, base.options.responsiveRefreshRate)
				}
			}
			;
			$(window).resize(base.resizer)
		}
		, updatePosition:function() {
			var base=this;
			base.jumpTo(base.currentItem);
			if(base.options.autoPlay!==false) {
				base.checkAp()
			}
		}
		, appendItemsSizes:function() {
			var base=this, roundPages=0, lastItem=base.itemsAmount-base.options.items;
			base.$owlItems.each(function(index) {
				var $this=$(this);
				$this.css( {
					width: base.itemWidth
				}
				).data("owl-item", Number(index));
				if(index%base.options.items===0||index===lastItem) {
					if(!(index>lastItem)) {
						roundPages+=1
					}
				}
				$this.data("owl-roundPages", roundPages)
			}
			)
		}
		, appendWrapperSizes:function() {
			var base=this, width=base.$owlItems.length*base.itemWidth;
			base.$owlWrapper.css( {
				width: width*2, left:0
			}
			);
			base.appendItemsSizes()
		}
		, calculateAll:function() {
			var base=this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max()
		}
		, calculateWidth:function() {
			var base=this;
			base.itemWidth=Math.round(base.$elem.width()/base.options.items)
		}
		, max:function() {
			var base=this, maximum=(base.itemsAmount*base.itemWidth-base.options.items*base.itemWidth)*-1;
			if(base.options.items>base.itemsAmount) {
				base.maximumItem=0;
				maximum=0;
				base.maximumPixels=0
			}
			else {
				base.maximumItem=base.itemsAmount-base.options.items;
				base.maximumPixels=maximum
			}
			return maximum
		}
		, min:function() {
			return 0
		}
		, loops:function() {
			var base=this, prev=0, elWidth=0, i, item, roundPageNum;
			base.positionsInArray=[0];
			base.pagesInArray=[];
			for(i=0;
			i<base.itemsAmount;
			i+=1) {
				elWidth+=base.itemWidth;
				base.positionsInArray.push(-elWidth);
				if(base.options.scrollPerPage===true) {
					item=$(base.$owlItems[i]);
					roundPageNum=item.data("owl-roundPages");
					if(roundPageNum!==prev) {
						base.pagesInArray[prev]=base.positionsInArray[i];
						prev=roundPageNum
					}
				}
			}
		}
		, buildControls:function() {
			var base=this;
			if(base.options.navigation===true||base.options.pagination===true) {
				base.owlControls=$('<div class="owl-controls"/>').toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem)
			}
			if(base.options.pagination===true) {
				base.buildPagination()
			}
			if(base.options.navigation===true) {
				base.buildButtons()
			}
		}
		, buildButtons:function() {
			var base=this, buttonsWrapper=$('<div class="owl-buttons"/>');
			base.owlControls.append(buttonsWrapper);
			base.buttonPrev=$("<div/>", {
				"class": "owl-prev", html:base.options.navigationText[0]||""
			}
			);
			base.buttonNext=$("<div/>", {
				"class": "owl-next", html:base.options.navigationText[1]||""
			}
			);
			buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(event) {
				event.preventDefault()
			}
			);
			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(event) {
				event.preventDefault();
				if($(this).hasClass("owl-next")) {
					base.next()
				}
				else {
					base.prev()
				}
			}
			)
		}
		, buildPagination:function() {
			var base=this;
			base.paginationWrapper=$('<div class="owl-pagination"/>');
			base.owlControls.append(base.paginationWrapper);
			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event) {
				event.preventDefault();
				if(Number($(this).data("owl-page"))!==base.currentItem) {
					base.goTo(Number($(this).data("owl-page")), true)
				}
			}
			)
		}
		, updatePagination:function() {
			var base=this, counter, lastPage, lastItem, i, paginationButton, paginationButtonInner;
			if(base.options.pagination===false) {
				return false
			}
			base.paginationWrapper.html("");
			counter=0;
			lastPage=base.itemsAmount-base.itemsAmount%base.options.items;
			for(i=0;
			i<base.itemsAmount;
			i+=1) {
				if(i%base.options.items===0) {
					counter+=1;
					if(lastPage===i) {
						lastItem=base.itemsAmount-base.options.items
					}
					paginationButton=$("<div/>", {
						"class": "owl-page"
					}
					);
					paginationButtonInner=$("<span></span>", {
						text: base.options.paginationNumbers===true?counter:"", "class":base.options.paginationNumbers===true?"owl-numbers":""
					}
					);
					paginationButton.append(paginationButtonInner);
					paginationButton.data("owl-page", lastPage===i?lastItem:i);
					paginationButton.data("owl-roundPages", counter);
					base.paginationWrapper.append(paginationButton)
				}
			}
			base.checkPagination()
		}
		, checkPagination:function() {
			var base=this;
			if(base.options.pagination===false) {
				return false
			}
			base.paginationWrapper.find(".owl-page").each(function() {
				if($(this).data("owl-roundPages")===$(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
					base.paginationWrapper.find(".owl-page").removeClass("active");
					$(this).addClass("active")
				}
			}
			)
		}
		, checkNavigation:function() {
			var base=this;
			if(base.options.navigation===false) {
				return false
			}
			if(base.options.rewindNav===false) {
				if(base.currentItem===0&&base.maximumItem===0) {
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled")
				}
				else if(base.currentItem===0&&base.maximumItem!==0) {
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled")
				}
				else if(base.currentItem===base.maximumItem) {
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled")
				}
				else if(base.currentItem!==0&&base.currentItem!==base.maximumItem) {
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled")
				}
			}
		}
		, updateControls:function() {
			var base=this;
			base.updatePagination();
			base.checkNavigation();
			if(base.owlControls) {
				if(base.options.items>=base.itemsAmount) {
					base.owlControls.hide()
				}
				else {
					base.owlControls.show()
				}
			}
		}
		, destroyControls:function() {
			var base=this;
			if(base.owlControls) {
				base.owlControls.remove()
			}
		}
		, next:function(speed) {
			var base=this;
			if(base.isTransition) {
				return false
			}
			base.currentItem+=base.options.scrollPerPage===true?base.options.items:1;
			if(base.currentItem>base.maximumItem+(base.options.scrollPerPage===true?base.options.items-1:0)) {
				if(base.options.rewindNav===true) {
					base.currentItem=0;
					speed="rewind"
				}
				else {
					base.currentItem=base.maximumItem;
					return false
				}
			}
			base.goTo(base.currentItem, speed)
		}
		, prev:function(speed) {
			var base=this;
			if(base.isTransition) {
				return false
			}
			if(base.options.scrollPerPage===true&&base.currentItem>0&&base.currentItem<base.options.items) {
				base.currentItem=0
			}
			else {
				base.currentItem-=base.options.scrollPerPage===true?base.options.items: 1
			}
			if(base.currentItem<0) {
				if(base.options.rewindNav===true) {
					base.currentItem=base.maximumItem;
					speed="rewind"
				}
				else {
					base.currentItem=0;
					return false
				}
			}
			base.goTo(base.currentItem, speed)
		}
		, goTo:function(position, speed, drag) {
			var base=this, goToPixel;
			if(base.isTransition) {
				return false
			}
			if(typeof base.options.beforeMove==="function") {
				base.options.beforeMove.apply(this, [base.$elem])
			}
			if(position>=base.maximumItem) {
				position=base.maximumItem
			}
			else if(position<=0) {
				position=0
			}
			base.currentItem=base.owl.currentItem=position;
			if(base.options.transitionStyle!==false&&drag!=="drag"&&base.options.items===1&&base.browser.support3d===true) {
				base.swapSpeed(0);
				if(base.browser.support3d===true) {
					base.transition3d(base.positionsInArray[position])
				}
				else {
					base.css2slide(base.positionsInArray[position], 1)
				}
				base.afterGo();
				base.singleItemTransition();
				return false
			}
			goToPixel=base.positionsInArray[position];
			if(base.browser.support3d===true) {
				base.isCss3Finish=false;
				if(speed===true) {
					base.swapSpeed("paginationSpeed");
					window.setTimeout(function() {
						base.isCss3Finish=true
					}
					, base.options.paginationSpeed)
				}
				else if(speed==="rewind") {
					base.swapSpeed(base.options.rewindSpeed);
					window.setTimeout(function() {
						base.isCss3Finish=true
					}
					, base.options.rewindSpeed)
				}
				else {
					base.swapSpeed("slideSpeed");
					window.setTimeout(function() {
						base.isCss3Finish=true
					}
					, base.options.slideSpeed)
				}
				base.transition3d(goToPixel)
			}
			else {
				if(speed===true) {
					base.css2slide(goToPixel, base.options.paginationSpeed)
				}
				else if(speed==="rewind") {
					base.css2slide(goToPixel, base.options.rewindSpeed)
				}
				else {
					base.css2slide(goToPixel, base.options.slideSpeed)
				}
			}
			base.afterGo()
		}
		, jumpTo:function(position) {
			var base=this;
			if(typeof base.options.beforeMove==="function") {
				base.options.beforeMove.apply(this, [base.$elem])
			}
			if(position>=base.maximumItem||position===-1) {
				position=base.maximumItem
			}
			else if(position<=0) {
				position=0
			}
			base.swapSpeed(0);
			if(base.browser.support3d===true) {
				base.transition3d(base.positionsInArray[position])
			}
			else {
				base.css2slide(base.positionsInArray[position], 1)
			}
			base.currentItem=base.owl.currentItem=position;
			base.afterGo()
		}
		, afterGo:function() {
			var base=this;
			base.prevArr.push(base.currentItem);
			base.prevItem=base.owl.prevItem=base.prevArr[base.prevArr.length-2];
			base.prevArr.shift(0);
			if(base.prevItem!==base.currentItem) {
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();
				if(base.options.autoPlay!==false) {
					base.checkAp()
				}
			}
			if(typeof base.options.afterMove==="function"&&base.prevItem!==base.currentItem) {
				base.options.afterMove.apply(this, [base.$elem])
			}
		}
		, stop:function() {
			var base=this;
			base.apStatus="stop";
			window.clearInterval(base.autoPlayInterval)
		}
		, checkAp:function() {
			var base=this;
			if(base.apStatus!=="stop") {
				base.play()
			}
		}
		, play:function() {
			var base=this;
			base.apStatus="play";
			if(base.options.autoPlay===false) {
				return false
			}
			window.clearInterval(base.autoPlayInterval);
			base.autoPlayInterval=window.setInterval(function() {
				base.next(true)
			}
			, base.options.autoPlay)
		}
		, swapSpeed:function(action) {
			var base=this;
			if(action==="slideSpeed") {
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed))
			}
			else if(action==="paginationSpeed") {
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed))
			}
			else if(typeof action!=="string") {
				base.$owlWrapper.css(base.addCssSpeed(action))
			}
		}
		, addCssSpeed:function(speed) {
			return {
				"-webkit-transition": "all "+speed+"ms ease", "-moz-transition":"all "+speed+"ms ease", "-o-transition":"all "+speed+"ms ease", transition:"all "+speed+"ms ease"
			}
		}
		, removeTransition:function() {
			return {
				"-webkit-transition": "", "-moz-transition":"", "-o-transition":"", transition:""
			}
		}
		, doTranslate:function(pixels) {
			return {
				"-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)", "-moz-transform":"translate3d("+pixels+"px, 0px, 0px)", "-o-transform":"translate3d("+pixels+"px, 0px, 0px)", "-ms-transform":"translate3d("+pixels+"px, 0px, 0px)", transform:"translate3d("+pixels+"px, 0px,0px)"
			}
		}
		, transition3d:function(value) {
			var base=this;
			base.$owlWrapper.css(base.doTranslate(value))
		}
		, css2move:function(value) {
			var base=this;
			base.$owlWrapper.css( {
				left: value
			}
			)
		}
		, css2slide:function(value, speed) {
			var base=this;
			base.isCssFinish=false;
			base.$owlWrapper.stop(true, true).animate( {
				left: value
			}
			, {
				duration:speed||base.options.slideSpeed, complete:function() {
					base.isCssFinish=true
				}
			}
			)
		}
		, checkBrowser:function() {
			var base=this, translate3D="translate3d(0px, 0px, 0px)", tempElem=document.createElement("div"), regex, asSupport, support3d, isTouch;
			tempElem.style.cssText="  -moz-transform:"+translate3D+"; -ms-transform:"+translate3D+"; -o-transform:"+translate3D+"; -webkit-transform:"+translate3D+"; transform:"+translate3D;
			regex=/translate3d\(0px, 0px, 0px\)/g;
			asSupport=tempElem.style.cssText.match(regex);
			support3d=asSupport!==null&&asSupport.length===1;
			isTouch="ontouchstart"in window||window.navigator.msMaxTouchPoints;
			base.browser= {
				support3d: support3d, isTouch:isTouch
			}
		}
		, moveEvents:function() {
			var base=this;
			if(base.options.mouseDrag!==false||base.options.touchDrag!==false) {
				base.gestures();
				base.disabledEvents()
			}
		}
		, eventTypes:function() {
			var base=this, types=["s", "e", "x"];
			base.ev_types= {}
			;
			if(base.options.mouseDrag===true&&base.options.touchDrag===true) {
				types=["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"]
			}
			else if(base.options.mouseDrag===false&&base.options.touchDrag===true) {
				types=["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"]
			}
			else if(base.options.mouseDrag===true&&base.options.touchDrag===false) {
				types=["mousedown.owl", "mousemove.owl", "mouseup.owl"]
			}
			base.ev_types.start=types[0];
			base.ev_types.move=types[1];
			base.ev_types.end=types[2]
		}
		, disabledEvents:function() {
			var base=this;
			base.$elem.on("dragstart.owl", function(event) {
				event.preventDefault()
			}
			);
			base.$elem.on("mousedown.disableTextSelect", function(e) {
				return $(e.target).is("input, textarea, select, option")
			}
			)
		}
		, gestures:function() {
			var base=this, locals= {
				offsetX: 0, offsetY:0, baseElWidth:0, relativePos:0, position:null, minSwipe:null, maxSwipe:null, sliding:null, dargging:null, targetElement:null
			}
			;
			base.isCssFinish=true;
			function getTouches(event) {
				if(event.touches!==undefined) {
					return {
						x: event.touches[0].pageX, y:event.touches[0].pageY
					}
				}
				if(event.touches===undefined) {
					if(event.pageX!==undefined) {
						return {
							x: event.pageX, y:event.pageY
						}
					}
					if(event.pageX===undefined) {
						return {
							x: event.clientX, y:event.clientY
						}
					}
				}
			}
			function swapEvents(type) {
				if(type==="on") {
					$(document).on(base.ev_types.move, dragMove);
					$(document).on(base.ev_types.end, dragEnd)
				}
				else if(type==="off") {
					$(document).off(base.ev_types.move);
					$(document).off(base.ev_types.end)
				}
			}
			function dragStart(event) {
				var ev=event.originalEvent||event||window.event, position;
				if(ev.which===3) {
					return false
				}
				if(base.itemsAmount<=base.options.items) {
					return
				}
				if(base.isCssFinish===false&&!base.options.dragBeforeAnimFinish) {
					return false
				}
				if(base.isCss3Finish===false&&!base.options.dragBeforeAnimFinish) {
					return false
				}
				if(base.options.autoPlay!==false) {
					window.clearInterval(base.autoPlayInterval)
				}
				if(base.browser.isTouch!==true&&!base.$owlWrapper.hasClass("grabbing")) {
					base.$owlWrapper.addClass("grabbing")
				}
				base.newPosX=0;
				base.newRelativeX=0;
				$(this).css(base.removeTransition());
				position=$(this).position();
				locals.relativePos=position.left;
				locals.offsetX=getTouches(ev).x-position.left;
				locals.offsetY=getTouches(ev).y-position.top;
				swapEvents("on");
				locals.sliding=false;
				locals.targetElement=ev.target||ev.srcElement
			}
			function dragMove(event) {
				var ev=event.originalEvent||event||window.event, minSwipe, maxSwipe;
				base.newPosX=getTouches(ev).x-locals.offsetX;
				base.newPosY=getTouches(ev).y-locals.offsetY;
				base.newRelativeX=base.newPosX-locals.relativePos;
				if(typeof base.options.startDragging==="function"&&locals.dragging!==true&&base.newRelativeX!==0) {
					locals.dragging=true;
					base.options.startDragging.apply(base, [base.$elem])
				}
				if((base.newRelativeX>8||base.newRelativeX<-8)&&base.browser.isTouch===true) {
					if(ev.preventDefault!==undefined) {
						ev.preventDefault()
					}
					else {
						ev.returnValue=false
					}
					locals.sliding=true
				}
				if((base.newPosY>10||base.newPosY<-10)&&locals.sliding===false) {
					$(document).off("touchmove.owl")
				}
				minSwipe=function() {
					return base.newRelativeX/5
				}
				;
				maxSwipe=function() {
					return base.maximumPixels+base.newRelativeX/5
				}
				;
				base.newPosX=Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
				if(base.browser.support3d===true) {
					base.transition3d(base.newPosX)
				}
				else {
					base.css2move(base.newPosX)
				}
			}
			function dragEnd(event) {
				var ev=event.originalEvent||event||window.event, newPosition, handlers, owlStopEvent;
				ev.target=ev.target||ev.srcElement;
				locals.dragging=false;
				if(base.browser.isTouch!==true) {
					base.$owlWrapper.removeClass("grabbing")
				}
				if(base.newRelativeX<0) {
					base.dragDirection=base.owl.dragDirection="left"
				}
				else {
					base.dragDirection=base.owl.dragDirection="right"
				}
				if(base.newRelativeX!==0) {
					newPosition=base.getNewPosition();
					base.goTo(newPosition, false, "drag");
					if(locals.targetElement===ev.target&&base.browser.isTouch!==true) {
						$(ev.target).on("click.disable", function(ev) {
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(ev.target).off("click.disable")
						}
						);
						handlers=$._data(ev.target, "events").click;
						owlStopEvent=handlers.pop();
						handlers.splice(0, 0, owlStopEvent)
					}
				}
				swapEvents("off")
			}
			base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart)
		}
		, getNewPosition:function() {
			var base=this, newPosition=base.closestItem();
			if(newPosition>base.maximumItem) {
				base.currentItem=base.maximumItem;
				newPosition=base.maximumItem
			}
			else if(base.newPosX>=0) {
				newPosition=0;
				base.currentItem=0
			}
			return newPosition
		}
		, closestItem:function() {
			var base=this, array=base.options.scrollPerPage===true?base.pagesInArray: base.positionsInArray, goal=base.newPosX, closest=null;
			$.each(array, function(i, v) {
				if(goal-base.itemWidth/20>array[i+1]&&goal-base.itemWidth/20<v&&base.moveDirection()==="left") {
					closest=v;
					if(base.options.scrollPerPage===true) {
						base.currentItem=$.inArray(closest, base.positionsInArray)
					}
					else {
						base.currentItem=i
					}
				}
				else if(goal+base.itemWidth/20<v&&goal+base.itemWidth/20>(array[i+1]||array[i]-base.itemWidth)&&base.moveDirection()==="right") {
					if(base.options.scrollPerPage===true) {
						closest=array[i+1]||array[array.length-1];
						base.currentItem=$.inArray(closest, base.positionsInArray)
					}
					else {
						closest=array[i+1];
						base.currentItem=i+1
					}
				}
			}
			);
			return base.currentItem
		}
		, moveDirection:function() {
			var base=this, direction;
			if(base.newRelativeX<0) {
				direction="right";
				base.playDirection="next"
			}
			else {
				direction="left";
				base.playDirection="prev"
			}
			return direction
		}
		, customEvents:function() {
			var base=this;
			base.$elem.on("owl.next", function() {
				base.next()
			}
			);
			base.$elem.on("owl.prev", function() {
				base.prev()
			}
			);
			base.$elem.on("owl.play", function(event, speed) {
				base.options.autoPlay=speed;
				base.play();
				base.hoverStatus="play"
			}
			);
			base.$elem.on("owl.stop", function() {
				base.stop();
				base.hoverStatus="stop"
			}
			);
			base.$elem.on("owl.goTo", function(event, item) {
				base.goTo(item)
			}
			);
			base.$elem.on("owl.jumpTo", function(event, item) {
				base.jumpTo(item)
			}
			)
		}
		, stopOnHover:function() {
			var base=this;
			if(base.options.stopOnHover===true&&base.browser.isTouch!==true&&base.options.autoPlay!==false) {
				base.$elem.on("mouseover", function() {
					base.stop()
				}
				);
				base.$elem.on("mouseout", function() {
					if(base.hoverStatus!=="stop") {
						base.play()
					}
				}
				)
			}
		}
		, lazyLoad:function() {
			var base=this, i, $item, itemNumber, $lazyImg, follow;
			if(base.options.lazyLoad===false) {
				return false
			}
			for(i=0;
			i<base.itemsAmount;
			i+=1) {
				$item=$(base.$owlItems[i]);
				if($item.data("owl-loaded")==="loaded") {
					continue
				}
				itemNumber=$item.data("owl-item");
				$lazyImg=$item.find(".lazyOwl");
				if(typeof $lazyImg.data("src")!=="string") {
					$item.data("owl-loaded", "loaded");
					continue
				}
				if($item.data("owl-loaded")===undefined) {
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded", "checked")
				}
				if(base.options.lazyFollow===true) {
					follow=itemNumber>=base.currentItem
				}
				else {
					follow=true
				}
				if(follow&&itemNumber<base.currentItem+base.options.items&&$lazyImg.length) {
					base.lazyPreload($item, $lazyImg)
				}
			}
		}
		, lazyPreload:function($item, $lazyImg) {
			var base=this, iterations=0, isBackgroundImg;
			if($lazyImg.prop("tagName")==="DIV") {
				$lazyImg.css("background-image", "url("+$lazyImg.data("src")+")");
				isBackgroundImg=true
			}
			else {
				$lazyImg[0].src=$lazyImg.data("src")
			}
			function showImage() {
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				if(base.options.lazyEffect==="fade") {
					$lazyImg.fadeIn(400)
				}
				else {
					$lazyImg.show()
				}
				if(typeof base.options.afterLazyLoad==="function") {
					base.options.afterLazyLoad.apply(this, [base.$elem])
				}
			}
			function checkLazyImage() {
				iterations+=1;
				if(base.completeImg($lazyImg.get(0))||isBackgroundImg===true) {
					showImage()
				}
				else if(iterations<=100) {
					window.setTimeout(checkLazyImage, 100)
				}
				else {
					showImage()
				}
			}
			checkLazyImage()
		}
		, autoHeight:function() {
			var base=this, $currentimg=$(base.$owlItems[base.currentItem]).find("img"), iterations;
			function addHeight() {
				var $currentItem=$(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height", $currentItem+"px");
				if(!base.wrapperOuter.hasClass("autoHeight")) {
					window.setTimeout(function() {
						base.wrapperOuter.addClass("autoHeight")
					}
					, 0)
				}
			}
			function checkImage() {
				iterations+=1;
				if(base.completeImg($currentimg.get(0))) {
					addHeight()
				}
				else if(iterations<=100) {
					window.setTimeout(checkImage, 100)
				}
				else {
					base.wrapperOuter.css("height", "")
				}
			}
			if($currentimg.get(0)!==undefined) {
				iterations=0;
				checkImage()
			}
			else {
				addHeight()
			}
		}
		, completeImg:function(img) {
			var naturalWidthType;
			if(!img.complete) {
				return false
			}
			naturalWidthType=typeof img.naturalWidth;
			if(naturalWidthType!=="undefined"&&img.naturalWidth===0) {
				return false
			}
			return true
		}
		, onVisibleItems:function() {
			var base=this, i;
			if(base.options.addClassActive===true) {
				base.$owlItems.removeClass("active")
			}
			base.visibleItems=[];
			for(i=base.currentItem;
			i<base.currentItem+base.options.items;
			i+=1) {
				base.visibleItems.push(i);
				if(base.options.addClassActive===true) {
					$(base.$owlItems[i]).addClass("active")
				}
			}
			base.owl.visibleItems=base.visibleItems
		}
		, transitionTypes:function(className) {
			var base=this;
			base.outClass="owl-"+className+"-out";
			base.inClass="owl-"+className+"-in"
		}
		, singleItemTransition:function() {
			var base=this, outClass=base.outClass, inClass=base.inClass, $currentItem=base.$owlItems.eq(base.currentItem), $prevItem=base.$owlItems.eq(base.prevItem), prevPos=Math.abs(base.positionsInArray[base.currentItem])+base.positionsInArray[base.prevItem], origin=Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2, animEnd="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
			base.isTransition=true;
			base.$owlWrapper.addClass("owl-origin").css( {
				"-webkit-transform-origin": origin+"px", "-moz-perspective-origin":origin+"px", "perspective-origin":origin+"px"
			}
			);
			function transStyles(prevPos) {
				return {
					position: "relative", left:prevPos+"px"
				}
			}
			$prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function() {
				base.endPrev=true;
				$prevItem.off(animEnd);
				base.clearTransStyle($prevItem, outClass)
			}
			);
			$currentItem.addClass(inClass).on(animEnd, function() {
				base.endCurrent=true;
				$currentItem.off(animEnd);
				base.clearTransStyle($currentItem, inClass)
			}
			)
		}
		, clearTransStyle:function(item, classToRemove) {
			var base=this;
			item.css( {
				position: "", left:""
			}
			).removeClass(classToRemove);
			if(base.endPrev&&base.endCurrent) {
				base.$owlWrapper.removeClass("owl-origin");
				base.endPrev=false;
				base.endCurrent=false;
				base.isTransition=false
			}
		}
		, owlStatus:function() {
			var base=this;
			base.owl= {
				userOptions: base.userOptions, baseElement:base.$elem, userItems:base.$userItems, owlItems:base.$owlItems, currentItem:base.currentItem, prevItem:base.prevItem, visibleItems:base.visibleItems, isTouch:base.browser.isTouch, browser:base.browser, dragDirection:base.dragDirection
			}
		}
		, clearEvents:function() {
			var base=this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer)
		}
		, unWrap:function() {
			var base=this;
			if(base.$elem.children().length!==0) {
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if(base.owlControls) {
					base.owlControls.remove()
				}
			}
			base.clearEvents();
			base.$elem.attr("style", base.$elem.data("owl-originalStyles")||"").attr("class", base.$elem.data("owl-originalClasses"))
		}
		, destroy:function() {
			var base=this;
			base.stop();
			window.clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData()
		}
		, reinit:function(newOptions) {
			var base=this, options=$.extend( {}
			, base.userOptions, newOptions);
			base.unWrap();
			base.init(options, base.$elem)
		}
		, addItem:function(htmlString, targetPosition) {
			var base=this, position;
			if(!htmlString) {
				return false
			}
			if(base.$elem.children().length===0) {
				base.$elem.append(htmlString);
				base.setVars();
				return false
			}
			base.unWrap();
			if(targetPosition===undefined||targetPosition===-1) {
				position=-1
			}
			else {
				position=targetPosition
			}
			if(position>=base.$userItems.length||position===-1) {
				base.$userItems.eq(-1).after(htmlString)
			}
			else {
				base.$userItems.eq(position).before(htmlString)
			}
			base.setVars()
		}
		, removeItem:function(targetPosition) {
			var base=this, position;
			if(base.$elem.children().length===0) {
				return false
			}
			if(targetPosition===undefined||targetPosition===-1) {
				position=-1
			}
			else {
				position=targetPosition
			}
			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars()
		}
	}

	;
	$.fn.owlCarousel=function(options) {
		return this.each(function() {
			if($(this).data("owl-init")===true) {
				return false
			}
			$(this).data("owl-init", true);
			var carousel=Object.create(Carousel);
			carousel.init(options, this);
			$.data(this, "owlCarousel", carousel)
		}
		)
	}

	;
	$.fn.owlCarousel.options= {
		items: 5, itemsCustom:false, itemsDesktop:[1199, 4], itemsDesktopSmall:[979, 3], itemsTablet:[768, 2], itemsTabletSmall:false, itemsMobile:[479, 1], singleItem:false, itemsScaleUp:false, slideSpeed:200, paginationSpeed:800, rewindSpeed:1e3, autoPlay:false, stopOnHover:false, navigation:false, navigationText:["prev", "next"], rewindNav:true, scrollPerPage:false, pagination:true, paginationNumbers:false, responsive:true, responsiveRefreshRate:200, responsiveBaseWidth:window, baseClass:"owl-carousel", theme:"owl-theme", lazyLoad:false, lazyFollow:true, lazyEffect:"fade", autoHeight:false, jsonPath:false, jsonSuccess:false, dragBeforeAnimFinish:true, mouseDrag:true, touchDrag:true, addClassActive:false, transitionStyle:false, beforeUpdate:false, afterUpdate:false, beforeInit:false, afterInit:false, beforeMove:false, afterMove:false, afterAction:false, startDragging:false, afterLazyLoad:false
	}
}
)(jQuery, window, document);
!function(e) {
	function t() {
		e[n].glbl||(r= {
			$wndw: e(window), $docu:e(document), $html:e("html"), $body:e("body")
		}
		, i= {}
		, a= {}
		, o= {}
		, e.each([i, a, o], function(e, t) {
			t.add=function(e) {
				e=e.split(" ");
				for(var n=0, s=e.length;
				s>n;
				n++)t[e[n]]=t.mm(e[n])
			}
		}
		), i.mm=function(e) {
			return"mm-"+e
		}
		, i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), i.umm=function(e) {
			return"mm-"==e.slice(0, 3)&&(e=e.slice(3)), e
		}
		, a.mm=function(e) {
			return"mm-"+e
		}
		, a.add("parent sub"), o.mm=function(e) {
			return e+".mm"
		}
		, o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c=i, e[n]._d=a, e[n]._e=o, e[n].glbl=r)
	}

	var n="mmenu", s="5.6.1";
	if(!(e[n]&&e[n].version>s)) {
		e[n]=function(e, t, n) {
			this.$menu=e, this._api=["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts=t, this.conf=n, this.vars= {}
			, this.cbck= {}
			, "function"==typeof this.___deprecated&&this.___deprecated(), this._initMenu(), this._initAnchors();
			var s=this.$pnls.children();
			return this._initAddons(), this.init(s), "function"==typeof this.___debug&&this.___debug(), this
		}
		, e[n].version=s, e[n].addons= {}
		, e[n].uniqueId=0, e[n].defaults= {
			extensions:[], navbar: {
				add: !0, title:"Menu", titleLink:"panel"
			}
			, onClick: {
				setSelected: !0
			}
			, slidingSubmenus:!0
		}
		, e[n].configuration= {
			classNames: {
				divider: "Divider", inset:"Inset", panel:"Panel", selected:"Selected", spacer:"Spacer", vertical:"Vertical"
			}
			, clone:!1, openingInterval:25, panelNodetype:"ul, ol, div", transitionDuration:400
		}
		, e[n].prototype= {
			init:function(e) {
				e=e.not("."+i.nopanel), e=this._initPanels(e), this.trigger("init", e), this.trigger("update")
			}
			, update:function() {
				this.trigger("update")
			}
			, setSelected:function(e) {
				this.$menu.find("."+i.listview).children().removeClass(i.selected), e.addClass(i.selected), this.trigger("setSelected", e)
			}
			, openPanel:function(t) {
				var s=t.parent(), a=this;
				if(s.hasClass(i.vertical)) {
					var o=s.parents("."+i.subopened);
					if(o.length)return void this.openPanel(o.first());
					s.addClass(i.opened), this.trigger("openPanel", t), this.trigger("openingPanel", t), this.trigger("openedPanel", t)
				}
				else {
					if(t.hasClass(i.current))return;
					var r=this.$pnls.children("."+i.panel), l=r.filter("."+i.current);
					r.removeClass(i.highest).removeClass(i.current).not(t).not(l).not("."+i.vertical).addClass(i.hidden), e[n].support.csstransitions||l.addClass(i.hidden), t.hasClass(i.opened)?t.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(t.addClass(i.highest), l.addClass(i.subopened)), t.removeClass(i.hidden).addClass(i.current), a.trigger("openPanel", t), setTimeout(function() {
						t.removeClass(i.subopened).addClass(i.opened), a.trigger("openingPanel", t), a.__transitionend(t, function() {
							a.trigger("openedPanel", t)
						}
						, a.conf.transitionDuration)
					}
					, this.conf.openingInterval)
				}
			}
			, closePanel:function(e) {
				var t=e.parent();
				t.hasClass(i.vertical)&&(t.removeClass(i.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
			}
			, closeAllPanels:function() {
				this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);
				var e=this.$pnls.children("."+i.panel), t=e.first();
				this.$pnls.children("."+i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden), this.openPanel(t)
			}
			, togglePanel:function(e) {
				var t=e.parent();
				t.hasClass(i.vertical)&&this[t.hasClass(i.opened)?"closePanel": "openPanel"](e)
			}
			, getInstance:function() {
				return this
			}
			, bind:function(e, t) {
				this.cbck[e]=this.cbck[e]||[], this.cbck[e].push(t)
			}
			, trigger:function() {
				var e=this, t=Array.prototype.slice.call(arguments), n=t.shift();
				if(this.cbck[n])for(var s=0, i=this.cbck[n].length;
				i>s;
				s++)this.cbck[n][s].apply(e, t)
			}
			, _initMenu:function() {
				this.$menu.attr("id", this.$menu.attr("id")||this.__getUniqueId()), this.conf.clone&&(this.$menu=this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
					e(this).attr("id", i.mm(e(this).attr("id")))
				}
				)), this.$menu.contents().each(function() {
					3==e(this)[0].nodeType&&e(this).remove()
				}
				), this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(i.wrapper);
				var t=[i.menu];
				this.opts.slidingSubmenus||t.push(i.vertical), this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"", this.opts.extensions&&t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
			}
			, _initPanels:function(t) {
				var n=this, s=this.__findAddBack(t, "ul, ol");
				this.__refactorClass(s, this.conf.classNames.inset, "inset").addClass(i.nolistview+" "+i.nopanel), s.not("."+i.nolistview).addClass(i.listview);
				var o=this.__findAddBack(t, "."+i.listview).children();
				this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "."+this.conf.classNames.panel), this.conf.classNames.panel, "panel");
				var r=e(), l=t.add(t.find("."+i.panel)).add(this.__findAddBack(t, "."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);
				this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus||l.addClass(i.vertical), l.each(function() {
					var t=e(this), s=t;
					t.is("ul, ol")?(t.wrap('<div class="'+i.panel+'" />'), s=t.parent()): s.addClass(i.panel);
					var a=t.attr("id");
					t.removeAttr("id"), s.attr("id", a||n.__getUniqueId()), t.hasClass(i.vertical)&&(t.removeClass(n.conf.classNames.vertical), s.add(s.parent()).addClass(i.vertical)), r=r.add(s)
				}
				);
				var d=e("."+i.panel, this.$menu);
				r.each(function(t) {
					var s, o, r=e(this), l=r.parent(), d=l.children("a, span").first();
					if(l.is("."+i.panels)||(l.data(a.sub, r), r.data(a.parent, l)), l.children("."+i.next).length||l.parent().is("."+i.listview)&&(s=r.attr("id"), o=e('<a class="'+i.next+'" href="#'+s+'" data-target="#'+s+'" />').insertBefore(d), d.is("span")&&o.addClass(i.fullsubopen)), !r.children("."+i.navbar).length&&!l.hasClass(i.vertical)) {
						l.parent().is("."+i.listview)?l=l.closest("."+i.panel): (d=l.closest("."+i.panel).find('a[href="#'+r.attr("id")+'"]').first(), l=d.closest("."+i.panel));
						var c=e('<div class="'+i.navbar+'" />');
						if(l.length) {
							switch(s=l.attr("id"), n.opts.navbar.titleLink) {
								case"anchor": _url=d.attr("href");
								break;
								case"panel": case"parent":_url="#"+s;
								break;
								default: _url=!1
							}
							c.append('<a class="'+i.btn+" "+i.prev+'" href="#'+s+'" data-target="#'+s+'" />').append(e('<a class="'+i.title+'"'+(_url?' href="'+_url+'"':"")+" />").text(d.text())).prependTo(r), n.opts.navbar.add&&r.addClass(i.hasnavbar)
						}
						else n.opts.navbar.title&&(c.append('<a class="'+i.title+'">'+n.opts.navbar.title+"</a>").prependTo(r), n.opts.navbar.add&&r.addClass(i.hasnavbar))
					}
				}
				);
				var c=this.__findAddBack(t, "."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);
				c.add(c.parentsUntil("."+i.menu, "li")).filter("."+i.vertical).addClass(i.opened).end().each(function() {
					e(this).parentsUntil("."+i.menu, "."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu, "."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)
				}
				), c.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu, "."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);
				var h=d.filter("."+i.opened);
				return h.length||(h=r.first()), h.addClass(i.opened).last().addClass(i.current), r.not("."+i.vertical).not(h.last()).addClass(i.hidden).end().filter(function() {
					return!e(this).parent().hasClass(i.panels)
				}
				).appendTo(this.$pnls), r
			}
			, _initAnchors:function() {
				var t=this;
				r.$body.on(o.click+"-oncanvas", "a[href]", function(s) {
					var a=e(this), o=!1, r=t.$menu.find(a).length;
					for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t, a, r)) {
						o=!0;
						break
					}
					var d=a.attr("href");
					if(!o&&r&&d.length>1&&"#"==d.slice(0, 1))try {
						var c=e(d, t.$menu);
						c.is("."+i.panel)&&(o=!0, t[a.parent().hasClass(i.vertical)?"togglePanel": "openPanel"](c))
					}
					catch(h) {}
					if(o&&s.preventDefault(), !o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')) {
						t.__valueOrFn(t.opts.onClick.setSelected, a)&&t.setSelected(e(s.target).parent());
						var u=t.__valueOrFn(t.opts.onClick.preventDefault, a, "#"==d.slice(0, 1));
						u&&s.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, u)&&t.close()
					}
				}
				)
			}
			, _initAddons:function() {
				var t;
				for(t in e[n].addons)e[n].addons[t].add.call(this), e[n].addons[t].add=function() {}
				;
				for(t in e[n].addons)e[n].addons[t].setup.call(this)
			}
			, _getOriginalMenuId:function() {
				var e=this.$menu.attr("id");
				return e&&e.length&&this.conf.clone&&(e=i.umm(e)), e
			}
			, __api:function() {
				var t=this, n= {}
				;
				return e.each(this._api, function(e) {
					var s=this;
					n[s]=function() {
						var e=t[s].apply(t, arguments);
						return"undefined"==typeof e?n: e
					}
				}
				), n
			}
			, __valueOrFn:function(e, t, n) {
				return"function"==typeof e?e.call(t[0]): "undefined"==typeof e&&"undefined"!=typeof n?n:e
			}
			, __refactorClass:function(e, t, n) {
				return e.filter("."+t).removeClass(t).addClass(i[n])
			}
			, __findAddBack:function(e, t) {
				return e.find(t).add(e.filter(t))
			}
			, __filterListItems:function(e) {
				return e.not("."+i.divider).not("."+i.hidden)
			}
			, __transitionend:function(e, t, n) {
				var s=!1, i=function() {
					s||t.call(e[0]), s=!0
				}
				;
				e.one(o.transitionend, i), e.one(o.webkitTransitionEnd, i), setTimeout(i, 1.1*n)
			}
			, __getUniqueId:function() {
				return i.mm(e[n].uniqueId++)
			}
		}
		, e.fn[n]=function(s, i) {
			return t(), s=e.extend(!0, {}
			, e[n].defaults, s), i=e.extend(!0, {}
			, e[n].configuration, i), this.each(function() {
				var t=e(this);
				if(!t.data(n)) {
					var a=new e[n](t, s, i);
					a.$menu.data(n, a.__api())
				}
			}
			)
		}
		, e[n].support= {
			touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1, csstransitions:function() {
				if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;
				var e=document.body||document.documentElement, t=e.style, n="transition";
				if("string"==typeof t[n])return!0;
				var s=["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
				n=n.charAt(0).toUpperCase()+n.substr(1);
				for(var i=0;
				i<s.length;
				i++)if("string"==typeof t[s[i]+n])return!0;
				return!1
			}
			()
		}
		;
		var i, a, o, r
	}
}
(jQuery), function(e) {
	var t="mmenu", n="offCanvas";
	e[t].addons[n]= {
		setup:function() {
			if(this.opts[n]) {
				var i=this.opts[n], a=this.conf[n];
				o=e[t].glbl, this._api=e.merge(this._api, ["open", "close", "setPage"]), ("top"==i.position||"bottom"==i.position)&&(i.zposition="front"), "string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype), o.$allMenus=(o.$allMenus||e()).add(this.$menu), this.vars.opened=!1;
				var r=[s.offcanvas];
				"left"!=i.position&&r.push(s.mm(i.position)), "back"!=i.zposition&&r.push(s.mm(i.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper), this.setPage(o.$page), this._initBlocker(), this["_initWindow_"+n](), this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);
				var l=window.location.hash;
				if(l) {
					var d=this._getOriginalMenuId();
					d&&d==l.slice(1)&&this.open()
				}
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("offcanvas slideout blocking modal background opening blocker page"), i.add("style"), a.add("resize")
		}
		, clickAnchor:function(e, t) {
			if(!this.opts[n])return!1;
			var s=this._getOriginalMenuId();
			if(s&&e.is('[href="#'+s+'"]'))return this.open(), !0;
			if(o.$page)return s=o.$page.first().attr("id"), s&&e.is('[href="#'+s+'"]')?(this.close(), !0): !1
		}
	}

	, e[t].defaults[n]= {
		position: "left", zposition:"back", blockUI:!0, moveBackground:!0
	}

	, e[t].configuration[n]= {
		pageNodetype: "div", pageSelector:null, noPageSelector:[], wrapPageIfNeeded:!0, menuWrapperSelector:"body", menuInjectMethod:"prepend"
	}

	, e[t].prototype.open=function() {
		if(!this.vars.opened) {
			var e=this;
			this._openSetup(), setTimeout(function() {
				e._openFinish()
			}
			, this.conf.openingInterval), this.trigger("open")
		}
	}

	, e[t].prototype._openSetup=function() {
		var t=this, r=this.opts[n];
		this.closeAllOthers(), o.$page.each(function() {
			e(this).data(i.style, e(this).attr("style")||"")
		}
		), o.$wndw.trigger(a.resize+"-"+n, [!0]);
		var l=[s.opened];
		r.blockUI&&l.push(s.blocking), "modal"==r.blockUI&&l.push(s.modal), r.moveBackground&&l.push(s.background), "left"!=r.position&&l.push(s.mm(this.opts[n].position)), "back"!=r.zposition&&l.push(s.mm(this.opts[n].zposition)), this.opts.extensions&&l.push(this.opts.extensions), o.$html.addClass(l.join(" ")), setTimeout(function() {
			t.vars.opened=!0
		}
		, this.conf.openingInterval), this.$menu.addClass(s.current+" "+s.opened)
	}

	, e[t].prototype._openFinish=function() {
		var e=this;
		this.__transitionend(o.$page.first(), function() {
			e.trigger("opened")
		}
		, this.conf.transitionDuration), o.$html.addClass(s.opening), this.trigger("opening")
	}

	, e[t].prototype.close=function() {
		if(this.vars.opened) {
			var t=this;
			this.__transitionend(o.$page.first(), function() {
				t.$menu.removeClass(s.current).removeClass(s.opened), o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(t.opts[n].position)).removeClass(s.mm(t.opts[n].zposition)), t.opts.extensions&&o.$html.removeClass(t.opts.extensions), o.$page.each(function() {
					e(this).attr("style", e(this).data(i.style))
				}
				), t.vars.opened=!1, t.trigger("closed")
			}
			, this.conf.transitionDuration), o.$html.removeClass(s.opening), this.trigger("close"), this.trigger("closing")
		}
	}

	, e[t].prototype.closeAllOthers=function() {
		o.$allMenus.not(this.$menu).each(function() {
			var n=e(this).data(t);
			n&&n.close&&n.close()
		}
		)
	}

	, e[t].prototype.setPage=function(t) {
		var i=this, a=this.conf[n];
		t&&t.length||(t=o.$body.find(a.pageSelector), a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))), t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())), t.each(function() {
			e(this).attr("id", e(this).attr("id")||i.__getUniqueId())
		}
		), t.addClass(s.page+" "+s.slideout), o.$page=t, this.trigger("setPage", t)
	}

	, e[t].prototype["_initWindow_"+n]=function() {
		o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n, function(e) {
			return o.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(), !1): void 0
		}
		);
		var e=0;
		o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n, function(t, n) {
			if(1==o.$page.length&&(n||o.$html.hasClass(s.opened))) {
				var i=o.$wndw.height();
				(n||i!=e)&&(e=i, o.$page.css("minHeight", i))
			}
		}
		)
	}

	, e[t].prototype._initBlocker=function() {
		var t=this;
		this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')), o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n, function(e) {
			e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown+"-"+n)
		}
		).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n, function(e) {
			e.preventDefault(), o.$html.hasClass(s.modal)||(t.closeAllOthers(), t.close())
		}
		))
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="scrollBugFix";
	e[t].addons[n]= {
		setup:function() {
			var i=this, r=this.opts[n];
			this.conf[n];
			if(o=e[t].glbl, e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.modal&&("boolean"==typeof r&&(r= {
				fix: r
			}
			), "object"!=typeof r&&(r= {}
			), r=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], r), r.fix)) {
				var l=this.$menu.attr("id"), d=!1;
				this.bind("opening", function() {
					this.$pnls.children("."+s.current).scrollTop(0)
				}
				), o.$docu.on(a.touchmove, function(e) {
					i.vars.opened&&e.preventDefault()
				}
				), o.$body.on(a.touchstart, "#"+l+"> ."+s.panels+"> ."+s.current, function(e) {
					i.vars.opened&&(d||(d=!0, 0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1: e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1), d=!1))
				}
				).on(a.touchmove, "#"+l+"> ."+s.panels+"> ."+s.current, function(t) {
					i.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()
				}
				), o.$wndw.on(a.orientationchange, function() {
					i.$pnls.children("."+s.current).scrollTop(0).css( {
						"-webkit-overflow-scrolling": "auto"
					}
					).css( {
						"-webkit-overflow-scrolling": "touch"
					}
					)
				}
				)
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		fix: !0
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="autoHeight";
	e[t].addons[n]= {
		setup:function() {
			if(this.opts.offCanvas) {
				var i=this.opts[n];
				this.conf[n];
				if(o=e[t].glbl, "boolean"==typeof i&&i&&(i= {
					height: "auto"
				}
				), "string"==typeof i&&(i= {
					height: i
				}
				), "object"!=typeof i&&(i= {}
				), i=this.opts[n]=e.extend(!0, {}
				, e[t].defaults[n], i), "auto"==i.height||"highest"==i.height) {
					this.$menu.addClass(s.autoheight);
					var a=function(t) {
						if(this.vars.opened) {
							var n=parseInt(this.$pnls.css("top"), 10)||0, a=parseInt(this.$pnls.css("bottom"), 10)||0, o=0;
							this.$menu.addClass(s.measureheight), "auto"==i.height?(t=t||this.$pnls.children("."+s.current), t.is("."+s.vertical)&&(t=t.parents("."+s.panel).not("."+s.vertical).first()), o=t.outerHeight()):"highest"==i.height&&this.$pnls.children().each(function() {
								var t=e(this);
								t.is("."+s.vertical)&&(t=t.parents("."+s.panel).not("."+s.vertical).first()), o=Math.max(o, t.outerHeight())
							}
							), this.$menu.height(o+n+a).removeClass(s.measureheight)
						}
					}
					;
					this.bind("opening", a), "highest"==i.height&&this.bind("init", a), "auto"==i.height&&(this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a))
				}
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("autoheight measureheight"), a.add("resize")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		height: "default"
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="backButton";
	e[t].addons[n]= {
		setup:function() {
			if(this.opts.offCanvas) {
				var i=this, a=this.opts[n];
				this.conf[n];
				if(o=e[t].glbl, "boolean"==typeof a&&(a= {
					close: a
				}
				), "object"!=typeof a&&(a= {}
				), a=e.extend(!0, {}
				, e[t].defaults[n], a), a.close) {
					var r="#"+i.$menu.attr("id");
					this.bind("opened", function(e) {
						location.hash!=r&&history.pushState(null, document.title, r)
					}
					), e(window).on("popstate", function(e) {
						o.$html.hasClass(s.opened)?(e.stopPropagation(), i.close()): location.hash==r&&(e.stopPropagation(), i.open())
					}
					)
				}
			}
		}
		, add:function() {
			return window.history&&window.history.pushState?(s=e[t]._c, i=e[t]._d, void(a=e[t]._e)):void(e[t].addons[n].setup=function() {}
			)
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		close: !1
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="columns";
	e[t].addons[n]= {
		setup:function() {
			var i=this.opts[n];
			this.conf[n];
			if(o=e[t].glbl, "boolean"==typeof i&&(i= {
				add: i
			}
			), "number"==typeof i&&(i= {
				add: !0, visible:i
			}
			), "object"!=typeof i&&(i= {}
			), "number"==typeof i.visible&&(i.visible= {
				min: i.visible, max:i.visible
			}
			), i=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], i), i.add) {
				i.visible.min=Math.max(1, Math.min(6, i.visible.min)), i.visible.max=Math.max(i.visible.min, Math.min(6, i.visible.max)), this.$menu.addClass(s.columns);
				for(var a=this.opts.offCanvas?this.$menu.add(o.$html): this.$menu, r=[], l=0;
				l<=i.visible.max;
				l++)r.push(s.columns+"-"+l);
				r=r.join(" ");
				var d=function(e) {
					u.call(this, this.$pnls.children("."+s.current)), i.hideNavbars&&e.removeClass(s.hasnavbar)
				}
				, c=function() {
					var e=this.$pnls.children("."+s.panel).filter("."+s.opened).length;
					e=Math.min(i.visible.max, Math.max(i.visible.min, e)), a.removeClass(r).addClass(s.columns+"-"+e)
				}
				, h=function() {
					this.opts.offCanvas&&o.$html.removeClass(r)
				}
				, u=function(t) {
					this.$pnls.children("."+s.panel).removeClass(r).filter("."+s.subopened).removeClass(s.hidden).add(t).slice(-i.visible.max).each(function(t) {
						e(this).addClass(s.columns+"-"+t)
					}
					)
				}
				;
				this.bind("open", c), this.bind("close", h), this.bind("init", d), this.bind("openPanel", u), this.bind("openingPanel", c), this.bind("openedPanel", c), this.opts.offCanvas||c.call(this)
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("columns")
		}
		, clickAnchor:function(t, i) {
			if(!this.opts[n].add)return!1;
			if(i) {
				var a=t.attr("href");
				if(a.length>1&&"#"==a.slice(0, 1))try {
					var o=e(a, this.$menu);
					if(o.is("."+s.panel))for(var r=parseInt(t.closest("."+s.panel).attr("class").split(s.columns+"-")[1].split(" ")[0], 10)+1;
					r!==!1;
					) {
						var l=this.$pnls.children("."+s.columns+"-"+r);
						if(!l.length) {
							r=!1;
							break
						}
						r++, l.removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden)
					}
				}
				catch(d) {}
			}
		}
	}

	, e[t].defaults[n]= {
		add:!1, visible: {
			min: 1, max:3
		}
		, hideNavbars:!1
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="counters";
	e[t].addons[n]= {
		setup:function() {
			var a=this, r=this.opts[n];
			this.conf[n];
			o=e[t].glbl, "boolean"==typeof r&&(r= {
				add: r, update:r
			}
			), "object"!=typeof r&&(r= {}
			), r=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], r), this.bind("init", function(t) {
				this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter")
			}
			), r.add&&this.bind("init", function(t) {
				t.each(function() {
					var t=e(this).data(i.parent);
					t&&(t.children("em."+s.counter).length||t.prepend(e('<em class="'+s.counter+'" />')))
				}
				)
			}
			), r.update&&this.bind("update", function() {
				this.$pnls.find("."+s.panel).each(function() {
					var t=e(this), n=t.data(i.parent);
					if(n) {
						var o=n.children("em."+s.counter);
						o.length&&(t=t.children("."+s.listview), t.length&&o.html(a.__filterListItems(t.children()).length))
					}
				}
				)
			}
			)
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("counter search noresultsmsg")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		add: !1, update:!1
	}

	, e[t].configuration.classNames[n]= {
		counter: "Counter"
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="dividers";
	e[t].addons[n]= {
		setup:function() {
			var i=this, r=this.opts[n];
			this.conf[n];
			if(o=e[t].glbl, "boolean"==typeof r&&(r= {
				add: r, fixed:r
			}
			), "object"!=typeof r&&(r= {}
			), r=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], r), this.bind("init", function(t) {
				this.__refactorClass(e("li", this.$menu), this.conf.classNames[n].collapsed, "collapsed")
			}
			), r.add&&this.bind("init", function(t) {
				var n;
				switch(r.addTo) {
					case"panels": n=t;
					break;
					default: n=e(r.addTo, this.$pnls).filter("."+s.panel)
				}
				e("."+s.divider, n).remove(), n.find("."+s.listview).not("."+s.vertical).each(function() {
					var t="";
					i.__filterListItems(e(this).children()).each(function() {
						var n=e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
						n!=t&&n.length&&(t=n, e('<li class="'+s.divider+'">'+n+"</li>").insertBefore(this))
					}
					)
				}
				)
			}
			), r.collapse&&this.bind("init", function(t) {
				e("."+s.divider, t).each(function() {
					var t=e(this), n=t.nextUntil("."+s.divider, "."+s.collapsed);
					n.length&&(t.children("."+s.subopen).length||(t.wrapInner("<span />"), t.prepend('<a href="#" class="'+s.subopen+" "+s.fullsubopen+'" />')))
				}
				)
			}
			), r.fixed) {
				var l=function(t) {
					t=t||this.$pnls.children("."+s.current);
					var n=t.find("."+s.divider).not("."+s.hidden);
					if(n.length) {
						this.$menu.addClass(s.hasdividers);
						var i=t.scrollTop()||0, a="";
						t.is(":visible")&&t.find("."+s.divider).not("."+s.hidden).each(function() {
							e(this).position().top+i<i+1&&(a=e(this).text())
						}
						), this.$fixeddivider.text(a)
					}
					else this.$menu.removeClass(s.hasdividers)
				}
				;
				this.$fixeddivider=e('<ul class="'+s.listview+" "+s.fixeddivider+'"><li class="'+s.divider+'"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("init", function(t) {
					t.off(a.scroll+"-dividers "+a.touchmove+"-dividers").on(a.scroll+"-dividers "+a.touchmove+"-dividers", function(t) {
						l.call(i, e(this))
					}
					)
				}
				)
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("collapsed uncollapsed fixeddivider hasdividers"), a.add("scroll")
		}
		, clickAnchor:function(e, t) {
			if(this.opts[n].collapse&&t) {
				var i=e.parent();
				if(i.is("."+s.divider)) {
					var a=i.nextUntil("."+s.divider, "."+s.collapsed);
					return i.toggleClass(s.opened), a[i.hasClass(s.opened)?"addClass": "removeClass"](s.uncollapsed), !0
				}
			}
			return!1
		}
	}

	, e[t].defaults[n]= {
		add: !1, addTo:"panels", fixed:!1, collapse:!1
	}

	, e[t].configuration.classNames[n]= {
		collapsed: "Collapsed"
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	function t(e, t, n) {
		return t>e&&(e=t), e>n&&(e=n), e
	}

	var n="mmenu", s="dragOpen";
	e[n].addons[s]= {
		setup:function() {
			if(this.opts.offCanvas) {
				var a=this, o=this.opts[s], l=this.conf[s];
				if(r=e[n].glbl, "boolean"==typeof o&&(o= {
					open: o
				}
				), "object"!=typeof o&&(o= {}
				), o=this.opts[s]=e.extend(!0, {}
				, e[n].defaults[s], o), o.open) {
					var d, c, h, u, p, f= {}
					, v=0, m=!1, g=!1, b=0, _=0;
					switch(this.opts.offCanvas.position) {
						case"left": case"right":f.events="panleft panright", f.typeLower="x", f.typeUpper="X", g="width";
						break;
						case"top": case"bottom":f.events="panup pandown", f.typeLower="y", f.typeUpper="Y", g="height"
					}
					switch(this.opts.offCanvas.position) {
						case"right":case"bottom":f.negative=!0, u=function(e) {
							e>=r.$wndw[g]()-o.maxStartPos&&(v=1)
						}
						;
						break;
						default:f.negative=!1, u=function(e) {
							e<=o.maxStartPos&&(v=1)
						}
					}
					switch(this.opts.offCanvas.position) {
						case"left": f.open_dir="right", f.close_dir="left";
						break;
						case"right": f.open_dir="left", f.close_dir="right";
						break;
						case"top": f.open_dir="down", f.close_dir="up";
						break;
						case"bottom": f.open_dir="up", f.close_dir="down"
					}
					switch(this.opts.offCanvas.zposition) {
						case"front":p=function() {
							return this.$menu
						}
						;
						break;
						default:p=function() {
							return e("."+i.slideout)
						}
					}
					var C=this.__valueOrFn(o.pageNode, this.$menu, r.$page);
					"string"==typeof C&&(C=e(C));
					var $=new Hammer(C[0], o.vendors.hammer);
					$.on("panstart", function(e) {
						u(e.center[f.typeLower]), r.$slideOutNodes=p(), m=f.open_dir
					}
					).on(f.events+" panend", function(e) {
						v>0&&e.preventDefault()
					}
					).on(f.events, function(e) {
						if(d=e["delta"+f.typeUpper], f.negative&&(d=-d), d!=b&&(m=d>=b?f.open_dir: f.close_dir), b=d, b>o.threshold&&1==v) {
							if(r.$html.hasClass(i.opened))return;
							v=2, a._openSetup(), a.trigger("opening"), r.$html.addClass(i.dragging), _=t(r.$wndw[g]()*l[g].perc, l[g].min, l[g].max)
						}
						2==v&&(c=t(b, 10, _)-("front"==a.opts.offCanvas.zposition?_:0), f.negative&&(c=-c), h="translate"+f.typeUpper+"("+c+"px )", r.$slideOutNodes.css( {
							"-webkit-transform": "-webkit-"+h, transform:h
						}
						))
					}
					).on("panend", function(e) {
						2==v&&(r.$html.removeClass(i.dragging), r.$slideOutNodes.css("transform", ""), a[m==f.open_dir?"_openFinish": "close"]()), v=0
					}
					)
				}
			}
		}
		, add:function() {
			return"function"!=typeof Hammer||Hammer.VERSION<2?void(e[n].addons[s].setup=function() {}
			): (i=e[n]._c, a=e[n]._d, o=e[n]._e, void i.add("dragging"))
		}
		, clickAnchor:function(e, t) {}
	}

	, e[n].defaults[s]= {
		open:!1, maxStartPos:100, threshold:50, vendors: {
			hammer: {}
		}
	}

	, e[n].configuration[s]= {
		width: {
			perc: .8, min:140, max:440
		}
		, height: {
			perc: .8, min:140, max:880
		}
	}

	;
	var i, a, o, r
}
(jQuery), function(e) {
	var t="mmenu", n="dropdown";
	e[t].addons[n]= {
		setup:function() {
			if(this.opts.offCanvas) {
				var r=this, l=this.opts[n], d=this.conf[n];
				if(o=e[t].glbl, "boolean"==typeof l&&l&&(l= {
					drop: l
				}
				), "object"!=typeof l&&(l= {}
				), "string"==typeof l.position&&(l.position= {
					of: l.position
				}
				), l=this.opts[n]=e.extend(!0, {}
				, e[t].defaults[n], l), l.drop) {
					if("string"!=typeof l.position.of) {
						var c=this.$menu.attr("id");
						c&&c.length&&(this.conf.clone&&(c=s.umm(c)), l.position.of='[href="#'+c+'"]')
					}
					if("string"==typeof l.position.of) {
						var h=e(l.position.of);
						if(h.length) {
							this.$menu.addClass(s.dropdown), l.tip&&this.$menu.addClass(s.tip), l.event=l.event.split(" "), 1==l.event.length&&(l.event[1]=l.event[0]), "hover"==l.event[0]&&h.on(a.mouseenter+"-dropdown", function() {
								r.open()
							}
							), "hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-dropdown", function() {
								r.close()
							}
							), this.bind("opening", function() {
								this.$menu.data(i.style, this.$menu.attr("style")||""), o.$html.addClass(s.dropdown)
							}
							), this.bind("closed", function() {
								this.$menu.attr("style", this.$menu.data(i.style)), o.$html.removeClass(s.dropdown)
							}
							);
							var u=function(i, a) {
								var r=a[0], c=a[1], u="x"==i?"scrollLeft": "scrollTop", p="x"==i?"outerWidth":"outerHeight", f="x"==i?"left":"top", v="x"==i?"right":"bottom", m="x"==i?"width":"height", g="x"==i?"maxWidth":"maxHeight", b=null, _=o.$wndw[u](), C=h.offset()[f]-=_, $=C+h[p](), y=o.$wndw[m](), x=d.offset.button[i]+d.offset.viewport[i];
								if(l.position[i])switch(l.position[i]) {
									case"left": case"bottom":b="after";
									break;
									case"right": case"top":b="before"
								}
								null===b&&(b=y/2>C+($-C)/2?"after":"before");
								var w, k;
								return"after"==b?(w="x"==i?C:$, k=y-(w+x), r[f]=w+d.offset.button[i], r[v]="auto", c.push(s["x"==i?"tipleft":"tiptop"])):(w="x"==i?$:C, k=w-x, r[v]="calc( 100% - "+(w-d.offset.button[i])+"px )", r[f]="auto", c.push(s["x"==i?"tipright":"tipbottom"])), r[g]=Math.min(e[t].configuration[n][m].max, k), [r, c]
							}
							, p=function(e) {
								if(this.vars.opened) {
									this.$menu.attr("style", this.$menu.data(i.style));
									var t=[ {}
									, []];
									t=u.call(this, "y", t), t=u.call(this, "x", t), this.$menu.css(t[0]), l.tip&&this.$menu.removeClass(s.tipleft+" "+s.tipright+" "+s.tiptop+" "+s.tipbottom).addClass(t[1].join(" "))
								}
							}
							;
							this.bind("opening", p), o.$wndw.on(a.resize+"-dropdown", function(e) {
								p.call(r)
							}
							), this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-dropdown", function(e) {
								p.call(r)
							}
							)
						}
					}
				}
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("dropdown tip tipleft tipright tiptop tipbottom"), a.add("mouseenter mouseleave resize scroll")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		drop:!1, event:"click", position: {}
		, tip: !0
	}

	, e[t].configuration[n]= {
		offset: {
			button: {
				x: -10, y:10
			}
			, viewport: {
				x: 20, y:20
			}
		}
		, height: {
			max: 880
		}
		, width: {
			max: 440
		}
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="fixedElements";
	e[t].addons[n]= {
		setup:function() {
			if(this.opts.offCanvas) {
				var s=this.opts[n];
				this.conf[n];
				o=e[t].glbl, s=this.opts[n]=e.extend(!0, {}
				, e[t].defaults[n], s);
				var i=function(e) {
					var t=this.conf.classNames[n].fixed;
					this.__refactorClass(e.find("."+t), t, "slideout").appendTo(o.$body)
				}
				;
				i.call(this, o.$page), this.bind("setPage", i)
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("fixed")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].configuration.classNames[n]= {
		fixed: "Fixed"
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="iconPanels";
	e[t].addons[n]= {
		setup:function() {
			var i=this, a=this.opts[n];
			this.conf[n];
			if(o=e[t].glbl, "boolean"==typeof a&&(a= {
				add: a
			}
			), "number"==typeof a&&(a= {
				add: !0, visible:a
			}
			), "object"!=typeof a&&(a= {}
			), a=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], a), a.visible++, a.add) {
				this.$menu.addClass(s.iconpanel);
				for(var r=[], l=0;
				l<=a.visible;
				l++)r.push(s.iconpanel+"-"+l);
				r=r.join(" ");
				var d=function(t) {
					t.hasClass(s.vertical)||i.$pnls.children("."+s.panel).removeClass(r).filter("."+s.subopened).removeClass(s.hidden).add(t).not("."+s.vertical).slice(-a.visible).each(function(t) {
						e(this).addClass(s.iconpanel+"-"+t)
					}
					)
				}
				;
				this.bind("openPanel", d), this.bind("init", function(t) {
					d.call(i, i.$pnls.children("."+s.current)), a.hideNavbars&&t.removeClass(s.hasnavbar), t.not("."+s.vertical).each(function() {
						e(this).children("."+s.subblocker).length||e(this).prepend('<a href="#'+e(this).closest("."+s.panel).attr("id")+'" class="'+s.subblocker+'" />')
					}
					)
				}
				)
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("iconpanel subblocker")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		add: !1, visible:3, hideNavbars:!1
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="navbars";
	e[t].addons[n]= {
		setup:function() {
			var i=this, a=this.opts[n], r=this.conf[n];
			if(o=e[t].glbl, "undefined"!=typeof a) {
				a instanceof Array||(a=[a]);
				var l= {}
				;
				e.each(a, function(o) {
					var d=a[o];
					"boolean"==typeof d&&d&&(d= {}
					), "object"!=typeof d&&(d= {}
					), "undefined"==typeof d.content&&(d.content=["prev", "title"]), d.content instanceof Array||(d.content=[d.content]), d=e.extend(!0, {}
					, i.opts.navbar, d);
					var c=d.position, h=d.height;
					"number"!=typeof h&&(h=1), h=Math.min(4, Math.max(1, h)), "bottom"!=c&&(c="top"), l[c]||(l[c]=0), l[c]++;
					var u=e("<div />").addClass(s.navbar+" "+s.navbar+"-"+c+" "+s.navbar+"-"+c+"-"+l[c]+" "+s.navbar+"-size-"+h);
					l[c]+=h-1;
					for(var p=0, f=0, v=d.content.length;
					v>f;
					f++) {
						var m=e[t].addons[n][d.content[f]]||!1;
						m?p+=m.call(i, u, d, r): (m=d.content[f], m instanceof e||(m=e(d.content[f])), u.append(m))
					}
					p+=Math.ceil(u.children().not("."+s.btn).not("."+s.title+"-prev").length/h), p>1&&u.addClass(s.navbar+"-content-"+p), u.children("."+s.btn).length&&u.addClass(s.hasbtns), u.prependTo(i.$menu)
				}
				);
				for(var d in l)i.$menu.addClass(s.hasnavbar+"-"+d+"-"+l[d])
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("close hasbtns")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].configuration[n]= {
		breadcrumbSeparator: "/"
	}

	, e[t].configuration.classNames[n]= {}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="navbars", s="breadcrumbs";
	e[t].addons[n][s]=function(n, s, i) {
		var a=e[t]._c, o=e[t]._d;
		a.add("breadcrumbs separator");
		var r=e('<span class="'+a.breadcrumbs+'" />').appendTo(n);
		this.bind("init", function(t) {
			t.removeClass(a.hasnavbar).each(function() {
				for(var t=[], n=e(this), s=e('<span class="'+a.breadcrumbs+'"></span>'), r=e(this).children().first(), l=!0;
				r&&r.length;
				) {
					r.is("."+a.panel)||(r=r.closest("."+a.panel));
					var d=r.children("."+a.navbar).children("."+a.title).text();
					t.unshift(l?"<span>"+d+"</span>": '<a href="#'+r.attr("id")+'">'+d+"</a>"), l=!1, r=r.data(o.parent)
				}
				s.append(t.join('<span class="'+a.separator+'">'+i.breadcrumbSeparator+"</span>")).appendTo(n.children("."+a.navbar))
			}
			)
		}
		);
		var l=function() {
			r.html(this.$pnls.children("."+a.current).children("."+a.navbar).children("."+a.breadcrumbs).html())
		}
		;
		return this.bind("openPanel", l), this.bind("init", l), 0
	}
}
(jQuery), function(e) {
	var t="mmenu", n="navbars", s="close";
	e[t].addons[n][s]=function(n, s) {
		var i=e[t]._c, a=e[t].glbl, o=e('<a class="'+i.close+" "+i.btn+'" href="#" />').appendTo(n), r=function(e) {
			o.attr("href", "#"+e.attr("id"))
		}
		;
		return r.call(this, a.$page), this.bind("setPage", r), -1
	}
}
(jQuery), function(e) {
	var t="mmenu", n="navbars", s="next";
	e[t].addons[n][s]=function(s, i) {
		var a, o, r=e[t]._c, l=e('<a class="'+r.next+" "+r.btn+'" href="#" />').appendTo(s), d=function(e) {
			e=e||this.$pnls.children("."+r.current);
			var t=e.find("."+this.conf.classNames[n].panelNext);
			a=t.attr("href"), o=t.html(), l[a?"attr": "removeAttr"]("href", a), l[a||o?"removeClass":"addClass"](r.hidden), l.html(o)
		}
		;
		return this.bind("openPanel", d), this.bind("init", function() {
			d.call(this)
		}
		), -1
	}

	, e[t].configuration.classNames[n].panelNext="Next"
}
(jQuery), function(e) {
	var t="mmenu", n="navbars", s="prev";
	e[t].addons[n][s]=function(s, i) {
		var a=e[t]._c, o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(s);
		this.bind("init", function(e) {
			e.removeClass(a.hasnavbar).children("."+a.navbar).addClass(a.hidden)
		}
		);
		var r, l, d=function(e) {
			if(e=e||this.$pnls.children("."+a.current), !e.hasClass(a.vertical)) {
				var t=e.find("."+this.conf.classNames[n].panelPrev);
				t.length||(t=e.children("."+a.navbar).children("."+a.prev)), r=t.attr("href"), l=t.html(), o[r?"attr": "removeAttr"]("href", r), o[r||l?"removeClass":"addClass"](a.hidden), o.html(l)
			}
		}
		;
		return this.bind("openPanel", d), this.bind("init", function() {
			d.call(this)
		}
		), -1
	}

	, e[t].configuration.classNames[n].panelPrev="Prev"
}
(jQuery), function(e) {
	var t="mmenu", n="navbars", s="searchfield";
	e[t].addons[n][s]=function(n, s) {
		var i=e[t]._c, a=e('<div class="'+i.search+'" />').appendTo(n);
		return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield= {}
		), this.opts.searchfield.add=!0, this.opts.searchfield.addTo=a, 0
	}
}
(jQuery), function(e) {
	var t="mmenu", n="navbars", s="title";
	e[t].addons[n][s]=function(s, i) {
		var a, o, r=e[t]._c, l=e('<a class="'+r.title+'" />').appendTo(s), d=function(e) {
			if(e=e||this.$pnls.children("."+r.current), !e.hasClass(r.vertical)) {
				var t=e.find("."+this.conf.classNames[n].panelTitle);
				t.length||(t=e.children("."+r.navbar).children("."+r.title)), a=t.attr("href"), o=t.html()||i.title, l[a?"attr": "removeAttr"]("href", a), l[a||o?"removeClass":"addClass"](r.hidden), l.html(o)
			}
		}
		;
		return this.bind("openPanel", d), this.bind("init", function(e) {
			d.call(this)
		}
		), 0
	}

	, e[t].configuration.classNames[n].panelTitle="Title"
}
(jQuery), function(e) {
	function t(e, t, n) {
		e.prop("aria-"+t, n)[n?"attr": "removeAttr"]("aria-"+t, "true")
	}

	function n(e) {
		return'<span class="'+a.sronly+'">'+e+"</span>"
	}

	var s="mmenu", i="screenReader";
	e[s].addons[i]= {
		setup:function() {
			var o=this.opts[i], r=this.conf[i];
			if(l=e[s].glbl, "boolean"==typeof o&&(o= {
				aria: o, text:o
			}
			), "object"!=typeof o&&(o= {}
			), o=this.opts[i]=e.extend(!0, {}
			, e[s].defaults[i], o), o.aria) {
				if(this.opts.offCanvas) {
					var d=function() {
						t(this.$menu, "hidden", !1)
					}
					, c=function() {
						t(this.$menu, "hidden", !0)
					}
					;
					this.bind("open", d), this.bind("close", c), c.call(this)
				}
				var h=function() {
					t(this.$menu.find("."+a.hidden), "hidden", !0), t(this.$menu.find('[aria-hidden="true"]').not("."+a.hidden), "hidden", !1)
				}
				, u=function(e) {
					t(this.$pnls.children("."+a.panel).not(e).not("."+a.hidden), "hidden", !0), t(e, "hidden", !1)
				}
				;
				this.bind("update", h), this.bind("openPanel", h), this.bind("openPanel", u);
				var p=function(e) {
					t(e.find("."+a.prev+", ."+a.next), "haspopup", !0)
				}
				;
				this.bind("init", p), p.call(this, this.$menu.children("."+a.navbar))
			}
			if(o.text) {
				var f=function(t) {
					t.children("."+a.navbar).children("."+a.prev).html(n(r.text.closeSubmenu)).end().children("."+a.next).html(n(r.text.openSubmenu)).end().children("."+a.close).html(n(r.text.closeMenu)), t.is("."+a.panel)&&t.find("."+a.listview).find("."+a.next).each(function() {
						e(this).html(n(r.text[e(this).parent().is("."+a.vertical)?"toggleSubmenu": "openSubmenu"]))
					}
					)
				}
				;
				this.bind("init", f), f.call(this, this.$menu)
			}
		}
		, add:function() {
			a=e[s]._c, o=e[s]._d, r=e[s]._e, a.add("sronly")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[s].defaults[i]= {
		aria: !1, text:!1
	}

	, e[s].configuration[i]= {
		text: {
			closeMenu: "Close menu", closeSubmenu:"Close submenu", openSubmenu:"Open submenu", toggleSubmenu:"Toggle submenu"
		}
	}

	;
	var a, o, r, l
}
(jQuery), function(e) {
	function t(e) {
		switch(e) {
			case 9: case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0
		}
		return!1
	}

	var n="mmenu", s="searchfield";
	e[n].addons[s]= {
		setup:function() {
			var l=this, d=this.opts[s], c=this.conf[s];
			r=e[n].glbl, "boolean"==typeof d&&(d= {
				add: d
			}
			), "object"!=typeof d&&(d= {}
			), "boolean"==typeof d.resultsPanel&&(d.resultsPanel= {
				add: d.resultsPanel
			}
			), d=this.opts[s]=e.extend(!0, {}
			, e[n].defaults[s], d), c=this.conf[s]=e.extend(!0, {}
			, e[n].configuration[s], c), this.bind("close", function() {
				this.$menu.find("."+i.search).find("input").blur()
			}
			), this.bind("init", function(n) {
				if(d.add) {
					var r;
					switch(d.addTo) {
						case"panels": r=n;
						break;
						default: r=e(d.addTo, this.$menu)
					}
					if(r.each(function() {
						var t=e(this);
						if(!t.is("."+i.panel)||!t.is("."+i.vertical)) {
							if(!t.children("."+i.search).length) {
								var n=l.__valueOrFn(c.clear, t), s=l.__valueOrFn(c.form, t), a=l.__valueOrFn(c.input, t), r=l.__valueOrFn(c.submit, t), h=e("<"+(s?"form": "div")+' class="'+i.search+'" />'), u=e('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />');
								h.append(u);
								var p;
								if(a)for(p in a)u.attr(p, a[p]);
								if(n&&e('<a class="'+i.btn+" "+i.clear+'" href="#" />').appendTo(h).on(o.click+"-searchfield", function(e) {
									e.preventDefault(), u.val("").trigger(o.keyup+"-searchfield")
								}
								), s) {
									for(p in s)h.attr(p, s[p]);
									r&&!n&&e('<a class="'+i.btn+" "+i.next+'" href="#" />').appendTo(h).on(o.click+"-searchfield", function(e) {
										e.preventDefault(), h.submit()
									}
									)
								}
								t.hasClass(i.search)?t.replaceWith(h):t.prepend(h).addClass(i.hassearch)
							}
							if(d.noResults) {
								var f=t.closest("."+i.panel).length;
								if(f||(t=l.$pnls.children("."+i.panel).first()), !t.children("."+i.noresultsmsg).length) {
									var v=t.children("."+i.listview).first();
									e('<div class="'+i.noresultsmsg+" "+i.hidden+'" />').append(d.noResults)[v.length?"insertAfter": "prependTo"](v.length?v:t)
								}
							}
						}
					}
					), d.search) {
						if(d.resultsPanel.add) {
							d.showSubPanels=!1;
							var h=this.$pnls.children("."+i.resultspanel);
							h.length||(h=e('<div class="'+i.panel+" "+i.resultspanel+" "+i.hidden+'" />').appendTo(this.$pnls).append('<div class="'+i.navbar+" "+i.hidden+'"><a class="'+i.title+'">'+d.resultsPanel.title+"</a></div>").append('<ul class="'+i.listview+'" />').append(this.$pnls.find("."+i.noresultsmsg).first().clone()), this.init(h))
						}
						e("."+i.search, this.$menu).each(function() {
							var n, r, c=e(this), u=c.closest("."+i.panel).length;
							u?(n=c.closest("."+i.panel), r=n): (n=e("."+i.panel, l.$menu), r=l.$menu), d.resultsPanel.add&&(n=n.not(h));
							var p=c.children("input"), f=l.__findAddBack(n, "."+i.listview).children("li"), v=f.filter("."+i.divider), m=l.__filterListItems(f), g="a", b=g+", span", _="", C=function() {
								var t=p.val().toLowerCase();
								if(t!=_) {
									if(_=t, d.resultsPanel.add&&h.children("."+i.listview).empty(), n.scrollTop(0), m.add(v).addClass(i.hidden).find("."+i.fullsubopensearch).removeClass(i.fullsubopen+" "+i.fullsubopensearch), m.each(function() {
										var t=e(this), n=g;
										(d.showTextItems||d.showSubPanels&&t.find("."+i.next))&&(n=b);
										var s=t.data(a.searchtext)||t.children(n).text();
										s.toLowerCase().indexOf(_)>-1&&t.add(t.prevAll("."+i.divider).first()).removeClass(i.hidden)
									}
									), d.showSubPanels&&n.each(function(t) {
										var n=e(this);
										l.__filterListItems(n.find("."+i.listview).children()).each(function() {
											var t=e(this), n=t.data(a.sub);
											t.removeClass(i.nosubresults), n&&n.find("."+i.listview).children().removeClass(i.hidden)
										}
										)
									}
									), d.resultsPanel.add)if(""===_)this.closeAllPanels(), this.openPanel(this.$pnls.children("."+i.subopened).last());
									else {
										var s=e();
										n.each(function() {
											var t=l.__filterListItems(e(this).find("."+i.listview).children()).not("."+i.hidden).clone(!0);
											t.length&&(d.resultsPanel.dividers&&(s=s.add('<li class="'+i.divider+'">'+e(this).children("."+i.navbar).text()+"</li>")), s=s.add(t))
										}
										), s.find("."+i.next).remove(), h.children("."+i.listview).append(s), this.openPanel(h)
									}
									else e(n.get().reverse()).each(function(t) {
										var n=e(this), s=n.data(a.parent);
										s&&(l.__filterListItems(n.find("."+i.listview).children()).length?(s.hasClass(i.hidden)&&s.children("."+i.next).not("."+i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch), s.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("."+i.divider).first().removeClass(i.hidden)):u||(n.hasClass(i.opened)&&setTimeout(function() {
											l.openPanel(s.closest("."+i.panel))
										}
										, (t+1)*1.5*l.conf.openingInterval), s.addClass(i.nosubresults)))
									}
									);
									r.find("."+i.noresultsmsg)[m.not("."+i.hidden).length?"addClass":"removeClass"](i.hidden), this.update()
								}
							}
							;
							p.off(o.keyup+"-"+s+" "+o.change+"-"+s).on(o.keyup+"-"+s, function(e) {
								t(e.keyCode)||C.call(l)
							}
							).on(o.change+"-"+s, function(e) {
								C.call(l)
							}
							);
							var $=c.children("."+i.btn);
							$.length&&p.on(o.keyup+"-"+s, function(e) {
								$[p.val().length?"removeClass": "addClass"](i.hidden)
							}
							), p.trigger(o.keyup+"-"+s)
						}
						)
					}
				}
			}
			)
		}
		, add:function() {
			i=e[n]._c, a=e[n]._d, o=e[n]._e, i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), a.add("searchtext"), o.add("change keyup")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[n].defaults[s]= {
		add:!1, addTo:"panels", placeholder:"Search", noResults:"No results found.", resultsPanel: {
			add: !1, dividers:!0, title:"Search results"
		}
		, search:!0, showTextItems:!1, showSubPanels:!0
	}

	, e[n].configuration[s]= {
		clear: !1, form:!1, input:!1, submit:!1
	}

	;
	var i, a, o, r
}
(jQuery), function(e) {
	var t="mmenu", n="sectionIndexer";
	e[t].addons[n]= {
		setup:function() {
			var i=this, r=this.opts[n];
			this.conf[n];
			o=e[t].glbl, "boolean"==typeof r&&(r= {
				add: r
			}
			), "object"!=typeof r&&(r= {}
			), r=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], r), this.bind("init", function(t) {
				if(r.add) {
					var n;
					switch(r.addTo) {
						case"panels": n=t;
						break;
						default: n=e(r.addTo, this.$menu).filter("."+s.panel)
					}
					n.find("."+s.divider).closest("."+s.panel).addClass(s.hasindexer)
				}
				if(!this.$indexer&&this.$pnls.children("."+s.hasindexer).length) {
					this.$indexer=e('<div class="'+s.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(a.mouseover+"-sectionindexer "+s.touchstart+"-sectionindexer", function(t) {
						var n=e(this).attr("href").slice(1), a=i.$pnls.children("."+s.current), o=a.find("."+s.listview), r=!1, l=a.scrollTop();
						a.scrollTop(0), o.children("."+s.divider).not("."+s.hidden).each(function() {
							r===!1&&n==e(this).text().slice(0, 1).toLowerCase()&&(r=e(this).position().top)
						}
						), a.scrollTop(r!==!1?r:l)
					}
					);
					var o=function(e) {
						i.$menu[(e.hasClass(s.hasindexer)?"add": "remove")+"Class"](s.hasindexer)
					}
					;
					this.bind("openPanel", o), o.call(this, this.$pnls.children("."+s.current))
				}
			}
			)
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("indexer hasindexer"), a.add("mouseover touchstart")
		}
		, clickAnchor:function(e, t) {
			return e.parent().is("."+s.indexer)?!0: void 0
		}
	}

	, e[t].defaults[n]= {
		add: !1, addTo:"panels"
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="setSelected";
	e[t].addons[n]= {
		setup:function() {
			var a=this.opts[n];
			this.conf[n];
			if(o=e[t].glbl, "boolean"==typeof a&&(a= {
				hover: a, parent:a
			}
			), "object"!=typeof a&&(a= {}
			), a=this.opts[n]=e.extend(!0, {}
			, e[t].defaults[n], a), a.current||this.bind("init", function(e) {
				e.find("."+s.listview).children("."+s.selected).removeClass(s.selected)
			}
			), a.hover&&this.$menu.addClass(s.hoverselected), a.parent) {
				this.$menu.addClass(s.parentselected);
				var r=function(e) {
					this.$pnls.find("."+s.listview).find("."+s.next).removeClass(s.selected);
					for(var t=e.data(i.parent);
					t&&t.length;
					)t=t.children("."+s.next).addClass(s.selected).closest("."+s.panel).data(i.parent)
				}
				;
				this.bind("openedPanel", r), this.bind("init", function(e) {
					r.call(this, this.$pnls.children("."+s.current))
				}
				)
			}
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("hoverselected parentselected")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].defaults[n]= {
		current: !0, hover:!1, parent:!1
	}

	;
	var s, i, a, o
}
(jQuery), function(e) {
	var t="mmenu", n="toggles";
	e[t].addons[n]= {
		setup:function() {
			var i=this;
			this.opts[n], this.conf[n];
			o=e[t].glbl, this.bind("init", function(t) {
				this.__refactorClass(e("input", t), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[n].check, "check"), e("input."+s.toggle+", input."+s.check, t).each(function() {
					var t=e(this), n=t.closest("li"), a=t.hasClass(s.toggle)?"toggle": "check", o=t.attr("id")||i.__getUniqueId();
					n.children('label[for="'+o+'"]').length||(t.attr("id", o), n.prepend(t), e('<label for="'+o+'" class="'+s[a]+'"></label>').insertBefore(n.children("a, span").last()))
				}
				)
			}
			)
		}
		, add:function() {
			s=e[t]._c, i=e[t]._d, a=e[t]._e, s.add("toggle check")
		}
		, clickAnchor:function(e, t) {}
	}

	, e[t].configuration.classNames[n]= {
		toggle: "Toggle", check:"Check"
	}

	;
	var s, i, a, o
}
(jQuery);
nsc("#page-basket .qty").attr("onChange", "javascript:submitForm('Update Basket');");
nsc(function() {
	if(!nsc("form#frmAddProductHandler").length) {
		nsc("body").append('<form name="frmAddProductHandler" method="post" id="frmAddProductHandler" action="/store/store.asp"> <input type="hidden" name="prodcode" value="0" /> <input type="hidden" name="action" value="add_product" /> </form>');
		window.addToBasket=function(id) {
			document.getElementById("frmAddProductHandler").prodcode.value=id;
			document.getElementById("frmAddProductHandler").submit()
		}
	}
}
);
nsc(function() {
	var suggestionengine=new Bloodhound( {
		datumTokenizer:Bloodhound.tokenizers.whitespace, queryTokenizer:Bloodhound.tokenizers.whitespace, remote: {
			url:BASE_PATH+"/store/ajax/predictivesearch.nsc", prepare:function(query, settings) {
				if(nsc(".specificfield").length) {
					var fieldspecific=nsc("input.specificfield").filter(function() {
						return this.value.length!==0
					}
					).attr("id");
					var searchParams= {}
					;
					searchParams.specificfield=fieldspecific;
					searchParams.specificvalue=query
				}
				else {
					var searchParams= {
						keyword: query
					}
				}
				if(nsc("#eleonlythisdepartment:checked").length) {
					searchParams.deptid=document.getElementById("eleonlythisdepartment").dataset.deptid
				}
				if(nsc("#eleonlythiscategory:checked").length) {
					searchParams.catid=document.getElementById("eleonlythiscategory").dataset.catid
				}
				if(nsc("#eleonlythissubcategory:checked").length) {
					searchParams.subcat=document.getElementById("eleonlythissubcategory").dataset.subcat
				}
				settings.data=searchParams;
				return settings
			}
		}
	}

	);
	nsc(".typeahead").typeahead( {
		hint: true, highlight:true, minLength:3
	}

	, {
		name:"store-predictive-search", source:suggestionengine, limit:20, display:function(data) {
			return data.product_name
		}
		, templates: {
			empty:["<span>Unable to find any product matching that query.</span>"].join("\n"), suggestion:function(data) {
				var sString="";
				sString='<span class="psdesc"';
				sString+=' data-toggle="popover"';
				sString+=' data-placement="bottom"';
				sString+=' data-trigger="hover"';
				sString+=' data-content="'+data.desc+'"';
				sString+=' data-title="'+data.name+'"';
				sString+=">"+data.name+"</span>";
				return sString
			}
		}
	}

	).on("keyup", this, function(event) {
		if(event.keyCode==13) {
			if(nsc(".twitter-typeahead pre").text().length>0) {
				var sSearchString=nsc(".twitter-typeahead pre").text()
			}
			else {
				var sSearchString=nsc(".tt-input").val()
			}
			window.location.replace(BASE_PATH+"/store/search.asp?keyword="+sSearchString+"*")
		}
	}

	);
	nsc(".typeahead").on("typeahead:select", function(event, suggestion) {
		window.location.replace(suggestion.url)
	}

	);
	nsc(".typeahead").on("typeahead:render", function(event, suggestion) {
		nsc('[data-toggle="popover"]').popover()
	}

	);
	if(nsc(".typeahead").length&&nsc("#quick_find_submit").length) {
		nsc("#quick_find_submit").on("click", function() {
			window.location.replace(BASE_PATH+"/store/search.asp?keyword="+nsc(".twitter-typeahead pre").text())
		}
		)
	}
}
);
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0), function(e, t, n) {
	function r(n) {
		var r=t.console;
		i[n]||(i[n]=!0, e.migrateWarnings.push(n), r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n), e.migrateTrace&&r.trace&&r.trace()))
	}

	function a(t, a, i, o) {
		if(Object.defineProperty)try {
			return Object.defineProperty(t, a, {
				configurable:!0, enumerable:!0, get:function() {
					return r(o), i
				}
				, set:function(e) {
					r(o), i=e
				}
			}
			), n
		}
		catch(s) {}
		e._definePropertyBroken=!0, t[a]=i
	}

	var i= {}

	;
	e.migrateWarnings=[], !e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace===n&&(e.migrateTrace=!0), e.migrateReset=function() {
		i= {}
		, e.migrateWarnings.length=0
	}

	, "BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");
	var o=e("<input/>", {
		size: 1
	}

	).attr("size")&&e.attrFn, s=e.attr, u=e.attrHooks.value&&e.attrHooks.value.get||function() {
		return null
	}

	, c=e.attrHooks.value&&e.attrHooks.value.set||function() {
		return n
	}

	, l=/^(?:input|button)$/i, d=/^[238]$/, p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f=/^(?:checked|selected)$/i;
	a(e, "attrFn", o|| {}

	, "jQuery.attrFn is deprecated"), e.attr=function(t, a, i, u) {
		var c=a.toLowerCase(), g=t&&t.nodeType;
		return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"), t&&!d.test(g)&&(o?a in o: e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]= {
			get:function(t, r) {
				var a, i=e.prop(t, r);
				return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase(): n
			}
			, set:function(t, n, r) {
				var a;
				return n===!1?e.removeAttr(t, r): (a=e.propFix[r]||r, a in t&&(t[a]=!0), t.setAttribute(r, r.toLowerCase())), r
			}
		}
		, f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")), s.call(e, t, a, i))
	}

	, e.attrHooks.value= {
		get:function(e, t) {
			var n=(e.nodeName||"").toLowerCase();
			return"button"===n?u.apply(this, arguments): ("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"), t in e?e.value:null)
		}
		, set:function(e, t) {
			var a=(e.nodeName||"").toLowerCase();
			return"button"===a?c.apply(this, arguments): ("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"), e.value=t, n)
		}
	}

	;
	var g, h, v=e.fn.init, m=e.parseJSON, y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;
	e.fn.init=function(t, n, a) {
		var i;
		return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"), i[3]&&r("$(html) HTML text after last tag is ignored"), "#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n&&n.context&&(n=n.context), e.parseHTML)?v.call(this, e.parseHTML(i[2], n, !0), n, a): v.apply(this, arguments)
	}

	, e.fn.init.prototype=e.fn, e.parseJSON=function(e) {
		return e||null===e?m.apply(this, arguments): (r("jQuery.parseJSON requires a valid JSON string"), null)
	}

	, e.uaMatch=function(e) {
		e=e.toLowerCase();
		var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?: .*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];
		return {
			browser: t[1]||"", version:t[2]||"0"
		}
	}

	, e.browser||(g=e.uaMatch(navigator.userAgent), h= {}

	, g.browser&&(h[g.browser]=!0, h.version=g.version), h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0), e.browser=h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub=function() {
		function t(e, n) {
			return new t.fn.init(e, n)
		}
		e.extend(!0, t, this), t.superclass=this, t.fn=t.prototype=this(), t.fn.constructor=t, t.sub=this.sub, t.fn.init=function(r, a) {
			return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)), e.fn.init.call(this, r, a, n)
		}
		, t.fn.init.prototype=t.fn;
		var n=t(document);
		return r("jQuery.sub() is deprecated"), t
	}

	, e.ajaxSetup( {
		converters: {
			"text json": e.parseJSON
		}
	}

	);
	var b=e.fn.data;
	e.fn.data=function(t) {
		var a, i, o=this[0];
		return!o||"events"!==t||1!==arguments.length||(a=e.data(o, t), i=e._data(o, t), a!==n&&a!==i||i===n)?b.apply(this, arguments): (r("Use of jQuery.fn.data('events') is deprecated"), i)
	}

	;
	var j=/\/(java|ecma)script/i, w=e.fn.andSelf||e.fn.addBack;
	e.fn.andSelf=function() {
		return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
	}

	, e.clean||(e.clean=function(t, a, i, o) {
		a=a||document, a=!a.nodeType&&a[0]||a, a=a.ownerDocument||a, r("jQuery.clean() is deprecated");
		var s, u, c, l, d=[];
		if(e.merge(d, e.buildFragment(t, a).childNodes), i)for(c=function(e) {
			return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e): e):i.appendChild(e):n
		}
		, s=0;
		null!=(u=d[s]);
		s++)e.nodeName(u, "script")&&c(u)||(i.appendChild(u), u.getElementsByTagName!==n&&(l=e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s+1, 0].concat(l)), s+=l.length));
		return d
	}

	);
	var Q=e.event.add, x=e.event.remove, k=e.event.trigger, N=e.fn.toggle, T=e.fn.live, M=e.fn.die, S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", C=RegExp("\\b(?:"+S+")\\b"), H=/(?:^|\s)hover(\.\S+|)\b/, A=function(t) {
		return"string"!=typeof t||e.event.special.hover?t: (H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t&&t.replace(H, "mouseenter$1 mouseleave$1"))
	}

	;
	e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch&&a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add=function(e, t, n, a, i) {
		e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t), Q.call(this, e, A(t||""), n, a, i)
	}

	, e.event.remove=function(e, t, n, r, a) {
		x.call(this, e, A(t)||"", n, r, a)
	}

	, e.fn.error=function() {
		var e=Array.prototype.slice.call(arguments, 0);
		return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length?this.bind.apply(this, e): (this.triggerHandler.apply(this, e), this)
	}

	, e.fn.toggle=function(t, n) {
		if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this, arguments);
		r("jQuery.fn.toggle(handler, handler...) is deprecated");
		var a=arguments, i=t.guid||e.guid++, o=0, s=function(n) {
			var r=(e._data(this, "lastToggle"+t.guid)||0)%o;
			return e._data(this, "lastToggle"+t.guid, r+1), n.preventDefault(), a[r].apply(this, arguments)||!1
		}
		;
		for(s.guid=i;
		a.length>o;
		)a[o++].guid=i;
		return this.click(s)
	}

	, e.fn.live=function(t, n, a) {
		return r("jQuery.fn.live() is deprecated"), T?T.apply(this, arguments): (e(this.context).on(t, this.selector, n, a), this)
	}

	, e.fn.die=function(t, n) {
		return r("jQuery.fn.die() is deprecated"), M?M.apply(this, arguments): (e(this.context).off(t, this.selector||"**", n), this)
	}

	, e.event.trigger=function(e, t, n, a) {
		return n||C.test(e)||r("Global events are undocumented and deprecated"), k.call(this, e, t, n||document, a)
	}

	, e.each(S.split("|"), function(t, n) {
		e.event.special[n]= {
			setup:function() {
				var t=this;
				return t!==document&&(e.event.add(document, n+"."+e.guid, function() {
					e.event.trigger(n, null, t, !0)
				}
				), e._data(this, n, e.guid++)), !1
			}
			, teardown:function() {
				return this!==document&&e.event.remove(document, n+"."+e._data(this, n)), !1
			}
		}
	}

	)
}
(jQuery, window);
