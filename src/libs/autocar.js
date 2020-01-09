export var request = {

	criteriaArray(fn){
		$.ajax({
			url: "../static/json/autocar.json",
			type: 'GET',
			dataType: 'json',
			success: fn
		})



	}
}