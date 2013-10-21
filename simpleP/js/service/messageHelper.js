// Filename: messageHelper.js
define(["json2", "text!service/messages.json"], function (json2, messages) {
	function MH() {
		this.test = 'OWOWW';
		this.createJSON = function () {
			console.log(arguments);
			var mes = JSON.parse(messages);
            var parseObj = new Array();
            var tArr = [];
            for (i = 0; i < arguments.length; i++) {
                tArr = arguments[i].split('=');
                parseObj.push(tArr);
            }
			for (prop in mes) {
				if (prop == arguments[0]) {
                    for(i = 1; i<parseObj.length; i++){
                        if (mes[prop].hasOwnProperty(parseObj[i][0])) {
                            mes[prop][parseObj[i][0]] = parseObj[i][1];

                        }
                    }

				}
			}
            var resultJSON = JSON.stringify(mes[arguments[0]]);
			return resultJSON;
		}
	}

	return new MH();
});
