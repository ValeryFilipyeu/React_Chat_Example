import { useDispatch as OriginalUseDispatch } from "react-redux";
import { AppDispatch } from "./storeTypes";

const useDispatch: () => AppDispatch = OriginalUseDispatch;

export { useDispatch };
