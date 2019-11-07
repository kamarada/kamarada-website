function random_number(first, last) {
    return Math.floor((Math.random() * (last - first + 1))) + first;
}

$(document).ready(function(){
    $('body').bootstrapMaterialDesign();

    $('#fab').click(function(){
        var enterDesignMode = ($('#fab button i').text() == "visibility");
        $('#fab button i').text(enterDesignMode ? "edit" : "visibility");
        document.designMode = enterDesignMode ? "on" : "off";
    });
});

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyToClipboard(inputTextId, tooltipId = "") {
    var copyText = document.getElementById(inputTextId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    if (tooltipId != "") {
        $('#' + tooltipId).tooltip('show');
        setTimeout(function() { $('#' + tooltipId).tooltip('hide'); }, 3000);
    }
}
