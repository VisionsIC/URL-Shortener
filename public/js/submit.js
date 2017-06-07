// JQuery to engage the SUBMIT button and POST the entered url to be shortened
// by the API.
// ---------------------------------------------------------------------------------------------------------------------
// Start by building out an anonymous function to house other necessary control functionality.
$(function(){
    // This is the function to control the click event of the "submit" button.
    $('#submit').click(function(){
        // Create a "normalUrl" variable to gain control of the "normal-url" input field.
       const url = $('#url').val();
       // Use the JQuery POST to insert the "normalUrl" variable into an anonymous function to be
        // converted by Node, Express, and Body-Parser.
        $.post('/api/v1/post', {
         url: url
        }, function (data) {
        $('#short-url').html("Shortened Url: " + '<a id="url-link" href=' + data + '"/">' +
                window.location.href + data + '</a>');
        })
   })
});