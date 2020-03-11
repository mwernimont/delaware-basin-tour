<template>
    <div />
</template>
<script>
import mapboxgl from "mapbox-gl";
import * as d3 from "d3";
import delawareBasinNextGenerationMonitoringLocations
    from "../assets/monitoring_locations/delawareBasinNextGenerationMonitoringLocations";
import generalColorAndStyle from "../assets/mapStyleConstants/generalColorAndStyle";
export default {
    name: "D3ChartTransition",
    data(){
        return{
            mapped: false,
            circlesExist: false,
            locations: delawareBasinNextGenerationMonitoringLocations.delawareBasinNextGenerationsMonitoringLocations.features,
        }
    },
    mounted() {
        this.$root.$on("CreateCircles", () => {
            this.CheckIfCirclesExist();
        });
        this.$root.$on("RemoveCircles", () => {
            this.RemoveCircles();
        });
        this.$root.$on("Transition", () => {
            this.TransitionCircles();
        });
    },
    methods: {
        CreateChartData(dataArray){
            let number = Math.floor(Math.random() * (68 - 22 + 1)) + 22;
            return dataArray.push(number);
        },
        ProjectPoint(data){
            return this.$store.map.project(
                new mapboxgl.LngLat(
                    data.geometry.coordinates[0],
                    data.geometry.coordinates[1]
                )
            );
        },
        CheckIfCirclesExist(){
            if(this.circlesExist === false){
                this.CreateCircles();
            }
        },
        CreateCircles(){
            this.circlesExist = true;
            d3.selectAll('#LocationsSVG').remove();
            let map = this.$store.map;
            let self = this;
            //Create SVG
            const SVGContainer = map.getCanvasContainer();
            let svg = d3.select(SVGContainer)
                .append("svg")
                .attr("id", "LocationsSVG");
            //Create Circles
            let Location = svg.selectAll("circle")
                .data(this.locations)
                .enter()
                .append("circle")
                .classed("location", true);
            //Map the Circles
            this.MapCircles(svg, Location);
            
        },
        MapCircles(SVG, Location){
            console.log("Map fired")
            this.mapped = true;
            let map = this.$store.map;
            let self = this;

           SVG
            .style("background-color", "initial");

            if(this.mapped){
                const update = function() {
                    Location
                        .attr("fill", "#1abc9c")
                        .attr("stroke", "rgb(50,50,50)")
                        .attr("r", 5)
                        .attr("cx", function(d) {
                            return self.ProjectPoint(d).x;
                        })
                        .attr("cy", function(d){
                            return self.ProjectPoint(d).y;
                        });
                };
                map.on("viewreset", update);
                map.on("move", update);
                map.on("moveend", update);
                update();
            }
        },
        CreateCirclePack(SVG, Location){
            this.mapped = false;
            let self = this;
            let dataArray = [];
            //Styles
            let margin = {top: 60, right: 30, bottom: 30, left: 60};
            let width = SVG.style("width").replace("px", "") - margin.left - margin.right;
            let height = SVG.style('height').replace("px", "") - margin.top - margin.bottom;
            let colors = ["#4575B4", "#ABD9EA", "#FFFFBF", "#F46D43", "#A50126"];
            let centerScale = d3.scalePoint().padding(1).range([0, width]);
            let forceStrength = .2;

            // SVG
            //     .style("background-color", "#fff")
            //     .style("z-index", 1000);

            var simulation = d3.forceSimulation()
                .force("collide",d3.forceCollide( function(d){
                    return d.r + 8 }).iterations(16).strength(.15)
                )
                .force("y", d3.forceY().y(height / 2))
                .force("x", d3.forceX().x(width / 2))
                .force("center", d3.forceCenter().x(width / 2).y(height / 2))
            this.locations.forEach(function(d){
                d.r = 10;
                d.x = width / 2;
                d.y = height / 2;
            });
            //SVG.style("background-color", "#fff");
            //Create Circle Cluster
            Location
                .data(this.locations)
                .transition()
                        .duration(500)
                .attr("fill", function(d){
                    let temp = d.properties.streamTemp;
                    if(temp < 30){
                        return colors[0];
                    }else if(temp >= 30 && temp < 40){
                        return colors[1];
                    }else if(temp >= 40 && temp < 50){
                        return colors[2];
                    }else if(temp >= 50 && temp < 60){
                        return colors[3];
                    }else{
                        return colors[4];
                    }
                })
                .attr("r", function(d){
                    return d.r;
                })
                
            let simulationDuration = 1500;
            let startTime = Date.now();
            let endTime = startTime + simulationDuration;   
            
            console.log(startTime, endTime)

            function ticked(){
                if(Date.now() < endTime){
                    console.log("tick");
                    Location
                        .attr("cx", function(d){
                            return d.x;
                        })
                        .attr("cy", function(d){
                            return d.y;
                        })
                }else{
                    simulation.stop();
                }
            }
            simulation
                .nodes(this.locations)
                .on("tick", ticked);

            centerScale.domain(this.locations.map(function(d, i){
                return d.properties.streamTemp;
            }));

            simulation.force("x", d3.forceX().strength(forceStrength).x(function(d, i){
                return centerScale(d.properties.streamTemp);
            }));

           
        },
        TransitionCircles(){
            let self = this;
            let svg = d3.select("#LocationsSVG");
            let Location = d3.selectAll(".location");
            if(this.mapped){
                this.CreateCirclePack(svg, Location);
            }else{
                this.MapCircles(svg, Location);
            }
        },
        RemoveCircles(){
            d3.selectAll('#LocationsSVG').remove();
            this.circlesExist = false;
        }
    }
}
</script>
<style lang="scss">
#MapSVG, #LocationsSVG {
    position: absolute;
    width: 100%;
    height: 100%;
}

#ChartSVG{
    background: #fff;
    z-index: 1000;
}
</style>