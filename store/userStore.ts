import { ActionType, createReducer } from 'typesafe-actions';
import * as userActions from './userAction';

export type UserAction = ActionType<typeof userActions>;

type ReceivedLetter = {
  senderId: number;
  text: string;
  voiceUrl: string;
  bookmark: boolean;
  isRead: boolean;
};

type WriteLetter = {
  receiverId: number;
  text: string;
  voiceUrl: string;
};

type Cake = {
  id: number;
  birthday: string;
  receivedLetters: ReceivedLetter[];
};

type UserState = {
  id: number;
  name: string;
  birthday: string;
  cakes: Cake[]; // api 응답에서 최신순 정렬 보장해줘야 함
  currentCakeId: number;
  writeLetters: WriteLetter[];
  loading: boolean;
};

//TODO: 초기값 설정 고민 필요
const initialState: UserState = {
  id: 0,
  name: 'TEST',
  birthday: '',
  cakes: [],
  currentCakeId: 0,
  writeLetters: [],
  loading: false,
};

const userStore = createReducer<UserState, UserAction>(initialState, {
  [userActions.SET_USER_LOADING]: (state, action) => {
    return {
      ...state,
      loading: action.payload,
    };
  },
  [userActions.GET_USER_NAME_SUCCESS]: (state, action) => {
    const { name, birthday } = action.payload;
    return {
      ...state,
      name,
      birthday,
    };
  },
  [userActions.GET_USER_NAME_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.payload,
    };
  },
});

export default userStore;
