/*
 * BODY 태그 안에 ng-controller 에서 할당해준 컨트롤러의 이름과 동일한
 * 자바스크립트 함수가 자동으로 매칭된다.
 * ng-controller에서 호출할 때는 scope 파라메터를 따로 넣지 않았지만,
 * 실제 컨트롤러 함수에서는 아래와 같이 $scope 를 파라메터로 받는다.
 * 백그라운드 통신을 위해 $http를 파라메터로 추가해준다.
 */

angular.module('basePoint', []).config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/phones', {
		templateUrl : "phone-list.html",
		controller	: PhoneListController
	}).
	when('/phones/:phoneId',{
		templateUrl : "phone-detail.html",
		controller	: PhoneDetailController
	}).
	otherwise({
		redirectTo:'/phones'
	});
}]);

function PhoneDetailController($scope, $routeParams){
	$scope.phoneId = $routeParams.phoneId;
}

function PhoneListController($scope, $http)
{
  //jQuery의 ajax 통신과 거의 유사하다.
	$http.get('sample/sample.json').success(
	function(data)
	{
		$scope.phones = data;
	});
	 
	//기본값을 미리 번호로 정해주었다.
	//기본값을 정하지 않아도 되지만, 그럴경우 선언된 순서대로 표시된다.
	$scope.orderProperty = "no";
	 
	//이렇게 선언된 배열 형태의 데이터 모델은 후에 NG-REPEAT에 의해 사용된다.
}