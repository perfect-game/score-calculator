# score-calculator

[Score Calculator](https://github.com/perfect-game/score-calculator) is a bowling score calculator engine that supports two scoring ways: [Traditional Scoring](https://en.wikipedia.org/wiki/Ten-pin_bowling#Traditional_scoring) and [Current Frame Scoring](https://en.wikipedia.org/wiki/Ten-pin_bowling#World_Bowling_scoring).

## APIs

### TraditionalScoreManager

You can use `TraditionalScoreManager` class with `TranditionalScoringFrame` class.

```typescript
new TraditionalScoreManager()
  .push(new TraditionalScoringFrame().setFirstPitch(10)) // Striked
  .push(new TraditionalScoringFrame().setFirstPitch(5).setSecondPitch(5)) // Spared
  .push(new TraditionalScoringFrame().setFirstPitch(9)) // Opened Frame
  .push(new TraditionalScoringFrame()) // Gutters
  .push(new TraditionalScoringFrame().setFirstPitch(10))
  .push(new TraditionalScoringFrame().setFirstPitch(5).setSecondPitch(5))
  .push(new TraditionalScoringFrame().setFirstPitch(9))
  .push(new TraditionalScoringFrame())
  .push(new TraditionalScoringFrame())
  .push(
    new TranditionalScoringFrame()
      .setFirstPitch(10)
      .setSecondPitch(10)
      .setThirdPitch(10)
  ) // There is a third pitching at tenth frame.
  .totalScore // === 126
```

### CurrentFrameScoreManager

You can use `CurrentFrameScoreManager` class with `CurrentFrameScoringFrame` class.

```typescript
new CurrentFrameScoreManager()
  .push(new CurrentFrameScoringFrame().setFirstPitch(10)) // Striked
  .push(new CurrentFrameScoringFrame().setFirstPitch(5).setSecondPitch(5)) // Spared
  .push(new CurrentFrameScoringFrame().setFirstPitch(9)) // Opened Frame
  .push(new CurrentFrameScoringFrame()) // Gutters
  .push(new CurrentFrameScoringFrame().setFirstPitch(10))
  .push(new CurrentFrameScoringFrame().setFirstPitch(5).setSecondPitch(5))
  .push(new CurrentFrameScoringFrame().setFirstPitch(9))
  .push(new CurrentFrameScoringFrame())
  .push(new CurrentFrameScoringFrame())
  .push(new CurrentFrameScoringFrame().setFirstPitch(10))
  .totalScore // === 138
```
