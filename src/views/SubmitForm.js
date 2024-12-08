import Duck0 from '../images/ducks/tile000.jpg';

const NewForm = () => `<div class="col-md-8 col-sm-12">
            <div class="addContainer" style="text-align: center;">
                <button type="new" id="newSubmission" class="btn btn-primary">
                    Submit a New Guess
                </button>
            </div>
            <div class="addContainer" id="submissionContainer" style="display:none">
                <h3 class="text-center">Add your score</h3>
                <form method="post" id="addScoreForm" class="my-4">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="nameField" placeholder="Add your name" maxlength="15" required>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <img src="${Duck0}" class="duck" alt="duck image"/>
                        </div>
                        <div class="col-6">
                            <h4>Nearest Tool</h4>
                            <input list="tools" class="form-control" id="location" placeholder="Nearest Tool" required>
                            <datalist id="tools">
                                <option value="Edge">
                                <option value="Firefox">
                                <option value="Chrome">
                                <option value="Opera">
                                <option value="Safari">
                            </datalist>
                        </div>
                        <div class="col-3">
                            <h4>Room LL</h4>
                            <input type="number" class="form-control" id="location" placeholder="" maxlength="3" pattern="[0-9]+" required>
                        </div>
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
                </form>
            </div>
        </div>`;

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
                </form>
            </div>`;

export {AddScores,NewForm};
