{{! Edited for Summit Theme }}

{{#if extraHome.isReady}}
<div class="home-nopad">

	<!-- CAROUSEL -->
	{{#if extraHome.showCarousel}}
	<!-- Extended Carousel to include slide text and links, overrides standard carousel -->
	<div class="home-slider-container">
		<div class="home-image-slider">
			<ul data-slider id="home-image-slider-list" class="home-image-slider-list">
				{{#each extraHome.carousel}}
					<li class="{{#if text}}caption-on{{/if}} {{#if title}}caption-on{{/if}} {{#if linktext}}caption-on{{/if}}">
						<div class="home-slide-main-container home-slide{{@index}}
						{{#if imageBehaviour}}
															use-image
														{{else}}
															{{#if backgroundCrop}}
																	{{backgroundCrop}}
															{{/if}}
														{{/if}}
														{{#if isAbsoluteUrl}}
															use-image
														{{/if}}"
							{{#if isAbsoluteUrl}}
								style="background-image: url({{image}}) "
							{{else}}
								style="background-image: url({{getThemeAssetsPathWithDefault image 'img/summit-carousel-home-1.jpg'}}) "
							{{/if}}>
							<a{{objectToAtrributes item}} class="home-slide-wrap-link">
	                                <img src="
	                                    {{#if isAbsoluteUrl}}
	                                        {{image}}
	                                    {{else}}
	                                        {{getThemeAssetsPathWithDefault image 'img/summit-carousel-home-1.jpg'}}
	                                    {{/if}}"
	                                    class="home-slide-image {{#if imageMobile}}hide-small{{/if}} {{#if backgroundCrop}}
																					{{backgroundCrop}}
																			{{/if}}" />
																	{{#if imageMobile}}
																		<img src="{{imageMobile}}" class="home-slide-image-mobile" />
																	{{/if}}
																</a>

								<div class="home-slide-caption {{#if captionSide}}{{captionSide}}{{/if}} {{#if text}}caption-display{{/if}} {{#if title}}caption-display{{/if}} {{#if linktext}}caption-display{{/if}} {{#if isAbsoluteUrl}}carousel-center-box{{/if}}">
								 			<div class="home-slide-caption-content {{captionTextAlign}}">

								     			{{#if title}}<h2 class="home-slide-caption-title" style="color:{{captionColor}}">{{title}}</h2>{{/if}}
								     			{{#if text}}<p style="color:{{captionColor}}">{{{text}}}</p>{{/if}}

													{{#if linktext}}
									     			<div class="home-slide-caption-button-container">
									         			<a{{objectToAtrributes item}} class="home-slide-caption-button">{{#if linktext}}{{linktext}}{{else}}{{translate 'Shop now'}}{{/if}} <i class="home-slide-button-icon"></i></a>
									     			</div>
													{{/if}}
								 			</div>
								</div>
						</div>
					</li>
				{{/each}}
			</ul>
		</div>
	</div>
	{{else}}
	<!-- Standard Carousel -->

	<div class="home-slider-container">
		<div class="home-image-slider">
			<ul data-slider data-slider class="home-image-slider-list">
				{{#each carouselImages}}
					<li>
						<div class="home-slide-main-container" style="background-image: url({{this}});">
							<img src="{{this}}" class="home-slide-image" style="display: none;" />
							<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
								<p>Example descriptive text displayed on multiple lines.</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">Shop Now <i class="home-slide-button-icon"></i></a>
								</div>
							</div>
						</div>
					</li>
				{{else}}
					<li>
						<div class="home-slide-main-container" style="background-image: url({{getThemeAssetsPath 'img/summit-carousel-home-1.jpg'}});">
							<img src="{{getThemeAssetsPath 'img/summit-carousel-home-1.jpg'}}" class="home-slide-image" style="display: none;" />
							<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">{{translate 'Free Shipping'}}</h2>
								<p>{{translate 'on all cleaning products. The weekend only. Use code: YEAHBUDDY'}}</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">{{translate 'Shop Now'}} <i class="home-slide-button-icon"></i></a>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="home-slide-main-container" style="background-image: url({{getThemeAssetsPath 'img/summit-carousel-home-2.jpg'}});">
							<img src="{{getThemeAssetsPath 'img/summit-carousel-home-2.jpg'}}" class="home-slide-image" style="display: none;" />
							<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">{{translate 'Quick Turnaround Times'}}</h2>
								<p>{{translate 'from deep groove to angular contact'}}</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">{{translate 'Get the best price'}} <i class="home-slide-button-icon"></i></a>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="home-slide-main-container" style="background-image: url({{getThemeAssetsPath 'img/summit-carousel-home-3.jpg'}});">
							<img src="{{getThemeAssetsPath 'img/summit-carousel-home-3.jpg'}}" class="home-slide-image" style="display: none;" />
							<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">{{translate 'Wiring Solutions'}}</h2>
								<p>{{translate 'including cord grips and ferrules'}}</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">{{translate 'View products'}} <i class="home-slide-button-icon"></i></a>
								</div>
							</div>
						</div>
					</li>
				{{/each}}
			</ul>
		</div>
	</div>
	{{/if}}
</div>
{{/if}}

<div class="home-nopad">
	<div class="home-cms-zone" data-cms-area="home_content_top" data-cms-area-filters="path"></div>

	<!-- CMS MERCHANDISING ZONE -->
	<div class="home-merchandizing-zone">
		<div class="home-merchandizing-zone-content">
			<div data-cms-area="home_merchandizing_zone" data-cms-area-filters="path"></div>
		</div>
	</div>

	<!--
    INFOBLOCKS
    Use the Configuration section under Layout > Infoblocks
	Two infoblocks per row
	-->
	{{#if extraHome.showInfoblocks}}
    <div class="home-infoblock-layout">
        {{#each extraHome.infoblock}}
		<a href="{{href}}" class="home-infoblock-link">
			<div class="home-infoblock home-infoblock{{@index}}" style="{{#if image}}background-image: url({{getThemeAssetsPathWithDefault image}});{{/if}}{{#if color}}background-color: {{color}};{{/if}}">
				<div class="home-infoblock-content">
					{{#if title}}
		            <h2 class="home-infoblock-title">{{title}}</h2>
					{{/if}}
					{{#if text}}
		            <h3 class="home-infoblock-text">{{text}}</h3>
					{{/if}}
		        </div>
			</div>
		</a>
		{{/each}}
	</div>
	{{/if}}

	<div class="home-cms-zone" data-cms-area="home_content_middle" data-cms-area-filters="path"></div>
</div>

<div class="home">
	<!-- FREE TEXT AND IMAGES -->
	<!-- With support if Theme Extension is not used -->
	{{#if extraHome.freeText}}
	<div class="home-page-freetext-wrapper">
		<div class="home-page-freetext">

			<div class="home-page-freetext-content">
		        <div class="home-page-freetext-content-text">
					<div class="home-page-freetext-content-header">
				        <h3>{{#if extraHome.freeTextTitle}}{{extraHome.freeTextTitle}}{{else}}{{translate 'RELIABILITY, QUALITY & POWER'}}{{/if}}</h3>
				    </div>
		        	{{#if extraHome.freeText}}
						<div class="home-page-freetext-text">{{{extraHome.freeText}}}</div>
					{{else}}
						<div class="home-page-freetext-text">
							<p>{{translate 'We Mean Business when it comes to getting you the Products and Customer Service you need... when you need them.'}}</p>
							<p>{{translate "In today's extremely agressive marketplace, all companies face the issues of global competition and the ever increasing costs of operating a business environment. We created a low-overhead business model and an extremely efficient global supply chain that are the envy of our customers. At Summit we provide our customer with high-quality industrial control products at extremely low prices."}}</p>
						</div>
					{{/if}}
		        </div>
				{{#if extraHome.showFreeTextImages}}
		        <div class="home-page-freetext-content-images-wrapper">
					{{#each extraHome.freeTextImages}}
	                <div class="home-page-freetext-content-image"><a href="{{href}}"><img src="{{getThemeAssetsPathWithDefault image}}"></a></div>
					{{/each}}
		        </div>
				{{else}}
				<div class="home-page-freetext-content-images-wrapper">
					<div class="home-page-freetext-content-image"><a href="{{href}}"><img src="{{getThemeAssetsPath 'img/summit-freetextimage.jpg'}}"></a></div>
				</div>
		        {{/if}}
		    </div>

		</div>
	</div>
	{{/if}}
</div>

<div class="home-nopad">
    <div class="home-cms-zone" data-cms-area="home_content_bottom" data-cms-area-filters="path"></div>
</div>


{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
