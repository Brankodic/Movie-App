export async function getData(url) {
  let res = await fetch(url);
  return res
    .json()
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}
