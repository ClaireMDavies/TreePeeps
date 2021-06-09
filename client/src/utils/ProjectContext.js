import React from "react";

const ProjectContext = React.createContext({
// Fields from model
title: "",
name: "",
description: "",
startDate: "",
endDate: "",
latitude: "",
longitude: "",
area: "",
landOwner: "",
hoursNeeded: "",
numTrees: "",
numStakes: "",
amtFertilizer: "",
numSpirals: "",
otherResources: ""
});

export default ProjectContext;
