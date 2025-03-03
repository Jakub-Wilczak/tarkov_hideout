const fs = require('fs').promises;

async function readFileAndProcess() {
    try {
        return await fs.readFile("hideout_items_list", "utf8");
    } catch (err) {
        console.error("FILE NOT FOUND", err);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




async function main()
{


    // really ugly way of importing this module... I need to fix in in later git commits
    const { request, gql } = await import('graphql-request');


    let file_data = await readFileAndProcess();
    // console.log(file_data);


    
    const pattern = /([^﻿].+)\r\n/g;
    let matches = [... file_data.matchAll(pattern)];

    // In the future it will be in other file that will be executed at the start of the server and every week (Monday Morning (tbd)).
    for (const match of matches) {
        console.log(match[1])
            const query = gql`
query getItem($name: String!){
    items(name: $name) {
        id
        name
        iconLink
        width
        height
    }
}
`
            let variables = {name: match[1]}
            request('https://api.tarkov.dev/graphql', query, variables).then((data) => console.log(data))
        //data here will be inserted to database.
        await sleep(200);

    }

}

main();

