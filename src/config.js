
var ctJson = "/hpp/admin/api/get_config"
        $.getJSON(ctJson, function (data) {
		document.getElementById("tbody_config").innerHTML="";
            $.each(data, function (index, value) {
                $("#tbody_config").append(`
				<tr>
                          <td>
                           ${index}
                          <\/td>
                          <td>
                            ${value}
                          <\/td><td><a href="javascript:edit_config('${index}')">Edit<\/td><td><a href="javascript:del_config('${index}')">Delete<\/td>
                `);
            });document.getElementById("tbody_config").innerHTML+=`<tr><a href="javascript:hpp_add_config()">Add a new item<\/a> <td> <\/td> <td> <\/td><td><\/td>`});
function edit_config(index){
			swal({
  content: {
    element: "input",
    attributes: {
	  placeholder: "Enter the key value of "+index+""
    },
  },
})
.then((value) => {
if(value!="" & value!=null){
t_body={index:index,value:value}
swal({title: "\nUnder Modification...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
var ajax = ajaxObject();
    ajax.open( "POST" , '/hpp/admin/api/edit_config' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close()
            if( ajax.status == 200 ) {
            swal("Configuration changed!", {
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
		else{
			swal({
				title: "Failed!",
				text: "Configuration modification failed, please check whether you are logged in",
				icon: "warning",
			});
			}
	}
}
ajax.send(JSON.stringify(t_body));
}
else{swal("Configuration modification has been cancelled!","You entered a null value","success")}})};

function hpp_add_config(){
	
swal({
  content: {
    element: "input",
    attributes: {
	  placeholder: "Enter key name"
    },
  },
})
.then((value1) => {

swal({
  content: {
    element: "input",
    attributes: {
	  placeholder: "Enter key value"
    },
  },
})
.then((value2) => {
if(value1!="" & value1!=null & value2!="" & value2!=null){
t_body={index:value1,value:value2}
swal({title: "\nAdding...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
var ajax = ajaxObject();
    ajax.open( "POST" , '/hpp/admin/api/edit_config' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close()
            if( ajax.status == 200 ) {
            swal("Configuration changed!", {
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
else{
swal({
	title: "Failed!",
	text: "Configuration modification failed, please check whether you are logged in",
	icon: "warning",
});
}
}
}
ajax.send(JSON.stringify(t_body));
}
else{swal("Configuration modification has been cancelled!","You entered a null value","success")}})
	
})}




function del_config(index){
swal({title:"Do you really want to delete this key?",text:"I believe your hand slipped",icon:"warning",buttons:["No", "Yes!"],dangerMode: true}).then((value) => {if(value){swal({title:"Do you really want to delete the data?",text:"I'm thinking you don't want to configure it again.",icon:"warning",buttons:["I give up", "I am sure"],dangerMode: true}).then((value) => {if(value){swal({title:"Do you really want to start over?",text:"I don’t think it’s impossible",icon:"warning",buttons:["I'm wilted", "Death is like home"],dangerMode: true}).then((value) => {if(value){var ajax = ajaxObject();swal({title: "\nDeleting...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
    ajax.open( "post" , '/hpp/admin/api/del_config' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close()
            if( ajax.status == 200 ) {
                sweetAlert("Success", "The key value has been deleted!", "success").then((value) => {window.location.reload();}	)	    
            }
            else {
                sweetAlert("Oops", "Failed to delete configuration!", "error");
            }
        }
    }
    ajax.send(index);}else{hpp_no()}})}else{hpp_no()}})}else{hpp_no()}})
function hpp_no(){swal("You give up on destroying data","Your data is safe","success")}


};
