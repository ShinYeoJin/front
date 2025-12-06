import axios from "axios";

const instance = axios.create({
  // 기본값은 Render 배포 백엔드 URL로 설정
  // 로컬 개발 시에는 NEXT_PUBLIC_API_URL 환경 변수로 오버라이드 가능 (예: http://localhost:5001/api)
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://todolist-back-fohi.onrender.com",
  withCredentials: true,
});

/**
 * API 응답에서 data 필드 추출
 * @param {Object} response - axios 응답 객체
 * @returns {*} response.data.data 또는 null
 */
export function extractData(response) {
  return response?.data?.data ?? null;
}

export default instance;
