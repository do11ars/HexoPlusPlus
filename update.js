function hpp_update(){
swal({title: "\nUpdating...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
var ajax = ajaxObject();
    ajax.open( "get" , '/hpp/admin/api/update' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close();
            if( ajax.responseText == "true" ) {
                swal("Update Complete！", {
  icon: "success",
  buttons: {
    yes: "Yes"
  },
})
.then((value) => {
  switch (value) {
    default:
	  window.location.reload();
  }
});
            }
            else {
                sweetAlert("Oops", "Update Failed!", "error");
            }
        }
    }
    ajax.send();
}

if(hpp_ver == 'HexoPlusPlus@1.2.0'){
  swal({
title: "Success",
    text: "No update needed, you're already on the latest version",
    icon: "success",
});
}else{
swal("Update to version 1.2.0 available, do you want to update？", {
  icon: "warning",
  buttons: {
    cancel: "No",
    update: "Yes"
  },
})
.then((value) => {
  switch (value) {
 
    case "update":
      hpp_update();
	  break;
 
    default:
      swal("Update Cancelled",{icon: "warning"});
	  break;
  }
});
}


