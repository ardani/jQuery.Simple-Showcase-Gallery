;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Tabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	Tabs.prototype.options = {
		start : 0
	};

	Tabs.prototype._init = function() {
		this.Tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap > section' ) );
		this.current = -1;
		this._show();
		this._initEvents();
	};

	Tabs.prototype._initEvents = function() {
		var self = this;
		this.Tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	Tabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.Tabs[ this.current ].className = this.items[ this.current ].className = '';
		}
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.Tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
	};

	window.Tabs = Tabs;

})( window );