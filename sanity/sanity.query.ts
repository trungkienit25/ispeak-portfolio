import fs from 'fs';
import path from 'path';

// Hàm helper để đọc một tệp JSON cụ thể
async function readJsonFile(fileName: string) {
  const dataDirectory = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDirectory, fileName);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    return []; // Trả về mảng rỗng nếu có lỗi hoặc tệp không tồn tại
  }
}

// Thay thế hàm getEvent để đọc từ events.json
export async function getEvent() {
  return readJsonFile('events.json');
}

// Thay thế hàm getCourse để đọc từ courses.json
export async function getCourse() {
  return readJsonFile('courses.json');
}

// Thay thế hàm getBlog để đọc từ blog.json
export async function getBlog() {
  return readJsonFile('blog.json');
}

// Thay thế hàm getTeam để đọc từ teams.json
export async function getTeam() {
  return readJsonFile('teams.json');
}

// Thay thế hàm getActivity để đọc từ activities.json
export async function getActivity() {
  return readJsonFile('activities.json');
}

// Thay thế hàm getFaq để đọc từ faqs.json
export async function getFaq() {
  return readJsonFile('faqs.json');
}

// Thay thế hàm getService để đọc từ services.json
export async function getService() {
  return readJsonFile('services.json');
}

// Thay thế hàm getTestimonial để đọc từ testimonials.json
export async function getTestimonial() {
  return readJsonFile('testimonials.json');
}

// Thay thế hàm getWork để đọc từ works.json
export async function getWork() {
  return readJsonFile('works.json');
}

// Thay thế hàm getCategory để đọc từ categories.json
export async function getCategory() {
  return readJsonFile('categories.json');
}