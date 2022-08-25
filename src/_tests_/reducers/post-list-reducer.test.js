import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    userName: 'Aimen',
    title: '4b',
    content: 'Redux action is not working correctly.',
    votes: 8,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { userName, title, content, votes, id } = postData;
    action = {
      type: 'ADD_POST',
      userName: userName,
      title: title,
      content: content,
      votes: votes,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        userName: userName,
        title: title,
        content: content,
        votes: votes,
        id: id
      }
    });
  });
});