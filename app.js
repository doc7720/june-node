const fs = require('fs/promises');
const path = require('path');


const sort = async (readFolder, writeFolder, gender) => {
    try {
        const pathFolder = path.join(__dirname, readFolder);
        const files = await fs.readdir(pathFolder);

        for (const file of files) {
            const pathFile = path.join(pathFolder, file);
            const data = await fs.readFile(pathFile);
            const user = JSON.parse(data);

            if (user.gender === gender) {
                await fs.rename(pathFile, path.join(__dirname, writeFolder, file));
            }
        }
    } catch (e) {
        console.log(e);
    }
}

sort('boys', 'girls', 'female');
sort('girls', 'boys', 'male');

