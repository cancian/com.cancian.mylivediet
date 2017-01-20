﻿////////////////////////
// PROFILE CALCULATOR //
//////////////////////// http://allnutritionals.com/jscriptsout/encrypthtml_backup/daily_calorie_calculator.js
var recalc_onclick;
var eedisplayFloat;
var eeparseFloat;
(function () {
	'use strict';
	var co = {};
	recalc_onclick = function (ctl) {
		if (document.formc.automatic_recalc.checked || ctl == '') {
			co.pA1B = document.formc.pA1B[document.formc.pA1B.selectedIndex].value;
			co.pA2B = eeparseFloat(document.formc.pA2B.value);
			co.pA2C = document.formc.pA2C[document.formc.pA2C.selectedIndex].value;
			co.pA3B = eeparseFloat(document.formc.pA3B.value);
			co.pA3C = document.formc.pA3C[document.formc.pA3C.selectedIndex].value;
			co.pA4B = eeparseFloatV(document.formc.pA4B[document.formc.pA4B.selectedIndex].value);
			co.pA5B = document.formc.pA5B[document.formc.pA5B.selectedIndex].value;
			co.pA6G = eeparseFloat(document.formc.pA6G.value);
			co.pA6H = document.formc.pA6H[document.formc.pA6H.selectedIndex].value;
			co.pA6M = eeparseFloat(document.formc.pA6M.value);
			co.pA6N = document.formc.pA6N[document.formc.pA6N.selectedIndex].value;
			calc(co);
			document.formc.pA2D.value = eedisplayFloat(co.pA2D);
			document.formc.pA3D.value = eedisplayFloat(co.pA3D);
			document.formc.pA6B.value = eedisplayFloatND(co.pA6B, 2);
			document.formc.pA6J.value = eedisplayFloat(co.pA6J);
			document.formc.pA6O.value = eedisplayFloat(co.pA6O);
			document.formc.pA7B.value = eedisplayFloatND(co.pA7B, 2);
			document.formc.pA7F.value = eedisplayFloatND(co.pA7F, 2);
			document.formc.pA7L.value = eedisplayFloatND(co.pA7L, 2);
			document.formc.pA8B.value = eedisplayFloatND(co.pA8B, 2);
			document.formc.pA8D.value = eedisplayFloatND(co.pA8D, 2);
			document.formc.pA8F.value = eedisplayFloatND(co.pA8F, 2);
			document.formc.pA8H.value = eedisplayFloatND(co.pA8H, 2);
			document.formc.pA8L.value = eedisplayFloatND(co.pA8L, 2);
			document.formc.pA8N.value = eedisplayFloatND(co.pA8N, 2);
			document.formc.pA9B.value = eedisplayFloatND(co.pA9B, 2);
			document.formc.pA9D.value = eedisplayFloatND(co.pA9D, 2);
			document.formc.pA9F.value = eedisplayFloatND(co.pA9F, 2);
			document.formc.pA9H.value = eedisplayFloatND(co.pA9H, 2);
			document.formc.pA9L.value = eedisplayFloatND(co.pA9L, 2);
			document.formc.pA9N.value = eedisplayFloatND(co.pA9N, 2);
			document.formc.pA10B.value = eedisplayFloatND(co.pA10B, 2);
			document.formc.pA10D.value = eedisplayFloatND(co.pA10D, 2);
			document.formc.pA10F.value = eedisplayFloatND(co.pA10F, 2);
			document.formc.pA10H.value = eedisplayFloatND(co.pA10H, 2);
			document.formc.pA10L.value = eedisplayFloatND(co.pA10L, 2);
			document.formc.pA10N.value = eedisplayFloatND(co.pA10N, 2);
		}
	};
	var eeisus = 1;
	var eetrue = 'TRUE';
	var eefalse = 'FALSE';
	var eedec = '.';
	var eeth = ',';
	var eedecreg = new RegExp('[.]', 'g');
	var eethreg = new RegExp(',', 'g');
	function calc(data) {
		var cA1B = data.pA1B;
		var cA2B = data.pA2B;
		var cA2C = data.pA2C;
		var cA3B = data.pA3B;
		var cA3C = data.pA3C;
		var cA4B = data.pA4B;
		var cA5B = data.pA5B;
		var cA6G = data.pA6G;
		var cA6H = data.pA6H;
		var cA6M = data.pA6M;
		var cA6N = data.pA6N;
		var cA21A = ('Sedentary (little or no exercise, desk job)');
		var cA22A = ('Lightly active (light exercise/sports 1-3 days/wk)');
		var cA23A = ('Moderately active (moderate exercise/sports 3-5 days/wk)');
		var cA24A = ('Very active (hard exercise/sports 6-7 days/wk)');
		var cA25A = ('Extremely active (hard daily exercise/sports & physical job)');
		var cA2D = (((str_eq((cA2C), ('centimetres'))) ? (cA2B) : (((cA2B) * (2.54)))));
		var cA3D = (((str_eq((cA3C), ('kilograms'))) ? (cA3B) : (((cA3B) * (0.4536)))));
		var cA6B = (((str_eq((cA1B), ('Male'))) ? (((((((66) + (((13.7) * (cA3D))))) + (((5) * (cA2D))))) - (((6.8) * (v2n(cA4B)))))) : (((((((655) + (((9.6) * (cA3D))))) + (((1.8) * (cA2D))))) - (((4.7) * (v2n(cA4B))))))));
		var cA6J = (((str_eq((cA6H), ('pounds'))) ? (cA6G) : (((cA6G) * (2.2)))));
		var cA6O = (((str_eq((cA6N), ('pounds'))) ? (cA6M) : (((cA6M) * (2.2)))));
		var cA7B = (((str_eq((cA5B), (cA21A))) ? (((cA6B) * (1.2))) : (((str_eq((cA5B), (cA22A))) ? (((cA6B) * (1.375))) : (((str_eq((cA5B), (cA23A))) ? (((cA6B) * (1.55))) : (((str_eq((cA5B), (cA24A))) ? (((cA6B) * (1.725))) : (((str_eq((cA5B), (cA25A))) ? (((cA6B) * (1.9))) : (0)))))))))));
		var cA7F = (((cA7B) - (((500) * (cA6J)))));
		var cA7L = (((cA7B) + (((500) * (cA6O)))));
		var cA8B = (((cA7B) * (0.55)));
		var cA9B = (((cA7B) * (0.15)));
		var cA10B = (((cA7B) * (0.3)));
		var cA8D = (((cA8B) * (0.25)));
		var cA8F = (((cA7F) * (0.55)));
		var cA8L = (((cA7L) * (0.55)));
		var cA9D = (((cA9B) * (0.25)));
		var cA9F = (((cA7F) * (0.15)));
		var cA9L = (((cA7L) * (0.15)));
		var cA10D = (((cA10B) * (0.1111)));
		var cA10F = (((cA7F) * (0.3)));
		var cA10L = (((cA7L) * (0.3)));
		var cA8H = (((cA8F) * (0.25)));
		var cA8N = (((cA8L) * (0.25)));
		var cA9H = (((cA9F) * (0.25)));
		var cA9N = (((cA9L) * (0.25)));
		var cA10H = (((cA10F) * (0.1111)));
		var cA10N = (((cA10L) * (0.1111)));
		data.pA2D = cA2D;
		data.pA3D = cA3D;
		data.pA6B = cA6B;
		data.pA6J = cA6J;
		data.pA6O = cA6O;
		data.pA7B = cA7B;
		data.pA7F = cA7F;
		data.pA7L = cA7L;
		data.pA8B = cA8B;
		data.pA8D = cA8D;
		data.pA8F = cA8F;
		data.pA8H = cA8H;
		data.pA8L = cA8L;
		data.pA8N = cA8N;
		data.pA9B = cA9B;
		data.pA9D = cA9D;
		data.pA9F = cA9F;
		data.pA9H = cA9H;
		data.pA9L = cA9L;
		data.pA9N = cA9N;
		data.pA10B = cA10B;
		data.pA10D = cA10D;
		data.pA10F = cA10F;
		data.pA10H = cA10H;
		data.pA10L = cA10L;
		data.pA10N = cA10N;
	}
	function str_eq(x, y) {
		return (x.toLowerCase() == y.toLowerCase());
	}
	function myIsNaN(x) {
		return (isNaN(x) || (typeof x == 'number' && !isFinite(x)));
	}
	function round(n, nd) {
		if (isFinite(n) && isFinite(nd)) {
			var sign_n = (n < 0) ? -1 : 1;
			var abs_n = Math.abs(n);
			var factor = Math.pow(10, nd);
			return sign_n * Math.round(abs_n * factor) / factor;
		} else {
			return NaN;
		}
	}
	function s2n(str) {
		str = String(str).replace(eedecreg, '.');
		return parseFloat(str);
	}
	function v2n(v) {
		switch (typeof v) {
		case 'number':
			return v;
		case 'string':
			return s2n(v);
		case 'boolean':
			return v ? 1 : 0;
		case 'object':
			if (v.constructor == Number) {
				return v;
			}
			if (v.constructor == String) {
				return s2n(v);
			}
			if (v.constructor == Boolean) {
				return v ? 1 : 0;
			}
			return Number.NaN;
		default:
			return Number.NaN;
		}
	}
	eeparseFloat = function (str) {
		str = String(str).replace(eedecreg, '.');
		var res = parseFloat(str);
		if (isNaN(res)) {
			return 0;
		} else {
			return res;
		}
	};
	eedisplayFloat = function (x) {
		if (myIsNaN(x)) {
			return Number.NaN;
		} else {
			return String(x).replace(/\./g, eedec);
		}
	};
	function eedisplayFloatND(x, nd) {
		if (myIsNaN(x)) {
			return Number.NaN;
		} else {
			var res = round(x, nd);
			if (nd > 0) {
				var str = String(res);
				if (str.indexOf('e') != -1) {
					return str;
				}
				if (str.indexOf('E') != -1) {
					return str;
				}
				var parts = str.split('.');
				var decimals;
				if (parts.length < 2) {
					decimals = ('00000000000000').substring(0, nd);
					return (parts[0]).toString() + eedec + decimals;
				} else {
					decimals = ((parts[1]).toString() + '00000000000000').substring(0, nd);
					return (parts[0]).toString() + eedec + decimals;
				}
			} else {
				return res;
			}
		}
	}
	var eeparseFloatVreg = new RegExp('^ *-?[0-9.]+ *$');
	function eeparseFloatV(str) {
		if (str == '') {
			return str;
		}
		str = String(str).replace(eedecreg, '.');
		if (!eeparseFloatVreg.test(str)) {
			return str;
		}
		var res = parseFloat(str);
		if (isNaN(res)) {
			return str;
		} else {
			return res;
		}
	}
})();
/*
////////////////////////
// PROFILE CALCULATOR //
//////////////////////// http://allnutritionals.com/jscriptsout/encrypthtml_backup/daily_calorie_calculator.js
var recalc_onclick;
var eedisplayFloat;
var eeparseFloat;
(function () {
	'use strict';
	var co = [];
	var eeisus = 1;
	var eetrue = 'TRUE';
	var eefalse = 'FALSE';
	var eedec = '.';
	var eeth = ',';
	var eedecreg = new RegExp('[.]', 'g');
	var eethreg = new RegExp(',', 'g');
	var eeparseFloatVreg = new RegExp('^ *-?[0-9.]+ *$');
	////////////////////
	// RECALC ONCLICK //
	////////////////////
	recalc_onclick = function (e) {
		co.pA1B = $('#pA1B').val();
		co.pA2B = eeparseFloat($('#pA2B').val());
		co.pA2C = $('#pA2C').val();
		co.pA3B = eeparseFloat($('#pA3B').val());
		co.pA3C = $('#pA3C').val();
		co.pA4B = eeparseFloatV($('#pA4B').val());
		co.pA5B = $('#pA5B').val();
		co.pA6G = eeparseFloat($('#pA6G').val());
		co.pA6H = $('#pA6H').val();
		co.pA6M = eeparseFloat($('#pA6M').val());
		co.pA6N = $('#pA6N').val();
		calc(co);
		$('#pA2D').val(eedisplayFloat(co.pA2D));
		$('#pA3D').val(eedisplayFloat(co.pA3D));
		$('#pA6B').val(eedisplayFloatND(co.pA6B, 2));
		$('#pA6J').val(eedisplayFloat(co.pA6J));
		$('#pA6O').val(eedisplayFloat(co.pA6O));
		$('#pA7B').val(eedisplayFloatND(co.pA7B, 2));
		$('#pA7F').val(eedisplayFloatND(co.pA7F, 2));
		$('#pA7L').val(eedisplayFloatND(co.pA7L, 2));
		$('#pA8B').val(eedisplayFloatND(co.pA8B, 2));
		$('#pA8D').val(eedisplayFloatND(co.pA8D, 2));
		$('#pA8F').val(eedisplayFloatND(co.pA8F, 2));
		$('#pA8H').val(eedisplayFloatND(co.pA8H, 2));
		$('#pA8L').val(eedisplayFloatND(co.pA8L, 2));
		$('#pA8N').val(eedisplayFloatND(co.pA8N, 2));
		$('#pA9B').val(eedisplayFloatND(co.pA9B, 2));
		$('#pA9D').val(eedisplayFloatND(co.pA9D, 2));
		$('#pA9F').val(eedisplayFloatND(co.pA9F, 2));
		$('#pA9H').val(eedisplayFloatND(co.pA9H, 2));
		$('#pA9L').val(eedisplayFloatND(co.pA9L, 2));
		$('#pA9N').val(eedisplayFloatND(co.pA9N, 2));
		$('#pA10B').val(eedisplayFloatND(co.pA10B, 2));
		$('#pA10D').val(eedisplayFloatND(co.pA10D, 2));
		$('#pA10F').val(eedisplayFloatND(co.pA10F, 2));
		$('#pA10H').val(eedisplayFloatND(co.pA10H, 2));
		$('#pA10L').val(eedisplayFloatND(co.pA10L, 2));
		$('#pA10N').val(eedisplayFloatND(co.pA10N, 2));
	};
	function calc(e) {
		var t = e.pA1B;
		var n = e.pA2B;
		var r = e.pA2C;
		var i = e.pA3B;
		var s = e.pA3C;
		var o = e.pA4B;
		var u = e.pA5B;
		var a = e.pA6G;
		var f = e.pA6H;
		var l = e.pA6M;
		var c = e.pA6N;
		var h = 'Sedentary (little or no exercise, desk job)';
		var p = 'Lightly active (light exercise/sports 1-3 days/wk)';
		var d = 'Moderately active (moderate exercise/sports 3-5 days/wk)';
		var v = 'Very active (hard exercise/sports 6-7 days/wk)';
		var m = 'Extremely active (hard daily exercise/sports & physical job)';
		var g = str_eq(r, 'centimetres') ? n : n * 2.54;
		var y = str_eq(s, 'kilograms') ? i : i * .4536;
		var b = str_eq(t, 'Male') ? 66 + 13.7 * y + 5 * g - 6.8 * v2n(o) : 655 + 9.6 * y + 1.8 * g - 4.7 * v2n(o);
		var w = str_eq(f, 'pounds') ? a : a * 2.2;
		var E = str_eq(c, 'pounds') ? l : l * 2.2;
		var S = str_eq(u, h) ? b * 1.2 : str_eq(u, p) ? b * 1.375 : str_eq(u, d) ? b * 1.55 : str_eq(u, v) ? b * 1.725 : str_eq(u, m) ? b * 1.9 : 0;
		var x = S - 500 * w;
		var T = S + 500 * E;
		var N = S * .55;
		var C = S * .15;
		var k = S * .3;
		var L = N * .25;
		var A = x * .55;
		var O = T * .55;
		var M = C * .25;
		var _ = x * .15;
		var D = T * .15;
		var P = k * .1111;
		var H = x * .3;
		var B = T * .3;
		var j = A * .25;
		var F = O * .25;
		var I = _ * .25;
		var q = D * .25;
		var R = H * .1111;
		var U = B * .1111;
		e.pA2D = g;
		e.pA3D = y;
		e.pA6B = b;
		e.pA6J = w;
		e.pA6O = E;
		e.pA7B = S;
		e.pA7F = x;
		e.pA7L = T;
		e.pA8B = N;
		e.pA8D = L;
		e.pA8F = A;
		e.pA8H = j;
		e.pA8L = O;
		e.pA8N = F;
		e.pA9B = C;
		e.pA9D = M;
		e.pA9F = _;
		e.pA9H = I;
		e.pA9L = D;
		e.pA9N = q;
		e.pA10B = k;
		e.pA10D = P;
		e.pA10F = H;
		e.pA10H = R;
		e.pA10L = B;
		e.pA10N = U;
	}
	function str_eq(e, t) {
		if (!e || !t) {
			return;
		}
		return e.toLowerCase() == t.toLowerCase();
	}
	function myIsNaN(e) {
		return isNaN(e) || typeof e == 'number' && !isFinite(e);
	}
	function round(e, t) {
		if (isFinite(e) && isFinite(t)) {
			var n = e < 0 ? -1 : 1;
			var r = Math.abs(e);
			var i = Math.pow(10, t);
			return n * Math.round(r * i) / i;
		} else {
			return NaN;
		}
	}
	function s2n(e) {
		e = String(e).replace(eedecreg, '.');
		return parseFloat(e);
	}
	function v2n(e) {
		switch (typeof e) {
		case 'number':
			return e;
		case 'string':
			return s2n(e);
		case 'boolean':
			return e ? 1 : 0;
		case 'object':
			if (e.constructor == Number) {
				return e;
			}
			if (e.constructor == String) {
				return s2n(e);
			}
			if (e.constructor == Boolean) {
				return e ? 1 : 0;
			}
			return Number.NaN;
		default:
			return Number.NaN;
		}
	}
	eeparseFloat = function (e) {
		e = String(e).replace(eedecreg, '.');
		var t = parseFloat(e);
		if (isNaN(t)) {
			return 0;
		} else {
			return t;
		}
	};
	eedisplayFloat = function (e) {
		if (myIsNaN(e)) {
			return Number.NaN;
		} else {
			return String(e).replace(/\./g, eedec);
		}
	};
	function eedisplayFloatND(e, t) {
		if (myIsNaN(e)) {
			return Number.NaN;
		} else {
			var n = round(e, t);
			if (t > 0) {
				var r = String(n);
				if (r.indexOf('e') != -1) {
					return r;
				}
				if (r.indexOf('E') != -1) {
					return r;
				}
				var i = r.split('.');
				var s;
				if (i.length < 2) {
					s = '00000000000000'.substring(0, t);
					return i[0].toString() + eedec + s;
				} else {
					s = (i[1].toString() + '00000000000000').substring(0, t);
					return i[0].toString() + eedec + s;
				}
			} else {
				return n;
			}
		}
	}
	function eeparseFloatV(e) {
		if (e == '') {
			return e;
		}
		e = String(e).replace(eedecreg, '.');
		if (!eeparseFloatVreg.test(e)) {
			return e;
		}
		var t = parseFloat(e);
		if (isNaN(t)) {
			return e;
		} else {
			return t;
		}
	}
})();
*/

