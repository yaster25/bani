$(document).ready(function(){   
    
    $('.y-tooltip').tooltipster({
        theme: 'tooltipster-shadow',
        side:'bottom'
    });
    
    $('.y-sort-select__title').click(function(){        
        if($(this).parents('.y-sort-select').hasClass('active')){
            $(this).next('.y-sort-select__content').fadeToggle(0);
            $(this).parents('.y-sort-select').toggleClass('active');
        }else{
            $('.y-sort-select').removeClass('active');
            $('.y-sort-select__content').fadeOut(0);            
            $(this).next('.y-sort-select__content').fadeIn(100);
            $(this).parents('.y-sort-select').addClass('active');            
        }
        return false;
    })
    
    $('.y-sort-select__content a').click(function(){
        $(this).parents('.y-sort-select__content').find('.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.y-sort-select').find('.y-sort-select__title span').text($(this).text());
        $(this).parents('.y-sort-select__content').fadeOut(0);
        $(this).parents('.y-sort-select').removeClass('active');
        return false;
    })
    
    
    $('.y-filter__title').click(function(){ 
        $(this).next('.y-filter__content').fadeToggle(100);
        $(this).parents('.y-filter').toggleClass('active');       
        return false;
    })
    
     $(document).bind("click touchstart",function(event) {      
        if ($(event.target).closest(".y-filter").length) return;
        $('.y-filter__content').fadeOut(100);
        $('.y-filter').removeClass('active');       
        event.stopPropagation(); 
     });  
    
    $('.js-popup-order').fancybox({
        touch: false,
                    closeExisting: true,
                    autoFocus: false,
                    btnTpl: {    

                        smallBtn:
                          '<button type="button" data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}">' +
                          '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.18.069c.312.115.696.53.78.845.077.282.041.612-.094.884-.05.1-1.669 1.762-3.597 3.693l-3.506 3.511 3.505 3.512c1.929 1.931 3.549 3.596 3.6 3.698.237.474.144 1.024-.24 1.417-.375.384-.941.48-1.423.24-.1-.05-1.762-1.67-3.694-3.597l-3.512-3.506-3.513 3.506C3.555 16.2 1.89 17.82 1.787 17.87c-.474.236-1.023.143-1.416-.24a1.215 1.215 0 0 1-.24-1.424c.05-.1 1.669-1.762 3.597-3.693l3.507-3.511L3.728 5.49C1.8 3.56.183 1.901.135 1.804A1.21 1.21 0 0 1 .407.344c.402-.37.906-.446 1.385-.207.1.05 1.763 1.668 3.694 3.597L9 7.239l3.512-3.505c1.932-1.929 3.598-3.55 3.703-3.602.274-.136.692-.164.965-.063Z"/></svg>' +
                          "</button>"
                      },
    });
    
});
