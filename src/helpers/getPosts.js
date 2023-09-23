import { idMaker } from "./idMaker";

export const getPosts = () => ([
  { id: idMaker(), title: 'First post', likes: 20 },
  { id: idMaker(), title: 'Second post', subtitle: 'Second post is better', likes: 10, read: true },
  { id: idMaker(), title: 'Third post', subtitle: 'Third post is okay', likes: 5 },
  { id: idMaker(), title: 'Fourth post', subtitle: 'Fourth post is not do good', likes: 7 },
  { id: idMaker(), title: 'Fifth post', subtitle: 'Fifth is something', likes: 2, read: true },
]);