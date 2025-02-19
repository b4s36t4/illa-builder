import { createSlice } from "@reduxjs/toolkit"
import { ConfigInitialState } from "@/redux/config/configState"
import {
  addOrUpdateSelectedApiCookies,
  addOrUpdateSelectedApiHeaders,
  addOrUpdateSelectedApiUrlParams,
  addSelectedApiEmptyCookies,
  addSelectedApiEmptyHeaders,
  addSelectedApiEmptyUrlParams,
  changeSelectedAction,
  clearCacheActionContent,
  clearSelectedComponent,
  minusScale,
  plusScale,
  removeExpandedKey,
  removeSelectedApiCookies,
  removeSelectedApiHeaders,
  removeSelectedApiUrlParams,
  setExpandedKey,
  updateBottomPanel,
  updateCacheActionContent,
  updateIllaMode,
  updateLeftPanel,
  updateRightPanel,
  updateSelectedAction,
  updateSelectedApiBody,
  updateSelectedApiBodyType,
  updateSelectedApiMethod,
  updateSelectedApiRawBodyType,
  updateSelectedComponent,
  updateShowDot,
} from "@/redux/config/configReducer"

const configSlice = createSlice({
  name: "builderInfo",
  initialState: ConfigInitialState,
  reducers: {
    updateIllaMode,
    updateLeftPanel,
    updateRightPanel,
    updateBottomPanel,
    updateShowDot,
    updateSelectedComponent,
    updateCacheActionContent,
    clearCacheActionContent,
    clearSelectedComponent,
    updateSelectedAction,
    changeSelectedAction,
    addOrUpdateSelectedApiUrlParams,
    removeSelectedApiUrlParams,
    addOrUpdateSelectedApiHeaders,
    removeSelectedApiHeaders,
    addOrUpdateSelectedApiCookies,
    removeSelectedApiCookies,
    addSelectedApiEmptyUrlParams,
    addSelectedApiEmptyHeaders,
    addSelectedApiEmptyCookies,
    plusScale,
    minusScale,
    updateSelectedApiMethod,
    updateSelectedApiBody,
    updateSelectedApiRawBodyType,
    updateSelectedApiBodyType,
    setExpandedKey,
    removeExpandedKey,
  },
})

export const configActions = configSlice.actions
export default configSlice.reducer
