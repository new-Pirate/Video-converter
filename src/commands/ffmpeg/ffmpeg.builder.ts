export class FfmpegBuilder {
  private inputPath: string;
  private outputPath: string;
  private option: Map<string, string> = new Map();

  constructor() {
    this.option.set('-civ', 'libx264');
  }

  input(inputPath: string): this {
    this.inputPath = inputPath;
    return this;
  }

  setVideoSize(width: number, height: number): this {
    this.option.set('-s', `${width}x${height}`);
    return this;
  }

  output(outputPath: string): string[] {
    if (!this.inputPath) {
      throw new Error("No parameter input");
    }
    const args: string[] = ['-i', this.inputPath];
    this.option.forEach((value, key) => {
      args.push(key);
      args.push(value);
    });
    args.push(outputPath);
    return args;
  }
}