// $(document).ready(alert("heyyyy"));

// update
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})

// delete
$('ul').on('click', "span", function(){
    $(this).parent().remove();
});

// create
$("input").keypress(function(event){
    if(event.which === 13 && $(this.val().trim())){
        let listItem = $(this).val(); // gets a value
        $("ul").append(
            `<li>${listItem}<span><i class="fa fa-trash-alt"></i></span></li>`
        )
        $(this).val("") // set value of the input box
    }
})