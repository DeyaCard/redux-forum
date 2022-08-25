const reducer = (state = {}, action) => {
  const { userName, title, content, votes, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        userName: userName,
        title: title,
        content: content,
        votes: votes,
        id: id
      }
    });
  default:
    return state;
  }
};

export default reducer;