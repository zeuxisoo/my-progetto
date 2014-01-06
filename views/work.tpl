%include header.tpl config = config
<div class="container">
    %if info['site'] is not None:
        %if info['link'] is not None:
            <h3><a href="">{{info['site']}}</a></h3>
        %else:
            <h3>{{info['site']}}</h3>
    %end
    <div class="row">
        %for image in images:
            <div class="col-xs-6 col-md-3">
                <a href="/static/works/{{id}}/{{image}}" class="thumbnail fancybox" rel="group">
                    <img src="/static/works/{{id}}/thumb_{{image}}" alt="{{info['site']}}-{{id}}" />
                </a>
            </div>
        %end
    </div>
</div>
%include footer.tpl config = config
