export const user = {
  all: ["user"],
  tokenReIssue: (token: string) => [...user.all, "tokenReIssue", token],
  logout: () => [...user.all, "logout"]
  // updateName: (name: string) => [...user.all, 'updateName', name],
  // updateImage: (image: string) => [...user.all, 'updateImage', image],
};
