const axios = require('axios');
var parse = require('parse-link-header');

let per_page = 3;
let page = 1;
let flag = true;
let test = [];


// let url = "https://api.github.com/repos/laravel/laravel/branches?per_page=1&page=" + page;
// axios.get(url)
//     .then(function (response) {
//         // handle success
//         // console.log(response.data);
//         console.log("PAGE: "+ page);
//         test.push(response.data);

//         var parsed = parse(response.headers.link);
//         // console.log(parsed.last.page);

//         page++;
//         if (page == parsed.last.page) {
//             console.log(page)
//         }
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })

// console.log(test.length);

let headers = {'Authorization': "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"};

const getRequest = async (url) => {
    let result = await axios.get(url, headers).then(result => result);
    return result;
}

const func = async () => {
    do {
        let url = "https://api.github.com/repos/luis-trezlabs/testing-branches/branches?per_page=100&page=" + page;
        let response = await getRequest(url);
    
        // response.data.map(e => e.name)
        response.data.map(e => {
            test.push(e.name);
        })

        // console.log("PAGE: "+ page);
        // console.log("PAGE: "+ response.data.map(e => e.name));
        // test.push(response.data.map(e => e.name));
        // test.push(response.data);
    
        if(response.headers.link){
            var parsed = parse(response.headers.link);
            // console.log(parsed);

            if(!parsed.last){
                flag = false;
            }
            page++;
        }
        else {
            flag = false;
        }
        
    } while (flag);
    console.log(test);
    console.log(test.length);
    console.log(test[301]);
}


func()


