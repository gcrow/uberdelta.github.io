var _Mathsqrt = Math.sqrt,
	_Mathpow = Math.pow,
	_Mathfloor = Math.floor,
	_Mathceil = Math.ceil,
	_MathPI = Math.PI,
	_Mathround = Math.round,
	_Mathmax = Math.max,
	_Mathmin = Math.min,
	_Mathabs = Math.abs;
(function(t) {
	function o(d) {
		if(l[d]) return l[d].exports;
		var u = l[d] = {
			i: d,
			l: !1,
			exports: {}
		};
		return t[d].call(u.exports, u, u.exports, o), u.l = !0, u.exports
	}
	var l = {};
	return o.m = t, o.c = l, o.i = function(d) {
	
	}, o.d = function(d, u, h) {
		o.o(d, u) || Object.defineProperty(d, u, {
		
		})
	}, o.n = function(d) {
		var u = d && d.__esModule ? function() {
		
		} : function() {
		
		};
		return o.d(u, 'a', u), u
	}, o.o = function(d, u) {
		return Object.prototype.hasOwnProperty.call(d, u)
	}, o.p = '', o(o.s = 59)
})([function(t) {
	t.exports = {

		OPTIMIZED_RESIZE: 'optimizedResize',
		OPTIMIZED_SCROLL: 'optimizedScroll',
	}
}, function(t) {
	var l = function() {
		return this
	}();
	try {
		l = l || Function('return this')() || (1, eval)('this')
	} catch(d) {
	
	}
	t.exports = l
}, , function(t, o, l) {
	(function() {
		
	}).call(o, l(1))
}, , , , function() {
	
}, function(t) {
	t.exports = {
		enable: function(u, h, f) {
			f ? u.classList.add(h) : u.classList.remove(h)
		},
		removeAdd: function(u, h, f) {
			u.classList.remove.apply(u.classList, h), u.classList.add.apply(u.classList, f)
		}
	}
}, , function(t) {
	t.exports = {
		clone: function(u) {
			var h = {};
			for(var f in u) h[f] = u[f];
			return h
		},
		merge: function(u, h) {
			for(var f in h) u[f] = h[f]
		}
	}
}, function(t) {

}, function(t) {
	t.exports = {
		createDom: function(d, u) {
			var h = document.createElement(d);
			return u && (h.className = u), h
		}
	}
}, function(t) {
	t.exports = {
		addDelegatedListener: function(d, u, h) {
			return d.addEventListener(u, function(f) {
				f = f || window.event;
				var m = f.target || f.srcElement;
				m = 3 === m.nodeType ? m.parentNode : m;
				do h(m, f), m.parentNode && (m = m.parentNode); while (m.parentNode)
			})
		}
	}
}, function(t) {
	function d() {
		return /iPhone|iPad|iPod/i.test(navigator.userAgent)
	}

	function u() {
		return /Android/i.test(navigator.userAgent)
	}

	function h() {
		return -1 != navigator.userAgent.indexOf('Chrome')
	}
	t.exports = {
		isAndroid: u,
		isChrome: h,
		isFirefox: function() {
			return -1 != navigator.userAgent.indexOf('Firefox')
		},
		isIOS: d,
		isIE: function() {
			return /MSIE\/\d+/.test(navigator.userAgent)
		},
		isIEorEdge: function() {
			return /Edge\/\d+/.test(navigator.userAgent) || /MSIE\/\d+/.test(navigator.userAgent) || /Trident\/\d+/.test(navigator.userAgent)
		},
		isMobile: function() {
			return d() || u()
		},
		isSafari: function() {
			return !h() && -1 != navigator.userAgent.indexOf('Safari')
		}
	}
}, function(t) {
	'use strict';
	t.exports = function(u) {
		return null !== u && 'object' == typeof u
	}
}, function(t, o, l) {
	var m = function(S, _) {
			
		}
}, function(t, o, l) {
	var d = l(3),
	
		
	L = function(N, H) {
			var U = {
				end: {},
				start: {},
				diff: {}
			};
			
			return N && H && (U.diff.raw = U.end.raw - U.start.raw, U.diff.hours = U.diff.raw / 1e3 / 60 / 60), U
		},
		M = function(N) {
			this.baseUrl_ = N, this.sessions_ = {}, this.deferredLoading_ = new m.Deferred, this.data_ = {
				
			}, this.loadSessions_()
		};
	 M.init = function(N) {
		return new M(N)
	}, t.exports = M
}, , function(t, o, l) {
	var d = l(25),
		u = function(h) {
			
		};
	u.init = function() {
		
	}, t.exports = u
}, , , function(t, o, l) {
	
	
}, function(t, o, l) {
	
	
}, function() {
	


	
}, function(t, o, l) {
	var d, u;
	(function(h, f) {
		d = f, u = 'function' == typeof d ? d.call(o, l, o, t) : d, !(u !== void 0 && (t.exports = u))
	})(this, function() {
		function h(I) {
			var M = 'Webkit Moz ms O'.split(' '),
				N = document.documentElement.style;
			if(void 0 !== N[I]) return I;
			I = I.charAt(0).toUpperCase() + I.substr(1);
			for(var H = 0; H < M.length; H++)
				if(void 0 !== N[M[H] + I]) return M[H] + I
		}

	
		var m = function() {
		
		};
		m.prototype = {
			
			init: function() {
				this.options.css3 && f(this.handle), this.value = {
					prev: [-1, -1],
					current: [this.options.x || 0, this.options.y || 0],
					target: [this.options.x || 0, this.options.y || 0]
				}, this.offset = {
					wrapper: [0, 0],
					mouse: [0, 0],
					prev: [-999999, -999999],
					current: [0, 0],
					target: [0, 0]
				}, this.dragStartPosition = {
					x: 0,
					y: 0
				}, this.change = [0, 0], this.stepRatios = this.calculateStepRatios(), this.activity = !1, this.dragging = !1, this.tapping = !1, this.reflow(), this.options.disabled && this.disable()
			},
			applyDefaults: function(I) {
				for(var M in this.defaults) I.hasOwnProperty(M) || (I[M] = this.defaults[M]);
				return I
			},
			getWrapperElement: function(I) {
				return 'string' == typeof I ? document.getElementById(I) : I
			},
			getHandleElement: function(I, M) {
				var N, H, U;
				if(!I.getElementsByClassName) {
					for(H = new RegExp('(^|\\s)' + M + '(\\s|$)'), N = I.getElementsByTagName('*'), U = 0; U < N.length; U++)
						if(H.test(N[U].className)) return N[U];
				} else if(N = I.getElementsByClassName(M), 0 < N.length) return N[0]
			},
			calculateStepRatios: function() {
				var I = [];
				if(1 <= this.options.steps)
					for(var M = 0; M <= this.options.steps - 1; M++) I[M] = 1 < this.options.steps ? M / (this.options.steps - 1) : 0;
				return I
			},
			setWrapperOffset: function() {
				this.offset.wrapper = O.get(this.wrapper)
			},
			calculateBounds: function() {
				var I = {
					top: this.options.top || 0,
					bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
					left: this.options.left || 0,
					right: -(this.options.right || 0) + this.wrapper.offsetWidth
				};
				return I.availWidth = I.right - I.left - this.handle.offsetWidth, I.availHeight = I.bottom - I.top - this.handle.offsetHeight, I
			},
			calculateValuePrecision: function() {
				var I = this.options.xPrecision || _Mathabs(this.bounds.availWidth),
					M = this.options.yPrecision || _Mathabs(this.bounds.availHeight);
				return [I ? 1 / I : 0, M ? 1 / M : 0]
			},
			bindMethods: function() {
				this.requestAnimationFrame = 'function' == typeof this.options.customRequestAnimationFrame ? S(this.options.customRequestAnimationFrame, window) : S(P, window), this.cancelAnimationFrame = 'function' == typeof this.options.customCancelAnimationFrame ? S(this.options.customCancelAnimationFrame, window) : S(R, window), this.animateWithRequestAnimationFrame = S(this.animateWithRequestAnimationFrame, this), this.animate = S(this.animate, this), this.onHandleMouseDown = S(this.onHandleMouseDown, this), this.onHandleTouchStart = S(this.onHandleTouchStart, this), this.onDocumentMouseMove = S(this.onDocumentMouseMove, this), this.onWrapperTouchMove = S(this.onWrapperTouchMove, this), this.onWrapperMouseDown = S(this.onWrapperMouseDown, this), this.onWrapperTouchStart = S(this.onWrapperTouchStart, this), this.onDocumentMouseUp = S(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = S(this.onDocumentTouchEnd, this), this.onHandleClick = S(this.onHandleClick, this), this.onWindowResize = S(this.onWindowResize, this)
			},
			bindEventListeners: function() {
				_(this.handle, 'mousedown', this.onHandleMouseDown), _(this.handle, 'touchstart', this.onHandleTouchStart), _(document, 'mousemove', this.onDocumentMouseMove), _(this.wrapper, 'touchmove', this.onWrapperTouchMove), _(this.wrapper, 'mousedown', this.onWrapperMouseDown), _(this.wrapper, 'touchstart', this.onWrapperTouchStart), _(document, 'mouseup', this.onDocumentMouseUp), _(document, 'touchend', this.onDocumentTouchEnd), _(this.handle, 'click', this.onHandleClick), _(window, 'resize', this.onWindowResize), this.animate(!1, !0), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
			},
			unbindEventListeners: function() {
				T(this.handle, 'mousedown', this.onHandleMouseDown), T(this.handle, 'touchstart', this.onHandleTouchStart), T(document, 'mousemove', this.onDocumentMouseMove), T(this.wrapper, 'touchmove', this.onWrapperTouchMove), T(this.wrapper, 'mousedown', this.onWrapperMouseDown), T(this.wrapper, 'touchstart', this.onWrapperTouchStart), T(document, 'mouseup', this.onDocumentMouseUp), T(document, 'touchend', this.onDocumentTouchEnd), T(this.handle, 'click', this.onHandleClick), T(window, 'resize', this.onWindowResize), this.cancelAnimationFrame(this.interval)
			},
			onHandleMouseDown: function(I) {
				w.refresh(I), E(I), C(I), this.activity = !1, this.startDrag()
			},
			onHandleTouchStart: function(I) {
				w.refresh(I), C(I), this.activity = !1, this.startDrag()
			},
			onDocumentMouseMove: function(I) {
				0 == I.clientX - this.dragStartPosition.x && 0 == I.clientY - this.dragStartPosition.y || (w.refresh(I), this.dragging && (this.activity = !0, E(I)))
			},
			onWrapperTouchMove: function(I) {
				return w.refresh(I), !this.activity && this.draggingOnDisabledAxis() ? void(this.dragging && this.stopDrag()) : void(E(I), this.activity = !0)
			},
			onWrapperMouseDown: function(I) {
				w.refresh(I), E(I), this.startTap()
			},
			onWrapperTouchStart: function(I) {
				w.refresh(I), E(I), this.startTap()
			},
			onDocumentMouseUp: function() {
				this.stopDrag(), this.stopTap()
			},
			onDocumentTouchEnd: function() {
				this.stopDrag(), this.stopTap()
			},
			onHandleClick: function(I) {
				this.activity && (E(I), C(I))
			},
			onWindowResize: function() {
				this.reflow()
			},
			enable: function() {
				this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, '')
			},
			disable: function() {
				this.disabled = !0, this.handle.className += ' disabled'
			},
			reflow: function() {
				this.setWrapperOffset(), this.bounds = this.calculateBounds(), this.valuePrecision = this.calculateValuePrecision(), this.updateOffsetFromValue()
			},
			getStep: function() {
				return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
			},
			getStepWidth: function() {
				return _Mathabs(this.bounds.availWidth / this.options.steps)
			},
			getValue: function() {
				return this.value.target
			},
			setStep: function(I, M, N) {
				this.setValue(this.options.steps && 1 < I ? (I - 1) / (this.options.steps - 1) : 0, this.options.steps && 1 < M ? (M - 1) / (this.options.steps - 1) : 0, N)
			},
			setValue: function(I, M, N) {
				this.setTargetValue([I, M || 0]), N && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
			},
			startTap: function() {
				this.disabled || !this.options.tapping || (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([w.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, w.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
			},
			stopTap: function() {
				this.disabled || !this.tapping || (this.tapping = !1, this.setTargetValue(this.value.current))
			},
			startDrag: function() {
				this.disabled || (this.dragging = !0, this.setWrapperOffset(), this.dragStartPosition = {
					x: w.x,
					y: w.y
				}, this.offset.mouse = [w.x - O.get(this.handle)[0], w.y - O.get(this.handle)[1]], !this.wrapper.className.match(this.options.activeClass) && (this.wrapper.className += ' ' + this.options.activeClass), this.callDragStartCallback())
			},
			stopDrag: function() {
				if(!this.disabled && this.dragging) {
					this.dragging = !1;
					var I = 0 === this.bounds.availWidth ? 0 : (w.x - this.dragStartPosition.x) / this.bounds.availWidth,
						M = 0 === this.bounds.availHeight ? 0 : (w.y - this.dragStartPosition.y) / this.bounds.availHeight,
						H = this.groupClone(this.value.current);
					if(this.options.slide) {
						var U = this.change;
						H[0] += 4 * U[0], H[1] += 4 * U[1]
					}
					this.setTargetValue(H), this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, ''), this.callDragStopCallback([I, M])
				}
			},
			callAnimationCallback: function() {
				var I = this.value.current;
				this.options.snap && 1 < this.options.steps && (I = this.getClosestSteps(I)), this.groupCompare(I, this.value.prev) || ('function' == typeof this.options.animationCallback && this.options.animationCallback.call(this, I[0], I[1]), this.groupCopy(this.value.prev, I))
			},
			callTargetCallback: function() {
				'function' == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
			},
			callDragStartCallback: function() {
				'function' == typeof this.options.dragStartCallback && this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1])
			},
			callDragStopCallback: function(I) {
				'function' == typeof this.options.dragStopCallback && this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], I)
			},
			animateWithRequestAnimationFrame: function(I) {
				I ? (this.timeOffset = this.timeStamp ? I - this.timeStamp : 0, this.timeStamp = I) : this.timeOffset = 25, this.animate(), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
			},
			animate: function(I, M) {
				if(!I || this.dragging) {
					if(this.dragging) {
						var N = this.groupClone(this.value.target),
							H = [w.x - this.offset.wrapper[0] - this.offset.mouse[0], w.y - this.offset.wrapper[1] - this.offset.mouse[1]];
						this.setTargetValueByOffset(H, this.options.loose), this.change = [this.value.target[0] - N[0], this.value.target[1] - N[1]]
					}(this.dragging || M) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || M) && (this.updateOffsetFromValue(), this.callAnimationCallback())
				}
			},
			glide: function() {
				var I = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
				return(I[0] || I[1]) && (_Mathabs(I[0]) > this.valuePrecision[0] || _Mathabs(I[1]) > this.valuePrecision[1] ? (this.value.current[0] += I[0] * _Mathmin(this.options.speed * this.timeOffset / 25, 1), this.value.current[1] += I[1] * _Mathmin(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target), !0)
			},
			updateOffsetFromValue: function() {
				this.offset.current = this.options.snap ? this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.getOffsetsByRatios(this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
			},
			renderHandlePosition: function() {
				var I = '';
				return this.options.css3 && D.transform ? (this.options.horizontal && (I += 'translateX(' + this.offset.current[0] + 'px)'), this.options.vertical && (I += ' translateY(' + this.offset.current[1] + 'px)'), void(this.handle.style[D.transform] = I)) : void(this.options.horizontal && (this.handle.style.left = this.offset.current[0] + 'px'), this.options.vertical && (this.handle.style.top = this.offset.current[1] + 'px'))
			},
			setTargetValue: function(I, M) {
				var N = M ? this.getLooseValue(I) : this.getProperValue(I);
				this.groupCopy(this.value.target, N), this.offset.target = this.getOffsetsByRatios(N), this.callTargetCallback()
			},
			setTargetValueByOffset: function(I, M) {
				var N = this.getRatiosByOffsets(I),
					H = M ? this.getLooseValue(N) : this.getProperValue(N);
				this.groupCopy(this.value.target, H), this.offset.target = this.getOffsetsByRatios(H)
			},
			getLooseValue: function(I) {
				var M = this.getProperValue(I);
				return [M[0] + (I[0] - M[0]) / 4, M[1] + (I[1] - M[1]) / 4]
			},
			getProperValue: function(I) {
				var M = this.groupClone(I);
				return M[0] = _Mathmax(M[0], 0), M[1] = _Mathmax(M[1], 0), M[0] = _Mathmin(M[0], 1), M[1] = _Mathmin(M[1], 1), (!this.dragging && !this.tapping || this.options.snap) && 1 < this.options.steps && (M = this.getClosestSteps(M)), M
			},
			getRatiosByOffsets: function(I) {
				return [this.getRatioByOffset(I[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(I[1], this.bounds.availHeight, this.bounds.top)]
			},
			getRatioByOffset: function(I, M, N) {
				return M ? (I - N) / M : 0
			},
			getOffsetsByRatios: function(I) {
				return [this.getOffsetByRatio(I[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(I[1], this.bounds.availHeight, this.bounds.top)]
			},
			getOffsetByRatio: function(I, M, N) {
				return _Mathround(I * M) + N
			},
			getStepNumber: function(I) {
				return this.getClosestStep(I) * (this.options.steps - 1) + 1
			},
			getClosestSteps: function(I) {
				return [this.getClosestStep(I[0]), this.getClosestStep(I[1])]
			},
			getClosestStep: function(I) {
				for(var M = 0, N = 1, H = 0; H <= this.options.steps - 1; H++) _Mathabs(this.stepRatios[H] - I) < N && (N = _Mathabs(this.stepRatios[H] - I), M = H);
				return this.stepRatios[M]
			},
			groupCompare: function(I, M) {
				return I[0] == M[0] && I[1] == M[1]
			},
			groupCopy: function(I, M) {
				I[0] = M[0], I[1] = M[1]
			},
			groupClone: function(I) {
				return [I[0], I[1]]
			},
			draggingOnDisabledAxis: function() {
				return !this.options.horizontal && w.xDiff > w.yDiff || !this.options.vertical && w.yDiff > w.xDiff
			}
		};
		for(var w = {
				
			},  L = ['webkit', 'moz'], P = window.requestAnimationFrame, R = window.cancelAnimationFrame, A = 0; A < L.length && !P; ++A) P = window[L[A] + 'RequestAnimationFrame'], R = window[L[A] + 'CancelAnimationFrame'] || window[L[A] + 'CancelRequestAnimationFrame'];
		return P || (P = function(I) {
		
		}, R = clearTimeout), m
	})
}, function(t) {
	function l() {
		this._defaults = []
	}['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert'].forEach(function(d) {
		l.prototype[d] = function() {
			return this._defaults.push({
				fn: d,
				arguments: arguments
			}), this
		}
	}), l.prototype._setDefaults = function(d) {
		this._defaults.forEach(function(u) {
			d[u.fn].apply(d, u.arguments)
		})
	}, t.exports = l
}, function(t, o, l) {
	function d() {}

	function u(I) {
		if(!D(I)) return I;
		var M = [];
		for(var N in I) h(M, N, I[N]);
		return M.join('&')
	}

	function h(I, M, N) {
		if(!(null != N)) null === N && I.push(encodeURIComponent(M));
		else if(Array.isArray(N)) N.forEach(function(U) {
			h(I, M, U)
		});
		else if(D(N))
			for(var H in N) h(I, M + '[' + H + ']', N[H]);
		else I.push(encodeURIComponent(M) + '=' + encodeURIComponent(N))
	}

	function f(I) {
		for(var H, U, M = {}, N = I.split('&'), W = 0, q = N.length; W < q; ++W) H = N[W], U = H.indexOf('='), -1 == U ? M[decodeURIComponent(H)] = '' : M[decodeURIComponent(H.slice(0, U))] = decodeURIComponent(H.slice(U + 1));
		return M
	}

	function m(I) {
		for(var H, U, W, q, M = I.split(/\r?\n/), N = {}, B = 0, G = M.length; B < G; ++B)(U = M[B], H = U.indexOf(':'), -1 !== H) && (W = U.slice(0, H).toLowerCase(), q = A(U.slice(H + 1)), N[W] = q);
		return N
	}

	function S(I) {
		return /[\/+]json($|[^-\w])/.test(I)
	}

	function _(I) {
	
	}

	function T(I, M) {
		
	}

	function E(I, M, N) {
	
	}
	var C;

	var w = l(24),
		O = l(28),
		D = l(15),
		L = l(29),
		P = l(26);
	var R = o = t.exports = function(I, M) {
	
	};
	o.Request = T, R.getXHR = function() {
		
	};
	
	R.serializeObject = u, R.parseString = f, R.types = {
		html: 'text/html',
		json: 'application/json',
		xml: 'text/xml',
		urlencoded: 'application/x-www-form-urlencoded',
		form: 'application/x-www-form-urlencoded',
		"form-data": 'application/x-www-form-urlencoded'
	}, P.prototype.del = P.prototype['delete'], R.get = function(I, M, N) {
		
	}, R.put = function(I, M, N) {
		
	}
}, function(t, o, l) {
	'use strict';

	function d(m) {
		//if(m) return u(m)
	}

	function u(m) {
		for(var S in d.prototype) m[S] = d.prototype[S];
		return m
	}
	var h = l(15);
	t.exports = d, d.prototype.clearTimeout = function() {
		return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
	}, d.prototype.retry = function(S, _) {
		return(0 === arguments.length || !0 === S) && (S = 1), 0 >= S && (S = 0), this._maxRetries = S, this._retries = 0, this._retryCallback = _, this
	};
	var f = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
	
}, function(t, o, l) {
	'use strict';

	function d(f) {

	}

	function u(f) {
		for(var m in d.prototype) f[m] = d.prototype[m];
		return f
	}
	var h = l(30);
	t.exports = d, d.prototype.get = function(f) {
		return this.header[f.toLowerCase()]
	}, d.prototype._setHeaderProperties = function(f) {
		var m = f['content-type'] || '';
		this.type = h.type(m);
		var S = h.params(m);
		for(var _ in S) this[_] = S[_];
		this.links = {};
		try {
			f.link && (this.links = h.parseLinks(f.link))
		} catch(T) {}
	}, d.prototype._setStatusProperties = function(f) {
		var m = 0 | f / 100;
		this.status = this.statusCode = f, this.statusType = m, this.info = 1 == m, this.ok = 2 == m, this.redirect = 3 == m, this.clientError = 4 == m, this.serverError = 5 == m, this.error = (4 == m || 5 == m) && this.toError(), this.accepted = 202 == f, this.noContent = 204 == f, this.badRequest = 400 == f, this.unauthorized = 401 == f, this.notAcceptable = 406 == f, this.forbidden = 403 == f, this.notFound = 404 == f
	}
}, function( o) {

	
}, , , , , , , , , , , function(t, o, l) {
	'use strict';
	//var d = l(55);
	const u = l(67),

		S = {
		
		},O = {
			
		};
	let D = [];
	for(let R = 15; 105 >= R; R += 15) D.push(R);
	const L = D;
	o.a = class {

               constructor() {
                this.countdownParent = document.querySelector(S.COUNTDOWN_PARENT), this.slashesParent = document.querySelector(S.SLASHES_PARENT);
                this.countdownParent && this.slashesParent && (this.navHours = document.querySelector(S.NAV_HOURS),  this.navSeconds = document.querySelector(S.NAV_SECONDS), this.pauseButton = document.querySelector(S.PAUSE_BUTTON), this.hoursLabel = document.querySelector(S.HOURS_LABEL), this.pixelDensity = T, !window.WebGL2RenderingContext && (640 < this.gridWidth && 1025 > this.gridWidth ? this.pixelDensity *= 0.75 : 1024 < this.gridWidth && (this.pixelDensity = 1)),  this.createGrids(), this.hoursCounter = null, this.minutesCounter = null, this.secondsCounter = null, this.millisecondsCounter = null, this.resize = this.resize.bind(this), this.handleWindowResize = this.handleWindowResize.bind(this), this.handleDeviceMotion = this.handleDeviceMotion.bind(this), this.handlePointerMove = this.handlePointerMove.bind(this))
        }
	
               
      

        
		init() {
			const R = document.querySelector(S.FALLBACK_TIME);
			R.innerHTML = `

${this.getTime().currentSeconds}`,  this.bindEvents(),  this.activeNav.classList.add(_.ACTIVE)
		}
		
	}
}, , , , , , function(t, o, l) {
	function d(L, P) {
		return L = _Mathceil(L), P = _Mathfloor(P), _Mathfloor(Math.random() * (P - L)) + L
	}
	var u = l(0),
		//S = 'featuredVideos__videos__video',
		O = 2,
		D = function(L) {
			this.bookmarks = null, this.data = null, window.addEventListener(u.BOOKMARKS_BROADCAST, this.handleBookmarks.bind(this), !1), window.addEventListener(u.SESSIONS_LOADED, this.handleSessions.bind(this), !1), window.addEventListener('DOMContentLoaded', function() {
				document.querySelector('.js-countdown') && (window.ioCountdown = new L, window.ioCountdown.init());
				var P = document.querySelector('.hero__logo--scrollable');
				if(P) {
					var R = document.querySelector('.header'),
						A = document.querySelector('.header__content'),
						I = document.querySelector('.header__logo'),
						M = document.querySelector('.header__hamburger'),
						N = P.parentNode,
                                                H = P.clientHeight,
						U = P.clientWidth,
						W = parseInt(P.offsetTop),
						q = parseInt(P.offsetLeft),
						G, z = !1,
						V = [{
							minScroll: 0,
							minScrollPerc: 0,
							maxScroll: 0,
							maxScrollPerc: .199,
							initial: {
								height: H,
								left: q,
								width: U
							},
							property: {
                                                                /*
								height: 50,
								top: 0,
                                                                width: 50
                                                                */
                                                               height: 100,
								top: 0,
                                                                width: 230
							},
							custom: function(Y) {
								var K = R.clientHeight;
								Y.property.height = K, Y.property.left = 812 <= window.screen.width ? 60 + parseInt(A.offsetLeft) : M.clientWidth + 1, Y.initial.left = parseInt(N.offsetLeft), Y.initial.top = parseInt(N.offsetTop)
							}
						}],
						F = function() {
							G = window.screen.height;
							var Y = window.getComputedStyle(P);
							z = 'none' !== Y.display;
							for(var K = 0; K < V.length; K++) V[K].custom && V[K].custom(V[K]), V[K].minScrollPerc && (V[K].minScroll = G * V[K].minScrollPerc), V[K].maxScrollPerc && (V[K].maxScroll = G * V[K].maxScrollPerc)
						},
						X = function() {
							var Y, K = function($, Z, J, ee, te) {
								if(void 0 != Z.property[ee]) {
									var ne = Z.initial[ee] || te,
										re = ne - Z.property[ee],
										ae = 1 - (1 - Z.property[ee] / ne) * J;
									switch(ee) {
										case 'left':
											var oe = U - Z.property.width;
											return 'translatex(' + (-re - oe / 2) * J + 'px)';
											break;
										case 'top':
											var ie = H - Z.property.height;
											return 'translatey(' + (-re - ie / 2) * J + 'px)';
											break;
										case 'width':
											return 'scale(' + ae + ')';
									}
								}
							};
							return function() {
								if(z) {
									Y != 0 < window.scrollY && (Y = 0 < window.scrollY, Y ? P.classList.add('logo--scrolled') : P.classList.remove('logo--scrolled'));
									for(var $ = 0; $ < V.length; $++)
										if(!(window.scrollY < V[$].minScroll)) {
											var Z = window.scrollY - V[$].minScroll,
												J = _Mathmin(Z / V[$].maxScroll, 1),
												ee = '';
											ee += ' ' + K(P, V[$], J, 'top'), ee += ' ' + K(P, V[$], J, 'left'), ee += ' ' + K(P, V[$], J, 'width'), P.style.transform = ee
										}
								}
							};
							var Q = document.querySelectorAll('[data-signin]')
						}();
					F(), X(), window.addEventListener(u.OPTIMIZED_RESIZE, function() {
						F(), X()
					}, !1), window.addEventListener(u.OPTIMIZED_SCROLL, X, !1), P.classList.add('hero__logo--loaded')
				}
			})
		};
 D.prototype.handleBookmarks = function() {
		
	}, D.prototype.handleSessions = function() {
	
	}, D.init = function() {
		return new D()
	}, t.exports = D
}, , , function(t) {
	var l = function() {
	
	};
	l.URL = '', l.URL_SHORTENER_REGEX = /(https?:\/\/t\.co\/\w+)/, l.prototype.render = function() {
		
	}, t.exports = l
}, function() {
	
}, , , , function( o) {
	'use strict';
	const u = 1 < window.devicePixelRatio ? window.devicePixelRatio : 1,
		h = 1.25,
		f = 0.1,
		m = 0.05,
		S = 1;
	o.a = class {
		constructor(E, C, w, O, D = {}) {
		
		}
	}
}, , , , function(t, o, l) {
	'use strict';
	Object.defineProperty(o, '__esModule', {
		value: !0
	});
	var d = l(41),
		u = l(11),
		h = l(16),
		f = l(19),
		m = l(47),
		S = l(17),
		_ = l(50),
		T = l(51),
		E = l(7);
	m.init(d.a);
	var C = u.init('https://' + document.body.dataset.userdataApi),
		w = u.init('https://' + document.body.dataset.pingApi);
	h.init(C, w), S.init(document.body.dataset.sessions), f.init(), _.init(), T.init(), E.init()
}, , , , , , , , function(t, o, l) {
	var u = l(22);
	t.exports = function(h) {
		var f = u(h),
			m = f.getHours();
	//	return m
	}
}, function(t, o, l) {
	var u = l(22);
	t.exports = function(h) {
		var f = u(h),
			m = f.getMilliseconds();
		//return m
	}
}, function(t, o, l) {
	var u = l(22);
	t.exports = function(h) {
		var f = u(h),
			m = f.getMinutes();
		//return m
	}
}, function(t, o, l) {
	var u = l(22);
	t.exports = function(h) {
		var f = u(h),
			m = f.getSeconds();
		//return m
	}
}, function(t) {
	t.exports = function(d) {
		//return d instanceof Date
	}
}]);