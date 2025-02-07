function hpp_get_doc_long(){
var ajax = ajaxObject();
ajax.open( "get" , '/hpp/admin/api/getlist', true );
ajax.setRequestHeader( "Content-Type" , "text/plain" );
ajax.onreadystatechange = function () {
if( ajax.readyState == 4 ) {
    if( ajax.status == 200 ) {
		document.getElementById("document_all").innerHTML=JSON.parse(ajax.responseText).length
        //console.log(JSON.parse(ajax.responseText).length)    
    }
    else {
        document.getElementById("document_all").innerHTML="Failed to fetch"
			}
        }
    }
    ajax.send();
}
function hpp_get_img_long(){
var ajax = ajaxObject();
ajax.open( "get" , '/hpp/admin/api/getimglist', true );
ajax.setRequestHeader( "Content-Type" , "text/plain" );
ajax.onreadystatechange = function () {
if( ajax.readyState == 4 ) {
    if( ajax.status == 200 ) {
		document.getElementById("img_all").innerHTML=JSON.parse(ajax.responseText).length
        //console.log(JSON.parse(ajax.responseText).length)    
    }
    else {
        document.getElementById("document_all").innerHTML="Failed to retrieve"
			}
        }
    }
    ajax.send();
}


function checkUpdate(){
swal({title: "\nChecking for updates...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
var ajax = ajaxObject();
    ajax.open( "post" , '/hpp/admin/api/checkupdate' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close();
            if( ajax.status == 200 ) {
                eval(ajax.responseText);
            }
            else {
                sweetAlert("Oops", "Failed to check for updates!", "error");
            }
        }
    }
    ajax.send(new Date().getTime());
}

hpp_get_doc_long();
hpp_get_img_long()
