const _ = {};
_.reduce = (l, f, a) => {
  if (l.length === 0) return a;
  if (l.length === 1) return f(...l, a);
  return _.reduce(l.slice(1), f, f(l[0], a));
};

document.write(_.reduce([1, 2, 3, 4], (e, a) => e * a, 1));
