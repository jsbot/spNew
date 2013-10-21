// Filename: messageHelper.js
define(["json2", "text!service/messages.json"], function (json2, messages) {
	function MH() {
		this.test = 'OWOWW';
		this.createJSON = function () {
			//console.log(arguments);
			var data = new Array();
			data[0] = 'valideteUser';
			data[1] = '{"id":"0002","collection":"users", "login":"satan", "password":"test"}';
			var mes = JSON.parse(messages);
			for (prop in mes) {
				if (mes.hasOwnProperty(prop)) {
					if (prop == arguments[0]) {
						var parseObj = [];
						var tArr = [];
						for (i = 0; i < arguments.length; i++) {
							tArr = arguments[i].split('=');
							for (j = 0; j < tArr.length; j++) {
								parseObj[0] = "test" + i + j; //= tArr[j];
								//console.log("TEST ARRAY:");
								//console.log("i: "+i+" j: "+j);
								//console.log(parseObj[i,j]);
							}
						}
						console.log(parseObj);
						//mes[prop] = objToCreate;
						/*console.log("array valodation");
						 console.log(arguments.length);
						 console.log(prop);
						 console.log(mes[prop]);*/
					}
				}
			}
			return mes;
		}
	}

	return new MH();
});
