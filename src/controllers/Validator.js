const validateInputs = (user, scores) => {
  console.log(scores)
  if (user.trim().length === 0 || user.trim().length > 15 || user.trim().length < 3) {
    return [false, 'Username should have between 3 - 15 characters', 'failure'];
  } if (scores.length > 4 || scores == '0') {
    return [false, 'Score is zero! Add at least one correct entry', 'failure'];
  }

  return [true, 'input valid', 'success'];
};

export default validateInputs;