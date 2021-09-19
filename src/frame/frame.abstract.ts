export abstract class Frame {
  protected _score: number = 0;

  public get score(): number {
    return this._score;
  }

  protected _accumulateScore: number = 0;

  public get accumulateScore(): number {
    return this._accumulateScore;
  }

  protected _pitches: (number | undefined)[] = [];

  public get firstPitch(): number {
    return this._pitches[0] ?? 0;
  }

  public set firstPitch(score: number) {
    this._pitches[0] = score;
    this.setScore();
  }

  public get secondPitch(): number {
    return this._pitches[1] ?? 0;
  }

  public set secondPitch(score: number) {
    this._pitches[1] = score;
    this.setScore();
  }

  protected _previousFrame?: Frame;

  public get previousFrame(): Frame | undefined {
    return this._previousFrame;
  }

  public set previousFrame(frame: Frame | undefined) {
    this._previousFrame = frame;
    this.setScore();
  }

  public setFirstPitch(score: number): this {
    this.firstPitch = score;

    return this;
  }

  public setSecondPitch(score: number): this {
    this.secondPitch = score;

    return this;
  }

  public abstract setScore(): this;

  protected setAccumulateScore(): void {
    this._accumulateScore = this.score;

    if (this.previousFrame) {
      this._accumulateScore += this.previousFrame.accumulateScore;
    }
  }
}
