export const isValidDate = (date: any) => {
  return (
    date &&
    Object.prototype.toString.call(date) === '[object Date]' &&
    !isNaN(date)
  );
};

export const colorSelection = (state: any) => {
  switch (state) {
    case 'danger':
      return 'bg-red-500';
    case 'warning':
      return 'bg-yellow-400';
    case 'normal':
      return 'bg-green-500';
    default:
      return 'bg-slate-200';
  }
};


