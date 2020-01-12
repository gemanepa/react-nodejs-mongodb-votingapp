export default async function (requestData) {
  const response = await fetch('/voter', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-dni': requestData.dni
    },
    mode: 'cors',
    cache: 'default'
  }).then((res) => res.json())
    .catch((error) => error)
    .then((resJson) => resJson);
  return response;
}