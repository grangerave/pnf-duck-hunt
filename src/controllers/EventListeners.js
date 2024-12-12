import {NewForm,prevImg,nextImg,currentIndex,populateSubmissionListView} from '../views/SubmitForm.js';
import Footer from '../views/Footer.js';
import { modalMessages, modalSetup } from '../views/Modals.js';
import { recentScores } from '../views/RecentScores.js';
import { startLeaderBoard } from './Starter.js';
import {
  createGame,
  populateFirstTime,
  uploadGameScores,
  refreshList,
} from './ServiceController.js';
import {addSubmissionEntry,initializeSubmission,getSubmission} from './SubmissionListHandler.js';

const setUpEnterListerners = () => {
  const leaderContent = document.querySelector('.leaderboard-content');
  leaderContent.innerHTML = recentScores() + NewForm();
  document.body.innerHTML += modalMessages() + modalSetup() + Footer();

  window.addEventListener('DOMContentLoaded', () => {

    const addContainer = document.querySelector('#submissionContainer')
    const newBtn = document.querySelector('#newSubmission');

    const addForm = document.querySelector('#addScoreForm');
      addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        uploadGameScores(addForm);
        addContainer.style.display = "none";
        newBtn.style.display = "initial";
      });

    const duckLocationEntry = document.querySelector('#duckLocationEntry');
    duckLocationEntry.addEventListener('submit', (e) => {
      e.preventDefault();
      //add entry
      addSubmissionEntry(currentIndex(),duckLocationEntry[0].value,duckLocationEntry[1].value);
      //update list view
      populateSubmissionListView(getSubmission());
    });

    const overlayObject = startLeaderBoard();
    if (overlayObject.className === undefined) {
      const setupForm = document.querySelector('#setupLeaderBoard');
      setupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createGame(setupForm, overlayObject);
      });
    } else {
      populateFirstTime(overlayObject);
    }
    
    newBtn.addEventListener('click', function(){
      //reset submission
      initializeSubmission();
      //update list view
      populateSubmissionListView(getSubmission());
      addContainer.style.display = "block";
      newBtn.style.display = "none";
    });

    const refreshBtn = document.querySelector('.refreshBtn');
    refreshBtn.addEventListener('click', refreshList);

    const prevBtn = document.querySelector('#leftArrow');
    prevBtn.addEventListener('click',prevImg);

    const nextBtn = document.querySelector('#rightArrow');
    nextBtn.addEventListener('click',nextImg);
  });
};

export default setUpEnterListerners;
