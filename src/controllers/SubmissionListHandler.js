const listLength = 32;
var submissionList = new Array(listLength);

const initializeSubmission = () => {
    for(let i=0; i<listLength;i++){
        submissionList[i] = {loc:0,room:0};
    }
};

const addSubmissionEntry = (duck,loc,room) => {
    if (duck >=0 && duck < listLength){
        submissionList[duck].loc = loc;
        submissionList[duck].room = room;
    }
};

const getSubmission = () => submissionList;

export {addSubmissionEntry,initializeSubmission,getSubmission};
