

myFunction = function() {
    debugger;
        var templateParams = {
            from_name: document.getElementById("form_username").value,
            from_email:document.getElementById("form_useremail").value,
            subject:document.getElementById("form_subject").value,
            message:document.getElementById("form_message").value
        };
        // generate a five digit number for the contact_number variable
        emailjs.send('service_gwjg8cu','template_60a89ne', templateParams, 'user_5xiy2uGpLjvEgbmCf37ms')
            .then(function() {
                console.log('SUCCESS!!');
                document.getElementById("contact-form").reset();
                document.location.reload();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById("contact-form").reset();
                document.location.reload();
            });
}

