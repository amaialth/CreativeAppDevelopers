

filePath='./videos.json';
var data=[];

jQuery(getvideos());



function getvideos(){
   var technicalblogs = document.getElementById("technicalblogs");
    $.getJSON( "../videos.json", function( data ) {
        $.each( data, function(key,val) {
            technicalblogs.insertAdjacentHTML( 'beforeend',"<div class='row faq-item d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100'><div class='col-lg-5'><i class='bx bx-help-circle'></i><a href='"+val["url"]+"'<h4>" +  
            val["title"] + "</h4></a></div><div class='col-lg-7'><p> " + val["desc"]+ " </p></div></div></div>");
});
        });
    //var blogdata=JSON.parse(data);
    //Console.log( blogdata);
    
    
        
    //var data = JSON.parse(fs.readFileSync(filePath));    
    
    
}

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
                console.log('SUCCESS!');
                document.getElementById("contact").reset();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById("contact").reset();
            });
}

