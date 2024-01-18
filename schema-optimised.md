# Entity-Relationship Diagram (ERD)

## Entities

### Lectures
- Attributes:
  - id (Primary Key)
  - type (blended-learning)

### Scenes
- Attributes:
  - id (Primary Key)

### Lecture Scenes
- Attributes:
  - id (Primary Key)
  - lecture_id (Foreign Key)
  - scene_id (Foreign Key)
  - next_scene_id (Foreign Key)
  - scene_sequence (Integer)

### Segments
- Attributes:
  - id (Primary Key)
  - video (String, Optional)
  - slide (Text, Optional)
  - assessment (Boolean)
  - answer (String, Optional)

### Scene Segments
- Attributes:
  - id (Primary Key)
  - scene_id (Foreign Key)
  - segment_id (Foreign Key)
  - next_segment_id (Foreign Key)
  - segment_sequence (Integer)

### User Scenes
- Attributes:
  - id (Primary Key)
  - scene_id (Foreign Key)
  - user_id (Foreign Key)

### User Segments
- Attributes:
  - id (Primary Key)
  - segment_id (Foreign Key) 
  - user_id (Foreign Key)
