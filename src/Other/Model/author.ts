export type Author = {
  id?: string;
  authorId: string;
  password: string;
};

export const blankImage: Author = {
  authorId: '',
  password: ''
};
