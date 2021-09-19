import { Frame } from './frame.abstract';

export class CurrentFrameScoringFrame extends Frame {
  public setScore(): this {
    this._score = this._pitches.reduce((sum: number, score) => sum + (score ?? 0), 0);

    if (this.firstPitch === 10) {
      this._score = 30;
    } else if (this.score === 10 && this.secondPitch > 0) {
      this._score += this.firstPitch;
    }

    this.setAccumulateScore();

    return this;
  }
}
