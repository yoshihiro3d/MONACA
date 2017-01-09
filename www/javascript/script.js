

$(document).ready(function() {
    $("#addBtn").click(function(){
            $("#list2").append($('<li><div class="input-group"><input class="form-control"value="'+$("#list2 li").length+'"/><div class="input-group-btn"><button class="delbtn btn btn-danger">削除</button></div></div></li>'))
    });
    $("#list2").on("click",".delbtn", function(){
        $(this).parents('li').remove();
    })
});

//$("plusbutton").on("click",$("ons-list").append(<ons-list-item>))

