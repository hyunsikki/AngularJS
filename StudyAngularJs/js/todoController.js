/**
 * 
 */
function todoController($scope, $http)
{
	$http.get('sample/todo.json').success(function(data)
	{
		$scope.todos = data;
	});

	$scope.addTodo = function()
	{
		if ($scope.newTodo)
		{
			$scope.todos.push(
			{
				"checked" : "",
				"work" : $scope.newTodo
			});
			
			$scope.newTodo = null;
		}
		else
		{
			alert('할일을 입력해주세요!');
		}
	};
	
	$scope.submitStatus = true; 
}