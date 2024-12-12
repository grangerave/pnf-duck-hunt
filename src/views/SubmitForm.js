import ImageGallery from '../models/Images.js'
import {LocationList,getLocation} from '../models/LocationList.js'

const duckImages = ImageGallery();

var duckID = 0;

const NewForm = () => `<div class="col-md-8 col-sm-12">
            <div class="addContainer" style="text-align: center;">
                <button type="new" id="newSubmission" class="btn btn-primary">
                    Submit a New Guess
                </button>
            </div>
            <div class="addContainer" id="submissionContainer" style="display:none">
                <h3 class="text-center">Submit a New Guess</h3>
                <form method="post" id="addScoreForm" class="my-4">
                    <div class="mb-3">
                        <div class="row">
                            <div class="col-9">
                                <input type="text" class="form-control" id="nameField" placeholder="Add your name" maxlength="15" required>
                            </div>
                            <div class="col-3">
                                <button type="submit" id="submitScore" class="btn btn-primary">
                                    Submit Guess
                                    <span class="spinner-border spinner-border-sm hide" id="addScoreSpinner" role="status" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                    <div class="row">
                        <div class="col-4">
                            <section class="text-center">
                                <button id="leftArrow" type="button">❮</button>
                                <article id="duck-container" style="height:220px">
                                    <img src="${duckImages[duckID]}" class="img-fluid" alt="duck${duckID}"/>
                                </article>
                                <button id="rightArrow" type="button">❯</button>
                            </section>
                        </div>
                        <form id="duckLocationEntry" class="col-8">
                            <div class="mb-3">
                                <h4>Nearest Tool</h4>
                                <select id="tools" class="form-control" id="tool" required>
                                    <option value="-1"> </option>
                                    ${LocationList()}
                                </select>
                            </div>
                            <div class="mb-3">
                                <h4>Room (eg. LL000)</h4>
                                <input type="number" class="form-control" id="location" placeholder="" maxlength="3" pattern="[0-9]+" required>
                            </div>
                            <div class="mb-3">
                                <button type="submit" id="updateLocation" class="btn btn-primary" style="width:220px">
                                    Update Duck Location
                                </button>
                            </div>
                        </form>
                    </div>
                    ${currentSubmission()}
            </div>
        </div>`;


function prevImg() {
    if (duckID > 0 && duckID < duckImages.length) {
        duckID--;
    } else {
        duckID = duckImages.length - 1;
    }
    document.getElementById("duck-container").innerHTML = `<img src=${duckImages[duckID]} class="img-fluid" alt="duck${duckID}" title="duck${duckID}"/>`;
}

function nextImg() {
    if (duckID >= 0 && duckID < duckImages.length-1) {
        duckID++;
    } else {
        duckID = 0;
    }
    document.getElementById("duck-container").innerHTML = `<img src=${duckImages[duckID]} class="img-fluid" alt="duck${duckID}" title="duck${duckID}"/>`;
}

const currentIndex = () => duckID;

const currentSubmission = () => `<div class="col-12">
            <ul class="scoresView" id="submission-list">
              <li>
                  <span>No location entries added yet </span>
              </li>
            </ul>`;

const buildEntryView = (duck = 0,loc = 0,room = 0) => (loc > 0) ?
    `<li>
        <span>Duck: ${duck}, Location: ${loc} - ${getLocation(loc)}, Room: ${room}</span>
    </li>` : ``


const populateSubmissionListView = (submissionData) => {
  const dataLength = submissionData.length;
  const scoresView = document.querySelector('#submission-list');

  let listItems = '';

  if (dataLength > 0) {
    for(let i = 0; i < dataLength;i++){
      listItems += buildEntryView(i,submissionData[i].loc,submissionData[i].room)
    }
    scoresView.innerHTML = listItems;
  }
};

export {NewForm,prevImg,nextImg,currentIndex,populateSubmissionListView};
