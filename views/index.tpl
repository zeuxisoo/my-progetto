%include header title = title
<div class="works">
	<ul class="clear-fix works-list">
	%for folder in folders:
		<li>
			<a href="/work/{{folder}}"><img src="/static/works/{{folder}}/thumb_01.png" alt="project-{{folder}}" /></a>
		</li>
	%end
	</ul>
</div>
%include footer