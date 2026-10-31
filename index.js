toggle_hide('chemical_mc_drop', 'chemical_mc_gallery_img')
toggle_hide('portfolio_mc_drop', 'portfolio_gallery_img')

function toggle_hide(hide_element_id, gallery_img_element_class) {
    const element = document.getElementById(hide_element_id);
    if(element.style.display == 'none') {
        element.style.display = 'inline';
        document.querySelectorAll(`.${gallery_img_element_class}`)
            .forEach(function(img) {
          img.style.width = '50%';
        });
    } else {
        element.style.display = 'none';
        document.querySelectorAll(`.${gallery_img_element_class}`)
            .forEach(function(img) {
          img.style.width = '25%';
        });
    }

}
