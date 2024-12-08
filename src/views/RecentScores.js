import Medal from '../images/medal.jpg';

const recentScores = () => `<div class="col-md-4 col-sm-12">
            <div class="showScoresContainer">
                <div class="scoresTop">       
                    <h3>Top Scores</h3>           
                    <button type="button" class="btn btn-primary refreshBtn">Refresh <i class="fas fa-sync-alt sync"></i>
                        <span class="spinner-border spinner-border-sm hide" id="recentScoreSpinner" role="status" aria-hidden="true"></span>
                    </button>
            </div>
            <ul class="scoresView">
              <li>
                  <span>No leaderboard scores added yet </span>
                  <img src="${Medal}" class="medal" alt="medal icon"/>
              </li>
            </ul>
            </div>
        </div>`;

//only show medal for first 3 indices
const buildListView = (user = '', score = 'No Scores Available',index=0) => (index<3) ?
  `<li>
        <span>${user}: ${score}</span>
        <img src="${Medal}" class="medal" alt="medal icon"/>
    </li>` :
      `<li>
        <span>${user}: ${score}</span>
    </li>`

const populateScoresList = (ScoresData) => {
  const dataLength = ScoresData.length;
  const scoresView = document.querySelector('.scoresView');

  let listScoresItems = '';

  if (dataLength > 0) {
    for(let i = 0; i < dataLength;i++){
      listScoresItems += buildListView(ScoresData[i].user,ScoresData[i].score,i)
    }
    scoresView.innerHTML = listScoresItems;
  } else {
    scoresView.innerHTML = buildListView();
  }
};

export { recentScores, populateScoresList };
