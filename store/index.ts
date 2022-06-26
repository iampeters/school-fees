/* eslint-disable import/named */
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IState {
  environmentMode: boolean | null
  data: number
  loader: boolean
  pageSizes: Array<number>
  businessStatus: string
  navbarName: string
  businessBranch: object
}

export const state = () =>
  ({
    data: 0,
    pageSizes: [5, 10, 20, 30, 40],
    environmentMode: null,
    loader: false,
    businessStatus: '',
    navbarName: '',
    businessBranch: {},
  } as IState)

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {
  UPDATE_ENVIRONMENT_MODE(state) {
    state.environmentMode = !state.environmentMode
  },
  CHANGE_ENVIRONMENT_MODE(state, mode) {
    state.environmentMode = mode
  },
  START_REQUEST(state) {
    state.loader = true
  },
  END_REQUEST(state) {
    state.loader = false
  },
  UPDATE_NAVBAR_NAME(state, { name }: { name: string }) {
    state.navbarName = name
  },
  SAVE_BUSINESS_BRANCH(state, branch: object) {
    state.businessBranch = branch
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getBusinessBranchInfo({ commit }, data) {
    commit('SAVE_BUSINESS_BRANCH', data)
  },
}
