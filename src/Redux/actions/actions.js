
import { addSach } from "../reducers/reducers";

const URL = 'http://192.168.100.3:3000/Sach';
export const fetchSach = () => {
    return async dispatch => {
        try{
            const res = await fetch(URL);
            const data = await res.json();
            data.forEach(row => {
                dispatch(addSach(row))
            });
        }catch(err){
            console.error("err fetch sach : ",err);
        }
    }
}
