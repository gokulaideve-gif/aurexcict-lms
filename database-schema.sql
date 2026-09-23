-- AUREXCICT LMS Database Schema
-- Supabase Postgres

CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT UNIQUE,
  role TEXT CHECK (role IN ('super_admin','admin','organizer','learner')),
  avatar_url TEXT,
  native_language TEXT,
  tamil_level TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE workshops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  description TEXT,
  organizer_id UUID REFERENCES users(id),
  language TEXT,
  level TEXT,
  thumbnail_url TEXT,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id UUID REFERENCES workshops(id),
  title TEXT,
  date DATE,
  time TIME,
  duration_minutes INT DEFAULT 60,
  live_room_name TEXT,
  status TEXT DEFAULT 'upcoming'
);

CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  workshop_id UUID REFERENCES workshops(id),
  enrollment_date TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, workshop_id)
);

CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  session_id UUID REFERENCES sessions(id),
  status TEXT,
  attendance_percent INT,
  duration_seconds INT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id UUID REFERENCES workshops(id),
  title TEXT
);

CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  title TEXT,
  order_index INT
);

CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES modules(id),
  title TEXT,
  content_tamil TEXT,
  content_english TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  order_index INT,
  status TEXT DEFAULT 'draft'
);

CREATE TABLE live_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id UUID REFERENCES workshops(id),
  session_id UUID REFERENCES sessions(id),
  title TEXT,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status TEXT,
  recording_url TEXT,
  created_by UUID REFERENCES users(id)
);

CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  workshop_id UUID REFERENCES workshops(id),
  attendance_percent INT,
  certificate_id TEXT UNIQUE,
  pdf_url TEXT,
  generated_at TIMESTAMP DEFAULT now(),
  status TEXT
);

CREATE TABLE library_books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  author TEXT,
  cover_url TEXT,
  category TEXT,
  content_url TEXT,
  description TEXT
);

CREATE TABLE ai_chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  question TEXT,
  answer TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

-- Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE live_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE live_participants;
ALTER PUBLICATION supabase_realtime ADD TABLE attendance;
ALTER PUBLICATION supabase_realtime ADD TABLE live_chats;
