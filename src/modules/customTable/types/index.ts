export type TableItem = {
  [key: string]: any;
  state?: string;
};

export type CustomTableProps = {
  items: Array<TableItem>;
  cols: Array<string>;
};
