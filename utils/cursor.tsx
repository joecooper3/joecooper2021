const rAF = () => {
  const state = {
    listener: (ts?: number) => {},
    animationFrameId: null,
  };

  const stop = () => {
    cancelAnimationFrame(state.animationFrameId);
  };
  const loop = (timeStamp?: number) => {
    state.listener(timeStamp);
    state.animationFrameId = requestAnimationFrame((timeStamp) => {
      loop(timeStamp);
    });
  };
  const start = (listener) => {
    state.listener = listener;
    loop(Date.now());
    return { stop };
  };
  return { start };
};

const scan = (reducer, init) => {
  const state = {
    accumulator: init,
    reducer: reducer,
    listener: (acc?: number) => {},
  };

  const next = (v) => {
    state.accumulator = state.reducer(state.accumulator, v);
    state.listener(state.accumulator);
  };

  const start = (listener) => {
    state.listener = listener;
    return { next };
  };

  return { start };
};

const lerp = (accum, target, roundness) => {
  return (1 - roundness) * accum + roundness * target;
};

const pointLerp = (roundness) => (accum, target) => {
  return {
    x: lerp(accum.x, target.x, roundness),
    y: lerp(accum.y, target.y, roundness),
  };
};

const smooth = (init, { roundness = 0.1 } = {}) => {
  const state = {
    scan: null,
    loop: null,
    target: init,
  };

  const update = (v) => {
    state.target = v;
  };

  const stop = () => {
    state.loop.stop();
  };

  const start = (listener) => {
    state.scan = scan(pointLerp(roundness), init).start(listener);
    state.loop = rAF().start(() => {
      state.scan.next(state.target);
    });

    return { update, stop };
  };

  return { start };
};

export { rAF, smooth };
