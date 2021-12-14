

filePath='./videos.json';
var data=[];

jQuery(getvideos());



function getvideos(){
    debugger;
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

