%include header config = config
<div class="container">
    <h3>My Works</h3>
    <div class="row">
        %for folder in folders:
            <div class="col-xs-6 col-md-3">
                <a href="/work/{{folder}}" class="thumbnail">
                    <img src="/static/works/{{folder}}/thumb_01.png" alt="project-{{folder}}" />
                </a>
            </div>
        %end
    </div>
</div>
%include footer config = config
