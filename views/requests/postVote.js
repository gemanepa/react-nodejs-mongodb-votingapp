export default async function (requestData) {
  const response = await fetch('/vote', {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  }).then((res) => res.json())
    .catch((error) => error)
    .then((resJson) => resJson);
  return response;
}
