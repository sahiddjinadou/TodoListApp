export class CarsService {
    getCars() {
        return fetch('https://www.carqueryapi.com/api/0.3/?cmd=getMakes', {heeader: {'Cache-Control':'no-cache'}})
                .then((res) => res.json())
                .then((d) => {
                    console.log(d);
                })
    }
}