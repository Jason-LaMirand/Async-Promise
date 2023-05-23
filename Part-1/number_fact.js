let baseURL = "http://numbersapi.com";


axios
    .get(`${baseURL}/1,2,3,4`)
    .then(res => {
        console.log(res.data);
        let res1 = res.data;

        for (var item in res1) {
            const para = document.createElement("li");
            const node = document.createTextNode(res.data[item]);
            para.appendChild(node);
            const element = document.getElementById("list1");
            element.appendChild(para);
        }

        return axios.get(`${baseURL}/7`);
    })
    .then(res => {
        console.log(res.data);
        let res1 = res.data;
        const para = document.createElement("li");
        const node = document.createTextNode(res1);
        para.appendChild(node);
        const element = document.getElementById("list");
        element.appendChild(para);
        return axios.get(`${baseURL}/7`);
    })
    .then(res => {
        console.log(res.data);
        let res1 = res.data;
        const para = document.createElement("li");
        const node = document.createTextNode(res1);
        para.appendChild(node);
        const element = document.getElementById("list");
        element.appendChild(para);
        return axios.get(`${baseURL}/7`);
    })
    .then(res => {
        console.log(res.data);
        let res1 = res.data;
        const para = document.createElement("li");
        const node = document.createTextNode(res1);
        para.appendChild(node);
        const element = document.getElementById("list");
        element.appendChild(para);
        return axios.get(`${baseURL}/7`);
    })
    .then(res => {
        console.log(res.data);
        let res1 = res.data;
        const para = document.createElement("li");
        const node = document.createTextNode(res1);
        para.appendChild(node);
        const element = document.getElementById("list");
        element.appendChild(para);
    })
    .catch(err => {
        console.log(`Oops, there was a problem :( ${err}`);
    });