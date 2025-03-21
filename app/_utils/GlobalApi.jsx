import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getDoctorList = () => axiosClient.get("/doctors?populate=*");
const getDoctorById=(id)=>axiosClient.get('/doctors')
export default {
  getCategory,
  getDoctorList,
  getDoctorById,
};

