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

<div id="main-content" class="main-content" ng-controller="mainBodyControl" ng-init="init()">


	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
		<div id="map" >
			<iframe style="margin: 0; padding: 0;" src="https://mapsengine.google.com/map/embed?mid=z1eO2PL6en0Y.k1glAy2owPTg" height="500" width="100%" frameborder="0"></iframe>
		</div>
		 

		<div class="isotopeX">
			
			<!-- <img ng-src="{{ post.attachments[1].url }}"/> -->
			
			<div  ng-repeat="post in posts" ng-class='{huge:$first}' class="item element-item col-xs-12 col-sm-6 col-md-6 col-lg-4  {{post.tags[0].slug}}">
			  <div class=" inner" ng-mouseover="postHover()">
			  	  <!-- <h3>{{post.title_plain}}</h3> -->
				  <a href="{{post.url}}" ><div class="post-img" style="background:url('{{ post.attachments[0].images.full.url }}') center"></div><!-- <img ng-src="{{ post.attachments[0].images.full.url }}"/> --></a>
				  
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

<script src="<?php echo get_template_directory_uri(); ?>/js/isotope.pkgd.min.js"></script>	
<script src="<?php echo get_template_directory_uri(); ?>/js/controller.js"></script>


<?php
get_sidebar();
get_footer();
