(function(){
    // module.exports = function(num){
        var width = 100;
        var height = 100;
        var dataset = [];
        dataset[0] = 30;
        dataset[1] = 100 - dataset[0];
        
        var svg = d3.select(".chart") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var svg1 = d3.select(".chart2") 
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        
        var pie = d3.layout.pie();
    
        var piedata = pie(dataset);
        
        var outerRadius = 50;	//外半径
        var innerRadius = 40;	//内半径，为0则中间没有空白
    
        var arc = d3.svg.arc()	//弧生成器
            .innerRadius(innerRadius)	//设置内半径
            .outerRadius(outerRadius);	//设置外半径
        
        // var color = d3.scale.category10();
        var color = ['#FF970C', '#E8EBED'];
    
        var arcs = svg.selectAll("g")
            .data(piedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return color[i];
            })
            .attr("d",function(d){
                return arc(d);
            });

        var arcs1 = svg1.selectAll("g")
            .data(piedata)
            .enter()
            .append("g")
            .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
                      
        arcs1.append("path")
            .attr('stroke-linecap', 'round')
            .attr("fill",function(d,i){
                return color[i];
            })
            .attr("d",function(d){
                return arc(d);
            });
        
        //给每个扇形去添加对应文字
        arcs.append("text")
            // .attr("transform",function(d){
            // 	return "translate(" + arc.centroid(d) + ")";
            // })
            .attr("text-anchor","middle")
            // .style("line-height","400")
            .text(function(d){
                return dataset[0]+"%";
            });

        arcs1.append("text")
            // .attr("transform",function(d){
            // 	return "translate(" + arc.centroid(d) + ")";
            // })
            .attr("text-anchor","middle")
            // .style("line-height","400")
            .text(function(d){
                return dataset[0]+"%";
            });
        
    // };
}).call(this);