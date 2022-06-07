import { promises } from "fs";
import { join, dirname, isAbsolute } from "path";

export class FileSevice {
  private async isExist(path: string) {
    try {
      await promises.stat(path);
      return true;
    } catch {
      return false;
    }
  }
  private gerFilePath(path: string, name: string, ext: string): string {
    if (!isAbsolute(path)) {
      path = join(__dirname + '/' + path);
    }
    return join(dirname(path) + '/' + name + '.' + ext);
  };

  async deleteFileIfExists(path: string) {
    if (await this.isExist(path)) {
      promises.unlink(path);
    }
  };
}