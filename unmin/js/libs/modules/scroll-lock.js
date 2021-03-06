define("scrollLock",["jquery"],function($,scrollLock) {
	return {

		scrollLockClosure: function() {
			'use strict';

			var $html      = $( 'html' ),
			locked     = false,
			prevScroll = {
				scrollLeft : $( window ).scrollLeft(),
				scrollTop  : $( window ).scrollTop()
			},
			prevStyles = {},
			lockStyles = {
				'overflow-y' : 'scroll',
				'position'   : 'fixed',
				'width'      : '100%'
			};

			saveStyles();

			function saveStyles() {
				var styleAttr = $html.attr( 'style' ),
				styleStrs = [],
				styleHash = {};

				if( !styleAttr ){
					return;
				}

				styleStrs = styleAttr.split( /;\s/ );

				$.each( styleStrs, function serializeStyleProp( styleString ){
					if( !styleString ) {
						return;
					}

					var keyValue = styleString.split( /\s:\s/ );

					if( keyValue.length < 2 ) {
						return;
					}

					styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
				} );

				$.extend( prevStyles, styleHash );
			}

			function lock() {
				var appliedLock = {};

				if( locked ) {
					return;
				}

				prevScroll = {
					scrollLeft : $( window ).scrollLeft(),
					scrollTop  : $( window ).scrollTop()
				};

				saveStyles();

				$.extend( appliedLock, lockStyles, {
					'left' : - prevScroll.scrollLeft + 'px',
					'top'  : - prevScroll.scrollTop  + 'px'
				} );

				$html.css( appliedLock );

				$( window )
				.scrollLeft( 0 )
				.scrollTop( 0 );

				locked = true;
			}

			function unlock() {
				if( !locked ) {
					return;
				}

				$html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

				$( window )
				.scrollLeft( prevScroll.scrollLeft )
				.scrollTop(  prevScroll.scrollTop );

				locked = false;
			}

			return function scrollLock( on ) {
				if( arguments.length ) {
					if( on ) {
						lock();
					}
					else {
						unlock();
					}
				}
				else {
					if( locked ){
						unlock();
					}
					else {
						lock();
					}
				}
			};
		}

	};
});