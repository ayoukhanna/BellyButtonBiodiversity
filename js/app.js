function createCharts(sampleId){
console.log(sampleId)
d3.json("samples.json").then((data)=>{
filteredMetaData = data.metadata.filter(d=>d.id==sampleId)[0]
console.log(filteredMetaData)
panel = d3.select("#sample-metadata")
panel.html("")
Object.entries(filteredMetaData).forEach(([key,value])=>{
panel.append("h5").text(key+": "+value)


})
