toggle_hide('chemical_mc_drop', 'chemical_mc_gallery_img')
toggle_hide('portfolio_mc_drop', 'portfolio_gallery_img')
toggle_hide_video('visualizer_drop', 'visualizer_gallery_video')

function toggle_hide(hide_element_id, gallery_img_element_class) {
    const element = document.getElementById(hide_element_id);
    if(element.style.display == 'none') {
        element.style.display = 'inline';
        document.querySelectorAll(`.${gallery_img_element_class}`)
            .forEach(function(img) {
          img.style.width = '49%';
        });
    } else {
        element.style.display = 'none';
        document.querySelectorAll(`.${gallery_img_element_class}`)
            .forEach(function(img) {
          img.style.width = '24%';
        });
    }

}

function toggle_hide_video(hide_element_id, gallery_video_element_class) {
    const element = document.getElementById(hide_element_id);
    if(element.style.display == 'none') {
        element.style.display = 'inline';
        document.querySelectorAll(`.${gallery_video_element_class}`)
            .forEach(function(video) {
          video.style.width = '49%';
        });
    } else {
        element.style.display = 'none';
        document.querySelectorAll(`.${gallery_video_element_class}`)
            .forEach(function(video) {
          video.style.width = '24%';
        });
    }

}
