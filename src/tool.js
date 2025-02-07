function hpp_artitalk_into_hpptalk(){
var slider = document.createElement("textarea");
slider.id="artitalk";
slider.style="border:0;border-radius:5px;background-color:rgba(241,241,241,.98);width: 355px;height: 100px;padding: 10px;resize: none;"
swal({
      title: "Input the data exported from LeanCloud.",
      content: slider
})
.then((value) => {
talk_re=document.getElementById("artitalk").value
if(talk_re!=""){
talk_re=talk_re.split('\n')
talk=[]
for(var i=0;i<talk_re.length-1;i++){
talk.push(JSON.parse(talk_re[i]))
}
swal({title: "\nImporting...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
var ajax = ajaxObject();
    ajax.open( "post" , '/hpp/admin/api/inputtalk' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close();
            if( ajax.status == 200 ) {
                sweetAlert("Success",  "The message has been imported", "success");
		    
            }
            else {
                sweetAlert("Oops", "The message import failed", "error");
            }
        }
    }
    ajax.send(JSON.stringify(talk));
}else{sweetAlert("Success",  "You have canceled this import", "success");}
})
};

function hpp_del_all(){
swal({title:"Do you really want to destroy?",text:"I believe your hand slipped",icon:"warning",buttons:["No", "Yes!"],dangerMode: true}).then((value) => {if(value){swal({title:"Do you really want to delete the data?",text:"I'm thinking you don't want to configure it again.",icon:"warning",buttons:["I give up", "I'm sure"],dangerMode: true}).then((value) => {if(value){swal({title:"Do you really want to start over?",text:"I don't think it's impossible.",icon:"warning",buttons:["I'm wilted", "Death is like home"],dangerMode: true}).then((value) => {if(value){var ajax = ajaxObject();swal({title: "\nDeleting...",icon: "https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button: false,closeModal: false,});
    ajax.open( "get" , '/hpp/admin/api/del_all' , true );
    ajax.setRequestHeader( "Content-Type" , "text/plain" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {swal.close();
            if( ajax.status == 200 ) {
                window.location.reload();		    
            }
            else {
                sweetAlert("Oops", "Failed to delete configuration!", "error");
            }
        }
    }
    ajax.send();}else{hpp_no()}})}else{hpp_no()}})}else{hpp_no()}})
function hpp_no(){swal("You give up on destroying data","Your data is safe","success")}
}
