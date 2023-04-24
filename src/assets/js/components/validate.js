
function validateForm(){
    //Inititalize the email value
    var params = {
        email_id:document.getElementById("email_id").value
    }
    //Checking is email valid
    if(params.email_id.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){//if valid
        emailjs.send("service_y499w79", "template_pja5zba", params).then(function(res){//send a letter
            alert("Success" + res.status)//show, that the sending was successful
        })
   }
    else{ //if nod valid
        alert("please, enter a valid email")//say for whiting the valid email
    }
}

