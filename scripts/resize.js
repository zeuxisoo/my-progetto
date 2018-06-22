const fs = require("fs");
const path = require("path");
const sharp = require('sharp');

//
const base_directory   = path.dirname(__dirname);
const source_directory = `${base_directory}/src`;
const data_directory   = `${source_directory}/assets/data`;
const works_directory  = `${data_directory}/works`;

//
function isDirectory(file) {
    return fs.lstatSync(file).isDirectory();
}

async function resize(file, width, to_file) {
    try {
        console.log(`B: ${file}`);

        await sharp(fs.readFileSync(file)).resize(width, null).toFile(to_file);
    }catch(e) {
        console.log(`[ERROR] file: ${file}, message: ${e}`);
    }
}

async function thumb(file, width, crop_width, crop_height, to_file) {
    try {
        console.log(`T: ${to_file}`);

        await sharp(fs.readFileSync(file)).resize(width, null).extract({ left: 0, top: 0, width: crop_width, height: crop_height }).toFile(to_file);
    }catch(e) {
        console.log(`[Error] file: ${file}, message: ${e}`);
    }
}

//
fs.readdirSync(works_directory).filter(work_directory => {
    return isDirectory(works_directory + "/" + work_directory);
}).map(work_directory => {
    return works_directory + "/" + work_directory;
}).map(full_work_directory => {
    return fs.readdirSync(full_work_directory).filter(file => {
        return /\.(png|jpg|jpeg|gif)$/.test(file) === true && /^thumb_/.test(file) === false;
    }).map(image_file => {
        return full_work_directory + "/" + image_file;
    }).map(full_image_file => {
        console.log("\n===>");

        const full_thumb_file = full_image_file.replace(/\/([a-zA-Z0-9]+)\.png/, '/thumb_$1.png');

        // Resize original image file to 780xAutoHeight
        resize(full_image_file, 780, full_image_file);

        // Resize original image file to 300xAutoHeight and then crop/extract to 300x150
        thumb(full_image_file, 300, 300, 150, full_thumb_file);
    })
});
