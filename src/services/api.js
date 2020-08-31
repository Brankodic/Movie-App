export async function getData(url) {
  let res = await fetch(url);
  return res
    .json()
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export async function postData(url,item) {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(item),
  });
  return res
    .json()
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}
