export var request = {

//收藏
	criteriaArray(fn){
	$.ajax({
		url: "../static/json/collect.json",
		type: 'GET',
		dataType: 'json',
		success: fn
		})
	}
}