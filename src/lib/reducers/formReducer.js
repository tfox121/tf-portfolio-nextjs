export const initialFormState = {
  name: '',
  email: '',
  message: '',
};

export default function formReducer(state, action) {
  switch (action.type) {
    case 'TEXT_FIELD_CHANGE':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'RESET_FORM':
      return initialFormState;
    default:
      return state;
  }
}
