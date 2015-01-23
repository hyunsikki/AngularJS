/**
 * 
 */

angular.module('helloWorld.directive', []);

angular.module('helloWorld.filter', []);


angular.module('helloWorld.service', []).
	value('greeter', {
		salutation : 'ddddddddd',
		setSalutation:function(salutation){
			this.salutation = salutation;
		}
	}).
	value('user',{
		name: 'aaaaaaaaaaa',
		setName:function(name){
			this.name=name;
		}
	}).
	value('printHello',{
		print:function(salutation, name){
			return salutation +' '+name +'!';
		}
	});

angular.module('helloWorld',
		['helloWorld.service', 'helloWorld.directive', 'helloWorld.filter']).
		run(function(greeter, user){
			greeter.setSalutation('Hello');
			user.setName('World');
		});


function helloWorldController($scope, greeter, user, printHello){
	$scope.greeting = printHello.print(greeter.salutation, user.name);
}


var app = angular.module('myApp', []);

//myApp 모듈에 컨트롤러를 추가한다.
app.controller( 'AppCtrl', function AppCtrl($scope)
{
	$scope.name = 'Guest'; //name이라는 ng-model에 Guest 라는 값을 넣는다.
});

