/**

Example

const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'lists'],
}

const graph = {
  all: ['graph'],
  lists: (id: number, chartType: string) => [...graph.all, id, chartType],
};

export { webtoons, graph };

 */
