import { ScoreManager } from './score-manager.abstract';
import { CurrentFrameScoringFrame } from '../frame';

export class CurrentFrameScoreManager extends ScoreManager<CurrentFrameScoringFrame> {
  public push(frame: CurrentFrameScoringFrame): this {
    const previousFrame = this._frames[this._frames.length - 1];

    frame.previousFrame = previousFrame;

    this._frames.push(frame);
    this.setScores();

    return this;
  }

  public pop(): CurrentFrameScoringFrame | undefined {
    const frame = this._frames.pop();

    this.setScores();

    return frame;
  }
}
