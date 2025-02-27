const fs = require('fs').promises;

async function readFileAndProcess() {
    try {
        return await fs.readFile("hideout_items_list", "utf8");
    } catch (err) {
        console.error("FILE NOT FOUND", err);
    }
}

async function main()
{

    let file_data = await readFileAndProcess();
    // console.log(file_data);


    
    const pattern = /([^﻿].+)\r\n/g;
    let matches = [... file_data.matchAll(pattern)];
    
    matches.forEach(match => {
        console.log(match[1]);
    })
    
}

main();

