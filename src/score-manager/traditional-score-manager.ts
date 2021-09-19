import { ScoreManager } from './score-manager.abstract';
import { TraditionalScoringFrame } from '../frame';

export class TraditionalScoreManager extends ScoreManager {
  protected _frames: TraditionalScoringFrame[] = [];

  public get frames(): TraditionalScoringFrame[] {
    return this._frames;
  }

  public push(frame: TraditionalScoringFrame): this {
    const previousFrame = this.frames[this.frames.length - 1];

    super.push(frame);

    if (previousFrame) {
      previousFrame.nextFrame = frame;
      frame.previousFrame = previousFrame;
    }

    this._frames.forEach((frame) => frame.setScore());

    return this;
  }
}
