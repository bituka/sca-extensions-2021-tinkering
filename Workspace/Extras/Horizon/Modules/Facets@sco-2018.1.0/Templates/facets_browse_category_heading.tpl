{{!--  Edited for Horizon  --}}

{{#if banner}}
    <div class="category-pusher"></div>
    <div class="facets-browse-category-heading-main-image" style="background-image: url('{{resizeImage banner 'categorybanner'}}');"></div>
{{/if}}
{{#if description}}
<section class="facets-browse-category-heading-list-header">
	<div class="facets-browse-category-heading-main-description">
		<h1>{{pageheading}}</h1>
		<p>{{{description}}}</p>
	</div>
</section>
{{/if}}

{{!----
Use the following context variables when customizing this template:

	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}}
