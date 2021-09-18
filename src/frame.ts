export class Frame {
  #score: number = 0;

  public get score(): number {
    return this.#score;
  }

  public set score(score: number) {
    this.#score = score;
  }

  #pitches: [number, number, number] = [0, 0, 0];

  public get firstPitch(): number {
    return this.#pitches[0];
  }

  public set firstPitch(score: number) {
    this.setFirstPitch(score);
  }

  public setFirstPitch(score: number): this {
    this.#pitches[0] = score;
    this.#score += score;

    return this;
  }

  public get secondPitch(): number {
    return this.#pitches[1];
  }

  public set secondPitch(score: number) {
    this.setSecondPitch(score);
  }

  public setSecondPitch(score: number): this {
    this.#pitches[1] = score;
    this.#score += score;

    return this;
  }

  public get thirdPitch(): number {
    return this.#pitches[2];
  }

  public set thirdPitch(score: number) {
    this.setThirdPitch(score);
  }

  public setThirdPitch(score: number): this {
    this.#pitches[2] = score;
    this.#score += score;

    return this;
  }

  #frames: (Frame | null)[] = [null, null];

  public get previousFrame(): Frame | null {
    return this.#frames[0];
  }

  public set previousFrame(frame: Frame | null) {
    this.#frames[0] = frame;
  }

  public get nextFrame(): Frame | null {
    return this.#frames[1];
  }

  public set nextFrame(frame: Frame | null) {
    this.#frames[1] = frame;
  }
}
