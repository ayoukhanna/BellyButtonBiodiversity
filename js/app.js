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
results = data.samples.filter(d=>d.id==sampleId)[0]
var barData = [{
y:results.otu_ids.slice(0,10).map(o=>"OTU "+o).reverse(),
x:results.sample_values.slice(0,10).reverse(),
text:results.otu_labels.slice(0,10).reverse(),
type:"bar",
orientation:"h"
}
]
var barLayout = {


}
Plotly.newPlot("bar",barData,barLayout)

var bubbleData = [{
x:results.otu_ids,
y:results.sample_values,
text:results.otu_labels,
mode:"markers",
marker:{
    size:results.sample_values, 
    color:results.otu_ids,
}
}]
var bubbleLayout =
{
    xaxis : {title:"OTU ID"}
}
Plotly.newPlot("bubble", bubbleData,bubbleLayout)
})
}


d3.json("samples.json").then((data)=>{
console.log(data)
var dropDown = d3.select("#selDataset")
data.names.forEach((id)=>{
dropDown.append("option").text(id).property("value",id)

    
})
createCharts (data.names[0])


})
function optionChanged(selctedId){


    createCharts(selctedId)
}