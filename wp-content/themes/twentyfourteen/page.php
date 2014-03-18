<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

<div id="main-content" class="main-content" ng-controller="mainBodyControl">


	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
		 

		<div >
			
			<!-- <img ng-src="{{ post.attachments[1].url }}"/> -->
			
			<div id="container" ng-repeat="post in posts" class="kindling {{x.class}}">
			  <div class="item">
			  	  test:{{post.title_plain}}
				  <img ng-src="{{ post.attachments[0].images.full.url }}"/>
			  </div>
			</div>
			</div>
		

			<?php
				// Start the Loop.
				while ( have_posts() ) : the_post();

					// Include the page content template.
					get_template_part( 'content', 'page' );

					// If comments are open or we have at least one comment, load up the comment template.
					/*
					if ( comments_open() || get_comments_number() ) {
											comments_template();
										}
					*/
				endwhile;
			?>
			<?php
			if ( is_front_page() && twentyfourteen_has_featured_posts() ) {
				// Include the featured content template.
				get_template_part( 'featured-content' );
			}
			?>

		</div><!-- #content -->
	</div><!-- #primary -->
	
	<?php get_sidebar( 'content' ); ?>
</div><!-- #main-content -->
<script src="<?php echo get_template_directory_uri(); ?>/js/angular.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.isotope.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/angular-isotope.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/controller.js"></script>


<?php
get_sidebar();
get_footer();
