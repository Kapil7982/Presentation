# Entity Relationship Diagram (ERD)

## Entities

- Lecture
  - id (Primary Key)
  - type

- Scene
  - id (Primary Key)
  - lecture_id (Foreign Key)
  - order
  - archived
  - success_scene_id
  - failure_scene_id

- Segment
  - id (Primary Key)
  - scene_id (Foreign Key)
  - video
  - slide
  - next_segment_id
  - archived
  - type
  - data (JSON)

- User Scenes:
  - id (Primary Key)
  - scene_id (Foreign Key)
  - user_id (Foreign Key)

- User Segments:
  - id (Primary Key)
  - segment_id (Foreign Key) 
  - user_id (Foreign Key)
  - data (JSON)


