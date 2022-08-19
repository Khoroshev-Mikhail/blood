import { configureStore, ThunkAction, Action, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const subjectsThunk = createAsyncThunk(
  'subjectsThunk',
  async function (){
    const response = await fetch('http://localhost:3001/get_r1022')
    const data = await response.json()
    return data
  }
)
export type Subject = {
  p00: string,
  p01: string, 
  utv: string,
  p02: string,
  sp: string
}
const initialSubjects: Subject[] = []
export const subjectsSlice = createSlice({
  name: 'subjectSlice',
  initialState: initialSubjects,
  reducers: {},
  extraReducers: (builder) => {
    //Можно добавить на loading, для этого в стейте добавить свойство status
    builder.addCase(subjectsThunk.fulfilled, (_, action: PayloadAction<Subject[]>) => action.payload)
  }
})


export const companiesThunk = createAsyncThunk(
  'companiesThunk',
  async function (r1022: number | string){ //Уточнить тип
      const response = await fetch('http://localhost:3001/getCompanyBySubject', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' }, 
          body: JSON.stringify({r1022})
      })
      const data = await response.json()
      return data
  }
)
export type Company = {
  id?: number,
  npp: number,
  r1022: string,
  naim_org: string,
  adr_fact: string,
  inn: string,
  plazma_max: number,
  plazma_cena: number,
  erm_max: number,
  erm_cena: number,
  immg_max: number,
  immg_cena: number,
  alb_max: number,
  alb_cena: number,
}

const initialCompanies: Company[] = []
export const companiesSlice = createSlice({
  name: 'companySlice',
  initialState: initialCompanies,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(companiesThunk.fulfilled, (_, action: PayloadAction<Company[]>) => action.payload)
  }
})

//Проверить тип
export const currentR1022Slice = createSlice({
  name: 'currentR1022',
  initialState: null,
  reducers: {
    setCurrrentR1022: (_, action) => action.payload
  }
})
export const { setCurrrentR1022 } = currentR1022Slice.actions

const myMDW = (store: any) => (next: any) => (action: any) => {
  const result = next(action)
  if(action.type == 'companiesThunk/fulfilled'){
    //console.log('Кладем текущий r1022 в глобальный стейт, чтобы сетать его при добавлении новой компании и обновлении текущего списка компаний по фильтру == r1022')
    store.dispatch(setCurrrentR1022(action.meta.arg))
  }
  if(action.type == 'setNewCompanyThunk/fulfilled' || action.type == 'deleteCompanyThunk/fulfilled' ){
    //console.log('Обновляем список компаний')
    store.dispatch(companiesThunk(store.getState().currentR1022))
  }
  if(action.type === 'subjectsThunk/fulfilled'){
    //console.log('При подгрузке субъектов сразу же отображаем список копманий первого из них')
    const firstSubject = store.getState().subjects[0].p00
    store.dispatch(companiesThunk(firstSubject))
  }
  return result
}

export const setNewCompanyThunk = createAsyncThunk(
  'setNewCompanyThunk',
  async function (newCompany: Company){ 
      const response = await fetch('http://localhost:3001/setNewCompany', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' }, 
          body: JSON.stringify({...newCompany})
      })
      const data = await response.json()
      return data
  }
)
export const deleteCompanyThunk = createAsyncThunk(
  'deleteCompanyThunk',
  async function (id: number){ 
      const response = await fetch('http://localhost:3001/deleteCompany', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' }, 
          body: JSON.stringify({id})
      })
      const data = await response.json()
      return data
  }
)

export const store = configureStore({
  reducer: {
    subjects: subjectsSlice.reducer,
    companies: companiesSlice.reducer,
    currentR1022: currentR1022Slice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMDW),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;