import axios from "axios";

axios.defaults.headers.common = {
  Authorization: window.localStorage.getItem("_token") ?? "",
};
export const login = async (username: string, password: string) => {
  const { data } = await axios.post("/api/login", {
    name: username,
    password,
  });
  return data;
};

export const fetchTools: () => Promise<any> = async () => {
  const { data } = await axios.get("/api/admin/all");
  return data?.data || {};
};
export const fetchImportTools = async (payload: any) => {
  const { data } = await axios.post(`/api/admin/importTools`, payload);
  return data?.data || {};
};
export const fetchExportTools = async () => {
  const { data } = await axios.get(`/api/admin/exportTools`);
  return data?.data;
};
// 工具管理接口：删除、修改、新增
export const fetchDeleteTool = async (id: number) => {
  const { data } = await axios.delete(`/api/admin/tool/${id}`);
  return data?.data || {};
};
export const fetchUpdateTool = async (payload: any) => {
  const { data } = await axios.put(`/api/admin/tool/${payload.id}`, payload);
  return data?.data || {};
};
export const fetchAddTool = async (payload: any) => {
  const { data } = await axios.post(`/api/admin/tool`, payload);
  return data?.data || {};
};
// 分类管理接口；新增、修改、删除
export const fetchAddCateLog = async (payload: any) => {
  const { data } = await axios.post(`/api/admin/catelog`, payload);
  return data?.data || {};
};
export const fetchUpdateCateLog = async (payload: any) => {
  const { data } = await axios.put(`/api/admin/catelog/${payload.id}`, payload);
  return data?.data || {};
};
export const fetchDeleteCatelog = async (id: number) => {
  const { data } = await axios.delete(`/api/admin/catelog/${id}`);
  return data?.data || {};
};

export const fetchUpdateSetting = async (payload: any) => {
  const { data } = await axios.put(`/api/admin/setting`, payload);
  return data?.data || {};
};

export const fetchUpdateUser = async (payload: any) => {
  const { data } = await axios.put(`/api/admin/user`, payload);
  return data?.data || {};
};

export const fetchAddApiToken = async (payload: any) => {
  const { data } = await axios.post(`/api/admin/apiToken`, payload);
  return data?.data || {};
};
export const fetchDeleteApiToken = async (id: number) => {
  const { data } = await axios.delete(`/api/admin/apiToken/${id}`);
  return data?.data || {};
};
// export const getImg = async (url: string) => {
//   const { data } = await axios.get(`/api/img?url=${url}`);
//   console.log(data)
//   return data;
// }