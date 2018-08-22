$(function(){
    $(document).delegate('.tab-item li', 'click', function(){
        var target_index = $(this).attr('data-index');
        console.log(target_index);
        if(!target_index) return;
        if($(this).hasClass('active')) return;
        $('.tab-item li').removeClass('active');
        $('.sub-hotel-item').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('.sub-hotel-item[data-index="'+ target_index +'"]').addClass('active');
        $('.tab-content[data-index="'+ target_index +'"]').addClass('active');
    })
});