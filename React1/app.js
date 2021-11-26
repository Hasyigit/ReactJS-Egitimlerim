import axios from "axios"; //axios eklentisini içeri aktardık


const getData = async(number) => {
    const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`) 
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    return {"Kullanici Bilgisi":users, "Kullanici Paylasimlari":post}; // data'ya users ve post'u atadıktan sonra burada users ve postu isimlendirdim. 
}


export default getData

