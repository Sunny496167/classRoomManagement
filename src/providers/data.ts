// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

const mockSubjects = [
  {
    id: "1",
    name: "Data Structures and Algorithms",
    code: "CS201",
    department: "Computer Science",
    description: "Fundamental data structures including arrays, linked lists, trees, and graphs. Learn algorithm design, analysis, and optimization techniques.",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Linear Algebra",
    code: "MATH301",
    department: "Mathematics",
    description: "Study of vectors, matrices, eigenvalues, and linear transformations. Applications in computer graphics and machine learning.",
    createdAt: "2024-01-15",
  },
  {
    id: "3",
    name: "Literature and Composition",
    code: "ENG102",
    department: "English",
    description: "Explore classic and contemporary literature while developing critical writing and analytical skills through essays and discussions.",
    createdAt: "2024-01-15",
  },
];

export const dataProvider : DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource} : GetListParams) : Promise<GetListResponse<TData>> => {
    if(resource!= 'subjects') return { data: [] as TData[], total:0, };
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    }
  },

  getOne: async () => { throw new Error('This function is not present in mock')},
  create: async () => { throw new Error('This function is not present in mock')},
  update: async () => { throw new Error('This function is not present in mock')},
  deleteOne: async () => { throw new Error('This function is not present in mock')},

  getApiUrl: () => '',
}
