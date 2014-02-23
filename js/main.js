$(document).ready(function() {
	$('#fb-login').click(function() {
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				FB.logout(function(response){});
				$('#fb-login').html('Login with Facebook');
			}
			else {
				FB.login(function response()
					{}, {scope: ''});
				$('#fb-login').html('Logout');
			}
		});
	});
});