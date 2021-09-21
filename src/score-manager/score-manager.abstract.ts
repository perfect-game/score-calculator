import { Frame } from '../frame';

export abstract class ScoreManager<TFrame extends Frame> {
  protected _frames: TFrame[] = [];

  public get frames(): TFrame[] {
    return this._frames;
  }

  public get totalScore(): number {
    return this._frames.map((frame) => frame.score).reduce((sum, score) => sum + score);
  }

  public get lastFrame(): TFrame | undefined {
    return this._frames[this._frames.length - 1];
  }

  public abstract push(frame: TFrame): this;
  public abstract pop(): TFrame | undefined;

  protected setScores(): void {
    this._frames.forEach((frame) => frame.setScore());
  }
}
