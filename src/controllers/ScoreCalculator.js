import { hashLoc,hashRoom } from '../models/AnswerKey.js';

const checkDuckLocation = (duc,loc,room) => {
    return 100*hashLoc(duc,loc) + 25*hashRoom(duc,room);
};

const calculateScores = (submission) => {
    const dataLength = submission.length;

    let score = 0;

    if (dataLength > 0) {
        for(let i = 0; i < dataLength;i++){
            score += checkDuckLocation(i,submission[i].loc,submission[i].room)
        }
    }

    return score;
};

export {calculateScores,checkDuckLocation};