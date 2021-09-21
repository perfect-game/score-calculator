import { ScoreManager } from './score-manager.abstract';
import { TraditionalScoringFrame } from '../frame';

export class TraditionalScoreManager extends ScoreManager<TraditionalScoringFrame> {
  public push(frame: TraditionalScoringFrame): this {
    const previousFrame = this._frames[this._frames.length - 1];

    if (previousFrame) {
      previousFrame.nextFrame = frame;
      frame.previousFrame = previousFrame;
    }

    this._frames.push(frame);
    this.setScores();

    return this;
  }
}
