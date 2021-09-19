import { Frame } from '../frame';

export abstract class ScoreManager {
  public get totalScore(): number {
    return this._frames.map((frame) => frame.score).reduce((sum, score) => sum + score);
  }

  protected _frames: Frame[] = [];

  public get frames(): Frame[] {
    return this._frames;
  }

  public push(frame: Frame): this {
    this._frames.push(frame);

    return this;
  }
}
