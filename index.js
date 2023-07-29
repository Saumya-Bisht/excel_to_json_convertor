let inp=document.getElementById("inp")
let textarea=document.getElementById("textarea")
let change=()=>{
    readXlsxFile(inp.files[0]).then((res)=>{
        console.log(res)
        let headers=[]
        let jsondata=[]
        let i=0
        res.map((ele,ind)=>{
            if(i==0){
                headers=ele
            }
            if(i>0){
                let temp={}
                for(let j=0;j<ele.length;j++){
                    temp[headers[j]] = ele[j]
                }
                jsondata.push(temp)
            }
            i++
        })
        
        textarea.value=JSON.stringify(jsondata,null,5)

    })
}

