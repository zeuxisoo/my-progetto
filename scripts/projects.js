const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

//
const data_directory  = path.dirname(__dirname) + "/src/assets/data";
const works_directory = data_directory + "/works";

//
function isDirectory(file) {
    return fs.lstatSync(file).isDirectory();
}

//
let works = [];

fs.readdirSync(works_directory).filter(work_directory => {
    return isDirectory(works_directory + "/" + work_directory);
}).forEach(work_directory => {
    const work_folder = works_directory + "/" + work_directory;
    const info_path   = work_folder + "/info.yaml";
    const info_item   = yaml.safeLoad(fs.readFileSync(info_path), "UTF-8");

    let photo = {
        larges: [],
        thumbs: [],
    };

    fs.readdirSync(work_folder).filter(file => {
        return file !== "info.yaml" && file !== ".DS_Store";
    }).forEach(file => {
        if (/^thumb_/.test(file) === true) {
            photo.thumbs.push(file);
        }else{
            photo.larges.push(file);
        }
    });

    works.push({
        "id": work_directory,
        "title": info_item.site,
        "description": info_item.description,
        "link": info_item.link,
        "photo": photo
    });
});

fs.writeFileSync(
    data_directory + "/projects.json",
    JSON.stringify(works, null, 4)
);
