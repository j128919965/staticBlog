let trs;
$(init);
function init(){
    refresh();
    setAdder();
}
function refresh(){
    trs = $("table").children();
    $(".deleter").unbind().click(function() {
        $(this).parent().remove();
    });
}
function setAdder(){
    $("#adder").click(function () { 
        let size = trs.children().length+1;
        trs.append("<tr><td>"+size+"</td><td>inner text</td><td class=\"deleter\">delete</td></tr>")
        refresh();
    })
}