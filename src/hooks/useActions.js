import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actions } from "../store/favorites/favorites.slise";




const rootActions = {
    ...actions,
    // ...userSlice.actions
}

export const useActoins = () => {
   const dispatch = useDispatch(); 
   
   return useMemo(() => bindActionCreators(rootActions,dispatch),[dispatch])
}