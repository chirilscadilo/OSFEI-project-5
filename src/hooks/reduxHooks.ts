import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/reduxStore";

type DispatchFunc = () => AppDispatch
export const useAppDispatch :DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;