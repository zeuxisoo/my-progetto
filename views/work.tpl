%include header.tpl title = title
<div class="works">
	<div class="bar clear-fix">
		<ul class="clear-fix">
			<li class="back-page head">&lsaquo;&lsaquo; Back</li>
			%if info['site'] is not None:
				%if info['link'] is not None:
					<li><a href="{{info['link']}}" target="_blank">{{info['site']}}</a></li>
				%else:
					<li>{{info['site']}}</li>
			%end
		</ul>
	</div>
	<ul class="clear-fix works-list">
	%for image in images:
		<li>
			<a href="/static/works/{{id}}/{{image}}" rel="group">
				<img src="/static/works/{{id}}/thumb_{{image}}" alt="preview-{{id}}" />
			</a>
		</li>
	%end
	</ul>
</div>
%include footer.tpl