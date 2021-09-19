import { ScoreManager } from './score-manager.abstract';
import { CurrentFrameScoringFrame } from '../frame';

export class CurrentFrameScoreManager extends ScoreManager {
  protected _frames: CurrentFrameScoringFrame[] = [];

  public push(frame: CurrentFrameScoringFrame): this {
    const previousFrame = this._frames[this._frames.length - 1];

    frame.previousFrame = previousFrame;

    return super.push(frame);
  }
}
