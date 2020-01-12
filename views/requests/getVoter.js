export default async function (submittedData) {
  const requestHeaders = new Headers();
  requestHeaders.append('x-dni', submittedData.dni);

  const requestConfig = {
    method: 'GET',
    headers: requestHeaders,
    mode: 'cors',
    cache: 'default'
  };

  const request = new Request('/voter', requestConfig);

  const responseData = await fetch(request).then((response) => response.json()).then((data) => data);
  return responseData;
}
