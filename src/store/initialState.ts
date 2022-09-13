import { LocalStorageService } from "@services/localStorage";
import { State } from "@type/index";
import { STORAGE } from "@constants/storage";
import { resetState } from "@store/resetState";

// Get initial state from storage, if exists
// If not, Initialize empty state
let initialState: State;
initialState = LocalStorageService.get(STORAGE.APP_STATE);
if (!initialState) {
  initialState = resetState();
}

export { initialState };
