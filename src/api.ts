const API_BASE_URL = "http://localhost:3001";

interface Lecture {
  id: number;
  title: string;
  type: string;
  order: number;
}

export const fetchScenes = async (
  lectureId: number,
  order: number
): Promise<any[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/scenes?lecture_id=${lectureId}&_sort=${order}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching scenes:", error);
    return [];
  }
};

export const fetchSegments = async (sceneId: number): Promise<any[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/segments?scene_id=${sceneId}&_sort=next_segment_id`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching segments:", error);
    return [];
  }
};
