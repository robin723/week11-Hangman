function letters() {
	this.checkLetz = function (letter) {
		var Letz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
			'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
	    for (var i = 0; i < letz.length; i++) {
	    	if(letter == List[i]) {
	    		return true;
	    	}
	    }
	    return false;
	}
	this.inArray = function(letter,arr) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == letter) {
				return true;
			}
		}
		return false;
	}
	this.replaceLetter = function(str, i , letter) {
		return str.substr(0,i) + letter + str.substr(i + 1);
	}
}

var letterFunctions = new Letters();

exports.letter = {
	letterFunctions : letterFunctions
}