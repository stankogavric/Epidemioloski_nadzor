export function getPosition(): Promise<any>
{
  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(resp => {

        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        reject(err);
      });
  });

}