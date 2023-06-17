export type RowItem = {
  [key: string]: any;
  state?: string;
};
export type CustomTableProps = {
  items: Array<RowItem>;
  cols: Array<string>;
};

export type CustomTableRowProps = {
  row: RowItem;
};
export type ColorScheme = {
  [key in string]: string;
};
