/**
 * Common Http
 */

/* 파라메터로 보낼 임의의 데이터 객체 */
var dataObject =
{
	dataNo : $scope.dataNo + "",
	dataName : $scope.dataName,
	dataContent : $scope.dataContent
};


/* AJAX 통신 처리 */
$http({
	method: 'POST', //방식
	url: 'http://localhost/jsonURL', /* 통신할 URL */
	data: dataObject, /* 파라메터로 보낼 데이터 */
	headers: {'Content-Type': 'application/json; charset=utf-8'} //헤더
})
.success(function(data, status, headers, config) {
	if( data ) {
		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
	}
	else {
		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
	}
})
.error(function(data, status, headers, config) {
	/* 서버와의 연결이 정상적이지 않을 때 처리 */
	console.log(status);
});