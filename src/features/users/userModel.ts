import { AppState } from "main/storeTypes";
import { createSelector } from "reselect";
import { createUserReducer, User as PubNubUser } from "pubnub-redux";

interface CustomUserFields {
  title: string;
}

export type User = Required<Pick<PubNubUser, "id" | "name" | "profileUrl">> & {
  custom: CustomUserFields;
};

export type UsersIndexedById = { [id: string]: User };

const UsersReducer = createUserReducer<User>();
export { UsersReducer };

const getUsersSlice = (state: AppState) => state.users;

export const getUsersById = createSelector(
  [getUsersSlice],
  (users): UsersIndexedById => {
    return users.byId;
  }
);
