var dialog = (function() {

	var instance;

	function Dialog(options) { 
		/**
		* options.bgcolor
		* options.time 
		**/
		var mainContent,
			_initbgColor = [
				{ lightGreen: '#00DEA6' }
			],
			_getInitColor = function() {
				var target;
				_initbgColor.forEach(function(item) {
					if (options.bgcolor in item) {
						target = item;
					}
				});
				return target;
			},
			_createElement = function() {
				mainContent = document.createElement('div');
				mainContent.style.cssText = [
									'position:fixed',
									'width:100%',
									'padding: 20px',
									'line-height:24px',
									'left: 0',
									'bottom: 0',
									'background-color:' + _getInitColor()[options.bgcolor] + '',
									'color:#fff'].join(';');
				mainContent.innerHTML = options.text;
				document.body.appendChild(mainContent);
			},
			_close = function() {
				if (options.autoClose) {
					setTimeout(function() {
						mainContent.style.display = 'none'
					}, 2000);
				}
			}

		return {
			init: _createElement,
			close: _close
		}

	}

	return {
		create: function(options) {
			if (!instance) {
				instance = Dialog(options);
			}

			return instance;
		}
	}

}());