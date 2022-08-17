import { configureStore, ThunkAction, Action, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const subjectsThunk = createAsyncThunk(
  'subjectThunk',
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
  id: number,
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
export const currentR1022SubjectSlice = createSlice({
  name: 'currentSubjectSLice',
  initialState: null,
  reducers: {
    setCurrrentSubject: (_, action) => action.payload
  }
})
export const { setCurrrentSubject } = currentR1022SubjectSlice.actions

export const store = configureStore({
  reducer: {
    subjects: subjectsSlice.reducer,
    companies: companiesSlice.reducer,
    currentIdSubject: currentR1022SubjectSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
