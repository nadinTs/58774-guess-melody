import assert from 'assert';
import {setAnswer, setLives, data, setSeconds, setMinutes, setStatisticAnswer, setStatisticTime} from './data';
import {statistics} from './statistic';

describe(`game`, () => {
  describe(`StatisticAnswer`, () => {
    it(`should update answer in statistic`, () => {
      assert(1, setStatisticAnswer(statistics.answers, 1).answer);
    });
    it(`should't allow set negative answers`, () => {
      setStatisticAnswer(statistics.answers, 1);
    });
  });
  describe(`StatisticTime`, () => {
    it(`should update answer in statistic`, () => {
      assert(1, setStatisticTime(statistics.time, 1).answer);
    });
    it(`should't allow set negative answers`, () => {
      setStatisticTime(statistics.time, 1);
    });
  });
  describe(`seconds`, () => {
    it(`should update seconds`, () => {
      assert(1, setSeconds(data.result, 1).seconds);
    });
    it(`should't allow set negative seconds`, () => {
      setSeconds(data.result.seconds, 1);
    });
    it(`should have 0 minutes on start`, () => {
      assert.equal(data.result.seconds, 0);
    });
  });
  describe(`minutes`, () => {
    it(`should update minutes`, () => {
      assert(1, setMinutes(data.result, 1).minute);
    });
    it(`should't allow set negative minutes`, () => {
      setMinutes(data.result.minute, 1);
    });
    it(`should have 2 minutes on start`, () => {
      assert.equal(data.result.minute, 2);
    });
  });
  describe(`answer`, () => {
    it(`should update answer`, () => {
      assert(1, setAnswer(data.result, 1).answer);
    });
    it(`should't allow set negative answers`, () => {
      setAnswer(data.result.answer, 1);
    });
    it(`should have 4 answer on start`, () => {
      assert.equal(data.result.answer, 4);
    });
  });
  describe(`lives`, () => {
    it(`should update lives`, () => {
      assert(1, setLives(data.result, 1).lives);
    });
    it(`should't allow set negative lives`, () => {
      setLives(data.result.lives, 1);
    });
    it(`should have 3 lives on start`, () => {
      assert.equal(data.result.lives, 3);
    });
  });
});
