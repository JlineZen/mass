/***单例模式***/

 var singleton = (function() {

 	var instance;    //返回实例

 	function singletonConstructor() {
 		var _privateVar, //私有变量
 			_privateMethod; //私有方法

 		_privateVar = 1;
 		_privateMethod = function() {
 			_privateVar ++;
 		};

 		return { //返回供外部使用接口
 			getPrivateVar: function() {
 				return _privateVar;
 			},
 			publicMethod: function() {
 				_privateMethod();
 			}
 		};
 	}

 	return { //仅仅返回一个实例
 		getInstance: function() {
 			if (!instance) { //不存在则实例化
 				instance = singletonConstructor();
 			}
 			return instance;
 		}
 	}

 }());