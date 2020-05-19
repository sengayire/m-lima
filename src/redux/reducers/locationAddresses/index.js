import { locationsState as initialState } from '../../store/initialState';
import provinces from './getProvinceReducer';
import districts from './getDistrictsReducer';
import sectors from './getSectorReducer';
import cell from './getCellReducer';

export default (state = initialState, action) => ({
  ...state,
  ...provinces(state, action),
  ...districts(state, action),
  ...sectors(state, action),
  ...cell(state, action),
});
