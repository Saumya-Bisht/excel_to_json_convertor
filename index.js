let inp=document.getElementById("inp");
let textarea=document.getElementById("textarea");
let change = () => {
    readXlsxFile(inp.files[0]).then((res) => {
      let jsondata = [];

      for (let i = 1; i < res.length; i++) {
        let panel = {
          "Customer ID": res[i][0],
          "age": res[i][1],
          "panelList": [
            {
              "panel_name": res[i][3],
              "panel_code": res[i][2],
              "parameters": [
                {
                  "parameterName": res[i][5],
                  "unit": res[i][6],
                  "parameterCode": res[i][4],
                  "value": res[i][7],
                  "lowerRange": res[i][8],
                  "upperRange": res[i][9],
                  "displayRange": res[i][10],
                },
              ],
            },
          ],
        };

        // Check if the Customer ID already exists in jsondata
        let existingIndex = jsondata.findIndex(
          (item) => item["Customer ID"] === panel["Customer ID"]
        );

        // If the Customer ID exists, append the panel to its panelList
        if (existingIndex !== -1) {
          jsondata[existingIndex]["panelList"].push(panel["panelList"][0]);
        } else {
          jsondata.push(panel);
        }
      }

      textarea.value = JSON.stringify(jsondata, null, 4);
    });
  };
// let change=()=>{
//     readXlsxFile(inp.files[0]).then((res)=>{
//         console.log(res)
//         let headers=[]
//         let jsondata=[]
//         let i=0
//         res.map((ele)=>{
//             if(i==0){
//                 headers=ele
//             }
//             if(i>0){
//                 let temp={}
//                 console.log(temp)
//                 for(let j=0;j<ele.length;j++){
//                     temp[headers[j]] = ele[j]
//                     console.log(temp[headers[j]])
//                     console.log(ele[j])
//                 }
//                 jsondata.push(temp)
//                 console.log(temp)
//             }
//             i++
//         })
        
//         textarea.value=JSON.stringify(jsondata,null,5)

//     })
// }

