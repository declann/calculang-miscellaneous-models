export const a = () => a_in;
export const b = () => b_in;
export const c = () => c_in;

export const t = () => 0.01;

export const i = () => i_in;

export const x = () => {
  if (i() == 0) return 0.1;
  return (
    x({ i_in: i() - 1 }) +
    t() * a() * (y({ i_in: i() - 1 }) - x({ i_in: i() - 1 }))
  );
};

export const y = () => {
  if (i() == 0) return 0;
  return (
    y({ i_in: i() - 1 }) +
    t() *
      (x({ i_in: i() - 1 }) * (b() - z({ i_in: i() - 1 })) -
        y({ i_in: i() - 1 }))
  );
};

export const z = () => {
  if (i() == 0) return 0;
  return (
    z({ i_in: i() - 1 }) +
    t() *
      (x({ i_in: i() - 1 }) * y({ i_in: i() - 1 }) - c() * z({ i_in: i() - 1 }))
  );
};
