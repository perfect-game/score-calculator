import { Frame } from './frame.abstract';

export class TraditionalScoringFrame extends Frame {
  public get thirdPitch(): number {
    return this._pitches[2] ?? 0;
  }

  public set thirdPitch(score: number) {
    this._pitches[2] = score;
    this.setScore();
  }

  protected _nextFrame?: TraditionalScoringFrame;

  public get nextFrame(): TraditionalScoringFrame | undefined {
    return this._nextFrame;
  }

  public set nextFrame(frame: TraditionalScoringFrame | undefined) {
    this._nextFrame = frame;
    this.setScore();
  }

  public setThirdPitch(score: number): this {
    this.thirdPitch = score;

    return this;
  }

  public setScore(): this {
    super.setScore();

    if (this.nextFrame) {
      if (this.firstPitch === 10) {
        this._score += this.nextFrame.firstPitch + this.nextFrame.secondPitch;

        if (this.nextFrame.firstPitch === 10) {
          if (this.nextFrame.nextFrame) {
            this._score += this.nextFrame.nextFrame.firstPitch;
          }
        }
      } else if (this.score === 10 && this.secondPitch > 0) {
        this._score += this.nextFrame.firstPitch;
      }
    }

    this.setAccumulateScore();

    return this;
  }
}
