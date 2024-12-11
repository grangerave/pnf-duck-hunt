import ImageGallery from '../models/Images.js'

const duckImages = ImageGallery();

var index = 0;

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
                                    <img src="${duckImages[index]}" class="img-fluid" alt="duck${index}"/>
                                </article>
                                <button id="rightArrow" type="button">❯</button>
                            </section>
                        </div>
                        <form method="post" id="" class="col-8">
                            <div class="mb-3">
                                <h4>Nearest Tool</h4>
                                <input list="tools" class="form-control" id="tool" placeholder="Nearest Tool" required>
                                <datalist id="tools">
                                    <option value="Edge">
                                    <option value="Firefox">
                                    <option value="Chrome">
                                    <option value="Opera">
                                    <option value="Safari">
                                </datalist>
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
            </div>
        </div>`;


//const duckContainer = document.getElementById("duck-container");

function prevImg() {
    if (index > 0 && index < duckImages.length) {
        index--;
    } else {
        index = duckImages.length - 1;
    }
    console.log(index);
    document.getElementById("duck-container").innerHTML = `<img src=${duckImages[index]} class="img-fluid" alt="duck${index}"/>`;
}

function nextImg() {
    if (index >= 0 && index < duckImages.length-1) {
        index++;
    } else {
        index = 0;
    }
    console.log(index);
    document.getElementById("duck-container").innerHTML = `<img src=${duckImages[index]} class="img-fluid" alt="duck${index}"/>`;//`<img src="${duckImages[index]}" class="img-fluid" alt="duck${index}/>`;
}

const AddScores = () => `<div class="addContainer" style="text-align: center;">
                <h3 class="text-center">Add your score</h3>
                <form method="post" id="addScoreForm" class="my-4">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="nameField" placeholder="Add your name" maxlength="15" required>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="scoreField" placeholder="Add your score" maxlength="4" pattern="[0-9]+" required>
                    </div>
                    <div class="mb-3">
                        <button type="submit" id="submitScore" class="btn btn-primary">
                            Add Score
                            <span class="spinner-border spinner-border-sm hide" id="addScoreSpinner" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="col-4">
                        <button id="leftArrow" onclick=previousImg()>❮</button>
                        <img src="${duckImages[index]}" class="duck-img" id="duck" alt="duck${index}"/>
                        <button id="rightArrow" onclick=nextImg()>❯</button>
                    </div>
                </form>
            </div>`;

export {NewForm,prevImg,nextImg};
