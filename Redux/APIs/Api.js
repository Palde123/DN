import axios from "axios";

const Api = axios.create({
    baseURL: 'http://clientapp.narola.online/pg/DrinkForAFriend/API/Service.php?Service=',
    headers: {
        'Content-Type': 'application/json',
        'accesskey': '+kDgAO/75qCu1qp4DC7x/SuVYecT1k93sub1eF76C12FeZLNMQz0V02tJIxbA/ov',
        'secretkey': 'INOopRw3IEsmjYYLerXS9w==_OvysCwR3Rv7fa/j2+o851A==',
        'User-Agent': 'iOS',
        'devicetype': '1',
        'devicetoken': '12345',
        'istestdata': '1',
    },

});
export default Api;