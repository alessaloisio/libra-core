<?php

function add_css_scripts() {
  wp_enqueue_style('style-name', get_template_directory_uri() . '/assets/css/style.css' );
  wp_enqueue_script('script-name', get_template_directory_uri() . '/assets/js/bundle.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'add_css_scripts' );

?>