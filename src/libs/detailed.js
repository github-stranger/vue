export var request = {

//图书详情
	criteriaArray(fn){
	$.ajax({
		url: "../static/json/detailed.json",
		type: 'GET',
		dataType: 'json',
		success: fn
		})
	}
}