import { Frame } from './frame';

export class ScoreCalculator {
  #frames: Frame[] = [];

  public get frames(): Frame[] {
    return this.#frames;
  }

  public get score(): number {
    return this.frames.map((frame) => frame.score).reduce((sum, score) => sum + score, 0);
  }

  public push(frame: Frame): this {
    const previousFrame = this.#frames[this.#frames.length - 1];

    this.#frames = [...this.#frames, frame];

    if (previousFrame) {
      frame.previousFrame = previousFrame;
      previousFrame.nextFrame = frame;

      if (previousFrame.firstPitch === 10) {
        // Strike
        previousFrame.score += frame.score;

        const doublePreviousFrame = previousFrame.previousFrame;

        if (doublePreviousFrame) {
          // Double Strike
          if (doublePreviousFrame.firstPitch === 10) {
            doublePreviousFrame.score += frame.firstPitch;
          }
        }
      } else if (previousFrame.secondPitch > 0) {
        // Spare
        previousFrame.score += frame.firstPitch;
      }
    }

    return this;
  }
}
