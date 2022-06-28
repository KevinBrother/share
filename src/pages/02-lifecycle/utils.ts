export interface IUser {
  id: number;
  name: string;
}
export function getUserById({ id }: { id: number }): Promise<IUser> {
  return fetch(`https://yapi.datagrand.com/mock/1139/getUserById?id=${id}`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
}