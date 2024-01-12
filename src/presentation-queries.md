# Fetch Interactive Session Lectures
`select * from lectures where type = 'interactive-session'`
# Fetch Lecture Scenes
`select * from scenes where lecture_id = $id`
# Fetch Scene Segments
`select * from segments where scene_id = $id order by next_segment_id asc`

