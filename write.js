
import fs from 'fs';

export const writeFile = (filename, content) => {
    fs.writeFileSync(filename, content);
}
