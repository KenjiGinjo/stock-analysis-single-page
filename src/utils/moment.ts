export const dateFormat = (timestamp: number | Date, f: string) => {
  if (timestamp.toString().length === 10 && typeof timestamp === "number") {
    timestamp = timestamp * 1000;
  }
  const t = new Date(timestamp);
  f = f || "Y-m-d h:i:s";
  const year = t.getFullYear();
  const month = t.getMonth() + 1;
  const day = t.getDate();
  const hours = t.getHours();
  const minutes = t.getMinutes();
  const seconds = t.getSeconds();
  const hash: { [key: string]: number } = {
    y: year,
    m: month,
    d: day,
    h: hours,
    i: minutes,
    s: seconds,
  };
  const isAddZero = (o: string) => {
    return /M|D|H|I|S/.test(o);
  };
  return f.replace(/\w/g, (o): string => {
    const rt = hash[o.toLocaleLowerCase()];
    return rt >= 10 || !isAddZero(o) ? `${rt}` : `0${rt}`;
  });
};
