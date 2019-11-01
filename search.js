const fs = require('fs');
const basePath = '/docs/';
let documents = [];

fs.readFile('website/sidebars.json', (err, data) => {
    if (err) throw err;
    let sidebars = JSON.parse(data);
    // convert to array
    sidebars = Object.values(sidebars);
});

async function readFile(dir, file){
    return new Promise((resolve,reject) => {
        fs.readFile(`${dir}/${file}`, 'utf8', (err, data) => {
            if (err) throw err;
            // convert to array
            let newfile = data.replace(/(\r\n|\n|\r)/gm,"*");
            newfile = newfile.split('---');
            newfile = newfile[1].split('*')
            let id = newfile[1].split(':')[1].replace(' ','');
            let title = newfile[2].split(':')[1];
            let content = data.split('---')[2].replace(`<div style="text-align: justify">`, '').replace('###', '');
            if(content.length > 100) {
                content = content.substring(0, 100);
            }
            let hierarchies = [null, null, null, null, null, null];
            var regex = /##\s(.*)\s\n/g;
            var matches;
            let idx = 0;
            while (matches = regex.exec(data)) {
                hierarchies[idx] = matches[1];
                idx++;
            }
            let url = `https://partners.qrvey.com/docs/${dir}/${id}`;
            documents.push({
                anchor: id,
                title,
                content,
                url,
                hierarchy: {
                    lvl0: title,
                    lvl1: hierarchies[0],
                    lvl2: hierarchies[1],
                    lvl3: hierarchies[2],
                    lvl4: hierarchies[3],
                    lvl5: hierarchies[4],
                    lvl6: hierarchies[5]
                }
            });
            resolve(data);
        });
    }) 
}

async function getFiles(dir) {

    // get all 'files' in this directory
    var all = fs.readdirSync(dir);

    // process each checking directories and saving files
    return all.map(async file => {
        // am I a directory?
        if (fs.statSync(`${dir}/${file}`).isDirectory()) {
            // recursively scan me for my files
            return getFiles(`${dir}/${file}`);
        }
        const fileDir = `${dir}/${file}`;
        try {
            if(fileDir.search('assets') === -1){
                await readFile(dir, file);
            }
        } catch(error){
            console.error(error);
        }
        // WARNING! I could be something else here!!!
        return `${dir}/${file}`;     // file name (see warning)
    });
}

getFiles('docs');
setTimeout(() => {
    fs.writeFile('search.json', JSON.stringify(documents), 'utf8', (err) => {
        if (err) throw err;
        console.log('json was created');
    })
}, 10000);