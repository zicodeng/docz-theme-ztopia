import path from 'path';
import fs from 'fs-extra';

export default dest => ({
  name: 'clean',
  buildStart() {
    const destDir = path.join(__dirname, dest);
    fs.removeSync(destDir);
  },
});
