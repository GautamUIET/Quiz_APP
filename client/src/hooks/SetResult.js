import { PushResultAction, updateResultAction } from "../redux/resultReducer";

export const PushAnswer = (result) =>async(dispatch) =>{
try{
  await dispatch(PushResultAction(result));
}
catch(error){
    console.log(error);
}
}

export const updateResult = (index) => async(dispatch) =>{
  try{
    dispatch(updateResultAction(index));
  }
  catch(error){
    console.log(error);
  }
}