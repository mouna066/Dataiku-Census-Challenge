import axios from "axios";

export const getData = async (id) => {
    return await axios.get('http://localhost:4000/api/data/' + id).then((res) => {
        return res.data
    }).catch(err => {
        if (err.json) {
            return err.json.then(json => {
                console.log(json)
            })
        }
    })
}