import profileReducer, { addPostActionCreator } from "./profile-reducer";


test("length", () => {
    let state = {
        posts: [
            {
                id: 1,
                message: "It's my first post!",
                likeCount: 12,
                avatar:
                    "https://upload.wikimedia.org/wikipedia/commons/e/e9/British_shorthair_%E2%80%A2_%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%285295667021%29.jpg",
            },
            {
                id: 2,
                message: "Congratulations!",
                likeCount: 3,
                avatar:
                    "https://kittentoob.com/wp-content/uploads/2018/04/British-Shorthair-1-750x419.jpg",
            }
        ]
    };
  let action = addPostActionCreator("itcamasyutra.com");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toEqual(3);
}
);
