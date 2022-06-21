export function getUserById({ id }: { id: number }) {

  return fetch(`https://yapi.datagrand.com/mock/1139/getUserById?id=${id}`).then(response => {
    return response.json();
  })

  /* 
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve({
          id,
          name: 'hoooooooks'
        })
      }, 1000)
  
    }) */
}