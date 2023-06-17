import { Dispatch, SetStateAction } from "react";

export type RowItem = {
  [key: string]: any;
  state?: string;
};
export type CustomTableProps = {
  items: Array<RowItem>;
  cols: Array<string>;
  pageSize?: number;
};

export type CustomTableRowProps = {
  row: RowItem;
};
export type ColorScheme = {
  [key in string]: string;
};

export type PaginationProps = {
  page: number,
  pages: number,
  onChange:Dispatch<SetStateAction<number>>
}
