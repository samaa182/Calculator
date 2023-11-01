//show numbers in inputs
function val(result){
    form.show.value = form.show.value + result;
}
// calculatio
function calc(){
    if( form.show.value === ""){
        alert("Please Enter Your Numbers");
    }
    else{
        form.show.value = eval(form.show.value);
    }
}
// clear numbers in input by douple click on =
var btn = form.veql;
btn.addEventListener('dblclick', function(){
    form.show.value = "";
})
