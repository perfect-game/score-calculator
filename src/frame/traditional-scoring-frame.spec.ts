import { TraditionalScoringFrame } from './traditional-scoring-frame';

describe('Traditional Scoring Frame', () => {
  describe('Score', () => {
    describe('Two Pitches Frame', () => {
      describe('Strike', () => {
        const frame = new TraditionalScoringFrame();

        test('First Pitch Score', () => {
          frame.setFirstPitch(10);

          expect(frame.firstPitch).toBe(10);
        });

        test('Frame Score', () => {
          expect(frame.score).toBe(10);
        });
      });

      describe('Spare', () => {
        const frame = new TraditionalScoringFrame();

        test('First Pitch Score', () => {
          frame.setFirstPitch(9);

          expect(frame.firstPitch).toBe(9);
        });

        test('Second Pitch Score', () => {
          frame.setSecondPitch(1);

          expect(frame.secondPitch).toBe(1);
        });

        test('Frame Score', () => {
          expect(frame.score).toBe(10);
        });
      });

      describe('Open Frame', () => {
        const frame = new TraditionalScoringFrame();

        test('First Pitch Score', () => {
          frame.setFirstPitch(5);

          expect(frame.firstPitch).toBe(5);
        });

        test('Second Pitch Score', () => {
          frame.setSecondPitch(4);

          expect(frame.secondPitch).toBe(4);
        });

        test('Frame Score', () => {
          expect(frame.score).toBe(9);
        });
      });
    });

    describe('Three Pitches Frame', () => {
      const frame = new TraditionalScoringFrame();

      test('First Pitch Score', () => {
        frame.setFirstPitch(10);

        expect(frame.firstPitch).toBe(10);
      });

      test('Second Pitch Score', () => {
        frame.setSecondPitch(10);

        expect(frame.secondPitch).toBe(10);
      });

      test('Third Pitch Score', () => {
        frame.setThirdPitch(10);

        expect(frame.thirdPitch).toBe(10);
      });

      test('Frame Score', () => {
        expect(frame.score).toBe(30);
      });
    });
  });

  describe('Frame Reference', () => {
    const frame1 = new TraditionalScoringFrame().setFirstPitch(10);
    const frame2 = new TraditionalScoringFrame().setFirstPitch(10);

    test('Set Previous Frame', () => {
      frame2.previousFrame = frame1;

      expect(frame2.previousFrame).toBe(frame1);
    });

    test('Set Next Frame', () => {
      frame1.nextFrame = frame2;

      expect(frame1.nextFrame).toBe(frame2);
    });
  });
});
