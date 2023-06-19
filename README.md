# Тестовое задание
## Для проекта использовалась Node v18.14.1
использование других версий может привести к ошибкам
## Installation
```sh
yarn install
yarn dev
```
Проект запустится на 3000 порту
# Комментарий 
Проект реализован в виде небольшого приложения с главной страницей и возможностью перейти на страницу с 1 задачей и со 2 задачей.
Все условия задач выполнены в полном объёме. Также для таблицы была добавлена проверка на корректность даты и устойчивость к большому количеству столбцов

данные для таблицы находятся в отдельных файлах в соответствующих модулях. 
customTableData для таблицы
сustomFlowData.ts для диаграммы 
 
# Задача 1

Требуется разработать компонент для построения таблицы произвольных объектов.
Через пропсы компонент получает массив объектов и массив имен полей объектов, которые
нужно вывести в соответствующие колонки таблицы:
```code
<CustomTable
items={[ {field1: val1, …}, {field1: val2, …}, …]}
cols={[ “field1”, “field2”, …]} />
```
Значения полей объекта рендерить по следующим правилам:
 Если значение типа Boolean, то выводить символ юникода галочки при истине или пустой
квадратик если ложь
 Если значение типа Date (instanceof Date), то форматировать дату по формату YYYY-MM-DD
 Если значение является массивом, то выводить ненумерованный список значений
элементов данного массива, приведенных к строке .toString()
 Если значение содержит веб адрес (http://, https://), то выводить как ссылку
 Если в объекте присутствует поле state = “danger”|”warning”|”normal”, то подсвечивать
всю строку таблицы цветом red,yellow и green соответственно
*Дополнительное требование:
Через пропсы передается параметр pageSize, который включает пейджинг входного массива
(внизу таблицы появляются кнопки перехода по страницам «назад» и «дальше»)

# Задача 2

Импортировать в проект библиотеку https://reactflow.dev/
Разработать компонент, который строит диаграмму на основе ReactFlow.
Узлы диаграммы реализовать через “Custom Node” и подсветить цветом в соответствии со
значением state.
Через пропсы компоненту передается объект типа TFlow и коллбек функция onChange на
изменение (реализовать только изменение координат pos - перетаскивание узлов диаграммы)
```code
type TNode = {
id: number;
title: string;
state: “danger” | “warning” | “normal”;
pos: { x: number; y: number; }
}

Type TEdge = {
from: number;
to: number;
width: number;
}
type TFlow = {
nodes: TNode [];
edges: TEdge [];
};
const [flow, setFlow] = useState<TFlow>(…);
<CustomFlow data={ flow } onChange={flow => setState(flow)} />

```
