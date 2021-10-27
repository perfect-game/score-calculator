import { CurrentFrameScoringFrame } from './current-frame-scoring-frame';

describe('Current Frame Scoring Frame', () => {
  describe('Score', () => {
    describe('Strike', () => {
      const frame = new CurrentFrameScoringFrame();

      test('Get First Pitch Score', () => {
        const frame = new CurrentFrameScoringFrame();

        expect(frame.firstPitch).toBe(0);
      });

      test('Set First Pitch Score', () => {
        frame.setFirstPitch(10);

        expect(frame.firstPitch).toBe(10);
      });

      test('Frame Score', () => {
        expect(frame.score).toBe(30);
      });
    });

    describe('Spare', () => {
      const frame = new CurrentFrameScoringFrame();

      test('Get First Pitch Score', () => {
        const frame = new CurrentFrameScoringFrame();

        expect(frame.firstPitch).toBe(0);
      });

      test('Set First Pitch Score', () => {
        frame.setFirstPitch(5);

        expect(frame.firstPitch).toBe(5);
      });

      test('Get Second Pitch Score', () => {
        const frame = new CurrentFrameScoringFrame();

        expect(frame.secondPitch).toBe(0);
      });

      test('Set Second Pitch Score', () => {
        frame.setSecondPitch(5);

        expect(frame.secondPitch).toBe(5);
      });

      test('Frame Score', () => {
        expect(frame.score).toBe(15);
      });
    });

    describe('Open Frame', () => {
      const frame = new CurrentFrameScoringFrame();

      test('Get First Pitch Score', () => {
        const frame = new CurrentFrameScoringFrame();

        expect(frame.firstPitch).toBe(0);
      });

      test('Set First Pitch Score', () => {
        frame.setFirstPitch(5);

        expect(frame.firstPitch).toBe(5);
      });

      test('Get Second Pitch Score', () => {
        const frame = new CurrentFrameScoringFrame();

        expect(frame.secondPitch).toBe(0);
      });

      test('Set Second Pitch Score', () => {
        frame.setSecondPitch(4);

        expect(frame.secondPitch).toBe(4);
      });

      test('Frame Score', () => {
        expect(frame.score).toBe(9);
      });
    });
  });

  describe('Frame Reference', () => {
    const frame1 = new CurrentFrameScoringFrame().setFirstPitch(10);
    const frame2 = new CurrentFrameScoringFrame().setFirstPitch(10);

    test('Set Previous Frame', () => {
      frame2.previousFrame = frame1;

      expect(frame2.previousFrame).toBe(frame1);
    });
  });
});
