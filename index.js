let inp=document.getElementById("inp");
let textarea=document.getElementById("textarea");
let change = () => {
    readXlsxFile(inp.files[0]).then((res) => {
      let jsondata = [];

      for (let i = 1; i < res.length; i++) {
        let customerId = res[i][0];
        let age = res[i][1];
        let panelCode = res[i][2];

        // Find the panel with the same Customer ID and panel code
        let existingPanelIndex = jsondata.findIndex(
          (item) =>
            item["Customer ID"] === customerId &&
            item["panelList"][0]["panel_code"] === panelCode
        );

        let parameter = {
          parameterName: res[i][4],
          unit: res[i][5],
          parameterCode: res[i][3],
          value: res[i][6],
          lowerRange: res[i][7],
          upperRange: res[i][8],
          displayRange: res[i][9],
        };

        let panel = {
          panel_name: res[i][2],
          panel_code: panelCode,
          parameters: [parameter],
        };

        // If panel with same Customer ID and panel code exists, add the parameter to it
        if (existingPanelIndex !== -1) {
          jsondata[existingPanelIndex]["panelList"][0]["parameters"].push(
            parameter
          );
        } else {
          // Otherwise, create a new panelList for the Customer ID
          jsondata.push({
            "Customer ID": customerId,
            age: age,
            panelList: [panel],
          });
        }
      }

      textarea.value = JSON.stringify(jsondata, null, 2);
    });
  };
// let change = () => {
//     readXlsxFile(inp.files[0]).then((res) => {
//       let jsondata = [];

//       for (let i = 1; i < res.length; i++) {
//         let panel = {
//           "Customer ID": res[i][0],
//           "age": res[i][1],
//           "panelList": [
//             {
//               "panel_name": res[i][3],
//               "panel_code": res[i][2],
//               "parameters": [
//                 {
//                   "parameterName": res[i][5],
//                   "unit": res[i][6],
//                   "parameterCode": res[i][4],
//                   "value": res[i][7],
//                   "lowerRange": res[i][8],
//                   "upperRange": res[i][9],
//                   "displayRange": res[i][10],
//                 },
//               ],
//             },
//           ],
//         };

//         // Check if the Customer ID already exists in jsondata
//         let existingIndex = jsondata.findIndex(
//           (item) => item["Customer ID"] === panel["Customer ID"]
//         );

//         // If the Customer ID exists, append the panel to its panelList
//         if (existingIndex !== -1) {
//           jsondata[existingIndex]["panelList"].push(panel["panelList"][0]);
//         } else {
//           jsondata.push(panel);
//         }
//       }

//       textarea.value = JSON.stringify(jsondata, null, 4);
//     });
//   };



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

