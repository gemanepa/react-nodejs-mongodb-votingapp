export default async function (requestData) {
  const requestHeaders = new Headers();
  requestHeaders.append('content-type', 'application/json');

  const requestConfig = {
    method: 'POST',
    headers: requestHeaders,
    json: requestData,
    mode: 'cors',
    cache: 'default'
  };

  const request = new Request('/vote', requestConfig);

  const responseData = await fetch(request)
    .then((response) => response.json())
    .then((data) => data);
  return responseData;
}
